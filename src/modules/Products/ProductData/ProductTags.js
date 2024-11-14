import { useState } from "react";
import StyleInput from "../../../components/Button/Input"
import tabletrans from "../../../translate/tables"
import env from "../../../env";
import StyleSelect from "../../../components/Button/AutoComplete";

function ProductTags(props){
    const content = props.content
    const tagData = content&&content.ListTagData
    const productDetail = content&&content.filter
    const token = props.token
    const [Error, setError] = useState("");
    
    const handleEventNewTag=(e)=>{
      console.log("enter")
      if(e.keyCode === 13){
        var postOptions = {
          method: "post",
          headers: { "Content-Type": "application/json" ,
            "x-access-token": token && token.token,
            userId: token && token.userId},
          body: JSON.stringify({ title: e.target.value ,
            sku:productDetail&&productDetail.sku
          }),
        };
    
        fetch(env.siteApi + "/panel/product/update-tag", postOptions)
          .then((res) => res.json())
          .then(
            (result) => {
              if (result.error) {
                setError({ errorText: result.error, errorColor: "brown" });
                setTimeout(
                  () => setError({ errorText: "", errorColor: "brown" }),
                  3000
                );
              } else {
                setError({ errorText: "تگ پیدا شد", errorColor: "green" });
                props.setLoader(Math.random())
              }
            },
            (error) => {
              console.log(error);
            }
          );
      }
        
    }
    const assignTag=(tag)=>{
      
        var postOptions = {
          method: "post",
          headers: { "Content-Type": "application/json" ,
            "x-access-token": token && token.token,
            userId: token && token.userId},
          body: JSON.stringify({ title: tag ,
            sku:productDetail&&productDetail.sku
          }),
        };
        console.log(postOptions)
        fetch(env.siteApi + "/panel/product/update-product-tag", postOptions)
          .then((res) => res.json())
          .then(
            (result) => {
              if (result.error) {
                setError({ errorText: result.error, errorColor: "brown" });
                setTimeout(
                  () => setError({ errorText: "", errorColor: "brown" }),
                  3000
                );
              } else {
                setError({ errorText: "تگ پیدا شد", errorColor: "green" });
                
              }
            },
            (error) => {
              console.log(error);
            }
          );
      }
        
    
    return(
        <div className="pd-row">
          <div className="row-title">
            <h4>{tabletrans.tags[props.lang]}</h4>
            <p></p>
          </div>
          <div className="row-box">
              <div className="regular-price info-input" style={{position:"relative"}}>
                <StyleSelect  title={tabletrans.tags[props.lang]} direction={props.direction}
                multiple ={true}
                options={tagData.all}
                defaultValue={tagData&&tagData.data}
                label="title"
                 class={"formInput fullWidth"} 
                 action={(e)=>assignTag(e)}/>
                <StyleInput  title={tabletrans.newTag[props.lang]} direction={props.direction}
                 action={()=>{}}
                 class={"formInput"} 
                 doAction={(e)=>handleEventNewTag(e)}/>
                
              </div>
          </div>
        </div>
    )
}
export default ProductTags