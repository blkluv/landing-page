// @ts-nocheck
// use client
import React from 'react';
import { MixpanelTracking } from "../../services/mixpanel.service";

export default function ParentComponent() {
    function socialActionHandler(social) {
        // Disable the button when the click event occurs
        // setIsButtonDisabled(true);

        MixpanelTracking.getInstance().buttonClicked(
            `social-${social.type}`, 
            { url: social.url }
        );

        // Simulate some asynchronous action (e.g., opening a new window)
        // You can replace this with your actual asynchronous action.
        setTimeout(() => {
            // Re-enable the button after the asynchronous action is complete
            // setIsButtonDisabled(false);
        }, 2000); // Adjust the delay as needed
    }

    return (
        <div className="relative bottom-[64px] left-[48px] md:bottom-[48px] md:left-[48px] max-w-[230px]">
            {/* Social buttons are removed */}
        </div>
    );
}
