import React, { useEffect, useState } from 'react';
import { getSummary } from './api';
import { MainPage, SecondPage } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          // console.log(data);
        }
        setLoading(false);
      });
    };
    if (!data || loading)
      setTimeout(() => {
        fetchStats();
      }, 1500);
  }, [loading]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/countries" component={SecondPage}></Route>
          <Route path="*" component={MainPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
