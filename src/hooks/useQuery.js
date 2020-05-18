import { useEffect, useState } from 'react';

const useQuery = (func, deps = []) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchIt = async() => {
    try {
      setLoading(true);
      const res = await func();
      setResults(res);
    } catch(e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIt();
  }, deps);

  return {
    results,
    loading,
    error
  };
};

export default useQuery;