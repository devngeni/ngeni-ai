import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

interface WordFlickProps {
  words: string[];
  speed?: number;
  skipDelay?: number;
}

const blink = keyframes`
  0% {
    border-right-color: #C5C5C5;
  }
  50% {
    border-right-color: transparent;
  }
  100% {
    border-right-color: #C5C5C5;
  }
`;

const StyledWord = styled.span`
  display: inline-flex;
  padding-right: 3px;
  position: relative;
  z-index: 1;
  background: linear-gradient(269.94deg, #4575df -7.83%, #3ebeb8 103.13%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  &::before {
    z-index: -1;
    width: 100%;
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    height: 60%;
    border-right: 5px solid #c5c5c5;
    transform: translateY(-50%);
    animation: ${blink} 1s steps(1) infinite;
  }

  @media (min-width: 768px) {
    &::before {
      animation: "none";
    }
  }
`;

const WordFlick: React.FC<WordFlickProps> = ({
  words,
  speed = 200,
  skipDelay = 15,
}) => {
  const [part, setPart] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let i = 0;
    let offset = 0;
    let forwards = true;
    let skipCount = 0;

    const wordFlickInterval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skipCount;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= words.length) {
            i = 0;
          }
        }
      }
      setPart(words[i].substring(0, offset));
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
    }, speed);

    return () => clearInterval(wordFlickInterval);
  }, [words, speed, skipDelay]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const flickerStyles = css`
    font-size: ;
  `;

  return <StyledWord>{part}</StyledWord>;
};

export default WordFlick;
