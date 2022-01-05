
const Job = require('../models/jobs');

// get all jobs . implementation for /api/v1/jobs
exports.getJobs = async (req, resp, next) => {
    
    const jobs = await Job.find();

    resp.status(200).json({
        success: true,
        results : jobs.length,
        data : jobs
    });
}

// create a new job => /api/v1/jobs/new
exports.newJob = async (req, resp, next) => {
    try{
        const job = await Job.create(req.body);

        resp.status(200).json({
            success : true, 
            message : 'Job is created',
            data : job
        });
    }catch (e) {
        resp.status(400).json({
            success : false,
            message : 'Job creation failed',
            error : e
        });
    }
}