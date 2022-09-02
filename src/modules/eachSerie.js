// Individual Serie class, regarding properties and methods for one Serie
class Serie {
  constructor(name, ind, likes, comments) {
    this.name = name;
    this.ind = ind;
    this.likes = likes;
    this.comments = comments;
  }

  get serieName() {
    return this.name;
  }
}

export default Serie;