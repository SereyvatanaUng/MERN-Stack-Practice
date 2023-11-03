import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts/");
      const json = await response.json();
      const data = json.data.workouts;
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  // const revWork = workouts.reverse().map((workout) => workout._id);
  // console.log(revWork);

  return (
    <div className="home">
      <div className="workouts">
        {/* {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))} */}

        {workouts &&
          workouts
            .slice()
            .reverse()
            .map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
