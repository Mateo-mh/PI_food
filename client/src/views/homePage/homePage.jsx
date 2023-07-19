import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../redux/actions'; // Importar el action creator correctamente
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
// import Pagination from "./pagination"
// import FilterBar from "../../components/FilterBar/FilterBar"

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes()); // Asegurémonos de que la acción se esté despachando correctamente
  }, [dispatch]);

  return (
    <>
        <h1>Esta es la vista de home</h1>
        <div>
            <CardsContainer />
        </div>

    </>
  );
};

export default Home;
