import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/workouts/" + workout._id,
      { method: "DELETE" }
    );

    const json = await response.json();
    if (response.ok) {
      console.log(json.data.delWorkout);
      dispatch({ type: "DELETE_WORKOUT", payload: json.data.delWorkout });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>{" "}
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <p>{workout._id}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
}

export default WorkoutDetails;
