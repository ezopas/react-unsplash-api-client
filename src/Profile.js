import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Profile extends React.Component {
    state = {
        user: null
    }
    componentDidMount() {
        const { handle } = this.props.match.params;
        const url = 'https://api.unsplash.com/search/photos?client_id=ce566471febd4bbaa975c83517a1d9e74e9fd8f309a104de1f5881b07ee936cc&page=1&query=${handle}';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.results
                });
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        return (
            <Router>
                <div className="App">
                    <div className="row container text-center">
                        {items.map(item => (
                            <div className="card col-md-4" key="{item.id}">
                                <img class="card-img-top" src={item.urls.thumb} alt="{item.id}"></img>
                                <div class="card-body">
                                    <h5 class="card-title">{item.id}</h5>
                                    <p class="card-text">{item.description}</p>
                                    <a href={item.urls.raw} class="btn btn-primary">Full image</a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </Router>
        );
    }
}
export default Profile;