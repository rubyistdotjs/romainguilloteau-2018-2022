import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

const i18n = defineMessages({
  switchTo: {
    id: 'home.jobs.applications.switchTo',
    defaultMessage: 'Switch to {appName}',
  },
});

function ApplicationsNavigation({
  intl,
  selectedApplicationIndex,
  applications,
  onChange,
}) {
  const { formatMessage } = intl;
  const list = applications.map((application, index) => {
    const { name } = application;
    const selected = index === selectedApplicationIndex;
    const klass = selected ? 'active' : '';

    return (
      <button
        key={camelCase(name)}
        type="button"
        title={formatMessage(i18n.switchTo, { appName: name })}
        className={`step ${klass}`}
        onClick={() => onChange(index)}
      />
    );
  });

  return <div className="flex flex-row">{list}</div>;
}

ApplicationsNavigation.propTypes = {
  intl: intlShape.isRequired,
  selectedApplicationIndex: PropTypes.number.isRequired,
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default injectIntl(ApplicationsNavigation);
