import React, { useState } from 'react'
import useSWR, {mutate} from 'swr';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.scss'
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import AddTodo from '../Components/addTodo';
import {useRouter}  from 'next/router';
import Layout from '../Components/Layout';


const baseUrl = "http://localhost:3005/todos"

const Home = () => {

  const [pageNum, setPageNum] = useState(1)
  const [limit, setLimit] = useState(5)

  const [search, setSearch] = useState('')

  const baseUrl = `http://localhost:3005/todos?_limit=${limit}&_page=${pageNum}`

  const { data, error } = useSWR(baseUrl, { refreshInterval: 10000 });

  if (!data) return <div>Loading...</div>;

  if (error) return <div>Error</div>;
 
  const previousPage = ()=>{
    setPageNum(pageNum - 1);
  }
 
  const nextPage = ()=>{
    setPageNum(pageNum + 1);
  }
  
  return (
    <>
      <Layout/>
      <div className={styles.container}>
        <form>
            <input type="text" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}} />
        </form>
          <AddTodo />
          <Row >
            <Col className={`text-center text-white ${styles.content}`}>
            <table className={`table ${styles.table}`}>
                   <tbody>
                        {data.filter((todo)=>{
                          return search.toLowerCase() === ''? todo: todo.content.toLowerCase().includes(search)
                        }).map((item, index) =>{
                          return <Post item={item} key={index}/>
                        })}
                  </tbody> 
            </table>
            </Col>
          </Row>
      <div className={styles.prevBtn}>
        <Button className={styles.button} onClick={previousPage} disabled={pageNum === 1}>Prev</Button>
        <Button className={styles.button} onClick={nextPage} disabled={data.length < 5}>Next</Button>
        
    </div>
    
    </div>
    </>
  )
}

export default Home







export const Post = ({item}) => {

    const router = useRouter()
    const [complete, setComplete] = useState(false)

    const handleComplete = async () =>{
       setComplete(!complete)
  }

  const handleDelete = async (id) =>{
    await axios.delete(`${baseUrl}/${id}`)
    mutate(baseUrl)
  }


  const handleUpdate = async (id) =>{
     console.log(id)
     router.push(`/${id}`)
     
  }

  return(

    <tr className={styles.tableRow}>
    <th onClick={()=>{handleComplete(item.id)}} scope="row">{item.complete ? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}</th>
    <td>{item.content}</td>
    <td onClick={() =>handleUpdate(item.id)}><FaEdit/></td>
    <td onClick={() =>handleDelete(item.id)}><MdDelete/></td>
  </tr>  
  )
}

