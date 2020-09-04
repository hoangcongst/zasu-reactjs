import React from 'react'
import {Link} from 'react-router'
import { Rate } from 'antd';
export default class ReviewInfoProvider extends React.Component {
    render() {
        return (
            <div className="padder">
                <div className="streamline b-l b-info m-l-lg m-b padder-v">
                    <div><a className="pull-left thumb-sm avatar m-l-n-md"><img src={this.props.user.avatar}
                                                                                className="img-circle"
                                                                                alt="..."/></a>
                        <div className="m-l-lg m-b-lg">
                            <div className="m-b-xs"><a href="true" className="h4">{this.props.user.name}</a><span
                                className="text-muted m-l-sm pull-right"></span></div>
                            <div>
                                <div className="panel panel-default m-t-md m-b-n-sm pos-rlt">
                                    <form>
                                                    <textarea className="form-control no-border" rows={3}
                                                              value={this.props.contentReview}
                                                              placeholder="Your review..."
                                                              onChange={this.props.contentReviewChange}/>
                                    </form>
                                    <div className="panel-footer bg-light lter">
                                        <button onClick={this.props.onSubmitReview}
                                                className="btn btn-info pull-right btn-sm">Review
                                        </button>
                                        <ul className="nav nav-pills nav-sm">
                                            <li><strong>Score:</strong> <Rate value={this.props.scoreReview}
                                                                              onChange={this.props.scoreOnChange}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        this.props.reviews.map((item, i) => {
                            return (
                                <div key={i}>
                                    <a className="pull-left thumb-sm avatar m-l-n-md"><img src={item.reviewer_avatar}
                                                                                           alt="..."/></a>
                                    <div className="m-l-lg panel b-a">
                                        <div className="panel-heading pos-rlt b-b b-light"><span
                                            className="arrow left"/><Link to="">{item.reviewer_name}</Link> <Rate disabled defaultValue={item.review_point} />
                                            <span className="text-muted m-l-sm pull-right">{item.created_at}</span>
                                        </div>
                                        <div className="panel-body">
                                            <div>{item.review_content}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

