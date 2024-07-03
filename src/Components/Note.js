import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import axios from 'axios';
import "./Notestyle.css"

function Note({obj, getdata}) {

    const deletedata = async () => {
        const response = await  axios.delete("http://localhost:3002/del", { data: { title: obj.title }, headers: { "Authorization": "***" } });
         getdata();
        console.log("response array : ", response.data);
      }

      const putdata = async (id) => {
        const response = await  axios.put("http://localhost:3002/put/"+id,  {
            title: "update1",
            content:"The record had been successfully updated" 
        });
          console.log("response data: ", response.data);
          getdata();
      }
    

    return (<>
        <div  className="notecontainer">
          
        <h3> {obj.title} </h3> 
        <p> {obj.content} </p>

        <div className="deleditbtns">
       <button className="deletebtn" onClick={deletedata }> <MdDelete size = '3x'/> </button>
      
        <button className="editbtn" onClick={() =>putdata(obj.title) }> <MdModeEdit size = '3x'/></button>  
        </div>
     </div>
     
    </>)

}

export default Note ;


{/* <center>
        <div  className="notecontainer">
     <div className="Itemnote">
        <div> <h3>title {obj.title} </h3> </div>
        <div><p>content {obj.content} </p></div>
     </div>
     <div className="deletebtn" > <button className="deletebtn" onClick={deletedata }>
     <MdDelete size = '3x'/></button>  
        </div>
        <div className="deletebtn" > <button className="editbtn" onClick={() =>putdata(obj.title) }>
        <MdModeEdit size = '3x'/></button>  
        </div>
     </div>
     </center> */}