"use client";

import { useState, useEffect } from "react";
import { ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Win98Button } from "@/components/ui/win98-button";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load initial likes count
    const loadLikes = async () => {
      try {
        const response = await fetch("/api/likes");
        const data = await response.json();
        setLikes(data.count);
      } catch (error) {
        console.error("Error loading likes:", error);
      }
    };
    loadLikes();
  }, []);

  const handleLike = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/likes", {
        method: "POST",
      });
      const data = await response.json();
      setLikes(data.count);
      setHasLiked(!hasLiked);
      // Store in localStorage to track like state
      localStorage.setItem("hasLikedRune", (!hasLiked).toString());
    } catch (error) {
      console.error("Error toggling like:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Check if user has already liked
  useEffect(() => {
    const hasLikedBefore = localStorage.getItem("hasLikedRune") === "true";
    setHasLiked(hasLikedBefore);
  }, []);

  return (
    <div className="flex items-center gap-4 not-prose">
      <Win98Button
        onClick={handleLike}
        disabled={isLoading}
        className={cn("w-32 relative", hasLiked && "[text-shadow:0_0_#000]")}
      >
        <div className="flex items-center justify-center gap-2">
          <ThumbsUp
            className={cn(
              "text-muted-foreground",
              hasLiked && "text-blue-700",
              isLoading && "animate-pulse"
            )}
            size={14}
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <span className={cn(hasLiked && "text-blue-700")}>{likes}</span>
        </div>
      </Win98Button>

      {hasLiked && <span className="text-sm text-[#222]">Thanks!</span>}
    </div>
  );
}
