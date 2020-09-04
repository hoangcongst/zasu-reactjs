import React from 'react'
import { Link } from 'react-router'
export default class ProviderMenuVertical extends React.Component {
    render() {
        return (
            <div>
                <nav className="navi clearfix ng-scope">
                    <ul className="nav ng-scope">
                        <li className="line dk" />
                        <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span className="ng-scope">Account Manager</span>
                        </li>
                        <li>
                            <Link to="/provider/user-profile.html">
                                <i className="icon-user icon text-success-lter" />
                                <b className="badge bg-success pull-right">30%</b>
                                <span className="font-bold ng-scope">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/provider/manager-learning-request.html">
                                <i className="icon-user icon text-success-lter" />
                                <span className="font-bold ng-scope">Quản lý yêu cầu dạy</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/provider/manager-target-class.html">
                                <i className="glyphicon glyphicon-calendar icon text-info-dker" />
                                <span className="font-bold ng-scope">Quản lý môn học</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/provider/comfirm-provider.html">
                                <i className="glyphicon glyphicon-envelope icon text-info-lter" />
                                <span className="font-bold ng-scope">Chứng nhận</span>
                            </Link>
                        </li>
                    </ul>
                    {/* / list */}
                </nav>
            </div>
        )
    }
}
