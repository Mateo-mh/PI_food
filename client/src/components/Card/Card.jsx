const Card = (props) => {
    return (
      <div>
        <img src={props.image} alt={props.name} />
        <p>Nombre: {props.name}</p>
        <p>Resumen: {props.summary}</p>
        <p>healthScore: {props.healthScore}</p>
        <p>Tipo de Dieta: {props.diets.join(', ')}</p>
      </div>
    );
  };
  
  export default Card;
  