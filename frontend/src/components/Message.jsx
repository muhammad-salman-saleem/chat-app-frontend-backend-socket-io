import React, { useEffect, useRef } from 'react'
import {useSelector} from "react-redux";

const Message = ({message}) => {
    const scroll = useRef();
    const {authUser,selectedUser} = useSelector(store=>store.user);

    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"});
    },[message]);

    function formatDate(message) {
        const date = new Date(message.createdAt);
        const today = new Date();
    
        const isToday = date.toDateString() === today.toDateString();
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
        if (isToday) {
            return time; 
        } else {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
    
            return `${day}/${month}/${year} ${time}`; 
        }
    }

    return (
        <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilePhoto  : selectedUser?.profilePhoto } />
                </div>
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50 text-white">{formatDate(message)}</time>
            </div>
            <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''} `}>{message?.message}</div>
        </div>
    )
}

export default Message