import React from 'react'

function Menubar({onClick}) {
  return (
    <div className='w-full flex flex-col items-center gap-y-4 md:flex-row justify-between'>
        <h1 className='text-2xl text-neutral-900 dark:text-neutral-0 font-bold'>Extensions List</h1>
        <div>
            <button className='menubar-button' onClick={()=>onClick("all")}>All</button>
            <button className='menubar-button' onClick={()=>onClick("active")}>Active</button>
            <button className='menubar-button' onClick={()=>onClick("inactive")}>Inactive</button>
        </div>
    </div>
  )
}

export default Menubar