import React,{useState, useEffect} from 'react'
import './styles/index.css'
import {Row, Col,Button,ButtonGroup} from 'reactstrap'
import Profile from '../../assets/images/users/2.jpg'



function NotificationList({data, changeStreen = ()=> {}}){
    const [newItem, setNewItem] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    useEffect(()=>{
        setNewItem(data)
    },[])
    let selec = []
   
    function onSelectItems(id, checked){
        if(checked){
            selec.push(id)
        }
        if(!checked){
            selec = selec.filter(t => t != id)
        }
    }

    function onDeleteItems(){
        if(selec){
            let data = newItem
            selec.map(item=> {data  = data.filter(t=> t.id != item)})
            setNewItem(data)
            console.log(newItem)
        }
    }
    return (
        <>
        
            <div className="dark-options">
                <ButtonGroup>
                    <Button  onClick={()=> onDeleteItems()} className="btn dark" outline color="secondary">
                        <i className="mdi mdi-delete"></i>
                    </Button>
                    <Button className="btn dark" outline color="secondary"><i className="mdi mdi-inbox-arrow-down"></i></Button>
                    
                </ButtonGroup>

                <ButtonGroup>
                    <Button  className="btn dark" outline color="secondary">
                        <i className="icon-arrow-left"></i>
                    </Button>
                    <Button className="btn dark" outline color="secondary"><i className="icon-arrow-right"></i></Button>
                    
                </ButtonGroup>
            </div>
            {newItem.map((item)=>(
                <div className="dark-notification-list" onDoubleClick={()=> changeStreen("/read")}>
                    <div className="dark-list-item1">
                        <input type="checkbox"  onChange={e=> onSelectItems(item.id, e.currentTarget.checked)}/>
                    </div>
                    <div className="dark-list-item2">
                        <img src={Profile} width={40} height={40} alt="User Profile"/>
                        {item.name}
                    </div>
                    <div className="dark-list-item3">
                        {item.content}
                    </div>
                    <div className="dark-list-item4"><i class="fa fa-paperclip"></i></div>
                    <div className="dark-list-item5">{item.time}</div>
                </div>
            ))}
        </>
    )
}
export default NotificationList