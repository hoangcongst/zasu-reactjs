import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux'
import {setRedirect} from '../../actions/action'

class EnsureLoggedInContainer extends React.Component {
    checkLogin() {
        let isLogged = this.props.isLogged == null ? false : this.props.isLogged
        if (isLogged === false) {
            if (this.props.currentURL !== "/logout.html")
                this.props.dispatch(setRedirect(this.props.currentURL));
            browserHistory.push("/login.html")
        }
    }

    componentDidMount() {
        this.checkLogin()
    }

    render() {
        if (this.props.isLogged === true) {
            return this.props.children
        } else {
            return null
        }
    }
}

// EnsureLoggedInContainer.defaultProps = {
//   isLogged: false
// }

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
    return {
        isLogged: state.auth.isLogged,
        currentURL: ownProps.location.pathname,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)