import React from 'react';
import { useForm } from "react-hook-form"; 

const Input = (props) => {
    return (
        <div className="mb-4">
            <label className="text-gray-700 w-full text-sm font-bold mb-2" htmlFor={props.title}>
                {props.label}
            </label>
            <input 
                className="text-sm focus:border-violet-400 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id={props.title} 
                type={props.type} 
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default Input;
