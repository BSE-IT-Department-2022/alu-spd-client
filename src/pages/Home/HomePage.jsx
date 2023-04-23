import React from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import Layout from "../../components/Layout/Layout";

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
      <h1>Weclome {currentUser.firstName}</h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        aspernatur quam, placeat pariatur exercitationem consequatur tempore
        reiciendis similique facilis fuga, tenetur alias accusamus voluptate,
        facere error adipisci quibusdam laboriosam accusantium.
      </h1>
    </Layout>
  );
}

export default HomePage;
