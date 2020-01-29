import _ from 'lodash';
//gets uses the page to get the starting index of items, returns items list from index to index +pageSize
export function paginate(items, pageNumber, pageSize){
  const startIndex = (pageNumber -1) * pageSize;
  return(_(items).slice(startIndex).take(pageSize).value());
}
