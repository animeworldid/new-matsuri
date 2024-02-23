import "@/lib/patches/CommandLocalization.js";

import * as schema from "@animeworldid/database";
import { i18nManager } from "@animeworldid/i18n";
import { createLogger } from "@animeworldid/logger";
import type { ClientOptions as OClientOptions } from "@nezuchan/framework";
import { FrameworkClient } from "@nezuchan/framework";
import { container } from "@sapphire/pieces";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { databaseUrl, isDev } from "@/lib/env/index.js";

export class BaseClient extends FrameworkClient {
    public readonly drizzle = drizzle(postgres(databaseUrl), { schema });
    public readonly logger!: ReturnType<typeof createLogger>;
    public readonly i18n = new i18nManager({
        stores: container.stores
    });

    public constructor(public readonly options: OClientOptions, name: string) {
        super({
            ...options,
            registerCommands: true
        });

        this.logger = createLogger({
            name,
            debug: isDev,
            lokiAdditionalLabels: {
                clientId: this.clientId
            }
        });
    }

    public async bootstrap(): Promise<void> {
        await this.i18n.stores.load();
        await super.connect();
        this.amqp.on("error", err => this.logger.error(err, "AMQP Channel Error"));
        this.amqp.on("close", () => this.logger.warn("AMQP Channel Closed"));
        this.amqp.on("connect", () => this.logger.info("AMQP Channel handler connected"));
    }

    public async shutdown(): Promise<void> {
        this.logger.warn("Shutting down...");
        await this.amqp.close();
    }
}

declare module "@nezuchan/core" {
    interface Client {
        drizzle: BaseClient["drizzle"];
        logger: BaseClient["logger"];
        i18n: BaseClient["i18n"];
    }
}
