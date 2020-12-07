import React, { useEffect, useState } from 'react';
import StatContext from './context/statContext';
import { getSummary, getCountry } from './api';
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
        }
        setLoading(false);
      });
    };
    if (!data || loading)
      setTimeout(() => {
        fetchStats();
      }, 1500);
  }, [loading]);
  useEffect(() => {
    const fetchLocation = async () => {
      await getCountry().then((data) => {
        if (!data.error) {
          localStorage.setItem('preferredCountry', data.country);
        } else {
          console.log('Sikertelen lokáció lekérés...');
        }
      });
    };

    if (!localStorage.getItem('preferredCountry')) fetchLocation();
  }, []);
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
