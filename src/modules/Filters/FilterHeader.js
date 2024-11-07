import { useEffect, useState } from "react"
import StyleInput from "../../components/Button/Input"
import env from "../../env"
import errortrans from "../../translate/error"
import StyleSelect from "../../components/Button/AutoComplete"
import formtrans from "../../translate/forms"

function FilterHeader(props){
  const content=props.content
  const [listCategory,setListCategory]=useState()
  useEffect(()=>{
    var postOptions={
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({})
    }
   
fetch(env.siteApi + "/panel/product/list-category",postOptions)
.then(res => res.json())
.then(
  (result) => {
    if(result.error){
    }
      else{
          setListCategory(result.filter)
      }
      
  },
  (error) => {
    console.log(error);
  }
)
  },[])
    return(
      <div className="access-header">
        <div className="ps-title">
          <div className="p-wrapper">
            <StyleInput title={errortrans.filterName[props.lang]} direction={props.direction} 
              defaultValue={content.title||''} class={"formInput"}
              action={(e)=>props.setFilterChange(prevState => ({
                ...prevState,
                title:e
              }))}/>
            {/*<p>by<span>ZohoSprints</span>on<span>09/Nov/2023</span></p>*/}
          </div>
          
          <StyleInput title={errortrans.filterCode[props.lang]} direction={props.direction} 
              defaultValue={content.enTitle||''} class={"formInput"}
              action={(e)=>props.setFilterChange(prevState => ({
                ...prevState,
                enTitle:e
              }))}/>
              
              <StyleSelect title={formtrans.category[props.lang]} direction={props.direction} 
                options={listCategory||[]}
                label={"title"||null}
                defaultValue={content?content.category:''} class={"formInput"}
                action={(e)=>props.setFilterChange(prevState => ({
                  ...prevState,
                  category:e
              }))}/>
        </div>
        
      </div>
    )
}
export default FilterHeader