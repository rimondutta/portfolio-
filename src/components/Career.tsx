import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Organic Nutrition Ltd</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            Investigate on new features and animations Fix frontend bugs detected by Junior
developers Used technologies: HTML, CSS, SCSS, JavaScript jQuery, Bootstrap,
Materializecssetc.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Developer</h4>
                <h5>NGS Group</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Senior Developer skilled in MERN stack, mobile apps, SEO, and CI/CD. Leads full-stack development, mentors teams, and delivers scalable, high-performance solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Marketing Lab</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Web Developer at agency delivering custom websites using MERN stack. Managed multiple client projects, ensured SEO, performance, and responsive design best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
