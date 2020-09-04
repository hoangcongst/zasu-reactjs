import React from 'react'
import ContactUs from '../../presentations/users/contact-us'
import {connect} from 'react-redux'
class ContactUsContainer extends React.Component {
    render() {
        return (
            <div>
                <ContactUs />
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(ContactUsContainer)