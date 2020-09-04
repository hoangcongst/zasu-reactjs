import React from 'react'
import * as API from '../../../api/backend'
export default class Deposit extends React.Component {
    getMerchTxnRef() {
        var d = new Date();
        var n = d.getTime();
        return this.props.user._id + n
    }

    async deposit(vpc_Amount) {
        let data = {
            'vpc_Amount': vpc_Amount,
            'AgainLink': window.location.href,
            'vpc_MerchTxnRef' : this.getMerchTxnRef()
        }
        let response = await API.deposit(this.props.user.api_token, data)
        window.location.href = response.url
    }

    render() {
        return (
            <div className="row no-gutter">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="panel b-a">
                        <div className="panel-heading wrapper-xs bg-primary no-border">
                        </div>
                        <div className="wrapper text-center b-b b-light">
                            <h4 className="text-u-c m-b-none">Start</h4>
                            <h2 className="m-t-none">
                                <span className="text-2x text-lt">50000</span>
                            </h2>
                        </div>
                        <ul className="list-group text-center no-borders m-t-sm">
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Email preview on air
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Spam testing and blocking
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> 100 GB Space
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> 200 user accounts
                            </li>
                            <li className="list-group-item">
                                <i className="icon-close text-danger m-r-xs"/> <span className="text-l-t">Free support for two years</span>
                            </li>
                            <li className="list-group-item">
                                <i className="icon-close text-danger m-r-xs"/> <span className="text-l-t">Free upgrade for one year</span>
                            </li>
                        </ul>
                        <div className="panel-footer text-center">
                            <button onClick={e => this.deposit(50000)} className="btn btn-primary font-bold m">Start your free trial</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="panel b-a">
                        <div className="panel-heading wrapper-xs bg-primary no-border">
                        </div>
                        <div className="wrapper text-center b-b b-light">
                            <h4 className="text-u-c m-b-none">Business</h4>
                            <h2 className="m-t-none">
                                <span className="text-2x text-lt">100000</span>
                            </h2>
                        </div>
                        <ul className="list-group text-center no-borders m-t-sm">
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Email preview on air
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Spam testing and blocking
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> 500 GB Space
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> 1000 user accounts
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Free support for two years
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Free upgrade for one year
                            </li>
                        </ul>
                        <div className="panel-footer text-center">
                            <button onClick={e => this.deposit(100000)} className="btn btn-primary font-bold m">Start your free trial</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="panel b-a m-t-n-md m-b-xl">
                        <div className="panel-heading wrapper-xs bg-warning dker no-border">
                        </div>
                        <div className="wrapper bg-danger text-center m-l-n-xxs m-r-n-xxs">
                            <h4 className="text-u-c m-b-none">Premium</h4>
                            <h2 className="m-t-none">
                                <span className="text-2x text-lt">200000</span>

                            </h2>
                        </div>
                        <ul className="list-group text-center no-borders m-t-sm">
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Email preview on air
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Spam testing and blocking
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> 100 GB Space
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> 200 user accounts
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Free support for two years
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Free upgrade for one year
                            </li>
                        </ul>
                        <div className="panel-footer text-center b-t m-t bg-light lter">
                            <div className="m-t-sm">Recommanded for you</div>
                            <button onClick={e => this.deposit(200000)} className="btn btn-danger font-bold m">Start your free trial</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 hidden-md">
                    <div className="panel b-a">
                        <div className="panel-heading wrapper-xs bg-primary no-border">
                        </div>
                        <div className="wrapper text-center b-b b-light">
                            <h4 className="text-u-c m-b-none">Enterprise</h4>
                            <h2 className="m-t-none">
                                <span className="text-2x text-lt">500000</span>

                            </h2>
                        </div>
                        <ul className="list-group text-center no-borders m-t-sm">
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Email preview on air
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Spam testing and blocking
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Unlimited Space
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Unlimited user accounts
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Free support for two years
                            </li>
                            <li className="list-group-item">
                                <i className="icon-check text-success m-r-xs"/> Free upgrade for one year
                            </li>
                        </ul>
                        <div className="panel-footer text-center">
                            <button onClick={e => this.deposit(500000)} className="btn btn-primary font-bold m">Start your free trial</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}