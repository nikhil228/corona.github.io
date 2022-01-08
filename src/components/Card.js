import React from "react";
import {Card,Col,Row} from "antd";
import CountUp from "react-countup"; 
import download from '../images/download.jfif';

const cardComponent=({totalGlobalCase})=>{
    return(
        <>
        {totalGlobalCase.map((item,index) => (
            <div className="col-lg-12">
                <div key={index} style={{padding:"5px",background:"#ececec"}}>
                    <Row gutter={1}>
                        <Col span={8}>
                            <Card
                            title="TotalGlobalCase"
                            bordered={false}
                            style={{width:400,height:215}}
                            >
                            <img 
                            src={download} 
                            alt="confirmed" 
                            style={{height:"50px"}} 
                            />
                            <br/>
                            <i className="fas fa-arrow-up"/>
                            <CountUp
                            className="count"
                            start={0}
                            end={item.deltaconfirmed}
                            duration={2.75}
                            separator=","
                            />
                            <h2 className="text-warning">{item.confirmed}</h2>
                            </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                            title="Active"
                            bordered={false}
                            style={{width:400,height:215}}
                            >
                            <span style={{color:"mediumslateblue"}}>
                                <i className="fab fa-creative-commons-sampling fa-3x" />
                            </span>
                            <br/>
                            <h2 className="text-info">{item.active}</h2>
                            </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                            title="Recovered"
                            bordered={false}
                            style={{width:400,height:215}}
                            >
                            <span style={{color:"green"}}>
                                <i className="fab fa-creative-commons-sampling fa-3x" />
                            </span>
                            <br/>
                            <i className="fas fa-arrow-up" />
                            <CountUp
                            className="count"
                            start={0}
                            end={item.deltarecovered}
                            duration={2.75}
                            separator=","
                            />
                            <h2 className="text-success">{item.recovered}</h2>
                            </Card>
                            </Col>
                    </Row>
                </div>
            </div>
        ))}
        </>
    )

}

export default cardComponent;