let arr = [
    {name: 'object1'},
    {name: 'object2', parent: 'object4'},
    {name: 'object3'},
    {name: 'object4', parent: 'object7'},
    {name: 'object5', parent: 'object1'},
    {name: 'object6', parent: 'object4'},
    {name: 'object7'},
];

let obj = {}; // Вспомогательный словарь для доступа по ключу
arr.forEach( item => obj[item.name] = item );

arr.forEach( item => {
  let parentName = item.parent;
  if( !parentName || !obj[parentName] ) return;
  ( obj[parentName].children ??= [] ).push(item);
});

arr = arr.filter( item => {
  let mustRemove = item.parent;
  delete item.parent;
  return !mustRemove;
});

console.log(arr);