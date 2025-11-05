"use client"

import TaskItem from './task-item';
import { Task } from '@/types/task';
import { Button } from './ui/button';
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';

interface CardProps {
    title: string;
    buttonTitle: string;
    tasks: Task[];
}

const Card = ({ title, buttonTitle, tasks }: CardProps) => {
    const [checkedAll, setCheckedAll] = useState(false);
    const [taskStates, setTaskStates] = useState(tasks.map(task => task.checked));

    const handleCheckAll = (checked: boolean) => {
        setCheckedAll(checked);
        setTaskStates(tasks.map(() => checked));
    };

    const handleTaskCheck = (index: number, checked: boolean) => {
        const newTaskStates = [...taskStates];
        newTaskStates[index] = checked;
        setTaskStates(newTaskStates);

        // Update checkedAll based on whether all tasks are checked
        setCheckedAll(newTaskStates.every(state => state));
    };

    return (
        <div className="w-[30%] h-[55%] border border-[#EEEEEE] rounded-[6px] flex flex-col px-4 py-2.5"
            style={{
                boxShadow: '0px 8px 15px 0px rgba(20, 20, 20, 0.12), 0px 0px 4px 0px rgba(20, 20, 20, 0.10)'
            }}>

            <div className='flex flex-row w-full items-center justify-between px-2 py-2'>
                <h1 className=''>{title}</h1>
                <Checkbox
                    className='w-[23px] h-[23px]'
                    checked={checkedAll}
                    onCheckedChange={(checked) => handleCheckAll(checked as boolean)}
                />
            </div>

            <Separator className='w-full bg-[#CDCDCD] h-px my-2.5' />

            <div className='flex-1 flex flex-col gap-2.5 overflow-auto scrollbar-hide'>
                {tasks.map((task, i) => (
                    <TaskItem
                        key={i}
                        taskName={task.taskName}
                        checked={taskStates[i]}
                        onCheckedChange={(checked) => handleTaskCheck(i, checked)}
                    />
                ))}
            </div>

            <Separator className='w-full bg-[#CDCDCD] h-px my-2.5' />

            <div className='w-full flex items-center justify-center py-2'>
                <Button className="bg-secondary w-full px-2.5 py-5 items-center justify-center flex hover:bg-[#ffd84d] text-black font-normal">
                    {buttonTitle}
                </Button>
            </div>
        </div>
    )
}

export default Card