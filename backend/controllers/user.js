const mongodb = require('../db/connect');

const getUser = async (req, res, next) => {
  const result = await mongodb.getDb().db('prove').collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const getUsername = async (req, res, next) => {
  const result = await mongodb.getDb().db('prove').collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0].username);
  });
};

const getProfecional = async (req, res, next) => {
  const result = await mongodb.getDb().db('prove').collection('profecional').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getUser, getUsername, getProfecional };