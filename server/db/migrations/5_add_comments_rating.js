exports.up = function (knex) {
    return knex.schema.alterTable('comments', function (table) {
        table.integer('rating').defaultTo(0);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('comments', function (table) {
        table.dropColumn('rating');
    });
};
