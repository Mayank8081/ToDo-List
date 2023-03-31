
import './App.css';
import React, { useState } from 'react'

export default function TodoList() {
    const [activity,setActivity]=useState("");
    const [listData,setlistData]=useState([]);

    function addActivity(){
        setlistData((listData)=>{
            const updatedList = [...listData,activity];
            console.log(updatedList);
            setActivity('');
            return updatedList;
        })
    }

    function removeActivity(i){
        const updatedListData = listData.filter((element,id)=>{
            return i!=id;
        })
        setlistData(updatedListData);
    }

    function removeAll(){
        setlistData('');
    }

  return (
    <>
    <div className='container'>
      <div className='header'>ToDo List</div>
      <input className='input' type='text'placeholder='Add Your Task' value={activity} onChange={(e)=>setActivity(e.target.value)} />
      <button className='btn' onClick={addActivity}>Add</button>
      <p className='List-heading'>Your list...</p>
      {listData != [] && listData.map((data,i)=>{
        return(
            <>
                <p key={i}>
                   <div className='listData'>{data}</div> 
                   <div className='btn-position'>
                   <button className='removebtn' onClick={()=>removeActivity(i)} >remove(-)</button>
                   </div>
                 </p>
            </>
        )

      }) }
      {listData.length>=2 && <button className='removebtn' onClick={removeAll}>Remove All</button>}
      
    </div>
    </>
  )
}


