import React from 'react';
import {Avatar, AvatarImage} from "@/components/ui/avatar";

interface BotAvatarProps {
    src: string
}
const BotAvatar = ({src}:BotAvatarProps) => {
    return (
        <Avatar className="size-12">
            <AvatarImage
                src={src}
                alt="Bot"
            />
        </Avatar>
    );
};

export default BotAvatar;