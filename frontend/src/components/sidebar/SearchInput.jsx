import React from 'react'
import { TbUserSearch } from "react-icons/tb";
export const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search..' className='bg-black text-white border border-white px-3 py-2 rounded-md transition-all duration-300 
               group-hover:bg-white group-hover:text-black 
               placeholder-white group-hover:placeholder-black' />
        <button type='submit' className='btn btn-circle bg-black text-white'>
            <TbUserSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}
export default SearchInput;