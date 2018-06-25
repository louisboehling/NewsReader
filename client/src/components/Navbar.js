import React from 'react';

function Nav() {
  return (
    <nav class="navbar">
      <div className="container">
        <span class="navbar-brand mb-0 h1">BBC World News Headlines</span>
        <span id="savedArticlesLink"><a href="">Saved</a></span>
      </div>
    </nav>
  );
}

export default Nav;