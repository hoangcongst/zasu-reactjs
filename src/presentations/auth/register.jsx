import React from 'react';
import ErrorNoti from '../layout/error-noti.jsx'
import {connect} from 'react-redux'
import {register} from '../../actions/action'
import {browserHistory, Link} from 'react-router'
import {Grid, Col} from 'react-bootstrap'
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notification: [],
            user: {}
        }
    }

    handleInput(e, v) {
        let user = Object.assign({}, this.state.user)
        user[e.target.name] = e.target.value
        this.setState(Object.assign({}, this.state, {
            user: user
        }))
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', this.state.user.name)
        formData.append('email', this.state.user.email)
        formData.append('phone', this.state.user.phone)
        formData.append('password', this.state.user.password)
        formData.append('password_confirmation', this.state.user.password_confirmation)
        formData.append('type_account', this.state.user.type_account)
        this.props.dispatch(register(formData))
    }

    componentWillReceiveProps(newProps) {
        if (newProps.notification != null)
            this.setState({notification: newProps.notification})
        if (newProps.isLogged === true) {
            browserHistory.push("/home")
        }
    }

    render() {
        return (
            <div className="ui segment">
                {/*<Header />*/}
                <Grid>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div className="app app-header-fixed ">
                            <div className="container w-xxl w-auto-xs">
                                <a href className="navbar-brand block m-t">Zasu</a>
                                <div className="m-b-lg">
                                    {/*<div className="wrapper text-center">*/}
                                    {/*<strong>Sign up to find interesting thing</strong>*/}
                                    {/*</div>*/}
                                    <form name="form" className="form-validation" onSubmit={this.onSubmit.bind(this)}>
                                        <div className="text-danger wrapper text-center">
                                            <ErrorNoti errors={this.state.notification}/>
                                        </div>
                                        <div className="list-group list-group-sm">
                                            <div className="list-group-item">
                                                <input placeholder="Name" className="form-control no-border" name="name"
                                                       onChange={this.handleInput.bind(this)}/>
                                            </div>
                                            <div className="list-group-item">
                                                <input type="email" placeholder="Email"
                                                       className="form-control no-border" name="email"
                                                       onChange={this.handleInput.bind(this)}/>
                                            </div>
                                            <div className="list-group-item">
                                                <input type="text" placeholder="Phone number"
                                                       className="form-control no-border" name="phone"
                                                       onChange={this.handleInput.bind(this)}/>
                                            </div>
                                            <div className="list-group-item">
                                                <input type="password" placeholder="Password"
                                                       className="form-control no-border" name="password"
                                                       onChange={this.handleInput.bind(this)}/>
                                            </div>
                                            <div className="list-group-item">
                                                <input type="password" placeholder="Nhập lại Password"
                                                       className="form-control no-border" name="password_confirmation"
                                                       onChange={this.handleInput.bind(this)}/>
                                            </div>
                                        </div>
                                        <div className="checkbox m-b-md m-t-none">
                                            <label>Bạn là: </label>
                                            <label className="radio-inline i-checks"><input type="radio"
                                                                                            name="type_account"
                                                                                            value="1"
                                                                                            checked={this.state.user.type_account === '1'}
                                                                                            onChange={this.handleInput.bind(this)}/><i></i>Giáo
                                                viên</label>
                                            <label className="radio-inline i-checks"><input type="radio"
                                                                                            name="type_account"
                                                                                            value="0"
                                                                                            checked={this.state.user.type_account === '0'}
                                                                                            onChange={this.handleInput.bind(this)}/><i></i>Học
                                                sinh</label>
                                            <hr />
                                            <label className="i-checks">
                                                <input type="checkbox"/><i /> Agree the <a href>terms and policy</a>
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-lg btn-primary btn-block">Sign up
                                        </button>
                                        <div className="line line-dashed"/>
                                        <p className="text-center">
                                            <small>Already have an account?</small>
                                        </p>
                                        <Link to="/login.html" className="btn btn-lg btn-default btn-block">Sign in</Link>
                                    </form>
                                </div>
                                <div className="text-center">
                                    <p>
                                        <small className="text-muted">Web app framework base on Bootstrap and
                                            AngularJS<br />© 2014
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*<div className="panel panel-default">*/}
                        {/*<div className="panel-heading font-bold">Đăng ký</div>*/}
                        {/*<div className="panel-body">*/}
                        {/*<form onSubmit={this.onSubmit.bind(this)} role="form">*/}
                        {/*<FormGroup inline>*/}
                        {/*<ControlLabel>Bạn là </ControlLabel>*/}
                        {/*<FormControl label='Full name' placeholder='Full name...' name="name"*/}
                        {/*onChange={this.handleInput.bind(this)}/>*/}
                        {/*</FormGroup>*/}
                        {/*<FormGroup inline>*/}
                        {/*<ControlLabel>Email: </ControlLabel>*/}
                        {/*<FormControl label='Email' name="email" placeholder='Email...'*/}
                        {/*onChange={this.handleInput.bind(this)}/>*/}
                        {/*</FormGroup>*/}
                        {/*<FormGroup inline>*/}
                        {/*<ControlLabel>Phone number: </ControlLabel>*/}
                        {/*<FormControl label='Phone number' name='phone' placeholder='Phone Number...'*/}
                        {/*onChange={this.handleInput.bind(this)}/>*/}
                        {/*</FormGroup>*/}
                        {/*<FormGroup inline>*/}
                        {/*<ControlLabel>Password: </ControlLabel>*/}
                        {/*<FormControl label='Password' type="password" name="password"*/}
                        {/*placeholder='Password...'*/}
                        {/*onChange={this.handleInput.bind(this)}/>*/}
                        {/*</FormGroup>*/}
                        {/*<FormGroup inline>*/}
                        {/*<ControlLabel>Nhập lại password: </ControlLabel>*/}
                        {/*<FormControl label='Nhập lại password' type="password"*/}
                        {/*name="password_confirmation"*/}
                        {/*placeholder='Password Confirmation...'*/}
                        {/*onChange={this.handleInput.bind(this)}/>*/}
                        {/*</FormGroup>*/}

                        {/*<FormGroup inline>*/}
                        {/*<ControlLabel>Bạn là:  </ControlLabel>*/}
                        {/*<Radio inline name="type_account" value='1'*/}
                        {/*checked={this.state.user.type_account === '1'}*/}
                        {/*onChange={this.handleInput.bind(this)}>*/}
                        {/*Giáo viên</Radio>*/}
                        {/*<Radio inline name="type_account" value='0'*/}
                        {/*checked={this.state.user.type_account === '0'}*/}
                        {/*onChange={this.handleInput.bind(this)}>*/}
                        {/*Học sinh*/}
                        {/*</Radio>*/}
                        {/*</FormGroup>*/}
                        {/*<Checkbox>I agree to the Terms and Conditions</Checkbox>*/}
                        {/*<Button color="blue">Submit</Button>*/}
                        {/*</form>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </Col>
                </Grid>
            </div>
        );
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        notification: state.auth.notification
    }
})(Register);
