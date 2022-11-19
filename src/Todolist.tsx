import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((elem, index) => {
                return (
                    <li key={index}>
                        <button onClick={() => {
                            {
                                props.removeTask(elem.id)
                            }
                        }}>X
                        </button>
                        <input type="checkbox" checked={elem.isDone}/>
                        <span>{elem.title}</span>

                    </li>
                )
            })}
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
