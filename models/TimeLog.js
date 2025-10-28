const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema({
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('TimeLog', timeLogSchema);