export type whyChoosemeList = {
  title: string;
  desc: string;
  src: string;
  alt: string;
};

export type langkahPembuatanList = {
  title: string;
  desc: string;
};

export type myFeatureList = {
  title: string;
  desc: string;
  img: string;
  alt: string;
};

export type IApiResponseWhyChooseme = {
  data: Array<whyChoosemeList>;
};

export type IApiResponseLangkahPembuatan = {
  data: Array<langkahPembuatanList>;
};

export type IApiResponseMyFeature = {
  data: Array<myFeatureList>;
};
