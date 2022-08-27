import React, { useEffect } from 'react'
import {Table} from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {getAllMember} from '../features/Member/memberAcition'

const QuictData = () => {
    const {members} = useSelector(state => state.members);
    const disbatsh = useDispatch();
    const columns =[
        {
            title: 'num',
            dataIndex: 'num',
            key:'num'
        },
        {
            title: 'Member Number',
            dataIndex: 'memberNum ',
            key:'memberNum '
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key:'name'
        },
        {
            title: 'Personal Id',
            dataIndex: 'personalId ',
            key:'personalId '
        },
        
    ]
    useEffect(()=>{
        disbatsh(getAllMember())
    },[disbatsh])
    console.log(members)
  return (
    <div>
        <Table dataSource={members} columns={columns} />;
    </div>
  )
}

export default QuictData