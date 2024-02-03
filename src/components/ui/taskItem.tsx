import { Task } from '@/models/task';
import { cn } from '@/utils/cn';
import React from 'react';

interface Props {
	task: Task;
}

const TaskItem = ({ task }: Props) => {
	const { id, title, isCompleted } = task;
	return (
		<li
			className={cn(
				'px-8 py-6 border-b border-b-background-tertiary text-primary flex gap-8' // Base styles
			)}
			key={id}
		>
			<input type="checkbox" />
			<span
				className={cn( {
					'text-secondary line-through': isCompleted, // isCOmpleted style
				})}
			>
				{title}
			</span>
			<button className="ml-auto text-secondary" type="button">
				<i className="bi bi-trash"></i>
			</button>
		</li>
	);
};

export default TaskItem;
