import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/users/`
    : 'http://localhost:8000/api/users/';

  useEffect(() => {
    console.log('Fetching users from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Fetched users:', results);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-secondary text-white">
          <h2 className="mb-0">Users</h2>
        </div>
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id || i}>
                  <td>{u.id || i}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Users;
