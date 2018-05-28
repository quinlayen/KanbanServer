const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'kanban_user',
      database: 'kanban_db'
    }
  });

const getAllCards = ()=>{
    return knex('cards')
    .then(((data)=>{
        return data
    }))
}

const addNewCard = (title, status, notes, assigned_to, priority)=>{
    return knex('cards').insert({title, status, notes, assigned_to, priority})
    .then ((data)=>{
        return knex('cards')
    })
    .then((data)=>{
        console.log('data in addNewCard',data)
        return data
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports={
    getAllCards,
    addNewCard
}