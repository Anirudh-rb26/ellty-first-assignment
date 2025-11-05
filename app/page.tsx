import Card from "@/components/card";
import { Task } from "@/types/task";

const dummyTasks: Task[] = [
  { taskName: "Page 1", checked: false },
  { taskName: "Page 2", checked: false },
  { taskName: "Page 3", checked: false },
  { taskName: "Page 4", checked: false },
  { taskName: "Page 5", checked: false },
  { taskName: "Page 6", checked: false },
  { taskName: "Page 7", checked: false },
  { taskName: "Page 8", checked: false },
  { taskName: "Page 8", checked: false },
  { taskName: "Page 10", checked: false },
]

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card title="All Pages" buttonTitle="Done" tasks={dummyTasks} />
    </div>
  );
}
