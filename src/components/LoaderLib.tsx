import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

// Define types for animation parameters
interface AnimParams {
  w: number[];
  h: number[];
  mt: number[];
  ml: number[];
}

// Define types for StyledBox props
interface StyledBoxProps {
  boxParams: {
    w: number;
    h: number;
    mt: number;
    ml: number;
  };
  sizeBorderRadius: number;
  sizeBorderThickness: number;
  borderColor: string;
  animParams: AnimParams;
}

// Define types for StyledContainer props
interface StyledContainerProps {
  sizeContainer: number;
  background: string;
}

// Define types for XlviLoader props
interface XlviLoaderProps {
  className?: string;
  background?: string;
  boxColors?: string | string[];
  size?: string;
  desktopSize?: string;
  mobileSize?: string;
}

// Create animation keyframes function
const createAnim = (animParams: AnimParams): any => keyframes`
  0% {
      width: ${animParams.w[0]}px;
      height: ${animParams.h[0]}px;
      margin-top: ${animParams.mt[0]}px;
      margin-left: ${animParams.ml[0]}px;
  }
  12.5% {
      width: ${animParams.w[1]}px;
      height: ${animParams.h[1]}px;
      margin-top: ${animParams.mt[1]}px;
      margin-left: ${animParams.ml[1]}px;
  }
  25% {
      width: ${animParams.w[2]}px;
      height: ${animParams.h[2]}px;
      margin-top: ${animParams.mt[2]}px;
      margin-left: ${animParams.ml[2]}px;
  }
  37.5% {
      width: ${animParams.w[3]}px;
      height: ${animParams.h[3]}px;
      margin-top: ${animParams.mt[3]}px;
      margin-left: ${animParams.ml[3]}px;
  }
  50% {
      width: ${animParams.w[4]}px;
      height: ${animParams.h[4]}px;
      margin-top: ${animParams.mt[4]}px;
      margin-left: ${animParams.ml[4]}px;
  }
  62.5% {
      width: ${animParams.w[5]}px;
      height: ${animParams.h[5]}px;
      margin-top: ${animParams.mt[5]}px;
      margin-left: ${animParams.ml[5]}px;
  }
  75% {
      width: ${animParams.w[6]}px;
      height: ${animParams.h[6]}px;
      margin-top: ${animParams.mt[6]}px;
      margin-left: ${animParams.ml[6]}px;
  }
  87.5% {
      width: ${animParams.w[7]}px;
      height: ${animParams.h[7]}px;
      margin-top: ${animParams.mt[7]}px;
      margin-left: ${animParams.ml[7]}px;
  }
  100% {
      width: ${animParams.w[8]}px;
      height: ${animParams.h[8]}px;
      margin-top: ${animParams.mt[8]}px;
      margin-left: ${animParams.ml[8]}px;
  }
`;

// Styled container
const StyledContainer = styled.div<StyledContainerProps>`
  background: ${(props) => props.background};
  width: ${(props) => props.sizeContainer}px;
  height: ${(props) => props.sizeContainer}px;
  padding: 20px;
`;

// Styled box with animation
const StyledBox = styled.div<StyledBoxProps>`
  box-sizing: border-box;
  position: absolute;
  display: block;
  border-radius: ${(props) => props.sizeBorderRadius}px;
  border: ${(props) => props.sizeBorderThickness}px solid ${(props) => props.borderColor};
  width: ${(props) => props.boxParams.w}px;
  height: ${(props) => props.boxParams.h}px;
  margin-top: ${(props) => props.boxParams.mt}px;
  margin-left: ${(props) => props.boxParams.ml}px;
  animation: ${(props) => createAnim(props.animParams)} 3s 0s forwards cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
`;

const XlviLoader: React.FC<XlviLoaderProps> = ({
  className = 'xlviloader',
  background = 'transparent',
  boxColors = ['#333'],
  size = '64px',
  desktopSize = '',
  mobileSize = '',
}) => {
  // Fill colors to have at least 3 colors
  let colorsToFill: string[] = [];
  if (typeof boxColors === 'string') {
    colorsToFill = Array(3).fill(boxColors || '#333');
  } else if (Array.isArray(boxColors)) {
    if (boxColors.length === 0) {
      colorsToFill = Array(3).fill('#333');
    } else {
      colorsToFill = boxColors.slice(0, 3);
      while (colorsToFill.length < 3) {
        colorsToFill.push(boxColors[boxColors.length - 1]);
      }
    }
  }

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  let sizeFound = 0.0;
  if (isDesktopOrLaptop) {
    sizeFound = desktopSize ? parseFloat(desktopSize) : parseFloat(size) * 2;
  } else if (isTabletOrMobile) {
    sizeFound = mobileSize ? parseFloat(mobileSize) : parseFloat(size);
  }

  const sizePassed = parseFloat(sizeFound.toString());
  const sizeContainer = (sizePassed * 112) / 64;
  const sizeBorderRadius = (sizePassed * 24) / 64;
  const sizeBorderThickness = (sizePassed * 16) / 64;

  const box1Params = {
    w: (sizePassed * 112) / 64,
    h: (sizePassed * 48) / 64,
    mt: (sizePassed * 64) / 64,
    ml: 0,
  };

  const box2Params = {
    w: (sizePassed * 48) / 64,
    h: (sizePassed * 48) / 64,
    mt: 0,
    ml: 0,
  };

  const box3Params = {
    w: (sizePassed * 48) / 64,
    h: (sizePassed * 48) / 64,
    mt: 0,
    ml: (sizePassed * 64) / 64,
  };

  const anim1Params: AnimParams = {
    w: [
      (sizePassed * 112) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    h: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 112) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    mt: [
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      0,
      0,
      0,
    ],
    ml: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  const anim2Params: AnimParams = {
    w: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 112) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    h: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    mt: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ml: [
      0,
      0,
      0,
      0,
      0,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
    ],
  };

  const anim3Params: AnimParams = {
    w: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 112) / 64,
    ],
    h: [
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 112) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
      (sizePassed * 48) / 64,
    ],
    mt: [
      0,
      0,
      0,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
    ],
    ml: [
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      (sizePassed * 64) / 64,
      0,
    ],
  };

  return (
    <StyledContainer
      sizeContainer={sizeContainer}
      background={background}
      className={className}
    >
      <StyledBox
        boxParams={box1Params}
        sizeBorderRadius={sizeBorderRadius}
        sizeBorderThickness={sizeBorderThickness}
        borderColor={colorsToFill[0]}
        animParams={anim1Params}
        className="box1"
      />
      <StyledBox
        boxParams={box2Params}
        sizeBorderRadius={sizeBorderRadius}
        sizeBorderThickness={sizeBorderThickness}
        borderColor={colorsToFill[1]}
        animParams={anim2Params}
        className="box2"
      />
      <StyledBox
        boxParams={box3Params}
        sizeBorderRadius={sizeBorderRadius}
        sizeBorderThickness={sizeBorderThickness}
        borderColor={colorsToFill[2]}
        animParams={anim3Params}
        className="box3"
      />
    </StyledContainer>
  );
};

export default XlviLoader;
