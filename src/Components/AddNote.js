import axios from 'axios';
import { useState , useRef , useEffect } from "react";
import "./AddNotestyle.css" ;
import './Liststyle.css';
import Note from "./Note";
 
 
function AddNote({getdata}){

  const [inputValue,setInputValue] = useState({}); 
  const textAreaRef = useRef(null);
  const inputRef = useRef(null);
  const [title,setTitle] = useState("") ;
  const [content,setContent] = useState("") ;



  // const handleChange = (e)=>{
  //       setInputValue({ ...inputValue,  [e.target.name]: e.target.value  })
  //       if(e.target.name="title"){ setTitle(e.target.value) }
  //       else{ setContent(e.target.value) ;}
  //       autoResizeTextarea();
  //    }

     const handleChangeTitle = (e)=>{
       setInputValue({ ...inputValue,  [e.target.name]: e.target.value  })
        setTitle(e.target.value)
     }

     const handleChangeContent = (e)=>{
      setInputValue({ ...inputValue,  [e.target.name]: e.target.value  })
      setContent(e.target.value) ;
      autoResizeTextarea(); 
   }
    
   
        
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputValue)
    adddata()
    setTitle("");
    setContent("") ;
  }
    
    const adddata = async() => {
        const response = await axios.post("http://localhost:3002/post",inputValue);
        console.log("response  : ", response);
        getdata()
    }
    
    const autoResizeTextarea = () => {
      const textArea = textAreaRef.current;
      if (textArea) {
        textArea.style.height = 'auto'; // Reset height to auto
        textArea.style.height = textArea.scrollHeight + 'px'; // Set height based on scrollHeight
      }
    };



    return (<>
    <center>
       <div className="divaddnote">
        
         <input type="text" className="addtitle" placeholder="title"  onChange={handleChangeTitle} name="title" 
          ref={inputRef} value={title}></input>

        <textarea  placeholder="Enter a note"  className="addnote"  onChange={handleChangeContent}  name="content" rows="4"
          cols="50"  ref={textAreaRef} value={content} ></textarea>

       <button className="addbtn" onClick={ handleSubmit }  >Add note</button>
    
       </div>

    </center>
    </>) ;
}

export default AddNote ;