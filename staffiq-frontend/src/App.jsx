import { useState } from "react";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";
import UpdateEmployee from "./UpdateEmployee";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div>
      <h1>Employee Management System</h1>

      <EmployeeList
        onSelectEmployee={setSelectedEmployee}
      />

      <hr />

      <EmployeeDetails
        employee={selectedEmployee}
      />

      <hr />

      <UpdateEmployee
        employee={selectedEmployee}
      />
    </div>
  );
}

export default App;