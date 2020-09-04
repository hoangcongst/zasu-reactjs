import React from 'react'
import {Link} from 'react-router'

const classLevel = [
    "Mẫu giáo",
    "Cấp 1",
    "Cấp 2",
    "Cấp 3"
]

export default class ItemProvider extends React.Component {
    buttonFavor() {
        if (this.props.isLogged) {
            if (this.props.user.isFavorited === false)
                return (<button onClick={e => this.props.changeStatusFavorProvider(this.props.user.id)}
                                className="btn btn-sm btn-icon btn-rounded btn-info m-l"><i className="fa fa-heart"/>
                </button> )
            else
                return (
                    <button onClick={e => this.props.changeStatusFavorProvider(this.props.user.id)}
                            className="btn btn-sm btn-icon btn-rounded btn-default m-l"><i className="fa fa-heart"/>
                    </button>
                )
        }
    }

    linkToInfoProvider() {
        if(this.props.user.target_class === undefined || this.props.user.target_class.length === 0)
            return "/enduser/info-provider/reviews?provider_id=" + this.props.user.id
        return "/enduser/info-provider/reviews?provider_id=" + this.props.user.id + "&target_class=" + this.props.user.target_class._id
    }

    qualification() {
        switch(this.props.user.qualification.type_qualification) {
            case 0:
                return 'Sinh viên'
            case 1:
                return 'Giáo viên cấp 1'
            case 2:
                return 'Giáo viên cấp 2'
            case 3:
                return 'Giáo viên cấp 3'
            case 4:
                return 'Cử nhân'
            case 5:
                return 'Thạc sĩ'
            default:
                return 'Không có thông tin'
        }
    }

    render() {
        return (
            <div className="col-md-3">
                <div className="panel b-a">
                    <div className="panel-heading bg-info dk no-border wrapper-lg">
                        <button className="btn btn-sm btn-icon btn-rounded btn-info pull-right m-r"><i
                            className="fa fa-phone"/></button>
                        {this.buttonFavor()}
                    </div>
                    <Link
                        to={this.linkToInfoProvider()}>
                        <div className="text-center m-b clearfix">
                            <div className="thumb-lg avatar m-t-n-xxl">
                                <img src={this.props.user.avatar} alt="..."
                                     className="b b-3x b-white"/>
                                <div className="h4 font-thin m-t-sm">{this.props.user.name}</div>
                                {this.qualification()}
                            </div>
                        </div>
                    </Link>
                    <div className="padder-v b-t b-light bg-light lter row text-center no-gutter">
                        Đối tượng học sinh:
                        <div className="h4 font-thin m-t-sm">{classLevel[this.props.user.target_class.class_level]}</div>
                    </div>
                    <div className="hbox text-center b-t b-light">
                        <div className="col padder-v text-muted b-r b-light">
                            <span className="h4">{this.props.user.review_point === null ? 'Chưa có đánh giá' : this.props.user.review_point}</span>
                            <div>Điểm đánh giá</div>
                        </div>
                        <div className="col padder-v text-muted">
                            <span className="h4">{this.props.user.target_class.salary} VNĐ</span>
                            <div>Lương</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

