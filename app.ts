
///////////////////////////////////////////////
function filter_items( input_array: any[], query: any) {
  return input_array.filter(
    (element_list) => element_list.toLowerCase().includes( query.toLowerCase() )
  ); // arr.filter
}; // function
///////////////////////////////////////////////
function main( input_array: any[], search_string: string ): string[]{

  return filter_items( input_array, search_string );

}; // function
///////////////////////////////////////////////
export {
  main as array_search, 
}; // export

