import React, { useRef } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';

const renderTime = (name: string, time: number) => {
  return (
    <$CountdownCircle className='time-wrapper'>
      <div className='time'>{time}</div>
      <div>{name}</div>
    </$CountdownCircle>
  );
};

export const Countdown = () => {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = 1660420851; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
  };

  return (
    <$CountdownWrapper>
      <CountdownCircleTimer
        {...timerProps}
        // @ts-ignore:next-line
        colors={[['#FF5F6D'], ['#FFC371']]}
        trailColor="#1D1E28"
        isLinearGradient={true}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime('days', getTimeDays(daysDuration - (elapsedTime ?? 0)))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        // @ts-ignore:next-line
        colors={[['#FF5F6D'], ['#FFC371']]}
        trailColor="#1D1E28"
        isLinearGradient={true}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        // @ts-ignore:next-line
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime('hours', getTimeHours(daySeconds - (elapsedTime ?? 0)))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        // @ts-ignore:next-line
        colors={[['#FF5F6D'], ['#FFC371']]}
        trailColor="#1D1E28"
        isLinearGradient={true}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        // @ts-ignore:next-line
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime(
            'minutes',
            getTimeMinutes(hourSeconds - (elapsedTime ?? 0))
          )
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        // @ts-ignore:next-line
        colors={[['#FF5F6D'], ['#FFC371']]}
        trailColor="#1D1E28"
        isLinearGradient={true}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        // @ts-ignore:next-line
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime('seconds', getTimeSeconds(elapsedTime ?? 0))
        }
      </CountdownCircleTimer>
    </$CountdownWrapper>
  );
};

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

const $CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  max-width: 800px;
`;

const $CountdownCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
  color:white;
  line-height: 1.3;
`;