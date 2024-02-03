import TaskItem from '@/components/ui/taskItem';
import React from 'react';

function Page() {
	return (
		<main className="flex w-screen h-screen relative">
			<div className="w-full h-full -z-10 absolute bg-dotted-pattern opacity-75 bg-10%"></div>
			<aside className="m-auto w-[31.25rem] h-[45rem] bg-background rounded-2xl shadow-xl">
				<section className="w-full relative p-8 border-b border-b-background-tertiary flex flex-col gap-2">
					<div className="flex w-full items-end">
						<h1 className="text-3xl text-accent">
							<span className="font-bold">Thursday,</span> 2nd
						</h1>
						<p className="ml-auto text-secondary">
							<span className="font-bold">5</span> tasks
						</p>
					</div>
					<p className="text-secondary">February</p>
					<button className="absolute -bottom-[1.875rem] rounded-2xl right-8 bg-background-accent text-[2rem] w-[3.75rem] aspect-square">
						<i className="bi bi-plus"></i>
					</button>
                </section>
                <section className='mt-9'>
                    <ul>
                        <TaskItem task={{ id: 1, title: 'Task 1', isCompleted: false }} />
                        <TaskItem task={{ id: 1, title: 'Task 2', isCompleted: true }} />
                        <TaskItem task={{ id: 1, title: 'Task 3', isCompleted: false }} />
                    </ul>
                </section>
			</aside>
		</main>
	);
}

export default Page;
