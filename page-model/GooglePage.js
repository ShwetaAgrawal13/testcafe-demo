import { Selector} from 'testcafe';

export default class Page {
  constructor() {
    this.title = Selector('title');
    this.searchTextBox = Selector('[name="q"]');
    this.searchButton   = Selector('[type="submit"]');
  }
}