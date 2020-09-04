import React from 'react'
import LearningRequest from '../../../presentations/provider/manager-learning-request/manager-learning-request'
import * as API from '../../../api/backend'
import {connect} from 'react-redux'
class LearningRequestContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            requests: []
        }
    }

    async componentDidMount() {
        let data = await (API.providerGetLearningRequest(this.props.user.api_token))
        this.setState({
            requests: data.requests
        })
    }

    async acceptRequest(id) {
        let data = await (API.acceptRequest(this.props.user.api_token, id))
        if (data.status === 'success')
            alert(data.message)
    }

    async rejectRequest(id) {
        let data = await (API.rejectRequest(this.props.user.api_token, id))
        if (data.status === 'success')
            alert(data.message)
    }

    render() {
        return (
            <div>
                <LearningRequest acceptRequest={this.acceptRequest.bind(this)}
                                 rejectRequest={this.rejectRequest.bind(this)}
                                 requests={this.state.requests}/>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(LearningRequestContainer)