import React from 'react'
import millify from 'millify';
import { Typography, Col, Row, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Homepage = () => {

    // const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = 10;//data?.data?.stats;

    return (
        <React.Fragment>
            <Title level={2} className="heading">Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total cryptocurrencies" value="10"/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="10" /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="10" /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value="10" /></Col>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value="10" /></Col>
                <Col span={12}><Statistic title="Total Markets" value="10"/></Col>
            </Row>
        </React.Fragment>
    
    )
}

export default Homepage
