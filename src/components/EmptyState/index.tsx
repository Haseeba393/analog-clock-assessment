import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyMessasge}>{`No data found`}</Text>
    </View>
  );
};

export default EmptyState;
