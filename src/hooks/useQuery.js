import { useEffect, useState } from 'react';

const useQuery = (func, deps = []) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchIt = async() => {
    try {
      setLoading(true);
      const res = await func();
      setResult(res);
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
    result,
    loading,
    error
  };
};

export default useQuery;