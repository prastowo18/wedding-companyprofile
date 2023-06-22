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

export type designList = {
  title: string;
  desc: string;
  img: string;
  alt: string;
  link: string;
};

export type itemPrice = {
  title: string;
  active: boolean;
};

export type priceList = {
  price: string;
  type: string;
  itemList: Array<itemPrice>;
  link: string;
  desc: string;
};

export type pertanyaanUmumList = {
  title: string;
  desc: string;
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

export type IApiResponseDesignList = {
  data: Array<designList>;
};

export type IApiResponsePriceList = {
  data: Array<priceList>;
};

export type IApiResponsePertanyaanUmumList = {
  data: Array<pertanyaanUmumList>;
};
