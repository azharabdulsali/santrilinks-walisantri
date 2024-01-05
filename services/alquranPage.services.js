export const getPageQuran = async (page) => {
    try {
      const response = await axios.get(` http://api.alquran.cloud/v1/page/${page}/quran-uthmani`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };