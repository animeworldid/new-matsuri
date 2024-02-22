DO $$ BEGIN
 CREATE TYPE "locale" AS ENUM('en-US', 'id-ID');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" bigint PRIMARY KEY NOT NULL,
	"locale" "locale" DEFAULT 'en-US' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "guilds" DROP CONSTRAINT "guilds_guild_id_unique";--> statement-breakpoint
ALTER TABLE "guilds" ALTER COLUMN "id" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "guilds" DROP COLUMN IF EXISTS "guild_id";