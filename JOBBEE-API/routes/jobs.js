const express = require('express');
const router = express.Router();

// Importing job controller method
const{getJobs} = require('../controller/jobsController');


router.route('/jobs').get(getJobs);

// router.get('/jobs', (req,resp) => {
//     resp.status(200).json({
//         success: true,
//         message: 'This route will dispay all the jobs in the future.'
//     });
// });



module.exports = router;