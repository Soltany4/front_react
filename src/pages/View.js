import { Avatar } from 'antd'
import axios from 'axios'
import React from 'react'

const View = ({employee, selectedRowKeys}) => {


  const slashedId = window.location.pathname
  const id = slashedId.split('/')
  const finalId = id[id.length - 1]

  console.log(finalId)

  const res = axios.get(`http://localhost:8080/employee/${finalId}`)

  const emp = employee[finalId - 1]

  return (
    <div>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Avatar</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Age</th>
          <th>Date de naissance</th>
          <th>Salaire</th>
          <th>Adresse</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td>{emp.id}</td>
          <td><Avatar src={<img src={emp.imageUrl} alt="avatar"/>} /></td>
          <td>{emp.firstName}</td>
          <td>{emp.lasName}</td>
          <td>{emp.email}</td>
          <td>{emp.contactNumber}</td>
          <td>{emp.age}</td>
          <td>{emp.dob}</td>
          <td>{emp.salary}</td>
          <td>{emp.address}</td>
        </tr>
          </tbody>
      </table>
    </div>
  )
}

export default View