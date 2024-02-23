import { users } from "@animeworldid/database";
import { BaseInteraction } from "@nezuchan/core";
import { Result } from "@sapphire/result";
import { eq } from "drizzle-orm";
import type { BaseClient } from "../structures/BaseClient.js";

async function _fetchUserLocalization(client: BaseClient, userId: string): Promise<string> {
    const result = await Result.fromAsync(() => client.drizzle.select({ locale: users.locale }).from(users)
        .where(eq(users.id, BigInt(userId))));

    if (result.isErr()) {
        client.logger.warn(result.unwrapErr(), "Failed to fetch user localization");
        return "en-US";
    }

    return result.unwrap().at(0)?.locale ?? "en-US";
}

BaseInteraction.prototype.fetchUserLocalization = async function fetchUserLocalization(userId?: string) {
    return _fetchUserLocalization(this.client as BaseClient, userId ?? this.member!.id);
};

declare module "@nezuchan/core" {
    interface BaseInteraction {
        fetchUserLocalization(userId?: string): Promise<string>;
    }

    interface Client {
        drizzle: BaseClient["drizzle"];
    }
}
