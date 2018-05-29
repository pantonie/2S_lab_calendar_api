module.exports = {


  friendlyName: 'Fill calendar',


  description: 'Adds records to mongo database from file',


  inputs: {
    db: {
      type: 'ref',
      description: 'link to database',
      required: true
    }
  },

  exits: {

  },


  fn: async function (inputs, exits) {
    var fs = require('fs');
    var array = fs.readFileSync('hb.txt').toString().split('\n');
    array = array.map(json => JSON.parse(json));
    inputs.db.collection('calendar').insertMany(array);
    // All done.
    return exits.success();

  }


};

