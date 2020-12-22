#  **`MyTasks`** :heavy_check_mark:
Organize suas tarefas de forma simples e intuitiva

**[Clique aqui](https://luigi-raynel-dev.github.io/todos_myTask/) para acessar o site do projeto**

## `DESCRIÇÃO DO PROJETO`:scroll:
Um todo list para organizar suas tarefas, traçar metas e objeivos de forma simple e intuitiva
# * 。 • ˚ ˚ ˛ ˚ ˛ • 。* 。° 。* 。 • ˚* 。 • ˚ ˚ ˛ ˚ ˛ • 。* 。° 。* 。 • ˚
### `Imagens do projeto`📷
>Desktop :computer:
![alt](images/template_desktop.jpeg)
 ----
>Mobile :vibration_mode:
![alt](images/template_mobile.jpeg)
# * 。 • ˚ ˚ ˛ ˚ ˛ • 。* 。° 。* 。 • ˚* 。 • ˚ ˚ ˛ ˚ ˛ • 。* 。° 。* 。 • ˚
# **💥`Save sem database`💥**
```javascript
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
 //tenta retornar itens do localStorage ou retorna um array vazio
 
[...]

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
} 
//armazena no localStorage
```