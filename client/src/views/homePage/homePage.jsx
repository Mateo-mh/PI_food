import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../redux/actions'; // Importar el action creator correctamente
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes()); // Asegurémonos de que la acción se esté despachando correctamente
  }, [dispatch]);

  return (
    <>
      <h1>Esta es la vista de home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
