exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'pfaso@gmail.com', password: 'password1' },
        { email: 'quinlayen@gmail.com', password: 'password2' },
        { email: 'jukariz@hotmail.com', password: 'password3' }
      ]);
    })
    .then(function() {
      return knex('cards')
        .del()
        .then(function() {
          return knex('cards').insert([
            { title: 'Jerry Rig', notes: 'Bacon ipsum dolor sit amet salami ham hock ham', priority: 'Important', status: 'In Queue', assigned_to: 'pfaso@gmail.com', user_id: 1,},
            { title: 'Learn React', notes: 'Bacon ipsum dolor sit amet salami ham hock ham', priority: 'Not Important', status: 'In Progress', assigned_to: 'quinlayen@gmail.com', user_id: 2,},
            { title: 'Sell House', notes: 'Bacon ipsum dolor sit amet salami ham hock ham', priority: 'Very Freaking Important', status: 'Completed', assigned_to: 'jukariz@hotmail.com', user_id: 3}
          ]);
        });
    });
};
