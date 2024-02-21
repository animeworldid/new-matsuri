import "source-map-support/register.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BaseClient, amqpUrl, databaseUrl } from "@animeworldid/core";
import { Util } from "@animeworldid/utilities";
import { createBanner } from "@skyra/start-banner";
import gradient from "gradient-string";

const packageJson = await Util.loadJSON<{ version: string; name: string; }>(`file://${path.join(fileURLToPath(import.meta.url), "../../package.json")}`);

const client = new BaseClient({
    baseUserDirectory: path.resolve(path.dirname(import.meta.url), ".."),
    amqpUrl,
    databaseUrl
}, packageJson.name);

console.log(
    gradient.vice.multiline(
        createBanner({
            logo: [
                "​​​​​"
            ],
            name: [
                String.raw`_|      _|              _|                                    _|`,
                String.raw`_|_|  _|_|    _|_|_|  _|_|_|_|    _|_|_|  _|    _|  _|  _|_|    `,
                String.raw`_|  _|  _|  _|    _|    _|      _|_|      _|    _|  _|_|      _|`,
                String.raw`_|      _|  _|    _|    _|          _|_|  _|    _|  _|        _|`,
                String.raw`_|      _|    _|_|_|      _|_|  _|_|_|      _|_|_|  _|        _|`,
                ""
            ],
            extra: [
                ` Version: v${packageJson.version}`,
                ` Module: ${packageJson.name}`
            ]
        })
    )
);

await client.bootstrap();
