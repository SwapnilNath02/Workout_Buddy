// import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    // const[workouts,setworkouts]=useState(null);
    const { workouts, dispatch } = useWorkoutsContext()
    const {user} = useAuthContext()
    useEffect(()=>{
        const fetchWorkouts=async () => {
            const response = await fetch('/api/workouts', {
                headers: {'Authorization': `Bearer ${user.token}`},
              })
            const json=await response.json() // json becomes array of objects
            if(response.ok)
            {
                // dispatch({type: 'SET_WORKOUTS', payload: json})
                // setworkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        if (user) {
            fetchWorkouts()
          }
    }, [dispatch, user])
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