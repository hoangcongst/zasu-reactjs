import React from 'react'
import InfoProvider from '../../../presentations/enduser/info-provider/info-provider'
import {connect} from 'react-redux'
import * as API from '../../../api/backend'

class InfoProviderContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            provider: {
                list_target_class: [],
                target_class: {}
            },
        }
    }

    async componentDidMount() {
        let data = await (API.getInfoProvider(this.props.user.api_token, this.props.location.query.provider_id,
            this.props.location.query.target_class))
        this.setState({
            provider: data
        })
    }

    async requestProvider(target_class) {
        let data = await (API.requestProvider(this.props.user.api_token, this.state.provider.id, target_class))
        if (data.status === 'success') {
            alert(data.message)
            let newProvider = Object.assign({}, this.state.provider)
            newProvider.target_class.isRequested = data.isRequested

            this.setState({
                provider: newProvider
            })
        }
        else
            alert(data.message)
    }

    render() {
        return (
            <div>
                <InfoProvider
                    requestProvider={this.requestProvider.bind(this)}
                    provider={this.state.provider}
                    children={this.props.children}/>
            </div>
        )
    }
}


export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(InfoProviderContainer)