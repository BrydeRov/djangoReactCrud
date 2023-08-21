import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className='ms-4 align-middle rounded bg-violet-600 hover:bg-violet-700 p-2 text-white text-lg'>
            {props.label}
            {props.icon ? (
                <i className={`${props.icon} ms-3 text-sm`}/>
            ) : ''}
        </button>
    )
}

export default Button
