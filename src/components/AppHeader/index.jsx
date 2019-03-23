import React from 'react';

import Me from './Me';
import SocialLinkList from './SocialLinkList';

function AppHeader() {
  return (
    <div className="container flex justify-between align-center pt-8 pb-20">
      <Me />
      <SocialLinkList />
    </div>
  );
}

export default AppHeader;
