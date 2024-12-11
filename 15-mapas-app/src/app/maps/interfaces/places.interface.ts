export interface PlaceResponse {
  type: string;
  features: Feature[];
  query: string[];
  attribution: string;
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  bbox: number[];
  center: number[];
  place_name: string;
  place_type: string[];
  relevance: number;
  id: string;
  text: string;
  place_type_name: string[];
  context: Context[];
  language: Language;
  text_es: string;
  language_es: Language;
  place_name_es: string;
}

export interface Context {
  ref: string;
  country_code: string;
  id: string;
  text: string;
  kind?: Kind;
  language?: Language;
  text_es: string;
  language_es?: Language;
  wikidata?: string;
  categories?: Category[];
  'osm:tags'?: OsmTags;
}

export enum Category {
  Continent = 'continent',
  Peninsula = 'peninsula',
  River = 'river',
}

export enum Kind {
  AdminArea = 'admin_area',
}

export enum Language {
  Es = 'es',
}

export interface OsmTags {
  type?: string;
  natural?: Category;
  wikipedia?: string;
  sinkhole?: string;
  boundary?: string;
  population?: string;
  place?: Category;
  sqkm?: string;
  waterway?: Category;
  intermittent?: string;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  ref: string;
  country_code: string;
  wikidata: string;
  kind: string;
  place_type_name: string[];
  'osm:place_type'?: string;
}
