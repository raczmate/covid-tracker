import React from 'react';
import { DataCard, GlobalCards, LocalCard } from '../../../components';
const MainPage = () => {
  return (
    <>
      <DataCard data={{ Component: GlobalCards, padding: '4rem' }} />
      <DataCard
        data={{
          Component: LocalCard,
          padding: '4rem',
        }}
      />
    </>
  );
};
export default MainPage;
