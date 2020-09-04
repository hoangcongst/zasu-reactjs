import React from 'react'
import ListProvider from '../../../presentations/users/search-provider/list-provider.jsx'
import * as API from '../../../api/backend'
import {connect} from 'react-redux'
class ListProviderContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        let users = [];
        if (this.props.isLogged === true)
            users = await (API.searchProvider(this.props.params.subject, this.props.location.query.lat,  this.props.location.query.class_level, this.props.user.api_token))
        else
            users = await (API.searchProvider(this.props.params.subject, this.props.location.query.lat, this.props.location.query.class_level))
        this.setState({
            users: users
        })
    }

    async changeStatusFavorProvider(provider_id) {
        let data = await (API.changeStatusFavorProvider(this.props.user.api_token, provider_id))
        if (data.status === 'success')
            alert(data.message)
        else
            alert('Something error!')
    }

    render() {
        return (
            <div>
                <ListProvider
                    location={this.props.location.pathname}
                    isLogged={this.props.isLogged}
                    changeStatusFavorProvider={this.changeStatusFavorProvider.bind(this)}
                    users={this.state.users}/>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(ListProviderContainer)