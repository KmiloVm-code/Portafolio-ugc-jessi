import { useState, useMemo } from "react";
import { Video } from "@/types/portfolio";

export function useVideoFilter(videos: Video[]) {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredVideos = useMemo(() => {
    return activeCategory === "todos"
      ? videos
      : videos.filter((video) => video.category === activeCategory);
  }, [videos, activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredVideos,
  };
}
