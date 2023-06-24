export default async function sitemap() {
  const baseUrl = "https://divory.vercel.app";

  return [{ url: baseUrl, lastModified: new Date() }];
}
