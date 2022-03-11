const { postgraphile } = require('postgraphile')
const pgSimplifyInflector = require('@graphile-contrib/pg-simplify-inflector')
const { DATABASE, PG_USER, PASSWORD, HOST, PG_PORT } = process.env

const isProd = process.env.NODE_ENV === 'production';

console.log(`isProd: ${isProd}`)

module.exports = postgraphile(
    {
        database: DATABASE,
        user: PG_USER,
        password: PASSWORD,
        host: HOST,
        port: PG_PORT,
    },
    'public',
    {
        retryOnInitFail: true,
        disableQueryLog: !isProd,
        watchPg: !isProd,
        graphiql: !isProd,
        appendPlugins: [pgSimplifyInflector],
        enhanceGraphiql: !isProd,
        allowExplain: !isProd,
        enableQueryBatching: true,
        dynamicJson: true,
        setofFunctionsContainNulls: false,
        ignoreRBAC: !isProd,
        showErrorStack: "json",
        extendedErrors: ["hint", "detail", "errcode"],
        exportGqlSchemaPath: "../client/src/generated/schema.graphql",
        exportJsonSchemaPath: "../client/src/generated/schema.json",
        legacyRelations: "omit",
        simpleCollections: "only",
        graphileBuildOptions: {
            /*
             * Uncomment if you want simple collections to lose the 'List' suffix
             * (and connections to gain a 'Connection' suffix).
             */
            pgOmitListSuffix: true,
            /*
             * Uncomment if you want 'userPatch' instead of 'patch' in update
             * mutations.
             */
            //pgSimplifyPatch: false,
            /*
             * Uncomment if you want 'allUsers' instead of 'users' at root level.
             */
            // pgSimplifyAllRows: false,
            /*
             * Uncomment if you want primary key queries and mutations to have
             * `ById` (or similar) suffix; and the `nodeId` queries/mutations
             * to lose their `ByNodeId` suffix.
             */
            pgShortPk: false,
        },
    }
)
