const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define collection and schema for Goal
let Goal = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  {
    collection: 'goals'
  }
);

module.exports = mongoose.model('Goal', Goal);
