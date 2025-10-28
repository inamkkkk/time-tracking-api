const Task = require('../models/Task');
const TimeLog = require('../models/TimeLog');

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.userId;

    const task = new Task({ title, description, user: userId });
    await task.save();

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const userId = req.userId;
    const tasks = await Task.find({ user: userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.userId;

    const task = await Task.findOne({ _id: taskId, user: userId });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching task', error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.userId;
    const { title, description } = req.body;

    const task = await Task.findOneAndUpdate({ _id: taskId, user: userId }, { title, description }, { new: true });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.userId;

    const task = await Task.findOneAndDelete({ _id: taskId, user: userId });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
};

exports.createLog = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const userId = req.userId;
        const { startTime, endTime } = req.body;

        const task = await Task.findOne({_id: taskId, user: userId});
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const timeLog = new TimeLog({ task: taskId, startTime, endTime });
        await timeLog.save();

        res.status(201).json({ message: 'Time log created successfully', timeLog });
    } catch (error) {
        res.status(500).json({ message: 'Error creating time log', error: error.message });
    }
};

exports.getLogsForTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const userId = req.userId;

        const task = await Task.findOne({_id: taskId, user: userId});
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const timeLogs = await TimeLog.find({ task: taskId });
        res.status(200).json(timeLogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching time logs', error: error.message });
    }
};