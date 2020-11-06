import React, {
  Component
} from 'react';
import {
  Layout,
  Menu
} from 'antd';

const {
  Header,
  Sider,
  Content
} = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsed={this.state.collapsed}>
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              Nav 1
            </Menu.Item>
            <Menu.Item key="2">
              Nav 2
            </Menu.Item>
            <Menu.Item key="3">
              Nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header></Header>
          <Content style={{
            margin: '24px 16px',
            padding:24,
            minHeight:280
          }}>
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Home;
