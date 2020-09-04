import React from 'react'
import Header from '../../layout/header.jsx'
import ItemProvider from './item-provider'
export default class ListProvider extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <div className="container">
                    <div className="row">
                        {
                            this.props.users.map((user, i) => {
                                return <ItemProvider key={i} user={user}  location={this.props.location}
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

