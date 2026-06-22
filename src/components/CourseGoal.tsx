// import { type ReactNode } from "react";
// import { FC } from "react";

//* type CourseGoalProps = { title: string; description: string, children: ReactNode };
type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
  onDelete: (id: number) => void;
}; //! Can use interface also
export default function CourseGoal({
  title,
  description,
  id,
  onDelete,
}: CourseGoalProps) {
  //* here children would also come with description then
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({title, description})=>{
//     //! Other syntax for functions FC -> FUntional component which is of generic type
//     return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// export default CourseGoal
