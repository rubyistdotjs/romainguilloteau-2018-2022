import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

function Title({ title, fromDate, toDate, atPlace }) {
  const from = new Date(fromDate).getFullYear();
  const to = toDate ? new Date(toDate).getFullYear() : null;

  return (
    <div className="mb-12">
      <h3 className="text-black text-2xl lg:text-3xl font-bold tracking-tight leading-none">
        {title}
      </h3>
      <span className="block text-black text-xl lg:text-2xl font-semibold leading-tight mt-1">
        {to ? (
          <React.Fragment>
            <FormattedMessage
              id="home.timeline.dateFrom"
              defaultMessage="from"
            />{' '}
            <strong>{from}</strong>{' '}
            <FormattedMessage id="home.timeline.dateTo" defaultMessage="to" />{' '}
            <strong>{to}</strong>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FormattedMessage
              id="home.timeline.dateSince"
              defaultMessage="since"
            />{' '}
            <strong>{from}</strong>
          </React.Fragment>
        )}
        {atPlace && (
          <span>
            {' - '}
            <strong>{atPlace}</strong>
          </span>
        )}
      </span>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fromDate: PropTypes.number.isRequired,
  toDate: PropTypes.number,
  atPlace: PropTypes.string,
};

Title.defaultProps = {
  toDate: null,
  atPlace: null,
};

export default Title;
