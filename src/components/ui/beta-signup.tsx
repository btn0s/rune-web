"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";

const SIGNUP_KEY = "rune-beta-signup-submitted";
const EMAIL_KEY = "rune-beta-signup-email";

export function BetaSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedEmail, setSavedEmail] = useState("");

  useEffect(() => {
    // Check if user has already signed up
    const hasSubmitted = localStorage.getItem(SIGNUP_KEY) === "true";
    const storedEmail = localStorage.getItem(EMAIL_KEY) || "";

    if (hasSubmitted && process.env.NODE_ENV !== "development") {
      setIsSubmitted(true);
      setSavedEmail(storedEmail);
    }

    if (window.location.hash === "#beta-signup") {
      window.history.replaceState({}, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      // Save to localStorage to prevent resubmission
      localStorage.setItem(SIGNUP_KEY, "true");
      localStorage.setItem(EMAIL_KEY, email);
      setSavedEmail(email);
      setIsSubmitted(true);
      toast.success("Thank you for signing up for our private beta!");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4" id="beta-signup">
      <div>
        <h3 className="text-lg font-semibold">Private Beta coming soon</h3>
        <p className="text-sm text-muted-foreground">
          Enter your email to be notified and keep up to date with our progress.
        </p>
      </div>
      {isSubmitted ? (
        <Alert className="border-green-500 bg-green-50 dark:bg-green-950/30 dark:border-green-800">
          <AlertTitle className="text-green-700 dark:text-green-400 overflow-visible flex gap-1">
            You're on the list!
            {savedEmail && (
              <span className="block text-sm font-normal opacity-80">
                {savedEmail}
              </span>
            )}
          </AlertTitle>
        </Alert>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Sign up"}
          </Button>
        </form>
      )}
    </div>
  );
}
