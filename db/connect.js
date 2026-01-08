const dotenv = require('dotenv');
const { MongoClient } = require('mongodb'); //mongodb+srv://joseluisimlds_db_user:<db_password>@cluster0.nt2swln.mongodb.net/?appName=Cluster0
const { constrainedMemory } = require('process');

async function main(){
    const url = "mongodb+srv://joseluisimlds_db_user:m2io3PoQfaCJ5azc@cluster0.nt2swln.mongodb.net/?appName=Cluster0"

    const client = new MongoClient(url);

    try {
        await client.connect();

        await listDatabases(client);
 
    } catch (e) {
        await console.error(e);
    }
}

main().catch(console.error)
// const mongoDBIP = '192.168.1.71';
// const mongoDBPort = 27017;

// const mongoURL = 'mongodb://<mongo admin>:<password>@'+`${mongoDBIP}`+':'+`${mongoDBPort}`;

// let _db;

// const initDb = callback => {
//   if (_db) {
//     console.log('Db is already initialized!');
//     return callback(null, _db);
//   }
//   mongoClient .connect(mongoURL)
//     .then(client => {
//       _db = client;
//       callback(null, _db);
//     })
//     .catch(err => {
//       callback(err);
//     });
// };

// const getDb = () => {
//   if (!_db) {
//     throw Error('Db not initialized');
//   }
//   return _db;
// };

// module.exports = {
//   initDb,
//   getDb
// };
