import { useEffect, useState } from "react"
import errortrans from "../../translate/error"
import ModuleSubPart from "./ModuleSubPart"
import StyleInput from "../../components/Button/Input"
import StyleSelect from "../../components/Button/AutoComplete"
import formtrans from "../../translate/forms"
import env from "../../env"

function FilterPart(props){
  const data = props.data
    
    const [optionSelect,setOptionSelect] = useState()
    const [optionShow,setOptionShow] = useState()
    const [codeSelect,setCodeSelect] = useState()
    
    const addOptions=()=>{
      const body={
        code:codeSelect,
        title:optionSelect,
        filter:data&&data.enTitle
    }
    const postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(body)
      }
      console.log(postOptions)
  fetch(env.siteApi + "/panel/product/add-option",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      setOptionShow()
      setTimeout(()=>setOptionShow(result.data),100)
      setOptionSelect()
      setCodeSelect()
    },
    (error) => {
      console.log(error);
    })
  }
    
    const removeItem=(optionId)=>{
      const body={
        optionId:optionId,
        filterId:data&&data.enTitle
    }
    const postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(body)
      }
      console.log(postOptions)
  fetch(env.siteApi + "/panel/product/remove-option",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      setOptionShow()
      setTimeout(()=>setOptionShow(result.data),100)
      setOptionSelect()
      setCodeSelect()
    },
    (error) => {
      console.log(error);
    })
    }
    useEffect(()=>{
      const body={
        filterId:data&&data.enTitle
    }
    const postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(body)
      }
  fetch(env.siteApi + "/panel/product/list-option",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      setOptionShow(result.data)
    },
    (error) => {
      console.log(error);
    })
    },[data])
    
    return(
        <div className="ps-section">
          <div className="info-box">
            <div className="info-wrapper">

              {/*<StyleSelect title={formtrans.type[props.lang]} direction={props.direction} 
                options={["Input","Select"]}
                defaultValue={data?data.type:''} class={"formInput"}
                action={(e)=>props.setFilterChange(prevState => ({
                  ...prevState,
                  type:e
                }))}/>*/}
              <div className="optionsSelect">
                {optionShow?<><StyleInput title={formtrans.options[props.lang]} direction={props.direction} 
                  value={optionSelect} class={"formInput"}
                  action={(e)=>setOptionSelect(e)}/>
                  <StyleInput title={"code"} direction={props.direction} 
                  value={codeSelect} class={"formInput"}
                  action={(e)=>setCodeSelect(e)}/></>:<></>}
                  <input type="button" value="+" 
                  onClick={addOptions}/>
                  <ul> 
                    {optionShow&&optionShow.map((option,i)=>(
                      <li key={i} className="optionItem">
                        <span>{option.optionTitle}</span>
                        <small>{option.optionCode}</small>
                        <i className="fa fa-remove" onClick={()=>removeItem(option._id)}></i>
                      </li>
                    ))}
                  </ul>
              </div>
              
          </div>
        </div>
      </div>
    )
}
export default FilterPart