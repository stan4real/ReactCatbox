import { useEffect, useState } from 'react'
import CarItem from './car-item/carItem'
import CreateCarForm from './car-form/CreateCarForm.jsx'
import { CarService } from '../../../../service/car.service.js'
import styles from '../Home/Home.module.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

function Home() {
    const [cars, setCars] = useState([])
    
    useEffect(() => {
    const fetchData = async() => {
        const data = await CarService.getAll()
        setCars(data)
    }
    fetchData();
    }, [])
    

    return (
    <>
    
        <div>
            <h1>Catbox</h1>
            <h1>Here you can add a cat or choose from these below</h1>
            <CreateCarForm setCars={setCars} />
            <div className={styles.cardcontainer}>
                {cars.length ? cars.map(car =>(
                    <motion.div key={car.id} whileHover={{ scale: 1.1 }} whileTap={{scale:0.9}}>
                        <Link className= {styles.link} to={`/cat/${car.id}`}>
                <CarItem  car={car} ></CarItem>
                </Link>
                </motion.div>
                ))
                : <p>No catS</p>
                }
            </div>
        </div>

    </>
    )
}

export default Home
