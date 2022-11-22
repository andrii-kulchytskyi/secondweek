import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {


    let [tasks1, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])


    const [filterValueKey, setFilterValueKey] = useState("All"
    )

    const fooFilter = () => {
        let filteredTasks = tasks1;
        if (filterValueKey === "Active") {
            return filteredTasks = tasks1.filter(el => !el.isDone)

        }
        if (filterValueKey === "Completed") {
            return filteredTasks = tasks1.filter(el => el.isDone)
        }
        return filteredTasks
    }
    const filterTask = (filterKey: string) => {
        setFilterValueKey(filterKey)
    }


    const removeTask = (taskID: number) => {
        tasks1 = tasks1.filter((el) => el.id !== taskID)
        setTask(tasks1)
        console.log(taskID)
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={fooFilter()} removeTask={removeTask}
                      filterTask={filterTask}/>
        </div>
    );
}

export default App;
