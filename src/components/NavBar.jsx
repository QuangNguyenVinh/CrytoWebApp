import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined, BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="medium"/>
                <Typography.Title level={3} className="logo">
                    <Link to="/">CWA</Link>
                    {/* <Button className="menu-control-container"></Button> */}
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item icon={ <HomeOutlined/> }>
                    <Link to="/">Homepage</Link>
                </Menu.Item>
                <Menu.Item icon={ <FundOutlined/> }>
                    <Link to="/cryptocurrencies">Cryptocurrency</Link>
                </Menu.Item>
                <Menu.Item icon={ <BulbOutlined/> }>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavBar
