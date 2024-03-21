"use client"
import axios from "axios";
import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Sparkles} from "lucide-react";
import {useToast} from "@/components/ui/use-toast";

interface SubscriptionButtonProps {
    isPro: boolean;
}


const SubscriptionButton = ({isPro = false}: SubscriptionButtonProps) => {
    const [loading, setLoading] = useState(false);
    const {toast} = useToast();
    const onClick = async () => {
        try {
            setLoading(true);
            // Call your payment provider here
            const response = await axios.get("/api/stripe")
            window.location.href = response.data.url
        } catch (error) {
            toast({
                variant: "destructive",
                description: "An error occurred, please try again later",

            })

        } finally {
            setLoading(false);
        }
    }
    return (
        <Button
            onClick={onClick}
            size="sm"
            variant={isPro ? "default" : "premium"}>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Sparkles className="size-4  fill-white text-white ml-2"/>}

        </Button>
    );
};

export default SubscriptionButton;

