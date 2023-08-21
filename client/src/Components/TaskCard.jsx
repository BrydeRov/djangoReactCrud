import React from 'react'

const TaskCard = (props) => {
    return (
        <div className="border p-4 rounded-lg z-30 bg-slate-200 flex m-3 max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <span dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</span>
                <a href="#" className={`relative z-10 rounded-full ${props.completed ? 'bg-green-200' : 'bg-red-200'} px-3 py-1.5 font-medium text-black hover:bg-violet-300`}>
                    {props.completed ? 'Completed' : 'Pending'}
                </a>
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                    <span className="absolute inset-0"></span>
                        {props.title}
                    </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {props.description}
                </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                    <a href="#">
                        <span className="absolute inset-0"></span>
                        Michael Foster
                    </a>
                    </p>
                    <p className="text-gray-600">
                        Co-Founder / CTO
                    </p>
                    
                </div>
            </div>
            <div className="rounded-md shadow-sm mt-3" role="group">
                <button onClick={props.onClickTrash} className="bg-grey-light text-grey-darkest font-bold py-2 px-4 rounded inline-flex">
                    <i className='pi pi-trash text-red-500'/>
                </button>
                <button onClick={props.onClickEdit} className="bg-grey-light text-grey-darkest font-bold py-2 px-4 rounded inline-flex">
                    <i className='pi pi-pencil text-yellow-500'/>
                </button>
            </div>
        </div>    
    )
}

export default TaskCard
