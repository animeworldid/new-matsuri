import fs from "node:fs/promises";
import { URL } from "node:url";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Util {
    public static async loadJSON<T>(path: string): Promise<T> {
        const file = await fs.readFile(new URL(path, import.meta.url));
        return JSON.parse(file as unknown as string) as T;
    }
}
