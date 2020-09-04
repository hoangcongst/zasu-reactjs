import React from 'react'
import ProviderProfile from '../../../presentations/enduser/info-provider/provider-profile'
import {connect} from 'react-redux'
import * as API from '../../../api/backend'

class ProviderProfileContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            provider: {}
        }
    }

    async componentDidMount() {
        let data = await (API.getFullInfoProvider(this.props.user.api_token, this.props.location.query.provider_id))
        this.setState({
            provider: data
        })
    }

    render() {
        return (
            <div>
                <ProviderProfile
                    provider={this.state.provider} />
            </div>
        )
    }
}


export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(ProviderProfileContainer)