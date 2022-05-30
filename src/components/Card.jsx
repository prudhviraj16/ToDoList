import React,{useState} from 'react';
import '../App.css'
import Edittask from '../modals/Edittask';
const Card = ({taskObj,index,different,deleteTask,updateListArray}) => {
    const handleDelete = () =>{
        deleteTask(index)
    }
    
    const[modal,setModal] = useState(false)
    const toggle=() =>{
        setModal(!modal)
    }
    const updateTask = (obj) =>{
        updateListArray(obj,index)
    }
    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"backgroundColor" : different[index%5].color1}}></div>
                <div className = "task-holder">
                    <span className = "card-header" style={{"backgroundColor" : different[index%5].color2, borderRadius: "10px"}}>{taskObj.Name}</span>
                    <p className = "mt-3">{taskObj.Description}</p>
                    <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                        <i className = "far fa-edit mr-4" style={{"color" : "#5DC250", "cursor" : "pointer"}} onClick={()=>setModal(true)}></i>
                        <i className="fas fa-trash-alt" style = {{"color" : "#5DC250", "cursor" : "pointer"}}  onClick = {handleDelete}></i>
                    </div>
                </div>
        <Edittask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div> 
    );
};

export default Card;