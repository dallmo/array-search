# @dallmo/array-search
a simple function to search in array, return an array of strings

# usage

## 1. via deno module
- [link to deno module][link-1]


1. nothing to add via CLI.

2. create a file `test-via-deno-modules.ts`
```
import { array_search } from "https://deno.land/x/dallmo_array_search/mod.ts";

  const test_array: any[] = ["aa", "abc", "a a", "b b", 123123, "123cc", "真係", "真 係 乜","唔係"];
  const search_string: string = "a";
  const search_result: string[] = await array_search( test_array, search_string );

console.log( search_result );
```

3. run the test file
```
deno run test-via-deno-modules.ts
```

## 2. via jsr

- [link to jsr][link-2]

# usage
1. in CLI, add the module with :
```
deno add @dallmo/array-search
```

2. create a file `test-via-jsr.ts`
```
import { array_search } from "@dallmo/array-search";

  const test_array: any[] = ["aa", "abc", "a a", "b b", 123123, "123cc", "真係", "真 係 乜","唔係"];
  const search_string: string = "a";
  const search_result: string[] = await array_search( test_array, search_string );

console.log( search_result );
```

3. run the test file
```
deno run test-via-jsr.ts
```

# testing source codes

just run
```
deno test
```

[comments]: --------------------------------------------------
[link-1]: https://deno.land/x/dallmo_array_search
[link-2]: https://jsr.io/@dallmo/array-search
