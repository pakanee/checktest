
import PropTypes from "prop-types"
import React from "react"
import ReactDOM from 'react-dom';
import { Table} from 'antd';
import 'antd/dist/antd.css';
const TransectionList =({TransectionData})=>{

    const fetchData = () =>{

    }
    const columns =[
        { 
            title:'วัน/เวลา',
            dataIndex: 'txndate',
            key:'txndate',
            render: text => <a>{text}</a>
        },
        {
            title: 'แคชเชียร์/ร้านค้า',
            dataIndex: 'vendor_id',
            key:'vendor_id',
            render: text => <a>{text}</a>
           
        },
        {
            title: 'รายละเอียด',
            dataIndex: 'slipno',
            key:'slipno',
            //render: text => <a>{text}</a>
            render(text, slipno) {
                return {
                  props: {
                    style: { color: text != "ชำระเงิน" ? "green" : "red" }
                  },
                  children: <div>{text}</div>
                };
              }
        },
        {
            title: 'จำนวนเงิน',
            dataIndex: 'amtuse',
            key:'amtuse',
            //render: text => <a>{text}</a>render(text, slipno) {
                render(text, slipno) {
                    return {
                      props: {
                        style: { color: parseInt(text) > 0 ? "green" : "red" }
                      },
                      children: <div>{text}</div>
                    };
                  }
        },
        {
            title: 'จำนวนเงินคงเหลือ',
            dataIndex: 'amtbal',
            key:'amtbal',
            render: text => <a>{text}</a>
        },
    ]
    return(
        <div>
            <Table   columns={columns} 
               dataSource={TransectionData}  
               className={'ant-table'}
               pagination={false} 
            />
        </div>
    )
}
export default TransectionList;

/* const tableCSS = css({
    margin: '40px 120px',
    backgroundColor: 'white',
    '& table': {
      borderCollapse: 'collapse'
    },
    '& thead > tr > th': {
      backgroundColor: 'darkblue',
      color: 'white',
    },
    '& thead > tr': {
      borderWidth: '2px',
      borderColor: 'yellow',
      borderStyle: 'solid'
    }
  }); */