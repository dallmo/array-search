# @dallmo/array-search
a simple function to search in array, return an array of strings

# usage
1. in CLI, add the module with :
```
deno add @dallmo/array-search
```

2. simple test codes
```
import { array_search } from "@dallmo/array-search";

  const test_array: string[] = ["aa", "abc", "a a", "b b", "123cc", "真係", "真 係 乜","唔係"];
  const search_string: string = "a";
  const search_result: string[] = await array_search( test_array, search_string );

console.log( search_result );
```

# testing source codes

just run
```
deno test
```
