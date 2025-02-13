import { useState } from "react";
import env from "../../../env";

function UploadExcel(props){
    const [url,setUrl] = useState('')
    const resizeFile = (file) =>
        new Promise((resolve,reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
    const uploadFile=async(event)=>{
        const uploadFile = event.target.files[0]
        const tempfile = await resizeFile(uploadFile);
        
          const token=props.token
          const postOptions={
              method:'post',
              headers: { 'Content-Type': 'application/json',
              "x-access-token": token&&token.token,
              "userId":token&&token.userId
          },
              body:JSON.stringify({base64image:tempfile,folderName:"excel",
                  imgName:uploadFile.name.split('.')[0]})
            }
          fetch(env.siteApi + "/panel/user/upload",postOptions)
          .then(res => res.json())
          .then(
              (result) => {
                  //console.log(result)
                  if(result.error){
    
                  }
                  else{
                    setUrl(result.url)
                  }
              },
              (error) => {
                  console.log(error)
              })
    }
    const updateFile=async()=>{
        
          const token=props.token
          const postOptions={
              method:'post',
              headers: { 'Content-Type': 'application/json',
              "x-access-token": token&&token.token,
              "userId":token&&token.userId
          },
              body:JSON.stringify({url:url})
            }
          fetch(env.siteApi + "/panel/product/updateProductExcel",postOptions)
          .then(res => res.json())
          .then(
              (result) => {
                  //console.log(result)
                  if(result.error){
    
                  }
                  else{
                    console.log(result)
                  }
              },
              (error) => {
                  console.log(error)
              })
    }
    return(
        <div className="edit-btn" >
        {url?<input type="button" onClick={updateFile} value="آپدیت"/>
        :<input type="file" onChange={uploadFile}/>}
            <i className="fa-solid fa-refresh"></i>
            <p>بروزرسانی</p>
        </div>
    )
}
export default UploadExcel