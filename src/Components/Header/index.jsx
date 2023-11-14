const Header = () => {
    return(
      <header class="l-header" id="header">
      <nav class="nav bd-container">
          <a href="#" class="nav_logo">Jacky</a>
  
          <div class="nav_menu" id="nav-menu">
              <ul class="nav_list">
                  <li class="nav_item">
                      <a href="#home" class="nav_link" active-link>
                          <i class="bx bx-home"></i>Home
                      </a>
                  </li>
  
                  <li class="nav_item">
                      <a href="#profile" class="nav_link">
                          <i class="bx bx-user"></i>Profile
                      </a>
                  </li>
  
                  <li class="nav_item">
                      <a href="#education" class="nav_link">
                          <i class="bx bx-book nav_icon"></i>Education
                      </a>
                  </li>
  
                  <li class="nav_item">
                      <a href="#skills" class="nav_link">
                          <i class="bx bx-receipt nav_icon"></i>skill
                      </a>
                  </li>
  
                  <li class="nav_item">
                      <a href="#experience" class="nav_link">
                          <i class="bx bx-briefcase-alt nav_icon"></i>Experience
                      </a>
                  </li>
  
                  <li class="nav_item">
                      <a href="#certificates" class="nav_link">
                          <i class="bx bx-award nav_icon"></i>Certificates
                      </a>
                  </li>
              </ul>
          </div>
  
          <div class="nav_toggle" id="nav-toggle">
              <i class="bx bx-grid-alt"></i>
          </div>
      </nav>
  </header>
    )
  }
  
  export default Header;