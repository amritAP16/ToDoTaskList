import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [taskAssignTo, setTaskAssignTo] = useState('');
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState('');
  const [description,setDescription] = useState('');
  
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault();

    setNewTask({title,date,priority,category,description,active:false,newTask:true,failed:false,completed:false})

    const data = userData.employees
    console.log(data);
    

    data.forEach((elem)=>{
      if(taskAssignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    })

    setUserData

    setTitle('')
    setDate('')
    setTaskAssignTo('')
    setPriority('')
    setCategory('')
    setDescription('')
  }

  return (
    <div className="p-5 bg-zinc-700 mt-7 rounded-2xl">
      <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-wrap w-full items-start justify-between">

        <div className="w-1/2 ">
          <div >
            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Task Title</h3>
            <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="What's the Title?" />
          </div>
          <div >
            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Date</h3>
            <input value={date} onChange={(e)=>{setDate(e.target.value)}} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
          </div>
          <div >
            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Assign To</h3>
            <input value={taskAssignTo} onChange={(e)=>{setTaskAssignTo(e.target.value)}} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Assign Task" />
          </div>
          <div >
            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Priority</h3>
            <input value={priority} onChange={(e)=>{setPriority(e.target.value)}} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Set Priority" />
          </div>
          <div >
            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Category</h3>
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, etc." />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Description</h3>
            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
          <button className="bg bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full hover:bg-emerald-900">
            Create Task
          </button>
          </div>
      </form>
    </div>
    
  );
};

export default CreateTask;
