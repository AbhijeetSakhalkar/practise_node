
// get all jobs . implementation for /api/v1/jobs
exports.getJobs = (req, resp, next) => {
    resp.status(200).json({
        success: true,
        middleware : req.user,
        message: 'FROM Inside JobsController: This route will dispay all the jobs in the future.'
    });
}