import Note from "./Note";
import axios from 'axios';
import { useEffect, useState } from "react";
import './Liststyle.css';
import AddNote from "./AddNote";


function List(){

    const [Item,setItem] = useState([]); 

    useEffect(() => {
        getdata();
    }, []);

    const getdata = async () => {
          console.log("hello");
          const response = await axios.get("http://localhost:3002/get");
          console.log("response  : ", response);
          console.log("response array : ", response.data);
          console.log("response data : ", response.data[0]);
          setItem(response.data);
      }


    return(<>
        <center>
        <AddNote getdata={getdata}/>
         </center>
         <div className="ListContainer">
         {  
            Item.map(
                (item) => <Note obj={item} getdata={getdata} />
             )
         }
         </div>
        
    </>)
}

export default List ;
