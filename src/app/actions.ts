"use server";

import axios from "axios";

export async function searchPhotos(queryTerm: string) {
  console.log("access key,", process.env.UNSPLASH_ACCESS_KEY);
  const result = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: "apple",
      //   client_id: process.env.UNSPLASH_ACCESS_KEY,
    },
    // headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
  });

  return result;
}
