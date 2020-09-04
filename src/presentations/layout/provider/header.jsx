import React from 'react';
import {Link} from 'react-router'
import {Menu, Icon} from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
export default class ProviderHeader extends React.Component {
    state = {
        current: 'mail',
    }

    render() {
        return (
            <div>
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Zasu</Link>
                </div>
                <Menu
                    // onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Link to="/" className="item"><Icon type="mail"/>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Link to="/provider/user-profile.html" className="item"><Icon type="appstore"/>Thông tin cá nhân</Link>
                    </Menu.Item>
                    <Menu.Item key="finance">
                        <Link to="/finance-manager" className="item"><span
                            className="glyphicon glyphicon-log-in"></span>Credit</Link>
                    </Menu.Item>
                    <Menu.Item key="message">
                        <Link to="/message" className="ui item"><span
                            className="glyphicon glyphicon-log-in"></span> Tin nhắn</Link>
                    </Menu.Item>

                    <Menu.Item key="contact-us">
                        <Link to="/contact-us" className="item"><Icon type="appstore"/>Liên hệ</Link>
                    </Menu.Item>

                    <Menu.Item key="alipay">
                        <Link to="/logout.html" className="ui item"><span
                            className="glyphicon glyphicon-log-in"></span> Logout</Link>
                    </Menu.Item>
                </Menu>
            </div >)
    }
}