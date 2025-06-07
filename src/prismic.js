import * as prismic from "@prismicio/client";

export const client = prismic.createClient("henry-jenkins");

export function linkResolver() {
  return "/";
}
