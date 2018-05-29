/**
 * Calendar.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    date: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    surname: {
      type: 'string',
      required: true
    },
    eventType: {
      type: 'string',
      required: true
    },
    comment: {
      type: 'string'
    }
  },

};

