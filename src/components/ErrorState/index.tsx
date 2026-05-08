import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

const ErrorState = ({ message }: { message: string }) => {
  console.log('error', JSON.stringify(message));
  
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message.toString()}</Text>
    </View>
  );
};

export default ErrorState;
