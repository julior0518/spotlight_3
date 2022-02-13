const db = require('../db');
const {Movie} = require('../models/index');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));db

const mainSeed = async () => {
    const movies = [
        {
        name: 'tacoSeed1',
        description: 'the fuego 1',
        budget: 234,
        image:
            'https://3docean.img.customer.envatousercontent.com/files/252369519/taco_pv.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=d2f1767e3cd0f28c1a3c4dd8d70a8edf'
        },
    
    ];

    await Movie.insertMany(movies);
    console.log('Created some good Movies!');
    };
    const run = async () => {
    await mainSeed();
    db.close();
    };

run();