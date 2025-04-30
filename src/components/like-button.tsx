"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="flex items-center gap-2 not-prose">
      <Button
        onClick={handleLike}
        disabled={isLoading}
        variant="outline"
        className="py-0 pe-0 gap-0 px-3 h-8"
      >
        <ThumbsUp
          className={cn("me-2 opacity-60", isLoading && "animate-pulse")}
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Like
        <span className="relative ms-3 inline-flex h-8 items-center justify-center rounded-e-md ps-3 text-xs font-medium text-muted-foreground before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-input">
          {likes}
        </span>
      </Button>

      {hasLiked && (
        <span className="text-sm text-muted-foreground">
          Thanks for your support!
        </span>
      )}
    </div>
  );
}
