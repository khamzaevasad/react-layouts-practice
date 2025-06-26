import { useEffect, useState } from 'react';

export function Usefetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const fetchData = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isPending };
}
