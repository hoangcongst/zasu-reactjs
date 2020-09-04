import React from 'react';
import {logIn} from '../../actions/action'
import {connect} from 'react-redux'
import {browserHistory, Link} from 'react-router'
import {setRedirect} from '../../actions/action'
import ErrorNoti from '../layout/error-noti.jsx'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            url: '',
            notification: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault()
        if (this.props.redirectUrl === null)
            this.setState({'url': ''})
        else
            this.setState({'url': this.props.redirectUrl})
        this.props.dispatch(logIn({
            'email': this.state.email, 'password': this.state.password,
            'redirectUrl': this.state.url
        }))
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value,
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.notification !== null)
            this.setState({'notification': newProps.notification})
        if (newProps.isLogged === true) {
            if (newProps.redirectUrl === "")
                browserHistory.push("/home")
            else
                browserHistory.push(this.props.redirectUrl)

            this.props.dispatch(setRedirect(null));
        }
    }

    render() {
        return (
            <div className="app app-header-fixed ">
                <div className="container w-xxl w-auto-xs">
                    <a href className="navbar-brand block m-t">Zasu</a>
                    <div className="m-b-lg">
                        <div className="wrapper text-center">
                            <strong>Sign in to get in touch</strong>
                        </div>
                        <form name="form" className="form-validation" onSubmit={this.onSubmit.bind(this)}>
                            <div className="text-danger wrapper text-center">
                                <ErrorNoti errors={this.state.notification}/>
                            </div>
                            <div className="list-group list-group-sm">
                                <div className="list-group-item">
                                    <input type="email" placeholder="Email" className="form-control no-border"
                                           name="email" value={this.state.email} onChange={this.handleInputChange}/>
                                </div>
                                <div className="list-group-item">
                                    <input type="password" placeholder="Password" className="form-control no-border"
                                           name="password" value={this.state.password} onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Log in</button>
                            <div className="text-center m-t m-b"><a >Forgot password?</a></div>
                            <div className="line line-dashed"/>
                            <p className="text-center">
                                <small>Do not have an account?</small>
                            </p>
                            <Link to="/register.html" className="btn btn-lg btn-default btn-block">Create an account</Link>
                        </form>
                    </div>
                    <div className="text-center">
                        <p>
                            <small className="text-muted">Web app framework base on Bootstrap and AngularJS<br />© 2014
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        redirectUrl: state.auth.redirectUrl,
        notification: state.auth.notification
    }
})(Login)
