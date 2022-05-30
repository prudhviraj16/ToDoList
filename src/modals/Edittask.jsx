import React,{useState,useEffect} from 'react';
import { ModalHeader,Button,Modal,ModalFooter,ModalBody } from 'reactstrap';
const Edittask = ({modal,toggle,save,updateTask,taskObj}) => {

    const[taskname,setTaskName] = useState('')
    const[description,setDescription] = useState('')

    const handleChange = (e) =>{
        // const name = e.target.name;
        // const value = e.target.value

        const {name,value} = e.target
        if(name==="taskname"){
          setTaskName(value)
        }
        else{
          setDescription(value)
        }
    }

    const handleUpdate = (e)=>{
        e.preventDefault()
        let tempObj = {}
        tempObj['Name'] = taskname
        tempObj['Description'] = description
        updateTask(tempObj)
    }


    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])
    return (
        <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>
      EditTask
    </ModalHeader>
    <ModalBody>
      <form>
          <div className="form-group">
            <label htmlFor="">TaskName</label>
            <input type="text" className='form-control' value={taskname} onChange={handleChange} name="taskname"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea rows="5" className='form-control' value={description} onChange={handleChange} name="description"></textarea>
          </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handleUpdate}>
         Update
      </Button>
     
      <Button onClick={toggle} color="secondary">
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
    );
};

export default Edittask;