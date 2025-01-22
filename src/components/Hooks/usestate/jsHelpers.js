export const createTodoList = () => {
    const todoList = []

    for (let i = 1; i <= 10; i++) {
        const myObject = {
            id: i,
            name: `Item ${i}`
        }
        todoList.push(myObject) 
    }
    console.log(todoList)
    return todoList
}

createTodoList()