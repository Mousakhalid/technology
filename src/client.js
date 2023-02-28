import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "msm2akhq",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skXN3nBKZG1rbOfigGFU8RsAhC4u5rsMH78fGEgBmK1NGhMltASQhgEbE4l8bwpmSJefPLH7s7vBROFsJXRy11ttx0KxUnOTb2ZXnWvJhTq4h8k8LIIrnOzQsM5pRnN4vW2BspD85WpICEpMP5imyUsifteDtAOOcmZSe96thPzkNmaTpvfi",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
