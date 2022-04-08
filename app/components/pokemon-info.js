import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  logPokemonInfo(pokemon) {
    console.log(pokemon);
  }
}
