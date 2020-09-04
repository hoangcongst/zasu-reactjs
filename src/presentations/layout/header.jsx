import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import ProviderHeader from './provider/header'
import EndUserHeader from './enduser/header'
class Header extends React.Component {
    render() {
        if (this.props.isLogged === true) {
            if (this.props.user.type_account === 1)
                return (
                    <ProviderHeader/>
                )
            else
                return (
                    <EndUserHeader/>
                )
        }
        else
            return (
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link to="/" className="navbar-brand">Zasu</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/" className="item">Home</Link></li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/login.html" className="ui item"><span
                                    className="glyphicon glyphicon-log-in"></span> Đăng nhập</Link></li>
                                <li><Link to="/register.html" className="ui item"><span
                                    className="glyphicon glyphicon-log-in"></span> Đăng ký</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div >)
    }
}

Header.defaultProps = {
    isLogged: false
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(Header)