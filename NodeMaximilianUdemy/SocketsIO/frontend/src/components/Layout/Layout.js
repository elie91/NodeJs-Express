import React, {Fragment} from 'react';

import './Layout.css';

const layout = ({header, mobileNav, children}) => (
    <Fragment>
      <header className="main-header">{header}</header>
      {mobileNav}
      <main className="content">{children}</main>
    </Fragment>
);

export default layout;
