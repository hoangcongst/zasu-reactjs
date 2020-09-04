import React from 'react'
import * as API from '../../api/backend'
import {connect} from 'react-redux'
import Moment from 'moment'
import UserProfile from '../../presentations/users/user-profile.jsx'

class UserProfileContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            notifications: [],
            errors: [],
            user: {
                name: '',
                phone: '',
                birthday: '',
                gender: 1,
                email: '',
                school: '',
                address: ''
            },
            address: '',
            locations: []
        }
    }

    handleSearchChange = (e) => {
        this.setState({search: e.target.value})
    }

    handleSelectSuggest = (suggest, coordinate) => {
        let user = Object.assign({}, this.state.user)
        user['address'] = suggest.description
        user['latitude'] = coordinate.latitude + '-' + coordinate.longitude
        this.setState({search: suggest.description, selectedCoordinate: coordinate, user:user})
    }

    async onSubmit(e) {
        e.preventDefault()
        let result = await (API.updateUserInfomation(this.props.user.api_token, this.state.user))
        if (result.status === 'success')
            this.setState({
                notifications: [
                    result.message
                ],
                errors: []
            })
        else
            this.setState({
                notifications: [],
                errors: result.message
            })
    }

    changePassword(e) {
        e.preventDefault()
    }

    async componentDidMount() {
        let user = await (API.getOwnerUser(this.props.user.api_token))
        this.setState(Object.assign({}, this.state, {user: user, search: user.address}))
    }

    handleChange(e) {
        let user = Object.assign({}, this.state.user)
        if (!(e instanceof Moment)) {
            user[e.target.name] = e.target.value
        } else
            user.birthday = e.year() + '-' + e.format("MM") + '-' + e.format("DD")
        this.setState(Object.assign({}, this.state, {
            user: user
        }))
    }

    render() {
        return (
            <div>
                <UserProfile user={this.state.user} notifications={this.state.notifications}
                             errors={this.state.errors} search={this.state.search}
                             changePassword={this.changePassword.bind(this)}
                             handleSelectSuggest={this.handleSelectSuggest.bind(this)}
                             handleSearchChange={this.handleSearchChange.bind(this)}
                             handleChange={this.handleChange.bind(this)} onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        user: state.auth.user
    }
})(UserProfileContainer)

