import { Avatar, Button, Space, Table } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = ({employee, setEmployee}) => {

  let showable = {}
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const handleDelete = async (e) => {
    /*
    let rows = employee.slice()
    rows = rows.filter(row => row.id !== selectedRowKeys)
    setEmployee(rows)*/
    e.preventDefault()
    const res = axios.get(`http://localhost:8080/employee/delete/${selectedRowKeys}`)
    console.log(res)
    window.location.reload(true)
  }

  const columns = [
    { dataIndex: 'id', title: 'ID', key: 'id'},
    {
      dataIndex: 'imageUrl',
      title: 'Avatar',
      key: 'imageUrl',
      render: (_, record) => (
        <Avatar size='large' src={<img src={record.imageUrl} alt="avatar"/>}/>
      )       
    },
    {
      dataIndex: 'firstName',
      title: 'Nom',
    },
    {
      dataIndex: 'lastName',
      title: 'Prénom',

    },
    {
      dataIndex: 'email',
      title: 'Email',

    },
    {
      dataIndex: 'contactNumber',
      title: 'Téléphone',
    },
    {
      dataIndex: 'age',
      title: 'Age',
    },
    {
      dataIndex: 'dob',
      title: 'Date de naissance',
    },
    {
      dataIndex: 'salary',
      title: 'Salaire',
    },
    {
      dataIndex: 'address',
      title: 'Adresse',
    },
    {
      dataIndex: 'actions',
      title: 'Actions',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/update/${record.id}`}><Button type='primary'>Modifier</Button></Link>
          <Button danger type='primary' onClick={handleDelete}>Supprimer</Button>
          <Link to={`/view/${record.id}`} showable={showable} selectedrowkeys={selectedRowKeys}><Button>Détails</Button></Link>
        </Space>)    
    }

    ]


  return (
    <div><h2>List des employee</h2>
    
    <Table columns={columns} dataSource={employee} rowKey={record => record.id}
    rowSelection={{
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
          setSelectedRowKeys(selectedRowKeys);
      }
  }}/>

    </div>
  )
}

export default Home