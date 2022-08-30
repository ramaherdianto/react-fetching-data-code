import React from "react";

const FetchingData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phone</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.phone}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchingData;
