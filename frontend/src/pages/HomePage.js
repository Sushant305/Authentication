// import React, { useEffect, useState } from "react";
import React, { useEffect} from "react";

// importing components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const HomePage = () => {
  // useState
  // const [workout, setWorkout] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    
    const fetchWorkouts = async () => {
       console.log("API URL:", import.meta.env.REACT_APP_API_URL);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`);
      const json = await response.json();
      if (response.ok) {
        // useState
        // setWorkout(json);

        dispatch({ type: "SET_WORKOUT", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            //  <p key={workout._id}>{workout.title}</p>
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default HomePage;
