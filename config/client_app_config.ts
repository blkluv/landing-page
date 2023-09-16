import { getBooleanEnvVariable } from "./util";

export enum SocialType {
    Twitter = "twitter",
    Instagram = "instagram",
    LinkedIn = "linkedin",
    TikTok = "tiktok",
    Github = "github",
    Stackoverflow = "stackoverflow",
}

const ClientAppConfig = {
    Mixpanel: {
        ProjectId: process.env['NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN'],
        DebugEnabled: getBooleanEnvVariable('NEXT_PUBLIC_MIXPANEL_DEBUG_ENABLED', true)
    },
    Env: process.env['NEXT_PUBLIC_MIXPANEL_APP_ENV'],
    Urls: {
        DemoVideo: process.env['NEXT_PUBLIC_DEMO_VIDEO_URL'],
        PrimaryCTAUrl: process.env['NEXT_PUBLIC_PRODUCT_URL'] as string, // Only used if FormType is BasicCTA
    },
    Content: {
        WaitlistCTA: "Join the waitlist", // Only used if FormType is Waitlist
        PrimaryCTA: "Download for free", // Only used if FormType is BasicCTA
    },
    Socials: [
        {
            "type": SocialType.Twitter,
            "url": "https://twitter.com/healxyz",
        },
        {
            "type": SocialType.TikTok,
            "url": "https://tiktok.com/@healxyz",
        },
        {
            "type": SocialType.Instagram,
            "url": "https://instagram.com/healxyz",
        },
    ],
    NavBarLinks: [
        {
            "title": "Watch our demo",
            "url": process.env['NEXT_PUBLIC_DEMO_VIDEO_URL'],
        },
        {
            "title": "Download extension",
            "url": process.env['NEXT_PUBLIC_PRODUCT_URL'],
        },
    ] as Array<{
        "title": string,
        "url": string,
    }>,
}

export default ClientAppConfig;
