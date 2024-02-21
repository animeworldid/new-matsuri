import fs from "node:fs/promises";
import { URL } from "node:url";
import type { BaseClient } from "@animeworldid/core";

export class Util {
    public constructor(private readonly client: BaseClient) {}

    public static async loadJSON<T>(path: string): Promise<T> {
        const file = await fs.readFile(new URL(path, import.meta.url));
        return JSON.parse(file as unknown as string) as T;
    }
}
