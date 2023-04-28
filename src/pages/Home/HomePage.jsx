import React from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import Layout from "../../components/Layout/Layout";
import CreateOpportunityForm from "../../components/Common/Opportunity/CreateOpportunity";
import OpportunitiesTable from "../../components/Common/Opportunity/OpportunitesTable";
import Spinner from "../../components/Spinner";

function HomePage() {
  const { currentUser, loading } = useCurrentUser();

  if (loading) {
    return <Spinner />;
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
