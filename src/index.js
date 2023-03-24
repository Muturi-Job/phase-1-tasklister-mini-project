document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_todo.value)
  }
  )
});
function buildToDo(todo){
  let description = document.createElement('li');
  description.textContent = todo  
  let btn= document.createElement('button');
  btn.addEventListener('click', handleDelete)
  description.appendChild(btn)  
  btn.textContent = ' x '
  document.querySelector('#tasks').appendChild(description)

}
function handleDelete (e) {
  e.target.parentNode.remove()
}