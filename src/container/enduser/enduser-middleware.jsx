import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Header from '../../presentations/layout/header.jsx'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'

class EndUserMiddleware extends React.Component {
    render() {
        if (this.props.user.type_account === 0)
            return (
                <div>
                    <Header></Header>
                    <Grid>
                        <Row>
                            <Col md={12}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Grid>
                </div>
            )
        else
        {
            browserHistory.push('/home')
        }
    }
}


EndUserMiddleware.defaultProps = {
    user: {
        type_account: 0
    }
}

export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(EndUserMiddleware)