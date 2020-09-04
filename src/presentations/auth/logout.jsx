import React from 'react';
import { setStatusLogin } from '../../actions/action'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { persistStore } from 'redux-persist'
class Logout extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            try {
                persistStore(this.props.store, this.props.config).purge()
            } catch (e) {
                console.log('persistStore null in logout.jsx')
            }
            this.props.dispatch(setStatusLogin(false))
            browserHistory.push('/home')
        }, 3000)
    }

    render() {
        return (
            <div>
                Logout Successfully!
      </div>
        );
    }
}

export default connect()(Logout)
