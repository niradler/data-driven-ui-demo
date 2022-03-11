exports.up = function (knex) {
    return knex.schema
        .alterTable("knex_migrations", table => {
            table
                .comment('@omit update,create,delete,all,many,read')
        });
}

exports.down = function (knex) {
    return knex.schema
        .alterTable("knex_migrations", table => {
            table
                .comment('')
        });
}
