export default async function sitemap() {
  const baseUrl = "https://wedding-companyprofile.vercel.app";

  return [{ url: baseUrl, lastModified: new Date() }];
}
