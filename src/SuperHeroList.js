import React, {Component} from 'react';
//import SuperHeroListEntry from './SuperHeroListEntry';
import { Link } from 'react-router-dom';

class SuperHeroList extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.heroList.length === 0 ? 'Loading' : this.props.heroList.length } 
                    {" "}results for {this.props.query}
                </h1>
                <ul>
                    {this.props.heroList.map(hero => {
                        return (
                            <li key={hero.id}>
                                <Link to={`/superhero/${hero.id}`}>
                                    {hero.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default SuperHeroList;