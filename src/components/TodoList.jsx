import React,{useState,useEffect} from 'react'
import Createtask from '../modals/Createtask'
import './TodoList.css'
import Card from './Card'
const TodoList = () => {
  const [modal,setModal] = useState(false)
  const [taskList,setTaskList] = useState([]) 
  const colors = [
    {
        color1 : "#5D93E1",
        color2 : "#ECF3FC"
    },
    {
        color1 : "#F9D288",
        color2 : "#FEFAF1"
    },
    {
        color1 : "#5DC250",
        color2 : "#F2FAF1"
    },
    {
        color1 : "#F48687",
        color2 : "#FDF1F1"  
    },
    {
        color1 : "#B964F7",
        color2 : "#F3F0FD"
    }
]
  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if(arr){
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const deleteTask = (index) =>{
      let tempList = taskList
      tempList.splice(index, 1)
      localStorage.setItem('taskList', JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }

  const updateListArray=(obj,index) =>{
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem('taskList', JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const toggle = () =>{
    setModal(!modal)
  }

  const saveTask =(taskObj) =>{
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem('taskList', JSON.stringify(tempList))
    setTaskList(taskList)
    setModal(false)
  }
  return (
      <>
        <div className="header text-center">
            <h3>Todo List</h3>
            <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
        </div>
        <div className="task-container">
            {taskList&&taskList.map((obj,index)=> <Card taskObj={obj} index={index} key={index} different={colors} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
        </div>
        <Createtask modal={modal} toggle={toggle} save={saveTask}/>
        </>
  )
}

export default TodoList