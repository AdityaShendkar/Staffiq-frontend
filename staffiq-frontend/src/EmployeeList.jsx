import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList({ onSelectEmployee }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/employee/employees?size=100"
      );

      setEmployees(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>All Employees</h2>
        <center>
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
                  onClick={async () => {
                    const response = await axios.get(
                      `http://localhost:8080/employee/id/${emp.id}`
                    );

                    onSelectEmployee(response.data);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </center>
      
    </div>
  );
}

export default EmployeeList;