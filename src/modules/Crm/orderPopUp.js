import { useEffect, useState } from "react"
import TaskMainPart from "./Tasks/TaskMainPart"
import env, { defPay } from "../../env"
import StyleSelect from "../../components/Button/AutoComplete"
import StyleDatePicker from "../../components/Button/DatePicker"
import StyleDatePickerSingle from "../../components/Button/DatePickerSingle"
import TaskUpload from "./Tasks/TaskUpload"
import QuickCartHolder from "../../Order/QuickCart/QuickCartHolder"
import ShowError from "../../components/Modal/ShowError"
import TaskAction from "./Tasks/TaskAction"

function OrderPopUp(props){
    const data =props.data
    const token = props.token
    const [payValue,setPayValue] = useState(defPay)
    const [content,setContent] = useState()
    //console.log(content)
    const [error,setError] = useState({message:'',color:"brown"})
    console.log(error)
    useEffect(()=>{
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({_id:data?data._id:''})
          }
      fetch(env.siteApi + "/panel/faktor/cart-find",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            
            setContent(result)
            if(result.cart&&result.cart[0])
                setPayValue(result.cart[0].payValue)
        },
        (error) => {
          console.log(error);
        })
    },[])
    
    if(!content){
        return
    } else
    return(
    <section className="delete-modal">
        <div className="modal-backdrop show-modal">
            <div className="task-popup fullPopUp">
                <div className="orderModalTitle">
                    {(props.customer&&props.customer[0])?
                        props.customer[0].username:"-"} 
                    <sub>({(props.creator&&props.creator[0])?
                        props.creator[0].username:"-"})</sub>
                    <span> شماره سفارش: {data._id}</span>
                    <div className="address-status">
                         موبایل:  
                    {data.mobile} </div>
                    </div>
                <i className="fa fa-remove closeModal" 
                    onClick={props.close}></i>
                <div className="sharif" style={{padding: "70px 10px 10px"}}>
                    <main className="sharif-order-main">
                        {content?<QuickCartHolder token={token} 
                        user={content.cart&&content.cart.userId}
                        payValue={payValue} setPayValue={setPayValue}
                        cartNo={data?data.orderNo:''} access={props.access}
                        addToCart={(e)=>{}}
                        deleteFromCart={(e)=>{}}
                        regCart={(e)=>{}}
                        cart={content} 
                        setCart={(e)=>setContent(e)}
                        canEdit={content&&content.canEdit}
                        cartDetail={content.orderData?content.orderData:content.cartDetail} 
                        setError={setError}/>:
                        <div>{env.loader}</div>}
                    </main>
                </div>
            {props.access&&props.access==="edit"?
            <div className="crmAction">
                <TaskAction content={content} token={token}
                data={props.data} setBoard={(e)=>props.setBoardArray(e)}
                close={props.close}/>
            </div>:<></>}
            </div>
            
        </div>
        {error&&error.message?
        <ShowError color={error.color} status={"مدیریت"} 
        text={error.message} />:<></>}
    </section>
    )
}
export default OrderPopUp