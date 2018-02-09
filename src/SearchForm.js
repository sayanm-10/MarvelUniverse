import React, {Component} from 'react';

class SearcForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ""
        }
    }

    onSearchQueryChange= e => {
        this.setState({
            searchQuery: e.target.value
        });
    }

    onSubmit= e => {
        e.preventDefault();
        if (this.state.searchQuery) {
            this.props.onSearch(this.state.searchQuery);
        }
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="superhero-name">
                        Which superhero do you want to search for?
                    </label>
                    <input />
                </div>
            </form>
        );
    }
 }

export default SearcForm;