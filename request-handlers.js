export function setData(req, res){
    try{
        console.log(req.query);
        res.json("GET API");
    } catch (error) {
        console.log(error);
        res.json("error")
    }
}


import fs from "fs";

const dataFilePath = "./data.json";

function readDataFile() {
    try {
        const data = fs.readFileSync(dataFilePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function writeDataFile(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data));
}

export function getData(req, res) {
    const todoList = readDataFile();
    res.json(todoList);
}

export function addTodo(req, res) {
    const { todo } = req.body;
    const todoList = readDataFile();
    todoList.push(todo);
    writeDataFile(todoList);
    res.json({ message: "Todo added successfully" });
}

export function deleteTodo(req, res) {
    const { todo } = req.query;
    const todoList = readDataFile();
    const index = todoList.indexOf(todo);
    if (index !== -1) {
        todoList.splice(index, 1);
        writeDataFile(todoList);
        res.json({ message: "Todo deleted successfully" });
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
}

export function editTodo(req, res) {
    const oldTodo = req.query.oldTodo;
    const newTodo = req.query.newTodo;
    const todoList = readDataFile();
    const index = todoList.indexOf(oldTodo);
    if (index !== -1) {
        todoList[index] = newTodo;
        writeDataFile(todoList);
        res.json({ message: "Todo updated successfully" });
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
}
