import { useHistory } from 'react-router-dom';
import style from './Landing.module.less';

const Landing = () => {
    const history = useHistory();

    const handleEnter = () => {
      history.push('/home'); // Redirige a la Home Page
    };

    return(
        <div className={style.landingContainer}>
            <button onClick={handleEnter}>Ingresar</button>
        </div>


    )
};

export default Landing;
