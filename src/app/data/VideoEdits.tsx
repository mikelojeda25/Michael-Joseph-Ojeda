export interface VideoEdit {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string; // Optional: para sa preview image bago i-play
  thumbnailCloudinaryId?: string;
  category: "Animation" | "Lyric Video";
}

export const VideoEdits: VideoEdit[] = [
  {
    id: "vid-371",
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
      "A video edit created with Meta AI, Gemini, ChatGPT, and Capcut.",
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
