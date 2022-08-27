import React from 'react'
import {Layout} from 'antd';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import QuictData from '../componants/QuictData'
import GraduationYearChart from '../componants/GraduationYearChart';
import QualificationChart from '../componants/QualificationChart';
import {MyHeader,MySider,MyContent} from '../componants/MyLayoutComponant'

const DashbordLayout = () => {
  return (
    <>
        <Layout className='continar'>
            <MyHeader/>
            <MyContent>
            <Row justify="space-around" align="middle">
                <Col span={16}><GraduationYearChart/></Col>
                <Col span={7} offset={1}>
                    <QualificationChart/>
                </Col>
            </Row>
                <QuictData/>
            </MyContent>
            <MySider/>
        </Layout>
    </>
  )
}
export default DashbordLayout


