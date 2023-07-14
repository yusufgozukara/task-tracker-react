const ShowTasks = ({ tasks }) => {
  console.log(tasks);
  return (
    <div style={{ textAlign: "center", textAlign: "justify" }}>
      <table
        class="table table-striped"
        style={{ width: "90%", textAlign: "center", margin: "3rem 0 0 4rem" }}
      >
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Task</th>
            <th scope="col">Day</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr>
                <th>{task.id}</th>
                <td>{task.task}</td>
                <td>{task.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTasks;
