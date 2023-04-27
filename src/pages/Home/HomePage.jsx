import React from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import Layout from "../../components/Layout/Layout";
import CreateOpportunityForm from "../../components/Common/Opportunity/CreateOpportunity";
import OpportunitiesTable from "../../components/Common/Opportunity/OpportunitesTable";

function HomePage() {
  const { currentUser, loading } = useCurrentUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <div>Error: Unable to fetch user information.</div>;
  }

  return (
    <Layout user={currentUser}>
      <OpportunitiesTable currentUser={currentUser} />
      <CreateOpportunityForm currentUser={currentUser} />
    </Layout>
  );
}

export default HomePage;
