import React, {ChangeEvent, FormEvent} from 'react';
import {ChatRequestOptions} from "ai";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SendHorizonal} from "lucide-react";

interface ChatFormProps {
    input: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
    isLoading: boolean;
}

const ChatForm = ({
                      input,
                      handleInputChange,
                      isLoading,
                      onSubmit
                  }: ChatFormProps) => {
    return (
        <form onSubmit={onSubmit} className="border-t border-primary/10 py-14 flex items-center gap-x-2">
            <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type a message..."
                disabled={isLoading}
                className="rounded-lg bg-primary/10"
            />
            <Button
                type="submit"
                disabled={isLoading || !input}
                variant="ghost">
                <SendHorizonal className="size-6"/>
            </Button>
        </form>
    );
};

export default ChatForm;