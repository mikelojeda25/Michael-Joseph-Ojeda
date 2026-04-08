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
    id: "vid-965",
    title: "Help In Need",
    description:
      "A Video Edit using Magic Light AI, Luma AI, Capcut, and Voicebooking",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1775616011/Help_in_need_cr32wi.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1775616011/Help_in_need_cr32wi.jpg",
    category: "Animation",
  },
  {
    id: "vid-1",
    title: "Ground Zero",
    description: "Official Video Edit for Ground Zero Animation Trailer",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774542718/Ground_Zero_tahlr8.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774542718/Ground_Zero_tahlr8.jpg",
    category: "Animation",
  },
  {
    id: "vid-2",
    title: "I'm Mine Alone - Mobile Version",
    description: "Visualizer for I'm Mine Alone",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531701/Im_Mine_ALONE_gkiqv7.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531701/Im_Mine_ALONE_gkiqv7.jpg",
    category: "Lyric Video",
  },
  {
    id: "vid-3",
    title: "Alapaap",
    description: "Alapaap Lyric Video / Edit",
    videoUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531673/Alapaap_jolkde.mp4",
    thumbnailUrl:
      "https://res.cloudinary.com/dd5gbzoti/video/upload/v1774531673/Alapaap_jolkde.jpg",
    category: "Lyric Video",
  },
  {
    id: "vid-4",
    title: "Hollow World",
    description: "Full Edit for Hollow World",
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
