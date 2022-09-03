import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import styles from '../Components/addTodo.module.scss';

const Edit = () => {
    const router = useRouter()

    const {edit} = router.query 
    const baseUrl = `http://localhost:3005/todos/${edit}`

    const [todo, setTodo] = useState({
      content:"",
      complete: false
    })

    const [url, setUrl] = useState(baseUrl)

    const {register, handleSubmit, reset} = useForm({defaultValues:todo})

    const submitForm = async(data) => {
      console.log(data)
       await axios.put(url, data).then(res =>{
        console.log(res.data)
        router.push('/')
       })

    } 


    useEffect(()=>{
      axios.get(url).then(res =>{
        setTodo(res.data)
        reset(res.data)
      })
    }, [reset])

  return (
    <form className={styles.form}  onSubmit={handleSubmit(submitForm)}>
        <input className={styles.input} type="text" name='content' placeholder='type here' {...register('content')} />
        <input type="checkbox" name="complete" {...register('complete')}/>
        <input type="submit" value="Add Item" name="submit"/>
   </form>
  )
}

export default Edit