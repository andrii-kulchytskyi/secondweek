import React, {useState} from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    filterTask: (string:string)=> void

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
            <button onClick={() => {
                props.filterTask("All")
            }}>All
            </button>
            <button onClick={() => {
                props.filterTask("Active")
            }}>Active
            </button>
            <button onClick={() => {
                props.filterTask("Completed")
            }}>Completed
            </button>
        </div>
    </div>
}
