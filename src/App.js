import React, { useEffect, useState } from 'react';
import StatContext from './context/statContext';

import { getSummary } from './api';
import { MainPage, SecondPage } from './components/pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loader, Header } from './components';
import { Container } from 'react-bootstrap';

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

  if (loading) return <Loader />;

  return (
    <>
      <StatContext.Provider value={data}>
        <Router>
          <Header refreshData={() => setLoading(true)} />
          <Container fluid>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/countries" component={SecondPage} />
              <Route path="*" component={MainPage} />
            </Switch>
          </Container>
        </Router>
      </StatContext.Provider>
    </>
  );
}

export default App;
