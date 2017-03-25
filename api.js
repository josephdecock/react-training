const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let uniqueId = 0;
const contacts = {};
const contactIds = [];

app.use(bodyParser.json()); // for parsing application/json

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/contact', function(req, res) {
    const allContacts = contactIds.map((id) => contacts[id]);
    res.send(allContacts);
});

app.get('/contact/:id', function(req, res) {
    res.send(contacts[req.params.id]);
});

app.post('/contact', function(req, res) {
    const newContact = req.body;
    newContact.id = uniqueId;
    uniqueId += 1;
    contacts[newContact.id] = newContact;
    contactIds.push(newContact.id);
    res.location('/contact/'+newContact.id).sendStatus(201);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});