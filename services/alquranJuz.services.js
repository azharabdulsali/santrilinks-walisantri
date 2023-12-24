import axios from "axios";

export const getJuzQuran = async (juz, offset) => {
    try {
      const response = await axios.get(`https://api.alquran.cloud/v1/juz/${juz}/quran-uthmani?offset=${offset}&limit=10`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };