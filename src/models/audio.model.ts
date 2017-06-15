export class Audio {

  private src: string;
  private artist: string;
  private title: string;

  constructor(src: string, artist: string, title: string) {
    this.src = src;
    this.artist = artist;
    this.title = title;
  }

  static build(data) {
    return new Audio(data.src, data.artist, data.title);
  }

  getSrc(): string {
    return this.src;
  }

  getArtist(): string {
    return this.artist;
  }

  getTitle(): string {
    return this.title;
  }


}
