import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import continent from "./continent";
import country from "./country";
import place from "./place";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([continent, country, place]),
});
