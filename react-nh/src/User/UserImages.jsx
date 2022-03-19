import React, { Component } from 'react'
import Axios from 'axios'
class UserImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userImages: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                this.setState({ userImages: response.data })
            })
            .catch((err) => { });
    }
    render() {
        return (
            <div className="container">
                <h1>User Images</h1>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Album Id</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.userImages.map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.title}</td>
                                            <td>{user.albumId}</td>
                                            <td><img src={user.thumbnailUrl} /></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserImages
