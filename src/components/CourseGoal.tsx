// import { type ReactNode } from "react";
// import { FC } from "react";

import { ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
  id: number;
  onDelete: (id: number) => void;
}; //! Can use interface also
export default function CourseGoal({
  title,
  children,
  id,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </article>
  );
}