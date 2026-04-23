export interface VideoEdit {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  thumbnailCloudinaryId?: string;
  category: "Animation" | "Lyric Video";
}

export const VideoEdits: VideoEdit[] = [
  {
    id: "vid-145",
    title: "Juice Jacking",
    description:
      "A short-form cybersecurity explainer. Created using Meta AI for B-roll visuals, Gemini for images, Hailuo AI, DreamFace for lip-sync, and CapCut for final assembly.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1776897207/Juice-Jacking_ogxx5d.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1776897207/Juice-Jacking_ogxx5d.jpg",
    category: "Tech Explainer",
  },
  {
    id: "vid-174",
    title: "Windows 11 Installation",
    description:
      "A short-form on how to install Windows 11. Produced with Meta AI for B-roll, Gemini for visuals, Hailuo AI, DreamFace, and CapCut.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1776897228/W11-Installation_rmb8ai.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1776897228/W11-Installation_rmb8ai.jpg",
    category: "Tutorial",
  },
  {
    id: "vid-189",
    title: "Nature Go",
    description:
      "Spec ad for NatureGo, produced using Meta AI for footage, ElevenLabs for emotive narration, and CapCut for final post-production.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1776519010/Nature-Go_ygheui.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1776519010/Nature-Go_ygheui.jpg",
    category: "Spec Ad / Reels",
  },
  {
    id: "vid-248",
    title: "Rhodiola Rosea",
    description: "A video edit created with Capcut.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/q_auto/f_auto/v1775972883/Rhodiola_Rosea_k50iif.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/q_auto/f_auto/v1775972883/Rhodiola_Rosea_k50iif.jpg",
    category: "Shorts / Reels",
  },
  {
    id: "vid-371",
    title: "Sunflower",
    description:
      "An animation created with Meta AI, Gemini, ChatGPT, and assembled through Capcut.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/q_auto/f_auto/v1775957860/Sunflower-Final_txqm96.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/q_auto/f_auto/v1775957860/Sunflower-Final_txqm96.jpg",
    category: "Animation",
  },
  {
    id: "vid-965",
    title: "Help In Need",
    description:
      "A video edit created with Magic Light AI, Luma AI, Gemini, Capcut, and Voicebooking.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/q_auto/f_auto/v1775663442/h-i-n_axoelb.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/q_auto/f_auto/v1775663442/h-i-n_axoelb.jpg",
    category: "Animation",
  },
  {
    id: "vid-1",
    title: "Ground Zero",
    description:
      "Official video edit for the Ground Zero animation trailer, produced using Capcut, ibisPaint, and Photoshop.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774542718/Ground_Zero_tahlr8.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774542718/Ground_Zero_tahlr8.jpg",
    category: "Animation",
  },
  {
    id: "vid-2",
    title: "I'm Mine Alone - Mobile Version",
    description:
      "Visualizer for 'I'm Mine Alone' utilizing Capcut, Suno AI, and Gemini-generated artwork.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531701/Im_Mine_ALONE_gkiqv7.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531701/Im_Mine_ALONE_gkiqv7.jpg",
    category: "Lyric Video",
  },
  {
    id: "vid-3",
    title: "Alapaap",
    description:
      "Alapaap Lyric Video / Edit using Capcut, Suno AI for music, and Gemini for the background",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531673/Alapaap_jolkde.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531673/Alapaap_jolkde.jpg",
    category: "Lyric Video",
  },
  {
    id: "vid-4",
    title: "Hollow World",
    description:
      "Showcasing my hand-drawn artwork (created with ibisPaint), and Capcut/Gemini for the background effects.",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531355/Hollow_World_tv3p1r.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531355/Hollow_World_tv3p1r.jpg",
    category: "Lyric Video",
  },
  {
    id: "vid-5",
    title: "Hollow World - Mobile Version",
    description: "Portrait view content for Hollow World",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774529927/Hollow_World_-_Tiktok_1_eluw7k.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774529927/Hollow_World_-_Tiktok_1_eluw7k.jpg",
    category: "Lyric Video",
  },
];
