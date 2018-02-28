import React, {Component} from 'react';
import Axios from 'axios';
import SuperHeroList from './SuperHeroList';

class SuperHeroListContainer extends Component {
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
        const { match } = this.props;
        const superHero = match.params.superHeroName;

        if (superHero) {
            const matches = await this.getSearchResults(superHero);
            this.setState({
                listOfMatchingHeroes: matches
            });
        }
    };

    componentWillReceiveProps = async newProps => {
        const currentMatch = this.props.match;
        const currentSuperhero = currentMatch.params.superHeroName;
    
        const newMatch = newProps.match;
        const newSuperhero = newMatch.params.superHeroName;        

        if (newSuperhero && newSuperhero !== currentSuperhero) {
            const matches = await this.getSearchResults(newSuperhero);
            this.setState({
                listOfMatchingHeroes: matches
            });
        }
    };

    render() {
        if(!this.props.match.params.superHeroName) {
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
            <SuperHeroList heroList={heroes} query={this.props.match.params.superHeroName} />
        );
    }
}

export default SuperHeroListContainer;