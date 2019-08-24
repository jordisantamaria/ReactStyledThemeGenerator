import styled, { keyframes } from "styled-components";
import { useState } from "react";

const animation = scale => {
  console.log("scale prop = ", scale);
  return keyframes`
  0% {
    transform: scale(0)
  }
  100% {
    transform: scale(${scale})
  }
`;
};

export const WavesContainer = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: scale(0);
  background-color: rgba(255, 255, 255, 0.2);
  animation: ${props => animation(props.scale)} 0.3s ease-out;
`;

export interface IAnimation {
  start: boolean;
  left: number;
  top: number;
  scale: number;
}

export const useWaves = (): [IAnimation[], ($ref, event) => void] => {
  const [animation, setAnimation] = useState<IAnimation[]>([]);

  const setWaves = ($ref, event) => {
    event.persist();
    const { clientX, clientY } = event;
    console.log(`cursor clicked positon = ${clientX} | ${clientY}`);

    console.log("buttonref = ", $ref);
    const wavesRadius = 10;
    const posX = clientX - $ref.current.offsetLeft - wavesRadius;
    const posY = clientY - $ref.current.offsetTop - wavesRadius;

    console.log(`position clicked = ${posX} | ${posY}`);

    const buttonWidth = $ref.current.offsetWidth;
    const buttonHeight = $ref.current.offsetHeight;
    const extraSpace = buttonWidth / 15;

    console.log(`button size = ${buttonWidth} | ${buttonHeight}`);

    const scale =
      posX < buttonWidth / 2
        ? (buttonWidth - posX - wavesRadius + extraSpace) / wavesRadius
        : (posX + wavesRadius + extraSpace) / wavesRadius;

    setAnimation([
      ...animation,
      {
        start: true,
        left: posX,
        top: posY,
        scale
      }
    ]);
  };

  return [animation, setWaves];
};
