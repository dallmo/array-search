import { array_search } from "@dallmo/array-search";

  const test_array: any[] = ["aa", "abc", "a a", "b b", 123123, "123cc", "真係", "真 係 乜","唔係"];
  const search_string: string = "a";
  const search_result: string[] = await array_search( test_array, search_string );

console.log( search_result );

