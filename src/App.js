import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";
import {
  Button
 
} from 'antd'
import Logoimage from "../src/logo.png"
import { UserOutlined } from '@ant-design/icons';
import TransectionList from "./transectionlist";
import axios from 'axios';

const pesonalLaouy ={
  wrapperCol:{
    offset:8,
    span:16,
  }
}
const App =()=> {
  const [componentSize,  setComponentSize] = useState('large');
  const [cardNo,setCardNo] = useState(null);
  const[employeeData, setemployeeData] = useState(null);
  const[empname, setempname] = useState(null);
  const[card_no, setcard_no] = useState(null);
  const[Department, setDepartment] = useState(null);
  const[MedicalExpensesUse, setMedicalExpensesUse] = useState(null); 
  const[PersonalLeave, setPersonalLeave] = useState(null); 
  const[RemainingLeave, setRemainingLeave] = useState(null); 
  const[amtCanuse, setamtCanuse] = useState(null); 
  const[TransectionData, setTransectionData] = useState(null); 


 
   async function  handleSubmit(){
    // axios.get({
    //   method:"GET",
    //   url: "http://192.168.1.211:80/ISAPI/Security/userCheck",
    //   headers: {
    //     'Authorization': 'Digest',
    //     'Content-Type': 'application/xml',
    //   },
    //   auth:{
    //     username:"admin",
    //     password:"Abc12345"
    //   },
   
    // })
    // .then(response => {
    //   console.log("response Axios",response)
    // })
    // .catch(error => {
    //   console.log("response  error",error)
    // })
     await axios.get("http://192.168.1.211:80/ISAPI/Security/userCheck",
      { 
        auth: {
          username: "admin",
          password:"password"
        },
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded'
          Accept: 'application/xml'
        },
      })
      .then(response => {
          console.log("response Axios heade",response.headers)
        })
        .catch(error => {
          console.log("response  error",error)
        });
  };

  return (
        <div >
          
            <div style={{ display: "flex", marginBottom: 2}}>
                <img
                  src={Logoimage} 
                  className="img-logo"
                />
               
                  <Button  type="primary"    
                    value="Submit" 
                    onClick={handleSubmit}
                    > Login face </Button>
              
            
                <h1 className="h3" >  {amtCanuse == null? "0.00" : amtCanuse} BAHT </h1>
            </div> 
            <div style={{ display: "flex", marginBottom: 4 }} >
              <h1 >รหัส</h1>       
              <input placeholder="Personal ID" 
                value={card_no}
                className="input-personalid"
              />  
                <h2 >หมายเลขบัตร</h2>      
                <input placeholder="Card Number" 
                    value={card_no}
                    className="input-cardno"
                />  
                <h2 >ชื่อ-นามสกุล</h2>      
                <input placeholder="Name-LastName" 
                  value={empname}
                  className="input-cardno"
                />
            </div>
                <div style={{ display: "flex", marginBottom: 4 }} >
                  <div>
                    <h1 className="h2"> แผนก/สังกัด</h1>
                    <input  value={Department== null? 'Department' :Department} 
                      className="input-center2"
                    />
                  </div>
                  <div>
                    <h1 className="h2">สวัสดิการค่ารักษาพยาบาล</h1> 
                    <input 
                      value={MedicalExpensesUse== null? 'Medical expenses' :MedicalExpensesUse}
                      className="input-center2" 
                     />
                  </div>
                  <div>
                    <h1 className="h2">วันลาที่ใช้ไป</h1>
                    <input 
                      value={PersonalLeave== null? 'Leave spent' :PersonalLeave}
                      className="input-center2" 
                    />
                  </div>
                  <div>
                    <h1 className="h2">วันลาคงเหลือ</h1>
                    <input 
                      value={RemainingLeave== null? 'Remaining leave' :RemainingLeave}
                      className="input-center2"   
                    />
                  </div>
                </div>
                <div>
                  <TransectionList/>
                </div>
            </div>
           
      
  );
};

export default App;
