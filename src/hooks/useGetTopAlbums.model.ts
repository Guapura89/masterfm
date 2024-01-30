type ImageArray = {
  size: string;
  "#text": string;
};
export type Album = {
  artist: string;
  image: ImageArray[];
  mbid: string;
  name: string;
  streamble: string;
  url: string;
};
