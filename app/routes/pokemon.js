import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class PokemonRoute extends Route {
  async model() {
    console.log('Fetching pokemon...');

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json();

    console.log(data);

    console.log('Delivering pokemon data...');

    return { data };
  }
}
