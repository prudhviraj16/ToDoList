import React,{useState} from 'react';
import { ModalHeader,Button,Modal,ModalFooter,ModalBody } from 'reactstrap';
const Createtask = ({modal,toggle,save}) => {

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

    const handleSave = () =>{
        let taskObj = {}
        taskObj["Name"] = taskname
        taskObj["Description"] = description
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>
      Modal title
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
      <Button color="primary" onClick={handleSave}>
         CreateTask
      </Button>
     
      <Button onClick={toggle} color="secondary">
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
    );
};

export default Createtask;