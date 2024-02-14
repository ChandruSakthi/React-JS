import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import design from "./design.module.css"

const Libraries = () => {
    let [data, setData] = useState([])
    let [reload,setReload]=useState(false)
    useEffect(() => {
        axios.get("http://localhost:5001/Libraries")
            .then((resp) => { setData(resp.data) })
            .catch(() => {
                console.log("Error");
                setReload(false)
            })
    }, [reload])
    let Delete = (id) => {
        axios.delete(`http://localhost:5001/Libraries/${id}`)
            .then(() => { console.log("Success"); })
            .catch(() => { console.log("Error"); })
            alert("Confirm To Delete...!!!")
            setReload(true)
    }
    return (
        <div  id={design.all}>
            {
                data.map((book) => {
                    return (
                      
                           <div  id={design.many}>
                           <h1> Book Id :{book.id}</h1>
                            <p>Book Name: {book.BookName}</p>
                            <p>Author Name :{book.AuthorName}</p>
                            <p>Book Cost:{book.BookCost}</p>
                            <Link to={`/Update/${book.id}`} className={design.b}><button  className={design.btn}>Update</button></Link>
                            <button onClick={()=>{Delete(book.id)}} className={design.btn2}>Delete</button>
            

                        </div>
                        // <div id={design.main}>
                        //     <form action="">
                        //         <table>
                        //             <tr>
                        //                 <td><label className={design.A} htmlFor="">Book ID : </label></td>
                        //                 <td><input className={design.a} type="text" value={book.id}/></td>
                        //             </tr>
                        //             <tr>
                        //                 <td> <label className={design.A} htmlFor="">Book Name : </label></td>
                        //                 <td>  <input className={design.a} type="text" value={book.BookName}/></td>
                        //             </tr>
                        //             <tr>
                        //                 <td><label className={design.A} htmlFor="">Book Author :</label></td>
                        //                 <td><input className={design.a} type="text" value={book.AuthorName}  /></td>
                        //             </tr>
                        //             <tr>
                        //                 <td><label className={design.A} htmlFor="">Book Cost :</label></td>
                        //                 <td><input className={design.a} type="text" value={book.BookCost} /></td>
                        //             </tr>
                        //             <tr>
                        //                 <td ><Link to={`/Update/${book.id}`}><button>Update</button></Link></td>
                        //                 <td><button onClick={()=>{Delete(book.id)}}>Delete</button></td>
                        //             </tr>
                        //         </table>

                        //     </form>
                        // </div>


                    )
                })
            }
        </div>
    )
}

export default Libraries
