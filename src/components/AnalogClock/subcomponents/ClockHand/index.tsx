import { View } from 'react-native';
import React from 'react';
import { T_CLOCK_HAND } from './types';
import { styles } from './styles';
import { COLORS } from '../../../../theme/colors';

const ClockHand: React.FC<T_CLOCK_HAND> = ({
  clockSize,
  hand,
  angle,
  isLandscape,
}) => {
  const width = clockSize * 0.02;
  const borderRadius = width / 2;

  const getHandStyle = () => {
    switch (hand) {
      case 'hour':
        return {
          backgroundColor: COLORS.hourHand,
          height: clockSize * 0.25,
        };
      case 'minute':
        return {
          backgroundColor: COLORS.minuteHand,
          height: clockSize * 0.3,
        };
      case 'second':
        return {
          backgroundColor: COLORS.secondHand,
          height: clockSize * 0.35,
        };
    }
  };

  return (
    <View
      style={[
        isLandscape ? styles.landscapeContainer : styles.container,
        {
          ...getHandStyle(),
          borderRadius,
          width,
          transform: [{ rotate: `${angle}deg` }],
        },
      ]}
    />
  );
};

export default ClockHand;
