let todos = [
  { id: 1, title: "Task 1", description: "This is Task 1", completed: false },
  { id: 2, title: "Task 2", description: "This is Task 2", completed: true },
  { id: 3, title: "Task 3", description: "This is Task 3", completed: false },
  { id: 4, title: "Task 4", description: "This is Task 4", completed: true },
];

export default function WorkingWithArrays(app) {
  // Create a new todo
  app.get("/lab5/todos/create", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      description: "New Task Description",
      completed: false,
    };
    todos.push(newTodo);
    res.json(todos);
  });

  // Retrieve todos, optionally filtering by completed query parameter
  app.get("/lab5/todos", (req, res) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      const completedBool = completed === "true";
      const completedTodos = todos.filter((t) => t.completed === completedBool);
      res.json(completedTodos);
      return;
    }
    res.json(todos);
  });

  // Update the title of a todo
  app.get("/lab5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) {
      todo.title = title;
    }
    res.json(todos);
  });

  // NEW: Update the completed property of a todo
  app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
    const { id, completed } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) {
      // Convert the completed string parameter to a boolean
      todo.completed = completed.toLowerCase() === "true";
    }
    res.json(todos);
  });

  // NEW: Update the description property of a todo
  app.get("/lab5/todos/:id/description/:description", (req, res) => {
    const { id, description } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) {
      todo.description = description;
    }
    res.json(todos);
  });

  // Delete a todo by id
  app.get("/lab5/todos/:id/delete", (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
    }
    res.json(todos);
  });

  // Retrieve a single todo by id
  app.get("/lab5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  });
}
