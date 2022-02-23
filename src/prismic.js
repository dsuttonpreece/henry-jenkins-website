import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint("henry-jenkins");

export const client = prismic.createClient(endpoint);

export function linkResolver(document) {
  // if (document.type === "post") {
  //   return "/blog/" + document.uid;
  // }

  return "/";
}
