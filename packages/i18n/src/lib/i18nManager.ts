import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { ManagerOptions } from "@nezuchan/i18n";
import { i18nManager as Oi18nManager } from "@nezuchan/i18n";
import { container } from "@sapphire/pieces";

import type { EnUsCommands } from "../localization/en-us/commands/index.js";
import type { EnUs } from "../localization/en-us/index.js";

export class i18nManager extends Oi18nManager {
    public constructor(options: ManagerOptions) {
        super(options);
        container.i18nManager = this;
        this.stores.get("languages").registerPath(resolve(dirname(fileURLToPath(import.meta.url)), "..", "localization"));
    }

    public getCommands(language: string): EnUsCommands {
        return (this.stores.get("languages").get(language) as EnUs).commands;
    }

    public get(locale?: string): TranslateResult {
        return {
            commands: this.getCommands(locale ?? "en-US")
        };
    }
}

export interface TranslateResult {
    commands: EnUsCommands;
}
