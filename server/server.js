var express = require('express');
var bodyParser = require('body-parser')
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var{User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    //res.send(e);
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
  //res.send(req.params);
  var id = req.params.id;


// Valid id using isValid
 // 404 - send back empty send
if (!ObjectID.isValid(id)) {
  return res.status(404).send();
}

// findById
 // success
  // if todo - send it back
  // if no todo - send back 404 with empty body
 //error
  // 404 - and send empty body back
Todo.findById(id).then((todo) => {
  if (!todo) {
    return res.status(404).send();
  }

  res.send({todo});
}).catch((e) => {
  res.status(400).send();
});
});
app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
