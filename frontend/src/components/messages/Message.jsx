import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>

                    <img alt='Tailwind CSS chat bubble component' src={"#"} />
				</div>
                </div>
                	<div className={`chat-bubble text-black bg-white`}>hi how r u?</div>
              <div className='chat-footer text-xs flex gap-1 items-center text-white font-bold'>12:23</div>


                </div>
                
  )
}

export default Message;