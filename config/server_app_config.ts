// Define the CTAType enum
export enum CTAType {
    Waitlist = "waitlist",
    BasicCTA = "basic_cta",
}

// Add the Google Analytics code
const googleAnalyticsCode = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-PH2ZZGHFEQ"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-PH2ZZGHFEQ');
  </script>
`;

const ServerAppConfig = {
    Content: {
        Heading: "Get Paid To Heal X, Y & Z",
        Subheading: "Join the first social media platform with a higher purpose to connect authentic healRs with those who need spiritual healN.",
    },
    Urls: {

    },
    EmbeddedLoomVideoSettings: {
        // Used to control embedded Loom video

        Url: process.env["LOOM_EMBED_URL"] as string,
        // You can get the URL by clicking share > embed > Copy embed code on a Loom video
        // Note: The URL will be inside the code snippet under 'src' attribute of the iframe tag

        HideControls: true, // Set to true to hide the controls on the video player
    },
    FeatureFlags: {
        // Controls the overall features of the landing page
        EmbeddedLoomVideo: true,
        CTAType: CTAType.BasicCTA, // Now CTAType is properly defined
    },
}

// Add the provided HTML code
const waitlistContainerHtml = `
    <div id="getWaitlistContainer" data-waitlist_id="10645" data-widget_type="WIDGET_1"></div>
    <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
    <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
`;

export default ServerAppConfig;
