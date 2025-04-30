"use client";

import { useState, useEffect } from "react";
import { ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { RetroButton } from "@/components/ui/retro-button";

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
      <RetroButton
        onClick={handleLike}
        disabled={isLoading}
        variant={hasLiked ? "default" : "gray"}
        className="w-32"
      >
        <div className="flex items-center justify-center gap-2">
          <ThumbsUp
            className={cn("opacity-60", isLoading && "animate-pulse")}
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>{likes}</span>
        </div>
      </RetroButton>

      {hasLiked && (
        <span className="text-sm text-muted-foreground font-mono">Thanks!</span>
      )}
    </div>
  );
}
