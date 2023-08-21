import React from 'react'
import AppTopBar from './AppTopBar'

const AppLayout = (props) => {
    return (
        <div>
            <AppTopBar/>

            {props.children}
        </div>
    )
}

export default AppLayout
