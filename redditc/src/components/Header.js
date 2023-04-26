import React from 'react';
class Header extends React.Component {
    render() {
      return (
        <header>
          <img src="logo.png" alt="My Reddit Clone Logo" />
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/popular">Popular</a></li>
              <li><a href="/new">New</a></li>
              <li><a href="/subreddits">Subreddits</a></li>
            </ul>
          </nav>
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">Go</button>
          </form>
        </header>
      );
    }
  }
  
  export default Header;