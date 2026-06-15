import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList({ onSelectEmployee }) {
  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/employee/employees?size=100"
      );

      setEmployees(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleView = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/employee/id/${id}`
      );

      onSelectEmployee(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>

              <td>
                <button
                  onClick={() => handleView(emp.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;