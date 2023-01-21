import React, { useState } from "react";

function RecruiterTodoList() {
  const [candidateTasks, setCandidateTasks] = useState([]);
  const [newCandidateTask, setNewCandidateTask] = useState("");

  function handleTaskInputChange(e) {
    setNewCandidateTask(e.target.value);
  }

  function handleAddCandidateTask(e) {
    e.preventDefault();
    setCandidateTasks([...candidateTasks, newCandidateTask]);
    setNewCandidateTask("");
  }

  return (
    <div>
      <form onSubmit={handleAddCandidateTask}>
        <input
          type="text"
          value={newCandidateTask}
          onChange={handleTaskInputChange}
        />
        <button type="submit">Add Candidate Task</button>
      </form>
      <ul>
        {candidateTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecruiterTodoList;
