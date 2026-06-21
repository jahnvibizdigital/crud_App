
function UserList({ users, setEditIndex, deleteUser }) {
  return (
    <>
      <h2>User List</h2>

      <table border="1" cellPadding="20" style={{ margin: "20" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Data</th>
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
                <td className="data-cell">
                  {user.data ? (
                    Object.entries(user.data).map(([key, value]) => (
                      <div key={key}>
                        <strong>{key}:</strong> {value}
                      </div>
                    ))
                  ) : (
                    "No Data"
                  )}
                </td>
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