import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import { availableLocales } from '../../utils/locales';
import messages from './Footer.messages';

function Footer({ intl, history }) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const { locale, formatMessage } = intl;

  function handleMenuOpen(event) {
    setMenuAnchorEl(event.currentTarget);
  }

  function handleMenuSelect(selectedLocale) {
    history.push(`/${selectedLocale}`);
    setMenuAnchorEl(null);
  }

  function handleMenuClose() {
    setMenuAnchorEl(null);
  }

  return (
    <footer className="bg-grey-lightest">
      <div className="container py-8">
        <button
          aria-owns={menuAnchorEl ? 'menu-language' : undefined}
          aria-haspopup="true"
          onClick={handleMenuOpen}
          className="btn btn-outline-grey"
        >
          <FormattedMessage id="language" defaultMessage="English (UK)" />
        </button>
        <Menu
          id="menu-language"
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          {availableLocales.map(availableLocale => (
            <MenuItem
              key={`menu-language-${availableLocale}`}
              selected={locale === availableLocale}
              disableTouchRipple={true}
              onClick={() => handleMenuSelect(availableLocale)}
            >
              {formatMessage(messages[availableLocale])}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </footer>
  );
}

export default injectIntl(withRouter(Footer));
