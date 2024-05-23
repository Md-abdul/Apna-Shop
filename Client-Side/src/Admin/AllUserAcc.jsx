import { useEffect, useState } from "react";
import axios from "axios";
import { RiEyeLine, RiDeleteBin2Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AllUserAcc = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  useEffect(() => {
    // Fetch all users when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("http://localhost:2000/user/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    setConfirmationPopup(true);
    setDeleteUserId(id);
  };

  const confirmDelete = () => {
    setConfirmationPopup(false);
    setLoading(true);
    axios
      .delete(`http://localhost:2000/user/users/${deleteUserId}`)
      .then(() => {
        // Remove the deleted user from the list
        setUsers(users.filter((user) => user._id !== deleteUserId));
        toast.success("User deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        toast.error("Error deleting user");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleView = (user) => {
    // Set the selected user and show the popup
    setSelectedUser(user);
    setShowPopup(true);
  };

  return (
    <div style={{ backgroundColor: "#e3e3df", height: "45rem" }}>
      <div className="w-3/5 mx-auto ">
        <h2 className="text-2xl font-bold mb-4 ">All User Accounts</h2>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 mt-5">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-lg text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                View
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          {loading && (
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <RiEyeLine
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleView(user)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <RiDeleteBin2Line
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(user._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* View Popup */}
        {showPopup && selectedUser && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 max-w rounded-lg">
              <h2 className="text-xl font-bold mb-4">User Details</h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfAxGV-fZxGL9elM_hQ2tp7skLeSwMyUiwo4lMm1zyA&s"
                alt=""
              />
              <h2 className="text-xl font-bold mb-4">User Details</h2>
              <h2>Name: {selectedUser.name}</h2>
              <h2>Email: {selectedUser.email}</h2>
              <p>Password: {selectedUser.password}</p>
              {/* Add other user details here */}
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* Confirmation Popup */}
        {confirmationPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 max-w-md">
              <p>Are you sure you want to delete this user?</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={confirmDelete}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setConfirmationPopup(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};
