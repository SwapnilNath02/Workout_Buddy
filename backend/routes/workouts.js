const express=require('express');
const router=express.Router();
const requireAuth = require('../middleware/requireAuth');

const {
    getWorkouts, 
    getWorkout, 
    createWorkout, 
    deleteWorkout, 
    updateWorkout
  } = require('../controllers/workoutController');

// require auth for all workout routes
router.use(requireAuth)

//GET all workouts
router.get('/',getWorkouts);

//GET a single workouts
router.get('/:id',getWorkout);

//POST a new workout
router.post('/',createWorkout);

//DELETE a workout
router.delete('/:id',deleteWorkout);

//UPDATE all workouts
router.patch('/:id',updateWorkout);


module.exports=router;

