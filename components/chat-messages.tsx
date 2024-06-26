"use client"
import React, {ElementRef, useEffect, useRef, useState} from 'react';
import {Companion} from "@prisma/client";
import ChatMessage, {ChatMessageProps} from "@/components/chat-message";

interface ChatMessagesProps {
    isLoading: boolean;
    messages: ChatMessageProps[];
    companion: Companion;
}

const ChatMessages = ({isLoading = true, messages = [], companion}: ChatMessagesProps) => {
    const scrollRef = useRef<ElementRef<"div">>(null);
    const [fakeLoading, setFakeLoading] = useState(messages.length === 0);

    useEffect(() => {
        const timeout = setTimeout(() => {
                setFakeLoading(false);
            }
            , 5000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        scrollRef?.current?.scrollIntoView({behavior: "smooth"});
    }, [messages.length]);
    return (
        <div className="flex-1 overflow-y-auto pr-4">
            <ChatMessage
                isLoading={fakeLoading}
                src={companion.src}
                role="system"
                content={`Hello, I am ${companion.name}, ${companion.description}`}
            />
            {messages.map((message,index) => (
                <ChatMessage
                    key={index}
                    src={companion.src}
                    content={message.content}
                    role={message.role}
                />
            ))}
            {isLoading && (
                <ChatMessage
                    isLoading
                    role="system"
                    src={companion.src}

                />
            )}
            <div ref={scrollRef}/>
        </div>
    );
};

export default ChatMessages;