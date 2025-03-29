const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};
const moduleObject = {
  id: "M101",
  name: "Intro to Software Engineering",
  description:
    "An introductory module covering the basics of software design, development, and testing.",
  course: "Software Engineering",
};
export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  // New route: update assignment score
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = Number(newScore);
    res.json(assignment);
  });
  // New route: update assignment completed status
  app.get("/lab5/assignment/completed/:newCompleted", (req, res) => {
    const { newCompleted } = req.params;
    // Convert string to boolean; assuming "true" or "false" are passed
    assignment.completed = newCompleted.toLowerCase() === "true";
    res.json(assignment);
  });
  app.get("/lab5/module", (req, res) => {
    res.json(moduleObject);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.json(moduleObject.name);
  });
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    moduleObject.name = newName;
    res.json(moduleObject);
  });
  // New route: update module description
  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    moduleObject.description = newDescription;
    res.json(moduleObject);
  });
}
