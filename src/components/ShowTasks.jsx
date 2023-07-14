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
          {tasks.map((tasks) => {
            return (
              <tr>
                <th>{tasks.id}</th>
                <td>{tasks.task}</td>
                <td>{tasks.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTasks;
