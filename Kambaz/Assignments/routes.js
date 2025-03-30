import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:aId", async (req, res) => {
    const { aId } = req.params;
    const status = assignmentsDao.deleteAssignment(aId);
    res.send(status);
  });
  app.put("/api/assignments/:aId", (req, res) => {
    const { aId } = req.params;
    const aUpdates = req.body;
    const status = assignmentsDao.updateAssignment(aId, aUpdates);
    res.send(status);
  });
}
