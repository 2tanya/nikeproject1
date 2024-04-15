const Navigation = () => {
    return (
        <nav className="navbar h-nav-resp">
      <ul className="nav-list v-class-resp">
        <div className="logo"><img src="/images/brand_logo.png" alt="logo1" /></div>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="rightNav v-class-resp">
        <input type="text" name="search" id="search" />
        <button className="btn btn-sm">search</button>
      </div>
      </nav>
    )
    
}

export default Navigation;