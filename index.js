console.log('Hello from JavaScript!');

var PouchDB = require('pouchdb');
var db = new PouchDB('EvinDB');

var doc = {
    _id : "evin",
    name : 'Evin',
    age : 21,
    school : 'UCSC'
};

db.put(doc);



db.get('evin').then(function (doc){
    console.log(doc)
});