import React, { useEffect, useState } from 'react';
import { getSummary } from './api';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      await getSummary().then((data) => {
        if (data.error) {
          throw Error('Sikertelen api hívás');
        } else {
          setData(data);
          console.log(data);
        }
        setLoading(false);
      });
    };
    if (!data || loading)
      setTimeout(() => {
        fetchStats();
      }, 1500);
  }, [loading]);

  return <div></div>;
}

export default App;
