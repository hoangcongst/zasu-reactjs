import React from 'react'
export default class ProviderProfile extends React.Component {
    render() {
        return (
            <div className="panel panel-default" draggable="true">
                <div className="panel-heading">
                    Thông tin cá nhân
                </div>
                <ul className="list-group alt">
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-body">
                                <div>Họ tên</div>
                                <div className="text-muted">{this.props.provider.name}</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-body">
                                <div>Email</div>
                                <div className="text-muted">Đã được ẩn</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-body">
                                <div>Số điện thoại</div>
                                <div className="text-muted">Đã được ẩn</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-body">
                                <div>Ngày sinh</div>
                                <div className="text-muted">{this.props.provider.birthday}</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-body">
                                <div>Giới tính</div>
                                <div className="text-muted">{this.props.provider.gender}</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-body">
                                <div>Địa chỉ</div>
                                <div className="text-muted">{this.props.provider.address_street}</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-body">
                                <div>Giới thiệu</div>
                                <div className="text-muted">{this.props.provider.about_me}</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-body">
                                <div>Trạng thái</div>
                                <div className="text-muted">{this.props.provider.status}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

