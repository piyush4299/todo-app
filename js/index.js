import { DOMHandler } from "./views/DOMHandler.js";
import TODOActionHandler from './models/TODOHandler.js';
import TODOItemView from './views/TodoItemView.js';

window.onload = function displayStoredTodos(){
    let editStatusButtons,deleteButtons,statusList,todoDetails;
    let storedTodos = TODOActionHandler.displayAllTodos();
    // console.log(storedTodos);
    if(storedTodos !== null){
        storedTodos.forEach((todoItem) => {
            console.log("todoItem: ",todoItem);
            let status;
            let color;
            if(todoItem.todoStatus === "pending"){
                status = "PENDING";
                color = "red";
            }
            else{
                status = "DONE";
                color = "green";
            }

            TODOItemView.setTodoItem(todoItem.todoDetail,status,color);
            
        });
        todoDetails = document.getElementsByClassName("todoItem");
        statusList = document.getElementsByClassName("statusButton");
        editStatusButtons = document.getElementsByClassName("editStatus");
        deleteButtons = document.getElementsByClassName("deleteTodo");
    
    }

    listenEditStatus(editStatusButtons,statusList,todoDetails);
    listenDeleteButtons(deleteButtons,todoDetails);
}

function listenEditStatus(editStatusButtons,statusList,todoDetails){
    if(editStatusButtons){
        for(let i=0;i<editStatusButtons.length;i++){
            editStatusButtons[i].addEventListener("click",function(){
                if(statusList[i].style.backgroundColor === "green"){
                    statusList[i].style.backgroundColor = "red";
                    statusList[i].textContent = "PENDING";
                    console.log(todoDetails[i].textContent);
                    TODOActionHandler.editStatus(todoDetails[i].textContent,"pending");
                }
                else{
                    statusList[i].style.backgroundColor = "green";
                    statusList[i].textContent = "DONE";
                    TODOActionHandler.editStatus(todoDetails[i].textContent,"done");
                }
            });
        }
    }
}

function listenDeleteButtons(deleteButtons,todoDetails){
    if(deleteButtons){
        for(let i=0;i<deleteButtons.length;i++){
            deleteButtons[i].addEventListener("click",function(){
                let todoDetail = todoDetails[i].textContent;
                TODOActionHandler.deleteTodoItem(todoDetail);
            });
        }
    }
}

DOMHandler.addTodoButton.addEventListener("click",function(){
    let todoDetail = DOMHandler.getTodoData.value;
    if(todoDetail.length === 0){
        alert("Empty item of todo is not allowed");
    }
    else{
        let todoJSON = {
            'todoDetail': todoDetail,
            'todoStatus': 'pending'
        };
    
        TODOActionHandler.addTodoItem(todoJSON);
    }
});

DOMHandler.resetTodoButton.addEventListener("click",function(){
    TODOActionHandler.clearTODOList();
});
