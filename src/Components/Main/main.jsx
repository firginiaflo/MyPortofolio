const Main = () => {
    return(
<div>
<main className="l-main bd-container">
  <div className="resume">
    <div className="resume_left">
      <section className="home" id="home">
        <div className="home_container section bd-grid">
          <div className="home_data bd-grid">
            <img src="/profile.jpg" alt className="home_img" />
            <h1 class="home_tittle">Firginia Florance Pandoh</h1>
            <h3 className="home_profession">Student</h3>
          </div>
          <div className="home_address bd-grid">
            <span className="home_information">
            <i class="bx bx-map "></i> Tataaran patar, Kecamatan Tondano Selatan Kabupaten Minahasa Provinsi Sulawesi Utara,<br />  Minahasa, Sulawesi Utara, Indonesia
            </span>
            <span className="home_information">
                <i class="bx bx-envelope "></i> florancepandoh04@gmail.com
            </span>
            <span className="home_information">
              <i className="bx bx-phone " /> +62 895-0192-7393
            </span>
          </div>
        </div>
        {/* <i className="bx bx-moon change-theme" title="theme" id="theme-button" onClick={themeButton} /> */}
      </section>
      <section class="social section">
        <h2 class="secition-title">Social</h2>
        <div className="social_container bd-grid">
            <a href="https://www.instagram.com/firginia.flo/" target="_blank" className="social_link">
                <i className="bx bxl-instagram social_icon" />@firginia.flo
            </a>
        </div>
      </section>
      <section className="profile section" id="profile">
        <h2 className="section-title">Profile</h2>
        <p className="profile_description"> Saya Adalah Seorang Mahasiswa</p>
      </section>
      <section className="education section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="education_content bd-grid">
          <div className="education_time">
            <span class="education_rounder"></span>
            <span class="education_line"></span>
          </div>
          <div className="education_data bd-grid">
            <h3 className="education_title">Computer Science</h3>
            <span className="education_studies">Universitas Klabat</span>
            <span className="education_year">2021-2025</span>
          </div>
        </div>
        <div className="education_content bd-grid">
          <div className="education_time">
            <span className="education_rounder" />
            <span class="education_line"></span>
          </div>
          <div className="education_data bd-grid">
            <h3 className="education_title">Teknik Komputer & Jaringan</h3>
            <span className="education_studies">SMK Kristen 1 Tomohon</span>
            <span className="education_year">2017-2020</span>
          </div>
        </div>
        {/* <div className="education_content bd-grid">
    <div className="education_time">
      <span className="education_rounder" />
    </div>
    <div className="education_data bd-grid">
      <h3 className="education_title">SMP KALAWAT</h3>
      <span className="education_studies">Universitas Klabat</span>
      <span className="education_year">2013-2016</span>
    </div>
  </div> */}
      </section>
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills_content bd-grid">
          <ul className="skills_data">
            <li class="skills_name">
                <span class="skills_circle"></span>HTML
            </li>
            <li class="skills_name">
                <span class="skills_circle"></span>CSS
            </li>
            <li class="skills_name">
                <span class="skills_circle"></span>Python
            </li>
            <li class="skills_name">
                <span class="skills_circle"></span>C#
            </li>
          </ul>
          <ul className="skills_data">
          <li class="skills_name">
                <span class="skills_circle"></span>Postman
            </li>
            <li class="skills_name">
                <span class="skills_circle"></span>JavaScript
            </li>
            <li class="skills_name">
                <span class="skills_circle"></span>Git
            </li>
            <li class="skills_name">
                <span class="skills_circle"></span>C++
            </li>
            <li class="skills_name">
                <span class="skills_circle"></span>Data Analyst
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div className="resume_right">
      <section className="experience section" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience_container bd-grid">
          <div className="experience_content">
            <div className="experience_time">
              <span className="experience_rounder" />
              <span className="experience_line" />
            </div>
            <div className="experience_data bd-grid">
              <h3 className="experience_title">To Do List Project</h3>
              <span className="experience_company">From May-July</span>
              <p class="experience_description">Saya berhasil mengelesaikan individual project</p>
            </div>
          </div>
          <div className="experience_content">
            <div className="experience_time">
              <span className="experience_rounder" />
            </div>
            <div className="experience_data bd-grid">
              <h3 className="experience_title">JUNIOR BACK-END DEV IN LUMEN DEV TEAM</h3>
              <span class="experience_company">From November-December 2022</span>
              <p class="experience_description">Saya ikut dalam pengerjaan project FKIP EXAM sebagi Junior Back-End Dev</p>
            </div>
          </div>
        </div>
      </section>
      <section className="certificate section" id="certificate">
        <h2 className="section-title">Certificate</h2>
        <div className="certificate_container bd-grid">
          <div className="certificate_content">
            <h3 className="certificate_title">HackerRank Certificate</h3>
            <p className="certificate_title">Basic JavaScript</p>
          </div>
        </div>
      </section>
      <section className="languages">
        <h2 className="section-title">languages</h2>
        <div className="languages_container">
          <ul className="languages_content bd-grid">
            <li className="languages_name">
              <span className="languages_circle" />Indonesian
            </li>
            <li className="languages_name">
              <span className="languages_circle" />English
            </li>
            <li className="languages_name">
              <span className="languages_circle" />Korean
            </li>
          </ul>
        </div>
      </section>
      <section className="interest section">
        <h2 className="section-title">Interests</h2>
        <div className="interests_container bd-grid">
          <div className="interests_content">
            <i className="bx bx-headphone interest_icon" />
            <span className="interests_name">Music</span>
          </div>
          <div className="interests_content">
            <i className="bx bx-movie interest_icon" />
            <span className="interests_name">Film</span>
          </div>
          <div className="interests_content">
            <i className="bx bxl-internet-explorer interest_icon" />
            <span className="interests_name">Social</span>
          </div>
          <div className="interests_content">
            <i className="bx bx-book interest_icon" />
            <span className="interests_name">Reads</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</main>
<a href="#" className="scrolltop" id="scroll-top">
  <i className="bx bx-up-arrow-alt scrolltop_icon" />
</a>
</div>
    )
}
export default Main;