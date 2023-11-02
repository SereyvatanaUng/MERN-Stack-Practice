import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext;

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/workouts/" + workout._id,
      { method: "DELETE" }
    );
    console.log(response);
    console.log(response.json);
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
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
      <span onClick={handleClick}>delete</span>
    </div>
  );
}

export default WorkoutDetails;
