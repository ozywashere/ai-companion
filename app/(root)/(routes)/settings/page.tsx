import React from 'react';
import {checkSubscription} from "@/lib/subscription";
import SubscriptionButton from "@/components/subscription-button";

const SettingsPage = async () => {
    const isPro = await checkSubscription();

    return (
        <div className="h-full p-4 space-y-2">
            <h3 className="text-lg font-medium">Settings</h3>
            <div className="text-muted-foreground text-sm">
                {isPro ? "You are currently on a Pro plan" : "You are  a currently on a Free plan. Upgrade to unlock more features."}
            </div>
            <SubscriptionButton isPro={isPro}/>
        </div>
    );
};

export default SettingsPage;