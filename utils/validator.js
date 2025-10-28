exports.validateTask = (task) => {
    if (!task.title || task.title.length < 3) {
        return 'Task title must be at least 3 characters long.';
    }
    return null;
};

exports.validateTimeLog = (log) => {
    if (!log.startTime || !log.endTime) {
        return 'Start and end times are required.';
    }
    if (new Date(log.startTime) >= new Date(log.endTime)) {
        return 'Start time must be before end time.';
    }
    return null;
};