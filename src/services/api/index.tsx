import axios from 'axios';
import { T_TIMEZONE_DETAILS_API, T_TIMEZONE_LIST_API } from '../../types/api';

const apiClient = axios.create({
  baseURL: 'https://api.timezonedb.com/v2.1',
  timeoutErrorMessage: `Request is timed out.`,
  params: {
    key: 'Y99I4QVBB3XY',
    format: 'json',
  },
});

export const getTimezoneList = async (): Promise<T_TIMEZONE_LIST_API> => {
  try {
    const response = await apiClient({
      method: 'GET',
      url: `/list-time-zone`,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTimezoneDetails = async (
  zoneName: string,
): Promise<T_TIMEZONE_DETAILS_API> => {
  try {
    const response = await apiClient.get('/get-time-zone', {
      params: {
        by: 'zone',
        zone: zoneName,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
