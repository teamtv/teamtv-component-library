import React, { useState, createRef } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const TeaserCardAction = ({ children, ...args }) => (
  <DropdownItem className="teaser-card-action" {...args}>
    {children}
  </DropdownItem>
);

export const TeaserCardActions = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="teaser-card-actions">
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
        <DropdownToggle className="teaser-card-action-toggle">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
          </svg>
        </DropdownToggle>
        <DropdownMenu right>{children}</DropdownMenu>
      </Dropdown>
    </div>
  );
};

// export const TeaserCard = TeaserCard;
export const TeaserCard = ({
  title,
  subtitle,
  imageUrl,
  videoUrl,
  onClick,
  children,
}: {
  title: string;
  onClick?: () => void;
  subtitle?: string;
  imageUrl?: string;
  videoUrl?: string;
  children?: React.ReactNode;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = createRef();
  const agent = window.navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(agent);
  const isIphone =
    agent.indexOf("iPhone") !== -1 || agent.indexOf("iPod") !== -1;
  const autoPlay = isSafari;

  const canPlay = !!videoUrl;

  // TODO disable onMouseOver when videoUrl is undefined or there are any actions
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
        {children}
      </div>
      <div
        className="teaser-card-background"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
      >
        {videoUrl && isPlaying && (
          <video
            // @ts-ignore
            onPlay={(e) => isPlaying || e.target.pause()}
            autoPlay={autoPlay}
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
};;;
