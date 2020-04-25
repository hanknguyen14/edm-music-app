import { media } from 'styled-bootstrap-grid';
import React, { useRef } from 'react';
import styled from 'styled-components';

const SeekBar = (props) => {
  const { duration, currentTime, onTimeUpdate } = props;
  const barProgressRef = useRef();
  const currentPercentage = (currentTime / duration) * 100;

  const formatDuration = (rawDuration) => {
    return `${Math.floor(rawDuration / 60)}:${`0${Math.floor(
      rawDuration % 60,
    )}`.slice(-2)}`;
  };

  const calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const barProgressStart =
      barProgressRef.current.getBoundingClientRect().left + window.scrollX;
    const barProgressWidth = barProgressRef.current.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barProgressStart;
    const timePerPixel = duration / barProgressWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleTimeDrag = (e) => {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  };

  return (
    <>
      <BarTime>{formatDuration(currentTime)}</BarTime>
      <BarProgress
        role="progressbar"
        tabIndex={0}
        ref={barProgressRef}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <BarProgressKnob currentPercentage={currentPercentage} />
      </BarProgress>
      <BarTime>{formatDuration(duration)}</BarTime>
    </>
  );
};

const BarTime = styled.span`
  font-size: ${(props) => props.theme.fonts.fontSizeSmall};
  color: ${(props) => props.theme.colors.primaryWhite};
  &:first-of-type {
    &::after {
      content: '/';
    }
  }
  ${media.md`
    &:first-of-type {
      &::after {
        content: '';
      }
    }
  `}
`;
const BarProgress = styled.div`
  height: 0.1rem;
  cursor: pointer;
  width: 60%;
  background: ${(props) => props.theme.colors.primaryWhite};
  vertical-align: middle;
  margin: 0 1rem;
  display: none;
  ${media.md`
    display: inline-block;
  `}
  ${media.lg`
    width: 80%;
  `}
`;
const BarProgressKnob = styled.div`
  height: 0.1rem;
  background-color: ${(props) => props.theme.colors.primaryRed};
  width: ${(props) => `${props.currentPercentage}%`};
`;

export default SeekBar;
