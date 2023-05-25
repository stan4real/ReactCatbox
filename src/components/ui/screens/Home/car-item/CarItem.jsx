import styles from '../Home.module.css'
import { Link } from 'react-router-dom'
import Price from './Price'

function CarItem ({car}) {
return (
<div key={car.id} className={styles.item}>
            <div
            className={styles.image}
            style={{backgroundImage:`url(${car.image1})`,}}/>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <Price price={car.price}/>
                <p>Tap fo mo info</p>
            </div>
        </div>
) 
}

export default CarItem