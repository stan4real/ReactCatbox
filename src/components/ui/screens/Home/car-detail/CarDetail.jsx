import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import CarItem from "../car-item/carItem"
import { CarService } from "../../../../../service/car.service"
import styles from './CarDetail.module.css'
import { motion } from "framer-motion"
const CarDetail = () =>{
    
    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if (!id) return

        const fetchData = async() => {
            const data = await CarService.getById(id)
            setCar(data)
            console.log(data)
        }
        fetchData();
        }, [id])

        if (!car?.name) return <p>Loading...</p>

    return (<div >
            <Link className="btn back" to='/'>Back</Link>
            <div className={styles.container}>
            <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <CarItem className={styles.fl} car={car}></CarItem>
            </motion.div>
            <p >
            {car.desc}
            </p>
            </div>
            </div>)
}
export default CarDetail