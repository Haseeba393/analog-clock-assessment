import { useWindowDimensions, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import AnalogClock from '../../components/AnalogClock';
import useClock from '../../hooks/useClock';
import useTimezones from '../../hooks/useTimezones';
import Loader from '../../components/Loader';
import ErrorState from '../../components/ErrorState';
import TimezoneSelector from '../../components/TimezoneSelector';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { T_TIMEZONE } from '../../types/timezone';
import {
  getSelectedTimezoneLocal,
  saveSelectedTimezoneLocal,
} from '../../services/db/timezone';

const HomeScreen = () => {
  const { width: mobileWidth, height: mobileHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [timeStamp, setTimeStamp] = useState<number | undefined>(undefined);
  const { loading, error, timezones } = useTimezones();
  const { hours, minutes, seconds } = useClock(timeStamp);
  const [isLandscape, setLandscape] = useState(false);

  console.log('isLandscape', isLandscape);

  useEffect(() => {
    const loadTimezonePreference = async () => {
      const timezone = await getSelectedTimezoneLocal();
      if (timezone) {
        const find = timezones.find(item => item.zoneName === timezone);
        if (find) onTimezoneSelect(find);
      }
    };
    loadTimezonePreference();
  }, []);

  useEffect(() => {
    if (mobileWidth > mobileHeight) setLandscape(true);
    else setLandscape(false);
  }, [mobileWidth, mobileHeight]);

  const onTimezoneSelect = async (timezone: T_TIMEZONE) => {
    setTimeStamp(timezone.timestamp);
    await saveSelectedTimezoneLocal(timezone.zoneName);
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <ErrorState message={error} />
  ) : (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flexDirection: isLandscape ? 'row' : 'column',
        },
      ]}
    >
      <View style={styles.clockView}>
        <AnalogClock
          isLandscape={isLandscape}
          clockSize={200}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </View>
      <View style={styles.listView}>
        <TimezoneSelector
          timezones={timezones}
          onTimezoneSelect={onTimezoneSelect}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
