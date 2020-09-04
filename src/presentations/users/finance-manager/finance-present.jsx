import React from 'react'
import {Link} from 'react-router'
export default class FinancePresent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="app-content-body">
                            <div className="hbox hbox-auto-xs hbox-auto-sm">
                                <div className="col">
                                    <div style={{
                                        background: 'url(http://flatfull.com/themes/angulr/html/img/c4.jpg) center center',
                                        backgroundSize: 'cover'
                                    }}>
                                        <div className="wrapper-lg bg-white-opacity">
                                            <div className="row m-t">
                                                <div className="col-sm-7">
                                                    <a href className="thumb-lg pull-left m-r">
                                                        <img src={this.props.user.avatar} className="img-circle"
                                                             alt=""/>
                                                    </a>
                                                    <div className="clear m-b">
                                                        <div className="m-b m-t-sm">
                                                            <span
                                                                className="h3 text-black">{this.props.user.name}</span>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="col-sm-5">
                                                    <div className="pull-right pull-none-xs text-center">
                                                        <p className="m-b-md inline m">
                                                            <span className="h3 block font-bold">Số dư: {this.props.user.balance}</span>
                                                        </p>
                                                        <br />
                                                        <button onClick={this.props.refreshToken}
                                                                className="btn btn-sm btn-success btn-rounded">Cập nhật số dư
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrapper bg-white b-b">
                                        <ul className="nav nav-pills nav-sm">
                                            <li><Link activeClassName="active"
                                                      to="/finance-manager/deposit.html">Nạp tiền</Link>
                                            </li>
                                            <li><Link activeClassName="active"
                                                      to="/finance-manager/history.html">Lịch sử giao dịch</Link>
                                            </li>
                                        </ul>
                                        <hr />
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}