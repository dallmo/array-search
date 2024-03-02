/*
  sample test file :
  https://deno.land/x/dallmo_yaml/test/test.ts?source
*/

// deno test methods
import { assertEquals } from "../etc/deps.ts";

// the module to be tested
import { 
  array_search
} from "../mod.ts";

//////////////////////////////////////////////////////////////
Deno.test("test @dallmo/array_search", async (t) => {

  const test_array: string[] = ["aa", "abc", "a a", "b b", "123cc", "真係", "真 係 乜","唔係"];
  
  let search_string: string;
  let search_result: string[];
  let expected_result: string[];

  //---------------------------------------------------------
  await t.step("step : test ascii string, no space", async () => {

    search_string = "a";
    search_result = array_search( test_array, search_string );
    expected_result = ["aa", "abc", "a a"];

    assertEquals( search_result, expected_result );

  }); // step
  //................................
  await t.step("step : test ascii string, with space", async () => {

    search_string = "a a";
    search_result = array_search( test_array, search_string );
    expected_result = ["a a"];

    assertEquals( search_result, expected_result );

  }); // step
  //................................
  await t.step("step : test UTF-8 string, no space", async () => {

    search_string = "真係";
    search_result = array_search( test_array, search_string );
    expected_result = ["真係"];

    assertEquals( search_result, expected_result );

  }); // step
  //................................
  await t.step("step : test UTF-8 string, with space", async () => {

    search_string = "真 係";
    search_result = array_search( test_array, search_string );
    expected_result = ["真 係 乜"];

    assertEquals( search_result, expected_result );

  }); // step
  //................................
  await t.step("step : test ascii string, nothing matched", async () => {

    search_string = "asdf";
    search_result = array_search( test_array, search_string );
    expected_result = [];

    assertEquals( search_result, expected_result );

  }); // step
  //---------------------------------------------------------

}); // deno test
//////////////////////////////////////////////////////////////


