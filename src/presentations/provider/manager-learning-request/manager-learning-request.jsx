import React from 'react'
import ItemLearningRequest  from './item-learning-request'

export default class LearningRequest extends React.Component {
    render() {
        return (
            <div>
                <br />
                <div className="row">
                    {
                        this.props.requests.map((item, i) => {
                            return <ItemLearningRequest key={i} item={item}
                                                        acceptRequest={this.props.acceptRequest}
                                                        rejectRequest={this.props.rejectRequest}/>
                        })
                    }
                </div>
            </div>
        )
    }
}