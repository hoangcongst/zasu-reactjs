import React from 'react'
import {connect} from 'react-redux'
import History from '../../../presentations/users/finance-manager/history'
import * as API from '../../../api/backend'
class HistoryContainer extends React.Component {
    state = {
        items: []
    }

    async componentDidMount() {
        let items = await (API.historyTrade(this.props.user.api_token))
        this.setState({
            items: items
        })
    }
    render() {
        return (
            <History user={this.props.user} items={this.state.items}/>
        )
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(HistoryContainer)