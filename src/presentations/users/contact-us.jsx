import React from 'react'
import Header from '../../presentations/layout/header.jsx'
import {Grid, Row} from 'react-bootstrap'

export default class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <Grid>
                    <Row>
                        <div className="col-md-10 col-md-offset-1">
                            <form id="contact_form">
                                <input id="token" hidden="true" name="_token" defaultValue="{{ csrf_token() }}" />
                                <div className="form-group">
                                    <label htmlFor="name">Your Name:</label>
                                    <input type="text" id="name" className="form-control" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Your Email:</label>
                                    <input type="email" id="email" className="form-control" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message:</label>
                                    <textarea name="message" className="form-control" cols={15} rows={6} required defaultValue={""} />
                                </div>
                                <input id="submit_button" className="btn btn-primary" type="submit" defaultValue="Send message" />
                            </form>
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
}