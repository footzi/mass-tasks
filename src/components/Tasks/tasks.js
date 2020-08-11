import React, { useEffect, useState } from 'react';
import { Api } from "../../modules/api";

export const Tasks = ({currentProject = null}) => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    (async function() {
      const tasks = await Api.getTasks(currentProject);
  
      setTasks(tasks)
    })()
  }, [currentProject])
  
  return (
    <ul>
      {tasks.map(({id, TaskType, Desc}) => (
        <li key={id}>
          type = {TaskType}
          type = {Desc}
        </li>
      ))}
    </ul>
  )
}
