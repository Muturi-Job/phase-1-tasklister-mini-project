document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_todo.value)
  }
  )
});
function buildToDo(todo){
  let p = document.createElement('p');
  p.textContent = todo  
  let btn= document.createElement('button');
  btn.addEventListener('click', handleDelete)
  p.appendChild(btn)  
  btn.textContent = ' x '
  document.querySelector('#tasks').appendChild(p)

}
function handleDelete (e) {
  e.target.parentNode.remove()
}