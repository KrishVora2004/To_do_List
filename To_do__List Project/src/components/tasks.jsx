import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Task = ({ item, handleedit, handledel, handlecheckbox }) => {

    return (
        <>
            <div className='todo flex w-1/2 justify-between font-bold my-2'>
                <input type="checkbox" checked={item.isCompleted} onChange={handlecheckbox} className='mr-3' />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                <div className='buttons mx-5 flex'>
                    <button onClick={handleedit} className='bg-sky-500 rounded-md p-1 mx-1'><FaEdit /></button>
                    <button onClick={handledel} className='bg-red-600 rounded-md p-1 mx-1'><MdDelete /></button>
                </div>
            </div>
        </>
    );
};

export default Task;