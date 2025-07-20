import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-70 flex-nowrap flex items-center justify-start gap-5 mt-10 py-5 overflow-x-auto'>

        {data.tasks.map((elem, index)=>{
            if(elem.active){
                return <AcceptTask key={index} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={index} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={index} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={index} data={elem}/>
            }

        })}
    </div>
  )
}

export default TaskList