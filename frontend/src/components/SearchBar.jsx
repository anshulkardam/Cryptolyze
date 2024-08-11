import { useState } from 'react';

export const SearchBar = ({search, onSearchChange}) => {

  
    return <div className='text-white pb-5 pt-10'>
        <Input search={search} onSearchChange={onSearchChange}/>
    </div>
}


function Input({search ,onSearchChange}) {
    return (
        <form className="w-3/4 mx-auto">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 ml-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search"
                     value={search}
                     onChange={(e) => onSearchChange(e)}
                id="default-search" 
                className="block w-full p-4 ps-16 text-md text-white  font-poppins font-medium border-black rounded-full bg-grid outline-none focus-within:" placeholder="Search " />
            </div>
        </form>

    )
}