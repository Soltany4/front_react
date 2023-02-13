import React, { useState } from 'react'

const AddEdit = ({employee, setEmployee}) => {


  const [formData, setFormData] = useState({
    avatar: "", firstName: "",
    lastName: "",  email: "", contactNumber: "",
    dob: "", salary: "", address: ""
})

const pathname = window.location.pathname



const handleFormChange = (event) => {
  event.preventDefault()
  const fieldName = event.target.getAttribute('name')
  const fieldValue = event.target.value
  const newFormData = { ...formData}
  newFormData[fieldName] = fieldValue
  setFormData(newFormData)
}
const handleFormSubmit = (event) => {
  event.preventDefault()
  const newEmployee = {
      id: employee[employee.length - 1].id + 1, avatar: formData.imageUrl, firstName: formData.firstName,
      lastName: formData.lastName,  email: formData.email, contactNumber: formData.contactNumber,
      dob: formData.dob, salary: formData.salary, address: formData.address
  }

  if (pathname === '/add') {
    const newEmployees = [...employee, newEmployee ]
    console.log(newEmployee)
    setEmployee(newEmployees)
  } else {
    const id = pathname.split('/')
    const finalId = id[id.length - 1]

    let emp = employee[finalId - 1]
    const newEmployee = {
      id: emp.id, avatar: formData.imageUrl, firstName: formData.firstName,
      lastName: formData.lastName,  email: formData.email, contactNumber: formData.contactNumber,
      dob: formData.dob, salary: formData.salary, address: formData.address
  }
    employee[finalId - 1] = newEmployee
    console.log(newEmployee)
  }
}





  return (
    <div style={{margin: 'auto', padding: 20, alignContent: 'center'}}>
      <form onSubmit={handleFormSubmit} id="form">
                      <input type="text" name="imageUrl" required="required" placeholder="Url d'Avatar" onChange={handleFormChange} id="input"/>
                      <input type="text" name="firstName" required="required" placeholder="Nom" onChange={handleFormChange} id="input"/>
                      <input type="text" name="lastName" required="required" placeholder="Prénom" onChange={handleFormChange} id="input"/>
                      <input type="text" name="email" required="required" placeholder="Email" onChange={handleFormChange} id="input"/>
                      <input type="text" name="contactNumber" required="required" placeholder="Téléphone" onChange={handleFormChange} id="input"/>
                      <input type="text" name="dob" required="required" placeholder="Date de naissance" onChange={handleFormChange} id="input"/>
                      <input type="text" name="salary" required="required" placeholder="Salaire" onChange={handleFormChange} id="input"/>
                      <input type="text" name="address" required="required" placeholder="Adresse" onChange={handleFormChange} id="input"/>
                      <button type='submit'>{(pathname === '/add') ? 'Ajouter' : 'Modifier'}</button>
        </form>




      {/*}
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    autoComplete="off"
  >
    <Form.Item
      label="Avtar URL"
      name="imageUrl"
      rules={[{ required: true, message: 'Entrer votre Avatar URL!' }]}
    >
      <Input onChange={onChangeHandle} />
    </Form.Item>

    <Form.Item
      label="Nom"
      name="firstName"
      rules={[{ required: true, message: 'Entrer votre Nom!' }]}
    >
      <Input onChange={onChangeHandle}/>
    </Form.Item>

    <Form.Item
      label="Pénom"
      name="lastNAme"
      rules={[{ required: true, message: 'Entrer votre Pénom!' }]}
    >
      <Input onChange={onChangeHandle}/>
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Entrer votre Email!' }]}
    >
      <Input onChange={onChangeHandle}/>
    </Form.Item>

    <Form.Item
      label="Téléphone"
      name="contactNumber"
      rules={[{ required: true, message: 'Entrer votre numéro du Téléphone!' }]}
    >
      <Input onChange={onChangeHandle}/>
    </Form.Item>

    <Form.Item
      label="Age"
      name="age"
      rules={[{ required: true, message: 'Entrer votre Age!' }]}
    >
      <Input onChange={onChangeHandle}/>
    </Form.Item>

    <Form.Item
      label="Date de naissance"
      name="dob"
      rules={[{ required: true, message: 'Entrer votre Date de naissance!' }]}
    >
      <Input onChange={onChangeHandle}/>
    </Form.Item>

    <Form.Item
      label="Salaire"
      name="salary"
      rules={[{ required: true, message: 'Entrer votre Salaire!' }]}
    >
      <Input onChange={onChangeHandle}/>
    </Form.Item>

    <Form.Item
      label="Adresse"
      name="addresse"
      rules={[{ required: true, message: 'Entrer votre Adresse!' }]}
    >
      <Input onChange={onChangeHandle}/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>

  </Form>{*/}


    </div>
  )
}

export default AddEdit