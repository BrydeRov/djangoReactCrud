import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Components
import AppLayout from '../../Layouts/AppLayout.jsx';
import TaskCard from '../../Components/TaskCard.jsx';
import Button from '../../Components/Button.jsx';
import Modal from '../../Components/Modal.jsx';
import toast, { Toaster } from 'react-hot-toast';

// Forms
import FormCreate from './FormCreate'
const Index = () => {
    const [tasks, setTasks] = useState();
    const [showModalNew, setShowModalNew] = useState(false);
    
    const fetchData = async () => {
        const { data } = await axios.get('http://localhost:8000/tasks/api/v1/tasks');
        setTasks(data)
    }

    const deleteTask = async (task) => {
        try {
            await axios.delete(`http://localhost:8000/tasks/api/v1/tasks/${task.id}`)
            setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id)); // Remove the deleted task from state
            toast.success('Task Deleted!', {
                duration: 3000, // Set the desired duration in milliseconds (3 seconds in this case)
            });
        } catch (error) {
            // Handle error if needed
        }
    }
    

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <AppLayout>
            <Toaster/>
            <div className="bg-white pt-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Tasks Created
                            <Button
                                onClick={() => {setShowModalNew(true)}}
                                label='New'
                                icon='pi pi-plus'
                            />
                            <Modal 
                                icon='pi pi-plus' 
                                header='Create Task' 
                                visible={showModalNew} 
                                children={
                                    <FormCreate 
                                        onClickCancel={() => {setShowModalNew(false)}}
                                        fetchData={fetchData}                         
                                    />
                                }
                            />
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn how to grow your business with our expert advice.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                        {tasks?.map((task, index) => {
                            return (
                                <TaskCard
                                    key={index}
                                    title={task.title}
                                    description={task.description}
                                    completed={task.done}
                                    onClickTrash={() => {deleteTask(task)}}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Index
