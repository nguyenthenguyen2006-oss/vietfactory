export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail?: string;
}

export const videos: VideoItem[] = [
  {
    id: "intro",
    title: "Giới thiệu VietFactory",
    youtubeId: "YOUR_VIDEO_ID",
  },
  {
    id: "project-1",
    title: "Thi công nhà xưởng logistics",
    youtubeId: "YOUR_VIDEO_ID",
  },
  {
    id: "project-2",
    title: "Thiết kế kho lạnh công nghiệp",
    youtubeId: "YOUR_VIDEO_ID",
  },
  {
    id: "project-3",
    title: "Phòng sạch GMP trong sản xuất",
    youtubeId: "YOUR_VIDEO_ID",
  },
];