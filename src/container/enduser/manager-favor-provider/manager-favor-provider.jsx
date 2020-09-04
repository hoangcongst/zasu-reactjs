import React from 'react'
import FavorProvider from '../../../presentations/enduser/manager-favor-provider/manager-favor-provider'
import * as API from '../../../api/backend'
import {connect} from 'react-redux'
class FavorProviderContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    async componentDidMount() {
        let users = await (API.getFavorProvider(this.props.user.api_token))
        this.setState({
            users: users
        })
    }

    async changeStatusFavorProvider(provider_id) {
        let data = await (API.changeStatusFavorProvider(this.props.user.api_token, provider_id))
        if(data.status === 'success') {
            alert(data.message)
            this.setState({
                users: data.data
            })
        }
        else
            alert('Something error!')
    }

    render() {
        return (
            <div>
                <FavorProvider
                    location={this.props.location.pathname}
                    isLogged={this.props.isLogged}
                    changeStatusFavorProvider={this.changeStatusFavorProvider.bind(this)}
                    users={this.state.users} />
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(FavorProviderContainer)