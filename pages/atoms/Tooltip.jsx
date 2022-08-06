import React from 'react'

const Tooltip = ({message,type}) => {
    let customeStyle
    switch(type){
        case "love":
            customeStyle=""
            break;
    }

    return (
        <div className="absolute mt-2 w-full flex-col items-center hidden group-hover:flex">
        <div className="w-3 h-3 -mt-2 rotate-45 bg-cl500 dark:bg-cd500"></div>
            <span className="relative z-10 p-2 -mt-2 text-center text-xs leading-none text-white whitespace-no-wrap bg-cl500 dark:bg-cd500 shadow-lg rounded-md">{message}</span>
        </div>  
    )
}

export default Tooltip