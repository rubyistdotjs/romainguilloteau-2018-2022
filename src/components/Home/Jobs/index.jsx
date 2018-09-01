import React, { Component } from 'react';
import Job from './Job';
import JobLight from './JobLight';
import Certification from './Certification';
import jobsJSON from '../../../database/jobs.json';
import certificationsJSON from '../../../database/certifications.json';

export default class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      certifications: [],
    };
  }

  componentDidMount() {
    this.setState({
      jobs: jobsJSON,
      certifications: certificationsJSON,
    });
  }

  render() {
    const sortedJobs = this.state.jobs.sort(
      (a, b) => b.startedAt - a.startedAt,
    );
    const sortedCertifications = this.state.certifications.sort(
      (a, b) => b.startedAt - a.startedAt,
    );
    const lastJob = sortedJobs[sortedJobs.length - 1] || null;

    function jobComponent(job) {
      if (job.applications && job.applications.length > 0) {
        return <Job key={job.startedAt} job={job} />;
      }
      return <JobLight key={job.startedAt} job={job} />;
    }

    return (
      <section className="bg-grey-lightest">
        <div className="container">
          {sortedJobs.slice(0, -1).map(job => jobComponent(job))}

          <div className="flex flex-col lg:flex-row">
            {lastJob && <JobLight key={lastJob.startedAt} job={lastJob} />}

            <div className="lg:pl-4">
              {sortedCertifications.map(cert => (
                <Certification key={cert.startedAt} certification={cert} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
