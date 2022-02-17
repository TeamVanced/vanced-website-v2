import React from "react";

// Feature Images
import mainFeature1 from "../assets/images/vanced_features/main_features_1.webp";
import mainFeature2 from "../assets/images/vanced_features/main_features_2.webp";
import customization1 from "../assets/images/vanced_features/customization_1.webp";
import customization2 from "../assets/images/vanced_features/customization_2.webp";
import sponsorBlock1 from "../assets/images/vanced_features/sponsor_block_1.webp";
import sponsorBlock2 from "../assets/images/vanced_features/sponsor_block_2.webp";
import ryd1 from "../assets/images/vanced_features/ryd_1.webp";
import ryd2 from "../assets/images/vanced_features/ryd_2.webp";

const featuresData = [
	{
		name: "Main Features:",
		images: [mainFeature1, mainFeature2],
		data: [
			"Features the option of an amoled black theme to reduce eye and battery strain.",
			"Blocks All videos ads and allows you to play videos in the background or in Picture in Picture (only on android 8.0 and up)",
			"Swipe controls allow you to control brightness and volume like how it is in other video player apps such as VLC or MX Player (with configurable padding).",
			"New auto repeat feature allowing you to enjoy videos like tiktoks/vines or simply continue playing a song on loop.",
			"Not liking the new comments section or miniplayer? Those also can be toggled to the tablet versions which are very similar to the old version (albeit slightly buggy).",
		],
	},
	{
		name: "Customization:",
		images: [customization1, customization2],
		data: [
			"Allows you to override Codec options such as forcing H264 for old devices or VP9, this also allows you to force HDR playback or turn off 60fps if you prefer a cinematic experience. (Custom device configs for these features can be found on our discord or XDA)",
			"Force the default video resolution as high or low as you want and even override your screen resolution for that sharp 4k playback on any device, and also allows you to change default playback speed to anywhere between 0.25x to 2x (assuming your device is powerful enough)",
			"Allows you to toggle home ads, most UI ads, Merchandise ads, Community posts, Movie upselling, compact banner info (such as the covid info), remove comments entirely, compact movie, movie shelf removal and many more!",
		],
	},
	{
		name: "Sponsor Block",
		images: [sponsorBlock1, sponsorBlock2],
		data: [
			"Features the ability to skip annoying sponsor segments (where a youtuber advertises a service or product in the middle of a video)",
			"It also supports skipping other categories, such as intros, outros and reminders to subscribe.",
			<>
				Uses the API found <a href="https://sponsor.ajay.app/">here</a>. You can
				find more information on how it works
			</>,
			"Also allows you to submit your own segments to the API and contribute to the wider community",
			"Complete control over whether to automatically skip a segment category or show a button for skipping, or simply just not skipping it at all.",
			"Highlights the segment in the specific colour based on its category in the playback timeline.",
		],
	},
	{
		name: "Return YouTube Dislike",
		images: [ryd1, ryd2],
		data: [
			"Reverses Google's removal of the dislike counter so you can finally see the quality of videos again",
			<>
				Uses the Return YouTube Dislike API found<a href="https://returnyoutubedislike.com/">here</a>. You can
				find more information on how it works
			</>,
			"It uses extension\\vanced userbase dislike submissions as a sample group to estimate total dislike counts on new videos, and archived data for old videos",
		],
	},
];

export default featuresData;
