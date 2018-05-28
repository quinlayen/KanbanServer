exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
        table.increments('user_id').primary();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamps(true,true);
    })
    .createTable('cards', function(table){
        table.increments('card_id').primary();
        table.string('title').notNullable();
        table.string('notes');
        table.string('priority');
        table.string('status');
        table.string('assigned_to');
        table.integer('user_id').references('user_id').inTable('users').onDelete('cascade');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cards')
                      .dropTable('users')
};