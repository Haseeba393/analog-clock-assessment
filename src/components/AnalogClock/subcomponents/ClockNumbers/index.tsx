import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import { T_CLOCK_NUMBERS } from './types';
import { styles } from './styles';

const ClockNumbers: React.FC<T_CLOCK_NUMBERS> = ({ clockSize }) => {
  const numbers = useMemo(() => {
    return Array.from({ length: 12 }, (_, index) => index + 1);
  }, []);

  return numbers.map((number, index) => {
    const angle = (number - 3) * (Math.PI / 6);
    const radius = clockSize * 0.42;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return (
      <View
        key={number.toString()}
        style={[
          styles.container,
          {
            transform: [{ translateX: x }, { translateY: y }],
          },
        ]}
      >
        <Text style={[styles.number, { fontSize: clockSize * 0.08 }]}>
          {number}
        </Text>
      </View>
    );
  });
};

export default ClockNumbers;
