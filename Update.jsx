import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import design from "./design.module.css"

const Update = () => {

    let bookId=useParams()
    let [name, setName] = useState("")
    let [author, setAuthor] = useState("")
    let [cost, setCost] = useState("")
    let navigate=useNavigate()


    let getName = (e) => {
        setName(e.target.value)
    }
    let getAuthor = (e) => {
        setAuthor(e.target.value)
    }
    let getCost = (e) => {
        setCost(e.target.value)
    }
useEffect(()=>{
    axios.get(`http://localhost:5001/Libraries/${bookId.id}`)
    .then((resp) => {
        setName(resp.data.BookName)
        setAuthor(resp.data.AuthorName)
        setCost(resp.data.BookCost)
    })
    .catch(()=>{
        console.log("Error");
    })

},[])
let Update=(e)=>{
e.preventDefault()
let payload = {
    BookName: name,
    AuthorName: author,
    BookCost: cost
}
axios.put(`http://localhost:5001/Libraries/${bookId.id}`,payload)
.then((resp)=>{console.log(resp);})
.catch(()=>{console.log("Error");})
navigate("/Library")

}
  return (
     <div  id={design.main}>
        <h1>Update The Details :</h1>
     <form action="">
         <table>
             <tr>
                 <td> <label className={design.A} htmlFor="">Book Name : </label></td>
                 <td>  <input className={design.a} type="text" value={name} onChange={getName}  /></td>
             </tr>
             <tr>
                 <td><label className={design.A} htmlFor="">Book Author :</label></td>
                 <td><input className={design.a} type="text" value={author} onChange={getAuthor} /></td>
             </tr>
             <tr>
                 <td><label className={design.A} htmlFor="">Book Cost :</label></td>
                 <td><input className={design.a} type="text" value={cost} onChange={getCost} /></td>
             </tr>
             <tr>
                 <td colSpan={2}><button className={design.button} onClick={Update}>Submit</button></td>
             </tr>
         </table>
     
     </form>
 </div>
    
  )
}

export default Update
