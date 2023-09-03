import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const fetchRequest = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetchRequest.json();
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      setError(true);
    }
  }, []);

  return { data, loading, error };
};

export default useFetch;
