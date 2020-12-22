var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos =  JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){

            var todoElement = document.createElement('li');
            var todoCheck = document.createElement('i');
            todoCheck.setAttribute('class','fas fa-check-circle check');
            todoCheck.setAttribute('id','teste');
            todoCheck.setAttribute('onclick','checked()');
            var todoText = document.createTextNode(todo);
            var linkElement = document.createElement('button');
            var pos = todos.indexOf(todo);
            linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
            var linkText = document.createElement('i');
            linkElement.setAttribute('class','far fa-times-circle');

            linkElement.appendChild(linkText);
            todoElement.appendChild(todoCheck);
            todoElement.appendChild(todoText);       
            todoElement.appendChild(linkElement);
            listElement.appendChild(todoElement);        
    }
}


renderTodos();
    

function addTodo(){
    var todoText = inputElement.value;
    

    if(todoText === ''){
        alert("Você não adicionou nenhuma tarefa")
    }else{
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
    }
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function checked(){
    //this.style.color = "rgb(9, 231, 21)"
    var testeCheck = document.getElementById('teste');
    testeCheck.style.backgroundColor = "rgb(9, 231, 21);"
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}