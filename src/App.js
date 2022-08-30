import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [idUser, setIdUser] = useState(1);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);

    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idUser}`);
      setUser(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(true);
    }
  };

  useEffect(() => {
    getUser();
  }, [idUser]);

  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-8">
              <input type="text" className="form-control" name="iduser" value={idUser} onChange={(e) => setIdUser(e.target.value)} />
              {loading ? (
                <div>Loading...</div>
              ) : (
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
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.phone}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
