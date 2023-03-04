import React from "react";
import "./Work.scss";

const ExternalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-external-link"
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
};

const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-github"
    >
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
};

const Work = () => {
  return (
    <section className="work scroll-mt-10" id="work">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="700">
          Some Things I’ve Built
        </h2>

        <ul className="inner">
          <li className="work-item" data-aos="fade-up" data-aos-duration="700">
            <div className="project_content">
              <div>
                <p className="project_overline">Featured Project</p>
                <h3 className="project_title">
                  <a href="" target="_blank">
                    Amazon Clone
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                    Full Stack Amazon Clone which created using ReactJS with
                    full E-Commerce Functionality. This is a small web app that
                    tries to imitate the desktop web version of amazon site, you
                    can add items to the basket, delete them, and have your user
                    authentification feature thanks to Firebase.
                  </p>
                </div>
                <ul className="project_techs">
                  <li>React</li>
                  <li>Express</li>
                  <li>Firebase</li>
                  <li>Context API</li>
                  <li>Stripe </li>
                </ul>
                <div className="project_links">
                  <a
                    href="https://github.com/Mr-Badr/Full-Stack-Amazon-Clone"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                  <a href="https://challenge-edb35.web.app/" target="_blank">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="project_image">
              <a href="" target="_blank">
                <div className="img">
                  <img src="/images/work1.png" alt="" />
                </div>
              </a>
            </div>
          </li>

          <li className="work-item" data-aos="fade-up" data-aos-duration="700">
            <div className="project_content">
              <div>
                <p className="project_overline">Featured Project</p>
                <h3 className="project_title">
                  <a href="" target="_blank">
                    Intern Management System
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                    This is an Intern Management System that allows you to:{" "}
                    <br /> &nbsp;&nbsp;&nbsp;•&nbsp; Create trainees in the
                    database <br />
                    &nbsp;&nbsp;&nbsp;•&nbsp; Give each one of them a special QR
                    code <br />
                    &nbsp;&nbsp;&nbsp;•&nbsp; Check attendance by QR code <br />
                    &nbsp;&nbsp;&nbsp;•&nbsp; Update the status in the database
                  </p>
                </div>
                <ul className="project_techs">
                  <li>React</li>
                  <li>Express</li>
                  <li>QR Code Reader & Scanner</li>
                  <li>MySql</li>
                </ul>
                <div className="project_links">
                  <a
                    href="https://github.com/Mr-Badr/Management-system-using-QR-code-React"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                  <a href="" target="_blank">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="project_image">
              <a href="" target="_blank">
                <div className="img">
                  <img src="/images/work2.png" alt="" />
                </div>
              </a>
            </div>
          </li>

          <li className="work-item" data-aos="fade-up" data-aos-duration="700">
            <div className="project_content">
              <div>
                <p className="project_overline">Featured Project</p>
                <h3 className="project_title">
                  <a href="" target="_blank">
                    Modern Bank website
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                    This is a Fully Responsive website with Modern UI/UX in
                    React JS with Tailwind CSS. consisting of a hero section,
                    high-quality assets and gradients, business stats, reusable
                    feature sections with call-to-action buttons, testimonials,
                    and more!
                  </p>
                </div>
                <ul className="project_techs">
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                </ul>
                <div className="project_links">
                  <a
                    href="https://github.com/Mr-Badr/bank_modern_app"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                  <a href="mr-badr.github.io/bank_modern_app/" target="_blank">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="project_image">
              <a href="" target="_blank">
                <div className="img">
                  <img src="/images/work3.png" alt="" />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Work;
