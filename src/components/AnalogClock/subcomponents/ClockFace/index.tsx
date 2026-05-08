import { View } from 'react-native';
import React from 'react';
import { T_CLOCK_FACE } from './types';
import { styles } from './styles';

const ClockFace: React.FC<T_CLOCK_FACE> = ({ clockSize }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: clockSize,
          height: clockSize,
          borderWidth: clockSize * 0.02,
          borderRadius: clockSize / 2,
        },
      ]}
    />
  );
};

export default ClockFace;
