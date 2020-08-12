import React, { useState, createRef } from "react";

// export const TeaserCard = ({
//   title,
//   subtitle,
//   imageUrl,
//   videoUrl,
//   onClick,
// }: {
//   title: string;
//   onClick?: () => void;
//   subtitle?: string;
//   imageUrl?: string;
//   videoUrl?: string;
// }) => {
//   const [test, setTest] = useState("ima test");

//   return <div>{test}</div>;
// };
export const TeaserCard = ({
  title,
  subtitle,
  imageUrl,
  videoUrl,
  onClick,
}: {
  title: string;
  onClick?: () => void;
  subtitle?: string;
  imageUrl?: string;
  videoUrl?: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = createRef();
  const agent = window.navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(agent);
  const isIphone =
    agent.indexOf("iPhone") !== -1 || agent.indexOf("iPod") !== -1;
  const autoPlay = isSafari;

  const canPlay = true;
  const playFunctions = {
    [isIphone ? "onTouchStart" : "onMouseOver"]: (e) => {
      setIsPlaying(true);
    },
    [isIphone ? "onTouchEnd" : "onMouseOut"]: (e) => {
      setIsPlaying(false);
      // e.stopPropagation();
      // e.preventDefault();
    },
  };

  return (
    <div
      className="teaser-card"
      {...(canPlay ? playFunctions : {})}
      onClick={onClick}
    >
      <div
        className="teaser-card-overlay"
        style={isPlaying ? { display: "none" } : {}}
      >
        <h3 className="teaser-card-title">{title}</h3>
        {subtitle && (
          <h4 className="teaser-card-subtitle">
            <i className="i-playlist i-xs i-light" />
            {subtitle}
          </h4>
        )}
      </div>
      <div
        className="teaser-card-background"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
      >
        {videoUrl && isPlaying && (
          <video
            // @ts-ignore
            onPlay={(e) => isPlaying || e.target.pause()}
            autoPlay
            playsInline={true}
            loop
            src={videoUrl}
            muted
            // @ts-ignore
            ref={videoRef}
          />
        )}
      </div>
    </div>
  );
};
