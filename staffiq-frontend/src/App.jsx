import { useState } from "react";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div>
      <center>
        <h1>Employee Management</h1>

        <EmployeeForm
          selectedEmployee={selectedEmployee}
          clearSelection={() => setSelectedEmployee(null)}
        />

        <hr />

        <EmployeeList onSelectEmployee={setSelectedEmployee} />
      </center>
    </div>
  );
}

export default App;
