import Serie from './eachSerie.js';

// Class that contains collection of Series
class Series {
  constructor() {
    this.Series = [];
  }

  // create a new Serie and save it in the collection using the Serie class declared above
  newSerie(name, ind, likes, comments) {
    const t = new Serie(name, ind, likes, comments);
    this.Series.push(t);
    return t;
  }

  get allSeries() {
    return this.Series;
  }
}

export default Series;