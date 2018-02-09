import React, { Component } from 'react';

class SearcForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
            orderById: false
        }
    }

    toggleOrdering = e => {
        this.setState({
            orderById: e.target.checked
        });
    }

    onSearchQueryChange = e => {
        this.setState({
            searchQuery: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.searchQuery) {
            this.props.onSearch(this.state.searchQuery, this.state.orderById);
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="superheroName">
                        What superhero do you want to search for?
                    </label>
                    <input
                        type="text"
                        value={this.state.searchQuery}
                        onChange={this.onSearchQueryChange}
                        className="form-control"
                        id="superheroName"
                        aria-describedby="superheroHelp"
                        placeholder="Superhero..."
                    />
                    <small id="superheroHelp" className="form-text text-muted">
                        Everyone has a favorite superhero. Who do you want to search for?
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="orderById">
                        <input type="checkbox" checked={this.state.orderById} onChange={this.toggleOrdering} />
                        Order results by Id
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Search for superhero
                </button>
            </form>
        );
    }
}

export default SearcForm;