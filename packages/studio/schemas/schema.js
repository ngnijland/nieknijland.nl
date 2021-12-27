import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import { continent } from "./documents/continent";
import { country } from "./documents/country";
import { place } from "./documents/place";
import { post } from "./documents/post";
import { trip } from "./documents/trip";
import { bodyPortableText } from "./objects/bodyPortableText";
import { excerptPortableText } from "./objects/excerptPortableText";
import { postImage } from "./objects/postImage";
import { featuredImage } from "./objects/featuredImage";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
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
  ]),
});
