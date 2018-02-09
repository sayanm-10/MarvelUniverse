import React, {Component} from 'react';
import Axios from 'axios';

class SuperHeroList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listOfMatchingHeroes: []
        };
    }

    async getSearchResults(query) {
        let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=9b987acfe48aed7266e4ce7a6bf09365`;
        const response = await Axios.get(url);

        return response.data.data.results;
    }

    // is called only once when the component is added to the DOM
    componentDidMount = async props => {
        if (this.props.superHero) {
            const matches = await this.getSearchResults(this.props.superHero);
            this.setState({
                listOfMatchingHeroes: matches
            });
        }
    };

    componentWillReceiveProps = async newProps => {
        if (newProps.superHero && newProps.superHero !== this.props.superHero) {
            const matches = await this.getSearchResults(newProps.superHero);
            this.setState({
                listOfMatchingHeroes: matches
            });
        }
    };

    render() {
        if(!this.props.superHero) {
            return <h1>Search for someone</h1>;
        }

        const heroes = [...this.state.listOfMatchingHeroes];

        if (this.props.orderById) {
            heroes.sort((x,y) => {
                if (x.id < y.id) return 1;
                if (x.id > y.id) return -1;
                
                return 0;
            });
        }

        return (
            <div>
                <h1>
                    {this.state.listOfMatchingHeroes.length === 0 ? 'Loading' : this.state.listOfMatchingHeroes.length } 
                    {" "}results for {this.props.superHero}
                </h1>
                <ul>
                    {heroes.map(hero => {
                        return <li key={hero.id}>{hero.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default SuperHeroList;