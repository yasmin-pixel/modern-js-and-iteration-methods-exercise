const addTodoButton = document.querySelector('.add-todo')
const newTodoInput = document.querySelector('.new-todo')
const todoListContainer = document.querySelector('.todo-list')
const prioritizeButton = document.querySelector('.prioritize')

todoList = [
  { name: "Feed the cats", done: false },
  { name: "Call mum", done: true }, 
  { name: "Practice iteration", done: false }
]

const makeTodoListElements = () => {
  const elements = todoList.map((todo) => {
    return makeTodoListElement(todo)
  })

  // for(let i = 0; i < todoList.length; i++ ) {
  //   const todo = todoList[i]
  //   const todoListElement = makeTodoListElement(todo)
  //   elements.push(todoListElement)
  // }
  
  return elements
}

const renderTodoList = function () {
  todoListContainer.innerHTML = ''
  const todoListElements = makeTodoListElements()
  // [htmlElement, htmlElement] 

  todoListElements.forEach((todo) => todoListContainer.append(todo))
}

const makeTodoListElement = function (todo) {
  const todoListElement = document.createElement('li')
  todoListElement.innerText = `${todo.name}`
  if(todo.done) {
    todoListElement.className = 'done'
  }
  return todoListElement
}

const addTodo = function () {
  const newTodo = { name: newTodoInput.value, done: false }
  todoList.push(newTodo)
}

const handleAddTodo = function () {
  addTodo()
  renderTodoList()
}

const completeTodo = function(name) {
  const todoItem = todoList.find(function (item) {
    return item.name === name
  })
  todoItem.done = true
}

notCompletedTodos = function () {
  const notCompleted = []

  for(let i = 0; i < todoList.length; i++ ) {
    const todo = todoList[i]
    if(!todo.done) {
      notCompleted.push(todo)
    }
  }

  return notCompleted
}

const prioritize = function () {
  const todos = notCompletedTodos()
  const first = todos[0]

  if (first) {
    alert(`${first.name}`)
  }else {
    alert('Nothing left todo')
  }
}

todoListContainer.addEventListener('click', function (event) {
  const name = event.target.innerText
  completeTodo(name)
  renderTodoList()
})

addTodoButton.addEventListener('click', handleAddTodo)
prioritizeButton.addEventListener('click', prioritize)

renderTodoList()

// const animals =[ "dog","cat","rabbit","parrot"]

// const mapAnimals = animals.map(function(animal){ 

// return "hello " + animal
// })

// const myFunction = ()=>{
//   return "hello"

// } 
// const greeting = myFunction();



const animals =[ "dog","cat","rabbit","parrot"]

const filterAnimals = animals.filter((animal)=>{
  return animal.length > 5
})




