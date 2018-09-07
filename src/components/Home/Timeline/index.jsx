import React from 'react';
import JobList from './JobList';
import CertificationList from './CertificationList';

export default function Timeline() {
  return (
    <section className="container">
      <JobList />
      <CertificationList />
    </section>
  );
}
