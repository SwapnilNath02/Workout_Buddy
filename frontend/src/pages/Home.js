// import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const Home = () => {
    // const[workouts,setworkouts]=useState(null);
    const { workouts, dispatch } = useWorkoutsContext()
    useEffect(()=>{
        const fetchworkouts=async () => {
            const response=await fetch('/api/workouts')
            const json=await response.json() // json becomes array of objects
            if(response.ok)
            {
                // dispatch({type: 'SET_WORKOUTS', payload: json})
                // setworkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchworkouts()
    },[dispatch])
    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
     );
}
 
export default Home;