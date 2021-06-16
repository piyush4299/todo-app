export default class TODOActionHandler{
    static addTodoItem = (todoObject) => {
        let storedTodo = localStorage.getItem("todoData");
        let storedTodoObject;
        if(storedTodo === null){
            storedTodoObject = [];
        }
        else{
            storedTodoObject = JSON.parse(storedTodo);
        }
        
        storedTodoObject.push(todoObject);
        localStorage.setItem("todoData",JSON.stringify(storedTodoObject));
        location.reload();
    }
    
    static clearTODOList = () => {
        localStorage.clear();
        location.reload();
    }

    static displayAllTodos = () => {
        let storedTodo = localStorage.getItem("todoData");
        let storedTodoObject;
        if(storedTodo === null){
            return null;
        }
        else{
            storedTodoObject = JSON.parse(storedTodo);
            return storedTodoObject;
        }
    }

    static editStatus = (todoDetail,status) => {
        let storedTodo = localStorage.getItem("todoData");
        if(storedTodo !== null){
            let storedTodoObject = JSON.parse(storedTodo);
            storedTodoObject.forEach((todo) => {
                if(todo.todoDetail === todoDetail){
                    todo.todoStatus = status;
                }
            });
            localStorage.setItem("todoData",JSON.stringify(storedTodoObject));
        }
    }

    static deleteTodoItem = (todoDetail) => {
        let storedTodo = localStorage.getItem("todoData");
        let tobeDeletedElements = [];
        if(storedTodo !== null){
            let storedTodoObject = JSON.parse(storedTodo);
            
            for(let i=0;i<storedTodoObject.length;i++){
                if(storedTodoObject[i].todoDetail === todoDetail){
                    tobeDeletedElements.push(i);
                }
            }

            for(let i=0;i<tobeDeletedElements.length;i++){
                storedTodoObject.splice(tobeDeletedElements[i],1);
            }

            localStorage.setItem("todoData",JSON.stringify(storedTodoObject));

            location.reload();
        }
    }


}   