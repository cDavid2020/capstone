/* 
In this example, the component is named RecruiterTodoList and the state variables are named candidateTasks and newCandidateTask to reflect their usage in a Recruiter software. The functions are also named accordingly, handleTaskInputChange and handleAddCandidateTask to reflect their functionality in the context of a Recruiter software.

The component allows the user to add tasks related to a candidate, and to see the list of candidate tasks,
It's important to notice that the component has two states, the candidateTasks state, and the newCandidateTask state.

Also, the component has two functions to handle the change on the input and the submission of the form.

You can import the RecruiterTodoList component in your index.js file and render it as shown in the example above, this will render the component in the element with the id of "root".
 */

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
