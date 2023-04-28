const OpportunitiesTable = ({ currentUser }) => {
  // Define onChange function
  // const handleChange = (event) => {
  //   // Handle changes to form input fields
  // };

  // // Define onSubmit function
  // const handleSubmit = (event) => {
  //   // Handle form submission
  // };
  const opportunities = [
    {
      _id: "1",
      title: "Software Engineer",
      url: "https://www.google.com",
      company: "Google",
      city: "Mountain View",
      country: "CA",
      description: "Develop software for Google products.",
      type: "Full-time",
      contactAddress: "https://www.google.com",
      deadline: "2021-12-31",
      createdBy: "1",
      approvedBy: "1",
      isArchived: false,
      isApproved: true,
    },
    {
      _id: "2",
      title: "Software Engineer",
      url: "https://www.google.com",
      company: "Google",
      city: "Mountain View",
      country: "CA",
      description: "Develop software for Google products.",
      type: "Full-time",
      contactAddress: "https://www.google.com",
      deadline: "2021-12-31",
      createdBy: "1",
      approvedBy: "1",
      isArchived: false,
      isApproved: true,
    },
  ];

  return (
    <div>
      <h2>List of Opportunities</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Description</th>
            <th>Requirements</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opportunity) => (
            <tr key={opportunity._id}>
              <td>{opportunity.title}</td>
              <td>{opportunity.company}</td>
              <td>{`${opportunity.city}, ${opportunity.country}`}</td>
              <td>{opportunity.description}</td>
              <td>{opportunity.requirements}</td>
              <td>{opportunity.isApproved ? "Approved" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpportunitiesTable;
