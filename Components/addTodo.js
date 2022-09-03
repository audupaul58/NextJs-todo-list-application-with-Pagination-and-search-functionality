import React from 'react'
import {useForm} from 'react-hook-form'
import styles from './addTodo.module.scss';
import axios from 'axios';


const addTodo = () => {

    const baseUrl = " http://localhost:3005/todos";
    const { register, handleSubmit, reset} = useForm()

    const submitForm = async (data) => {
        console.log(data)
        await axios.post(baseUrl, data).then(res =>{
            if (res.status === 200) {
                console.log(res.data)
                
            }
            reset()
           
        })
    } 



  return (
   <form className={styles.form}  onSubmit={handleSubmit(submitForm)}>
        <input className={styles.input} type="text" name='content' required placeholder='type here' {...register('content')} />
        <input type="checkbox" name="complete" {...register('complete')}/>
        <input type="submit" value="Add Item" name="submit" className={styles.button}/>
   </form>
  )
}

export default addTodo