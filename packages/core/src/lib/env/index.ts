import process from "node:process";

export const amqpUrl = process.env.AMQP_URL!;
export const databaseUrl = process.env.DATABASE_URL!;
export const discordToken = process.env.DISCORD_TOKEN!;
export const gatewayDatabaseUrl = process.env.GATEWAY_DATABASE_URL!;
export const isDev = process.env.NODE_ENV === "development";

if (!amqpUrl) {
    throw new Error("AMQP_URL is not defined");
}

if (!discordToken) {
    throw new Error("DISCORD_TOKEN is not defined");
}

if (!databaseUrl) {
    throw new Error("DATABASE_URL is not defined");
}

if (!gatewayDatabaseUrl) {
    throw new Error("GATEWAY_DATABASE_URL is not defined");
}
