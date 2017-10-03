const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove / it takes the query object
// Todo.findOneAndRemove({_id: '59d3bc3a7cd6120f5ae5aea7'}).then((todo) => {
//   console.log();
// });


// Todo.findByIdAndRemove
Todo.findByIdAndRemove('59d3bc3a7cd6120f5ae5aea7').then((todo) => {
  console.log(todo);
});
