const TimeLog = require('../models/TimeLog');

exports.updateLog = async (req, res) => {
    try {
        const logId = req.params.id;
        const userId = req.userId;  // Assuming you can somehow verify log ownership through the user ID, might involve task association.
        const { startTime, endTime } = req.body;

        const log = await TimeLog.findById(logId);
        if (!log) {
            return res.status(404).json({ message: 'Log not found' });
        }

        //  Add logic here to verify that the user is allowed to update the log, possibly by checking the task associated with the log.

        const updatedLog = await TimeLog.findByIdAndUpdate(logId, { startTime, endTime }, { new: true });

        res.status(200).json({ message: 'Time log updated successfully', log: updatedLog });
    } catch (error) {
        res.status(500).json({ message: 'Error updating time log', error: error.message });
    }
};

exports.deleteLog = async (req, res) => {
    try {
        const logId = req.params.id;
        const userId = req.userId; // Assuming you can somehow verify log ownership through the user ID, might involve task association.

        const log = await TimeLog.findById(logId);
        if (!log) {
            return res.status(404).json({ message: 'Log not found' });
        }

       //  Add logic here to verify that the user is allowed to delete the log, possibly by checking the task associated with the log.

        await TimeLog.findByIdAndDelete(logId);

        res.status(200).json({ message: 'Time log deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting time log', error: error.message });
    }
};