import React from 'react'
import ProviderMenuVertical from '../../presentations/layout/provider/provider-menu-vertial.jsx'
import {Grid, Row, Col} from 'react-bootstrap'
import Header from '../../presentations/layout/header.jsx'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
class ProviderMiddleware extends React.Component {
    componentWillMount() {
        if (this.props.user.type_account === 0)
            browserHistory.push('/home')
    }

    render() {
        if (this.props.user.type_account === 1)
            return (
                <div>
                    <Header></Header>
                    <Grid>
                        <Row>
                            <Col md={2}>
                                <ProviderMenuVertical />
                            </Col>
                            <Col md={10}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Grid>
                </div>
            )
        else {
            return null
        }
    }
}


ProviderMiddleware.defaultProps = {
    user: {
        type_account: 0
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(ProviderMiddleware)