exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('comments')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('comments').insert([
                {
                    id: 1,
                    comment: 'my best comment',
                    user_id: 1
                }
            ])
        })
}
