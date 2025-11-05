import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

interface TaskItemProps {
  taskName: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const TaskItem = ({ taskName, checked, onCheckedChange }: TaskItemProps) => {
  return (
    <div className='w-full p-2 flex flex-row items-center justify-between'>
      <div>{taskName}</div>
      <Checkbox
        className='w-[23px] h-[23px]'
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
      />
    </div>
  )
}

export default TaskItem;