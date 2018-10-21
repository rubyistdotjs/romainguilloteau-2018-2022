import React from 'react';
import JobList from './JobList';
import CertificationList from './CertificationList';

function Timeline() {
  return (
    <section className="container py-12">
      <JobList />
      <CertificationList />
    </section>
  );
}

export default Timeline;
