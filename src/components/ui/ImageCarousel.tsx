"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".ogg"];

function isVideo(src: string): boolean {
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentMedia = images[currentIndex];
  const isCurrentVideo = isVideo(currentMedia);

  useEffect(() => {
    // Reset video state when changing slides
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [currentIndex, isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Main Media */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {isCurrentVideo ? (
              <video
                ref={videoRef}
                src={currentMedia}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
            ) : (
              <Image
                src={currentMedia}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Video Controls */}
        {isCurrentVideo && (
          <div className="absolute bottom-3 left-3 flex gap-2 z-10">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-foreground" />
              ) : (
                <Play className="w-4 h-4 text-foreground" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-foreground" />
              ) : (
                <Volume2 className="w-4 h-4 text-foreground" />
              )}
            </button>
          </div>
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs text-foreground border border-border z-10">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((media, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to ${isVideo(media) ? "video" : "image"} ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Strip */}
      {images.length > 3 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((media, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground/50"
              }`}
            >
              {isVideo(media) ? (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <Play className="w-4 h-4 text-muted-foreground" />
                </div>
              ) : (
                <Image
                  src={media}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
