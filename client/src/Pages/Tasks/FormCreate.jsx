import React from 'react'
import { useForm } from "react-hook-form"; 
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const FormCreate = (props) => {
    const { reset, register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        try {
            let response = await axios.post('http://127.0.0.1:8000/tasks/api/v1/tasks/', data);
            props.onClickCancel(); // Delayed execution
            props.fetchData(); // Delayed execution
            toast.success('Task created!', {
                style: {
                    background: 'green',
                    color: 'white'
                },
                duration: 2000, // Set the desired duration in milliseconds (3 seconds in this case)
            });
            reset(); // Reset the form immediately
        } catch (e) {
            toast.error('Error!');
        }
    };

    const selectItems = [
        {label: 'Completed', value: true},
        {label: 'Pending', value: false}
    ]

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="my-2">
                <div className="mb-4">
                    {/* <label className="text-gray-700 w-full text-sm font-bold mb-2" htmlFor='title'>
                        Title
                    </label> */}
                    <input 
                        className={`${errors.title ? 'border-red-500' : 'focus:border-violet-400'} text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} 
                        id='title' 
                        type='title'
                        placeholder='Type in title . . .'
                        {...register('title', {required: true, maxLength: 70})}
                    />
                    {errors.title && <p role="alert" className='text-sm font-normal text-red-600 mt-2'>Title is required</p>}
                </div>

                <textarea   
                    className={`${errors.description ? 'border-red-500' : 'focus:border-violet-400'} h-44 min-h-44 text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    placeholder='Type in description . . .'
                    {...register('description', {required: true, maxLength: 255})}
                />
                {errors.description && <p role="alert" className='text-sm font-normal text-red-600'>Description is required</p>}

                <div className='mb-5'>
                    <label htmlFor="done" className="font-normal text-gray-700 w-full text-sm mb-2">Select an option</label>
                    <select {...register('done')} className='text-sm shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="done">
                        {selectItems?.map((option, index) => {
                            return(
                                <option key={index} value={option.value} className='text-sm border-none bg-neutral-100 font-medium p-20'>
                                    {option.label}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className='text-end'>
                    <button onClick={props.onClickCancel} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                        Cancel
                    </button>
                    <button type="submit" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default FormCreate
