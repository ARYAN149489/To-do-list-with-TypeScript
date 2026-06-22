import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal} from "../App.tsx"
type CourseGoalListProps = {
  goals : CGoal[],
  onDeleteGoal: (id: number)=> void,
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} description={goal.description} onDelete={onDeleteGoal} id={goal.id}>
            {/* //! Instead of plain text or jsx in any attribute we can add a children property which is of type ReactNode */}
            {/* <p>Hello I am for demo to let you know about the children properties</p> */}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}