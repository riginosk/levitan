import React from 'react';
import SmoothScroll from './smooth-scroll';

const Layout = ({ location, title, children }) => {
 
  return (
    <div>
      < SmoothScroll/>
    <div className="rl-main">
      <main>
        <div className="rl-wrapper">
          {children}
        </div>
      </main>
    </div>
    </div>
  )
}


export default Layout
