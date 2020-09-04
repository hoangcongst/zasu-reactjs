import React from 'react'
import ItemProvider  from '../../../presentations/users/search-provider/item-provider'

export default class RequestedProvider extends React.Component {
    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        {
                            this.props.users.map((user, i) => {
                                return <ItemProvider key={i} user={user} location={this.props.location}
                                                     isLogged={this.props.isLogged}
                                                     changeStatusFavorProvider={this.props.changeStatusFavorProvider}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}