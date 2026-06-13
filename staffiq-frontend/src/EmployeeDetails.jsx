function EmployeeDetails({ employee }) {
  return (
    <div>
      <h2>Employee Details</h2>

      {!employee ? (
        <p>Select an employee</p>
      ) : (
        <div>
          <p>
            <strong>ID:</strong> {employee.id}
          </p>

          <p>
            <strong>Name:</strong> {employee.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default EmployeeDetails;