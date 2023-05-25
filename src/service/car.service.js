import axios from "axios"
import { useEffect } from "react"

export const CarService = {
    async getAll() {
        const response = await axios.get("http://localhost:3001/cars")

        return response.data
    },


    async getById(id) {
        const response = await axios.get(`http://localhost:3001/cars?id=${id}`)

        return response.data[0]
    }
}