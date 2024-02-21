import { bigint, pgTable } from "drizzle-orm/pg-core";

export const guilds = pgTable("guilds", {
    id: bigint("id", { mode: "bigint" }).primaryKey().notNull()
});
