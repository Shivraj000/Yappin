import React from 'react'
import Messages from './Messages';
import { useEffect } from "react";
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				            <>
        
        <div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-white font-bold'>{selectedConversation.fullName}</span>
					</div>
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
  className="text-4xl bg-gradient-to-r from-blue-600 via-teal-500 via-emerald-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent font-extrabold"
  style={{
    WebkitTextStroke: '1.5px black',
  }}
>
  &nbsp; Yappin
</p>

                <p>{authUser.fullName} ❄</p>

				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};