import { Button, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    const [activeTab, setActiveTab] = useState("Home")
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/") {
            setActiveTab("Home")
        } else if (location.pathname === "/add"){
            setActiveTab("AddUser")
        }
    }, [location.pathname])
    
  return (
    <div style={{marginTop: 25}}>
        <Space size="large">
        <Link to="/">
        <Button onClick={() => setActiveTab("Home")}>Home</Button>
        </Link>
        <Link to="/add">
        <Button onClick={() => setActiveTab("AddUser")}>Ajouter employee</Button>
        </Link>
        </Space>
    </div>
  )
}

export default Header