import { continent } from "./documents/continent";
import { country } from "./documents/country";
import { place } from "./documents/place";
import { post } from "./documents/post";
import { trip } from "./documents/trip";
import { bodyPortableText } from "./objects/bodyPortableText";
import { excerptPortableText } from "./objects/excerptPortableText";
import { postImage } from "./objects/postImage";
import { featuredImage } from "./objects/featuredImage";

export default [
  // Documents
  post,
  continent,
  country,
  place,
  trip,

  // Objects
  featuredImage,
  excerptPortableText,
  bodyPortableText,
  postImage,
];
