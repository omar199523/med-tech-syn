import {Layout,Menu} from 'antd';
import 'antd/dist/antd.css';
import './layoutStyle.css';

const { Header, Content,Sider} = Layout;


const NavBarLabel =[
    {key:1,label:"Home"},
    {key:2,label:"About Us"},
    {key:3,label:"Conect Us"},
    {key:4,label:"DashBord"},
    {key:5,label:"Sign In"},
    {key:6,label:"Sign Up"},
]

export const MyHeader = ()=>{
    return (
        <Header className="header">
            <h1>Medical technology syndecat</h1>
            <Menu  mode="horizontal" className='nav-bar' defaultSelectedKeys={['2']} items={NavBarLabel} />
        </Header>
    )
}

const sideBarlabel = [{key:1,label:"Quick overview"},
                    {key:2,label:"New member"},
                    {key:3,label:"Renual member"},
                    {key:4,label:"New member"},
                    {key:5,label:"New member"}]


export const MySider = ()=>{
    return(
        <Sider mode="dark"  className="site-layout-background sider-bar">
            <Menu
            mode="inline"
             defaultSelectedKeys={['1']}
            defaultOpenKeys={['New member']}
            items={sideBarlabel}
            />
        </Sider>
    )
}

export const MyContent = ({children })=>{
    return (
        <Content className="site-layout-background" style={{
            paddingRight:15,
            paddingLeft: 210,
            paddingTop:70,
            margin: 0,
        }}>
             {children }
        </Content>
    )
}