import { useEffect, useState } from "react";
import axios from "axios";

function UpdateEmployee({ employee }) {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || "",
        department: employee.department || "",
        salary: employee.salary || "",
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateEmployee = async () => {
    if (!employee) {
      alert("Select an employee first");
      return;
    }

    try {
      await axios.put(
        `http://localhost:8080/employee/update/${employee.id}`,
        formData
      );

      alert("Employee Updated Successfully");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>

      {!employee ? (
        <p>Select an employee first</p>
      ) : (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <br />
          <br />

          <button onClick={updateEmployee}>
            Update Employee
          </button>
        </>
      )}
    </div>
  );
}

export default UpdateEmployee;