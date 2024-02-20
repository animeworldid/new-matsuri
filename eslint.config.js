import { common, modules, node, stylistic, typescript, ignores, extend } from "@hazmi35/eslint-config";

export default [
    ...extend(common, [
        {
            rule: "unicorn/filename-case",
            option: ["off"]
        },
        {
            rule: "unicorn/no-await-expression-member",
            option: ["off"]
        },
        {
            rule: "require-unicode-regexp",
            option: ["off"]
        },
        {
            rule: "jsdoc/require-param-name",
            option: ["off"]
        },
        {
            rule: "require-unicode-regexp",
            option: ["off"]
        },
        {
            rule: "id-length",
            option: ["off"]
        },
        {
            rule: "no-param-reassign",
            option: ["off"]
        },
        {
            rule: "new-cap",
            option: ["off"]
        },
        {
            rule: "promise/prefer-await-to-callbacks",
            option: ["off"]
        },
        {
            rule: "no-await-in-loop",
            option: ["off"]
        },
        {
            rule: "unicorn/consistent-destructuring",
            option: ["off"]
        },
        {
            rule: "unicorn/expiring-todo-comments",
            option: ["off"]
        },
        {
            rule: "unicorn/prefer-ternary",
            option: ["off"]
        },
        {
            rule: "consistent-return",
            option: ["off"]
        },
        {
            rule: "unicorn/no-useless-undefined",
            option: ["off"]
        }
    ]),
    ...modules,
    ...node,
    ...stylistic,
    ...extend(typescript, [
        {
            rule: "tsdoc/syntax",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/no-unsafe-assignment",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/consistent-type-definitions",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/no-unsafe-member-access",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/no-confusing-void-expression",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/naming-convention",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/strict-boolean-expressions",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/no-unsafe-return",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/explicit-module-boundary-types",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/no-unsafe-argument",
            option: ["off"]
        },
        {
            rule: "@typescript-eslint/no-unsafe-call",
            option: ["off"]
        }
    ]),
    ...ignores
];
