// client.js basically works as a connection between our sanity content management system and our next.js application.

import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "km2ct9ky",
  dataset: "production",
  apiVersion: "2022-09-12",
  useCdn: true,
  token:
    "sk4YofY6UACXD2oAhGvJcJpnNYxOHdra5ytPSn7lPrAKcrvGyWnVDJDSthZdeMkD3QYtbOwehYnrsP0tYfV5MfsJHfMlPwXlUK1Tzrb1NGd5mH6HmMkyDvFkaFnhq6GlvdnGktOsEmASEwYIykIuwKd6ZLmhHApbNfD4QJ8d51Fj4O01jPOw",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
