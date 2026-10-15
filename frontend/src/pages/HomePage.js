// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";

// importing components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const HomePage = () => {
  // useState
  // const [workout, setWorkout] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/workouts`,
        {
          headers: {
            authorization: `Bearer ${user.tokens}`,
          },
        },
      );
      const json = await response.json();
      if (response.ok) {
        // useState
        // setWorkout(json);

        dispatch({ type: "SET_WORKOUT", payload: json });
      }
    };

    if (user && user.tokens) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

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
