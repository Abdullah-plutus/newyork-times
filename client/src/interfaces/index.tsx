export interface IMultimediaData {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export interface IPopularNewsData {
  abstract: string;
  title: string;
  url: string;
  byline: string;
  subsection: string;
  multimedia: IMultimediaData[];
}

export interface INewsCardProps {
  data: IPopularNewsData;
}
