import { View, Text, FlatList, Pressable, TextBase } from 'react-native';
import React from 'react';
import { T_TIMEZONE_SELECTOR_PROPS } from './types';
import { styles } from './styles';

const TimezoneSelector: React.FC<T_TIMEZONE_SELECTOR_PROPS> = ({
  timezones,
  onTimezoneSelect,
}) => {
  return (
    <View style={styles.listView}>
      <FlatList
        data={timezones}
        keyExtractor={item => item.zoneName}
        showsVerticalScrollIndicator={false}
        bounces={true}
        contentContainerStyle={{ rowGap: 12 }}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                onTimezoneSelect(item);
              }}
              style={styles.listItem}
            >
              <Text style={styles.listItemTitle}>{item.zoneName}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default TimezoneSelector;
