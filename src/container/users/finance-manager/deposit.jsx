import React from 'react'
import {connect} from 'react-redux'
import Deposit from '../../../presentations/users/finance-manager/deposit'

class DepositContainer extends React.Component {
    render() {
        return (
            <Deposit user={this.props.user}/>
        )
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(DepositContainer)