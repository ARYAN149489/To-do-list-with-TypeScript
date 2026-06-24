import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal} from "../App.tsx"
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals : CGoal[],
  onDeleteGoal: (id: number)=> void,
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
  if(goals.length === 0){
    return <InfoBox mode="hint" > 
    <h2><p>You have no goals yet!</p></h2>
    <p>Please add some goals</p>
    </InfoBox>
  }
  return (
    <>
    { goals.length >= 4 ? <InfoBox mode="warning" severity="high" > You have more than 4 goals!! </InfoBox> : null}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
}