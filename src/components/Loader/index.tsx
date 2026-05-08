import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { COLORS } from '../../theme/colors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'small'} color={COLORS.primaryText} />
    </View>
  );
};

export default Loader;
