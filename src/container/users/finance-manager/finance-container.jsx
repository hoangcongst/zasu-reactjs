import React from 'react'
import {connect} from 'react-redux'
import FinancePresent from '../../../presentations/users/finance-manager/finance-present'
import Header from '../../../presentations/layout/header'
import {refreshBalance} from '../../../actions/action'

class FinanceContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(refreshBalance(this.props.user.api_token))
    }

    refreshToken() {
        this.props.dispatch(refreshBalance(this.props.user.api_token))
    }

    render() {
        return (
            <div>
                <Header />
                <FinancePresent user={this.props.user} children={this.props.children}
                                refreshToken={this.props.refreshToken}/>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(FinanceContainer)