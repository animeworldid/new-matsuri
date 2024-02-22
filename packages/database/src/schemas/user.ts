import { bigint, pgTable, pgEnum } from "drizzle-orm/pg-core";

export const localeEnum = pgEnum("locale", [
    "en-US",
    "id-ID"
]);

export const users = pgTable("users", {
    id: bigint("id", { mode: "bigint" }).primaryKey().notNull(), // Snowflake
    locale: localeEnum("locale").notNull().default("en-US")
});
