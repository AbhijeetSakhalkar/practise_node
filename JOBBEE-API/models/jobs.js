const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');

const jobSchema = new mongoose.Schema({
    title : {
        type: String,
        required : [true, 'Please enter job title.'],
        trim : true,
        maxLength : [100, 'The job length cannot exceed 100 characters.']
    },
    slug: String, 
    description: {
        type: String,
        required: [true, 'Please enter job description.'],
        maxLength: [1000, 'Job description cannot exceed 1000 characters.']
    },
    email: {
        type: String,
        validate : [validator.isEmail, 'Please add a valid email address.'] 
    },
    address : {
        type: String,
        required: [true, 'Please add an address.']
    },
    company:{
        type: String,
        required: [true, 'Please add company name.']
    },
    industry : {
        type : [String],
        required: true,
        enum : {
            values: [
                'Business',
                'Information Technology',
                'Banking',
                'Education/Training',
                'Telecommunications',
                'Others'
            ],
            message: 'Please enter correct values for industry.'
        }
    },
    jobType:{
        type: String, 
        required: true,
        enum : {
            values : [
                'Permanent',
                'Temporary',
                'Internship'
            ],
            message : 'Please enter correct value for job type.'
        }
    },
    minEducation : {
        type: String,
        required: true,
        enum :{
            values :[
                'Bachelors',
                'Masters',
                'Phd'
            ],
            message : 'Please select correct option for education.'
        }
    },
    positions : {
        type : Number,
        default : 1
    },
    experience : {
        type: String,
        required: true,
        enum : {
            values : [
                'No Experience',
                '1 Year - 2 Years',
                '2 Years, 5 Years',
                '5 Years +'
            ],
            message : 'Please enter valid experience.'
        }
    },
    salary : {
        type : Number, 
        required : [true, 'Please enter expected salary for this job. ']
    },
    postingDate: {
        type: Date,
        default : Date.now
    },
    lastDate: {
        type: Date,
        default: new Date ().setDate(new Date().getDate() + 7)
    },
    applicantsApplied : {
        type : [Object],
        select : false
    }

});

// Creating Job Slug before creating
jobSchema.pre('save', function (next) {
    // Creating slug before saving to db
    this.slug = slugify(this.title, {lower : true})
    console.log(this.slug);
    next();
})

module.exports = mongoose.model('job', jobSchema);