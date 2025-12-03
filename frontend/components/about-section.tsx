"use client";

import { VideoPlayer } from "./ui/VideoPlayer";
import { About } from "@/types/about";

export function AboutSection({ aboutSection }: { aboutSection: About }) {
  const { video_about, title, items } = aboutSection;
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-title font-bold text-sage-green mb-8 text-balance">
                {title.split("*").map((part, index) =>
                  index % 2 === 1 ? (
                    <span key={index} className="text-honey-gold font-script">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <p
                    key={index}
                    className="text-lg text-deep-green/80 leading-relaxed font-body text-balance"
                  >
                    {item.text.split("*").map((part, index) =>
                      index % 2 === 1 ? (
                        <span key={index} className="text-honey-gold">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* Video Side */}
            <VideoPlayer
              src={video_about.video.url}
              poster={video_about.poster.url}
              ariaLabel={video_about.video.alternativeText}
            />

            {/* Decorative Background Circles */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-honey-gold/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-green/20 rounded-full"></div>
            <div className="absolute top-1/2 -left-4 w-16 h-16 bg-linen rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
