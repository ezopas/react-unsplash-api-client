import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: [],
        isLoaded: false
    };
    componentDidMount() {
        axios.get('https://api.unsplash.com/photos?client_id=ce566471febd4bbaa975c83517a1d9e74e9fd8f309a104de1f5881b07ee936cc')
            .then(res => {
                console.log(this.props)
                this.setState({
                    posts: res.data,
                    isLoaded: true
                })
            })
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div className="text-center"><h2>Loading...</h2></div>;
        }
        const {posts} = this.state;
        const postList = !posts.lenght ? (
            posts.map(post => {
                return (
                    <div className="card col-md-4" key="{post.id}">
                        <img class="card-img-top" src={post.urls.thumb} alt="{post.id}"></img>
                        <div class="card-body">
                            <h5 class="card-title">{post.id}</h5>
                            <p class="card-text">{post.description}</p>
                            <a href={post.urls.raw} class="btn btn-primary">Full image</a>
                        </div>
                    </div>)
            })
        ) : (<div>No posts find</div>)

        return (
            <section className="container">
                <h4>{this.state.key}</h4>
                <div className="row text-center">
                    {postList}
                </div>
            </section>
        )
    }
}

export default Home;
