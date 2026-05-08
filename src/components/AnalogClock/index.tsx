import { View, Text } from 'react-native';
import React from 'react';
import { T_ANALOG_CLOCK } from './types';
import { styles } from './styles';
import ClockFace from './subcomponents/ClockFace';
import ClockHand from './subcomponents/ClockHand';
import { calculateClockHandAngle } from '../../utils/clock';
import ClockNumbers from './subcomponents/ClockNumbers';

const AnalogClock: React.FC<T_ANALOG_CLOCK> = ({
  hours,
  minutes,
  seconds,
  clockSize = 100,
  isLandscape,
}) => {
  return (
    <>
      <ClockFace clockSize={200} />
      <ClockHand
        isLandscape={isLandscape}
        hand="hour"
        angle={calculateClockHandAngle('hour', hours, minutes, seconds)}
        clockSize={clockSize}
      />
      <ClockHand
        isLandscape={isLandscape}
        hand="minute"
        angle={calculateClockHandAngle('minute', hours, minutes, seconds)}
        clockSize={clockSize}
      />
      <ClockHand
        isLandscape={isLandscape}
        hand="second"
        angle={calculateClockHandAngle('second', hours, minutes, seconds)}
        clockSize={clockSize}
      />
      <ClockNumbers clockSize={clockSize} />
    </>
  );
};

export default AnalogClock;
