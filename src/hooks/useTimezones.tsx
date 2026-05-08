import { useEffect, useState } from 'react';
import { T_TIMEZONE } from '../types/timezone';
import NetInfo from '@react-native-community/netinfo';
import {
  getTimezonesFromLocal,
  saveTimezonesInLocal,
} from '../services/db/timezone';
import { getTimezoneList } from '../services/api';

const useTimezones = () => {
  const [timezones, setTimezones] = useState<T_TIMEZONE[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTimezones = async () => {
    try {
      setError(null);
      setLoading(true);
      
      // Get Local Stored Timezones
      const cachedTimezones = await getTimezonesFromLocal();

      if (cachedTimezones.length) {
        setTimezones(cachedTimezones);
        return;
      }

      // Check Internet Connection
      const isConnected = await NetInfo.fetch();
      if (!isConnected) {
        setError(
          `You don't have internet connection and also any cache timezone.\nPlease check your internet connection and try again.`,
        );
        return;
      }

      //   Fetching From API and saving in variables as well local store
      const response = await getTimezoneList();
      await saveTimezonesInLocal(response.zones);
      setTimezones(response.zones);
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimezones();
  }, []);

  return {
    timezones,
    loading,
    error,
  };
};

export default useTimezones;
