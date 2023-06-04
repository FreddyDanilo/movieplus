import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export const useFetch = (url, clear) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const json = await (await fetch(url + apiKey)).json();
        const { results, genres } = json;

        if (clear) {
          if (results) setData([...results]);
          return;
        }

        if (results) setData([...data, ...results])
        else if (genres) setData([...genres])

        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("erro");
      setLoading(false);
    }
  }, [url]);

  return { data, loading };
};
