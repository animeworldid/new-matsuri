import * as schema from "@animeworldid/database";
import { createLogger } from "@animeworldid/logger";
import type { ClientOptions as OClientOptions } from "@nezuchan/framework";
import { FrameworkClient } from "@nezuchan/framework";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { databaseUrl, isDev } from "../env/index.js";

export class BaseClient extends FrameworkClient {
    public readonly drizzle = drizzle(postgres(databaseUrl), { schema });
    public readonly logger!: ReturnType<typeof createLogger>;

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
