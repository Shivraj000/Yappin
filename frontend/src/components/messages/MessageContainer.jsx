import React from 'react'
import Messages from './Messages';
import { useEffect } from "react";
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { IoMdArrowRoundBack } from "react-icons/io";
const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex flex-col flex-1 w-full sm:min-w-[450px] h-full'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				            <>
        
        <div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-white font-bold'>{selectedConversation.fullName}</span>
					</div>
					{selectedConversation && (
  <div className="sm:hidden flex items-center gap-2 bg-slate-600 text-white px-4 py-2">
    <button
      onClick={() => setSelectedConversation(null)}
      className="text-white font-bold text-lg"
    >
		<IoMdArrowRoundBack />
    </button>
    
  </div>
)}

            <Messages/>
            <MessageInput/>
        
        </>
        )
    }

    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
	const {authUser} = useAuthContext()
	return (
		<div className='flex items-center justify-center w-full h-full bg-gradient-to-b from-gray-800 via-gray-900 to-black'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>

				<p className="text-4xl">Welcome  to</p>
        <p
  className="text-4xl bg-gradient-to-r from-purple-700 via-pink-500 via-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-black drop-shadow-lg"
  style={{
    WebkitTextStroke: '1.5px black',
  }}
>
  &nbsp; Yappin
</p>

                <p>{authUser.fullName} 👋</p>

				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
		
	);
};