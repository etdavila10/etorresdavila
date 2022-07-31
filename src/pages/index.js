import React from "react";
import Layout from "../components/layout";
import Welcome from "../components/welcome";
import PublicationSection from "../components/publicationSection";
import ProjectSection from "../components/projectSection";
import TeachingSection from "../components/teaching";

// Landing Page
const IndexPage = () => {
  return (
    <Layout>
      <title>Eduardo Torres Davila</title>
      <Welcome />
      <PublicationSection />
      <ProjectSection />
      <TeachingSection />
    </Layout>
  );
};

export default IndexPage;
