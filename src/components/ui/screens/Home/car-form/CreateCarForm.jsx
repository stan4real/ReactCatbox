import React from 'react'
import styles from './CreateCarForm.module.css'
import { useState } from 'react'

const ClearData = {
  name:"",
  price:"",
  image:""
}

const CreateCarForm = ({setCars}) => {
  const [data, setData]= useState({ClearData})
  
  
  const HandleChange = e =>{
    e.preventDefault()
    setCars(prev => [{id: prev.length+1, ...data,},...prev])
  
  setData(ClearData)
  }
  
  return (
    <form className={styles.form}>
        <input placeholder='Name'
        onChange={e => setData(prev => ({...prev, name: e.target.value}))}
        value={data.name}/>
        <br/>
        <input placeholder='Price'
        onChange={e => setData(prev => ({...prev, price:e.target.value}))}
        value = {data.price}/>
        <br/>
        <input placeholder='Image'
        onChange ={e => setData(prev => ({...prev, image:e.target.value}))}
        value={data.image}/>
        <br/>
        <input placeholder='Description'
        onChange ={e => setData(prev => ({...prev, image:e.target.value}))}
        value={data.desc}/>
        <br/>
        <button className='btn' onClick={ e => HandleChange(e)}>Create</button>
    </form>)
}

export default CreateCarForm