/* exported todos */

var todos = [];
// var previousTodosJSON = localStorage.getItem('javascript-local-storage');

// if (previousTodosJSON !== null) {
//  todos = JSON.parse(previousTodosJSON);
// }

// window.addEventListener('beforeunload', function storeItems(event) {
// var todosJSON = JSON.stringify(todos);
// localStorage.setItems('javascript-local-storage', todosJSON);
// });

var previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function storeItems(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
