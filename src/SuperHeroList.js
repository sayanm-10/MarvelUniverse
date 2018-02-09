import React, {Component} from 'react';

class SuperHeroList extends Component {
    render() {
        if(this.props.superHero) {
            return (
                <h1>Results for </h1>
            );
        }
    }
}

export default SuperHeroList;