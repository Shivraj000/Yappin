import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-white rounded p-2 py-1 cursor-pointer'>
        <div className='avatar '>
          <div>
            <img
              src='#' alt='user avatar'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-black-600'>John Doe</p>
            <span className='text-xl'>😙</span>
          </div>
        </div>
      </div>

      <div className='h-3 bg-black w-full my-2 rounded' />
    </>
  );
};

export default Conversation;
