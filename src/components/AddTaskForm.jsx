import React, { useState } from "react";

const AddTaskForm = ({ tasks, setTasks }) => {
  console.log(tasks);
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, day: day, isDone: false };
    setTasks([...tasks, newTask]);
    setTask("");
    setDay("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          class="input-group flex-nowrap"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span
            class="input-group-text"
            id="addon-wrapping"
            style={{
              width: "80%",
              height: "40px",
              margin: "1rem auto 0",
              textAlign: "center",
            }}
          >
            Task
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Add Task"
            aria-label="Add Task"
            aria-describedby="addon-wrapping"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            style={{ height: "50px", width: "80%", margin: "1rem auto 0" }}
          />
        </div>

        <div
          class="input-group flex-nowrap"
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            class="input-group-text"
            id="addon-wrapping"
            style={{
              width: "80%",
              height: "40px",
              margin: "1rem auto 0",
              textAlign: "center",
            }}
          >
            Day & Time
          </span>
          <input
            type="date"
            class="form-control"
            aria-label="day"
            aria-describedby="addon-wrapping"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
            style={{ height: "50px", width: "80%", margin: "1rem auto 0" }}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
