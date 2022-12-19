const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  event_date: {
    type: Date
  }
});

module.exports = Event = mongoose.model('event', EventSchema);