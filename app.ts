
///////////////////////////////////////////////
/**
 * search the strings with array filter
 * ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @param {any[]} input_array 
 * @param {string} search_string 
 * @returns {string[]} an array of strings, or empty if nothing matched
 */
function main( input_array: any[], search_string: string ): string[]{

  return input_array.filter(
    (element_list) => element_list.toString().toLowerCase().includes( search_string.toLowerCase() )
  ); // arr.filter

}; // function
///////////////////////////////////////////////
export {
  main as array_search, 
}; // export

