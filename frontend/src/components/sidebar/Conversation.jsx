import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';
const Conversation = ({conversation,lastIdx,emoji}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);


  return (
    <>
        <div
        className={`flex gap-2 items-center hover:bg-white rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar  ${isOnline ? "online" : ""}`}>
          <div className='w-12'>
            <img
              src={conversation.profilePic} 
              alt='user avatar'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-black-600'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='h-3 bg-black w-full my-2 rounded' />}
    </>
  );
};

export default Conversation;
