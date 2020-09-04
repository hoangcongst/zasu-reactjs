import React from 'react'
import ReviewInfoProvider from '../../../presentations/enduser/info-provider/reviews'
import {connect} from 'react-redux'
import * as API from '../../../api/backend'

class ReviewContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            contentReview: '',
            scoreReview: 0
        }
    }

    async componentDidMount() {
        let data = await (API.getReviews(this.props.user.api_token, this.props.location.query.provider_id))
        if (data.ownerReview != null)
            this.setState({
                contentReview: data.ownerReview.review_content,
                scoreReview: data.ownerReview.review_point,
                reviews: data.reviewProvider
            })
        else
            this.setState({
                reviews: data.reviewProvider
            })
    }

    async onSubmitReview(e) {
        e.preventDefault()
        if (this.state.scoreReview === 0)
            alert('Bạn chưa cho điểm đánh giá!')
        else if (this.state.contentReview === '')
            alert('Bạn chưa nhập nội dung đánh giá!')
        else {
            let returnData = await (API.createReview(this.props.user.api_token,
                this.props.location.query.provider_id, this.state.contentReview, this.state.scoreReview))
            alert(returnData.message)
            this.setState({
                reviews: returnData.data,
                contentReview: returnData.ownerReview.content,
                scoreReview: returnData.ownerReview.review_point
            })
        }
    }

    contentReviewChange(e) {
        this.setState({
            contentReview: e.target.value
        })
    }

    scoreOnChange(e) {
        this.setState({
            scoreReview: e
        })
    }

    render() {
        return (
            <div>
                <ReviewInfoProvider
                    onSubmitReview={this.onSubmitReview.bind(this)}
                    contentReviewChange={this.contentReviewChange.bind(this)}
                    contentReview={this.state.contentReview}
                    scoreReview={this.state.scoreReview}
                    scoreOnChange={this.scoreOnChange.bind(this)}
                    reviews={this.state.reviews} user={this.props.user}/>
            </div>
        )
    }
}


export default connect((state, props) => {
    return {
        isLogged: state.auth.isLogged,
        user: state.auth.user
    }
})(ReviewContainer)