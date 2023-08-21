import React from 'react'
import '../../public/assets/Components/index.css';

const Modal = (props) => {
    const modalStyles = {
        opacity: props.visible ? 1 : 0,
        visibility: props.visible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    };

    return (
        <div style={modalStyles} className='relative z-50'>
            <div aria-labelledby="modal-title" role="dialog" aria-modal="true">
                {/* Background */}
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                {/* Content */}
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            {props.icon ? (
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 align-middle sm:mx-0 sm:h-10 sm:w-10">
                                    {/* Icon */}
                                    <i className={`${props.icon} text-lg`}/>
                                </div>
                            ): ''}
                            <div className="mt-3 pt-1.5 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 className="font-semibold leading-6 text-gray-900 text-xl" id="modal-title">
                                    {props.header}
                                </h3>
                            </div>
                        </div>
                        </div>
                        <div className="text-lg mt-5 m-5">
                            {props.children}
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            {props.footer}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
