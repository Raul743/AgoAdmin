import React, {useState, useRef, useEffect} from 'react'
import { useField} from '@unform/core'
import Api from '../../services/api'


export default function Avatar() {
  const {  defaultValue, registerField}= useField('avatar')
const [preview, setPreview] =useState(defaultValue && defaultValue.id)
const [file, setFile] =useState(defaultValue && defaultValue.url)
async   function handlechange(e){
  const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await Api.post('/files', data);
    const { id, url} = response.data;
    setFile(id);
    setPreview(url)
  }
  const ref=useRef();

  useEffect(() => {
 if(ref.current){
   registerField({
     name:"avatar_id",
     ref:ref.current,
     path:"dataset.file"
   })
 }
    
  }, [ref,registerField ])
  return (
    <div className="row justify-content-center">
    <div className="col-lg-3 order-lg-2">
      <div className="card-profile-image">

      <label htmlFor="avatar" style={{cursor:'pointer'}}>
      <img
      
            src={preview || "../../assets/img/theme/team-4.jpg"}
            className="rounded-circle"
           
          />
       <input type="file"
       
       id="avatar"
       accept="image/*"
       data-file={file}
       onChange={handlechange}
       ref={ref}
       style={{display:"none"}}
       />
      </label>
          
      </div>
    </div>
  </div>
  )
}
