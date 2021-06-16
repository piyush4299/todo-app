import { DOMHandler } from "./DOMHandler.js"

export default class TODOItemView{
    static setTodoItem = (todoDetail,status,color) => {
        const todoItem = `
            <div class="todo">
                <button class="statusButton" style="background-color: ${color}; color: white;">${ status }</button>
                <p class="todoItem">${ todoDetail }</p>
                <button class="editStatus">EDIT STATUS</button>
                <button class="deleteTodo">DELETE</button>
            </div>
            <br />
        `;

        DOMHandler.todoItemList.insertAdjacentHTML('beforeend',todoItem);
    }
}