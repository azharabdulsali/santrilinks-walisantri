import axios from "axios";

export const getQuran = async () => {
    try {
      const response = await axios.get('https://quran-api.santrikoding.com/api/surah');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };