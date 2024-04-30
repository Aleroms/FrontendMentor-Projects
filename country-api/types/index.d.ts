
export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  tld: string[];
  population: number;
  maps: {
    googleMaps: string;
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  borders: string[];
  capital: string[];
  region: string;
  subregion: string;
  cca3: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
}
