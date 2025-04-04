import { useEffect, useState } from "react";
import Users from "../../../interfaces/Users";
import UserService from "../../../services/UserService";
import ErrorHandler from "../../../handler/ErrorHandler";
import Spinner from "../../Spinner";

interface UsersTableProps {
  refreshUsers: boolean;
}

<<<<<<< HEAD
const UsersTable = ({ refreshUsers }: UsersTableProps) => {
=======
const UsersTable = ({refreshUsers} : UsersTableProps) => {
>>>>>>> 424a71b (adjust)
  const [state, setState] = useState({
    loadingUsers: true,
    users: [] as Users[],
  });

  const handleLoadUsers = () => {
    UserService.loadUsers()
      .then((res) => {
        if (res.status === 200) {
          setState((prevState) => ({
            ...prevState,
            users: res.data.users,
          }));
        } else {
          console.error(
<<<<<<< HEAD
            "Unexpected status error while loading users: ",
=======
            "Unexpected status error while loading users",
>>>>>>> 424a71b (adjust)
            res.status
          );
        }
      })
      .catch((error) => {
        ErrorHandler(error, null);
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingUsers: false,
        }));
      });
  };

<<<<<<< HEAD
  const handleUsersFullName = (user: Users) => {
    let fullName = "";

=======
  const handleUsersFullname = (user: Users) => {
    let fullName = "";
>>>>>>> 424a71b (adjust)
    if (user.middle_name) {
      fullName = `${user.last_name}, ${
        user.first_name
      } ${user.middle_name.charAt(0)}.`;
    } else {
      fullName = `${user.last_name}, ${user.first_name}`;
    }

    if (user.suffix_name) {
      fullName += ` ${user.suffix_name}`;
    }

    return fullName;
  };

  useEffect(() => {
    handleLoadUsers();
  }, [refreshUsers]);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Birthdate</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.loadingUsers ? (
            <tr className="align-middle">
              <td colSpan={8} className="text-center">
                <Spinner />
              </td>
            </tr>
          ) : state.users.length > 0 ? (
            state.users.map((user, index) => (
              <tr className="align-middle" key={index}>
                <td>{index + 1}</td>
<<<<<<< HEAD
                <td>{handleUsersFullName(user)}</td>
=======
                <td>{handleUsersFullname(user)}</td>
>>>>>>> 424a71b (adjust)
                <td>{user.gender.gender}</td>
                <td>{user.birth_date}</td>
                <td>{user.address}</td>
                <td>{user.contact_number}</td>
                <td>{user.email}</td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn btn-success">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="align-middle">
              <td colSpan={8} className="text-center">
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
