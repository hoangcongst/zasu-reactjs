import React from 'react'
import Datetime from 'react-datetime'
import {Grid, Col, Form, FormGroup, Button} from 'react-bootstrap'
import GooglePlacesSuggest from 'react-google-places-suggest'
import GoogleMapLoader from "react-google-maps-loader"

import '../theme/css/location-suggest.css'
import '../theme/css/day-picker-style.css'

import {API_GOOGLE_KEY} from '../../api/config'
import Notification from '../layout/noti'
import ErrorNoti from '../layout/error-noti'
class UserProfile extends React.Component {
    render() {
        const {search} = this.props
        const {googleMaps} = this.props

        return (
            <div>
                <br/>
                <Grid>
                    <Col md={10}>
                        <Notification notifications={this.props.notifications}/>
                        <ErrorNoti errors={this.props.errors}/>
                        <div className="panel panel-default">
                            <div className="panel-heading font-bold">Thông tin cá nhân:</div>
                            <div className="panel-body">
                                <Form role="form" onSubmit={this.props.onSubmit}>
                                    <input label='Full name' className="form-control" value={this.props.user.name}
                                           placeholder='Full name...'
                                           name="name" onChange={this.props.handleChange}/>
                                    <br />
                                    <strong>Email: {this.props.user.email}</strong>
                                    <FormGroup>
                                        <label>Số điện thoại: </label>
                                        <input className="form-control" label='Phone number'
                                               value={this.props.user.phone}
                                               placeholder='Phone Number...'
                                               name="phone" onChange={this.props.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Ngày sinh: {this.props.user.birthday}</label>
                                        <Datetime viewMode='days' dateFormat="YYYY-MM-DD" input={false}
                                                  timeFormat={false} value={this.props.user.birthday}
                                                  onChange={this.props.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Bạn là: </label>
                                        <label className="i-checks">
                                            <input type="radio" name="gender" value='1'
                                                   checked={this.props.user.gender === '1'}
                                                   onChange={this.props.handleChange}/>
                                            <i></i>
                                            Nam
                                        </label>
                                        <label className="i-checks">
                                            <input type="radio" name="gender" value='0'
                                                   checked={this.props.user.gender === '0'}
                                                   onChange={this.props.handleChange}/>
                                            <i></i>
                                            Nữ
                                        </label>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Trường học: </label>
                                        <input label='School' className="form-control" value={this.props.user.school}
                                               placeholder='School...'
                                               name="school" onChange={this.props.handleChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Địa chỉ: </label>
                                        <GooglePlacesSuggest
                                            googleMaps={googleMaps}
                                            onSelectSuggest={this.props.handleSelectSuggest}
                                            search={search}
                                        >
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={search}
                                                placeholder="Search a location"
                                                onChange={this.props.handleSearchChange}
                                            />
                                        </GooglePlacesSuggest>
                                    </FormGroup>

                                    <Button type="submit" color="blue">Cập nhật</Button>
                                </Form>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading font-bold">Thay đổi password:</div>
                            <div className="panel-body">
                                <Form role="form" onSubmit={this.props.changePassword}>
                                    <FormGroup>
                                        <label>Password: </label>
                                        <input className="form-control" type="password" name="password"
                                               placeholder='Password...'/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Nhập lại Password: </label>
                                        <input className="form-control" label='Nhập lại password' type="password"
                                               name="password_confirmation"
                                               placeholder='Password Confirmation...'/>
                                    </FormGroup>
                                    <Button type="submit" color="blue">Change Password</Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Grid>
            </div>
        )
    }
}

export default GoogleMapLoader(UserProfile, {
    libraries: ["places"],
    key: API_GOOGLE_KEY,
})
