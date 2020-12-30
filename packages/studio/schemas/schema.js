import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import { continent, country, place, post } from "./documents";
import { bodyPortableText, excerptPortableText, postImage } from "./objects";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // Documents
    post,
    continent,
    country,
    place,

    // Objects
    excerptPortableText,
    bodyPortableText,
    postImage,
  ]),
});
