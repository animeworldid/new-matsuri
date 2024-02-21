CREATE TABLE IF NOT EXISTS "guilds" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"guild_id" bigint NOT NULL,
	CONSTRAINT "guilds_guild_id_unique" UNIQUE("guild_id")
);
