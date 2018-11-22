import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

    }

    storeHistory(event){
        sessionStorage.setItem("lastsearch", event);
    }

    render(){
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <div className="container">
                    <a className="navbar-brand">MediaPark</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" value={this.state.value} onChange={this.handleChange} />
                        <a href={`/${this.state.value}`} className="btn btn-outline-success my-2 my-sm-0">
                            Search
                        </a>
                        {/*<button onClick={storeHistory}>Save keyword</button>*/}
                    </form>
                </div>

            </nav>
        )
    }
}

export default Navigation