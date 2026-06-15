import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeForm({ selectedEmployee, clearSelection }) {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const isEditMode = selectedEmployee !== null;

  useEffect(() => {
    if (selectedEmployee) {
      setFormData({
        name: selectedEmployee.name || "",
        department: selectedEmployee.department || "",
        salary: selectedEmployee.salary || "",
      });
    } else {
      setFormData({
        name: "",
        department: "",
        salary: "",
      });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (isEditMode) {
        await axios.put(
          `http://localhost:8080/employee/update/${selectedEmployee.id}`,
          formData
        );

        alert("Employee Updated Successfully");
      } else {
        await axios.post(
          "http://localhost:8080/employee/add",
          formData
        );

        alert("Employee Added Successfully");
      }

      setFormData({
        name: "",
        department: "",
        salary: "",
      });

      clearSelection();
    } catch (error) {
      console.error(error);
      alert("Operation Failed");
    }
  };

  const handleCancel = () => {
    clearSelection();

    setFormData({
      name: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div>
      <h2>
        {isEditMode
          ? "Update Employee"
          : "Add Employee"}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Employee Name"
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

      <button onClick={handleSubmit}>
        {isEditMode
          ? "Update Employee"
          : "Add Employee"}
      </button>

      {isEditMode && (
        <>
          {" "}
          <button onClick={handleCancel}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default EmployeeForm;