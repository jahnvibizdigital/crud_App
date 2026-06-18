
function UserList({ users, setEditIndex, deleteUser }) {
  return (
    <>
      <h2>User List</h2>

      <table border="1" cellPadding="20" style={{ margin: "20" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="edit-btn" onClick={() => setEditIndex(index)}>
                    Edit
                  </button>

                  <button className="delete-btn" onClick={() => deleteUser(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserList;