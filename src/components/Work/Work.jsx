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
const GithubIconFront = () => {
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
      <title>Frontend</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
};
const GithubIconBack = () => {
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
      <title>Backend</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
};
const GithubIconAdmin = () => {
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
      <title>Admin panel</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
};

const VideoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-play-fill"
      viewBox="0 0 14 14"
    >
      <title>Video</title>
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />{" "}
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
              <div className="pt-4">
                <p className="project_overline">Featured Project</p>
                <h3 className="project_title">
                  <a href="" target="_blank">
                    MERN E-Commerce App
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                    Full Stack e-commerce app created using Node.js with a REST
                    API and MongoDB in the Backend. HTML, CSS, React.js,
                    Bootstrap, and Material UI in Both Frontend and Admin Panel.
                    <br />
                    <u>
                      <b>User</b>
                    </u>{" "}
                    can create an account, browse all products, and add many
                    products to the cart, add products to wishlist, compare two
                    products, read blogs and give feedback ...
                    <br />
                    <u>
                      <b>Admin</b>
                    </u>{" "}
                    can manage the products, users, coupons and manage blogs. He
                    can also manage the orders in my application.
                  </p>
                </div>
                <ul className="project_techs">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Express</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Material UI</li>
                  <li>Bootstrap</li>
                </ul>
                <div className="project_links">
                  <a
                    href="https://github.com/Mr-Badr/mern-ecommerce-frontend"
                    target="_blank"
                  >
                    <GithubIconFront />
                  </a>
                  <a
                    href="https://github.com/Mr-Badr/mern-ecommerce-backend"
                    target="_blank"
                  >
                    <GithubIconBack />
                  </a>
                  <a
                    href="https://github.com/Mr-Badr/mern-ecommerce-admin"
                    target="_blank"
                  >
                    <GithubIconAdmin />
                  </a>
                  <a
                    href="https://photos.google.com/share/AF1QipMEnPo7hvTJc__EgkMlOhVNhr_BvslJO9l_u_TWEcl0L3f1nWZkVsA6dLYwPvlw4Q/photo/AF1QipM2w0LP_eEIkWLe3iSm6eU-Dmg2QZO-tgFbG8ql?key=by1FemFpVFg5cmt0bHpELWczS2xuSjFkeEUxZF9R"
                    target="_blank"
                  >
                    <VideoIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="project_image">
              <a href="" target="_blank">
                <div className="img">
                  <img src="/images/mern.png" alt="" />
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
                    Amazon Clone
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                    Full Stack Amazon Clone created using ReactJS with full
                    E-Commerce Functionality. This is a small web app that tries
                    to imitate the desktop web version of amazon site, you can
                    add items to the basket, delete them, and have your user
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
                    Tic-tac-toe Game
                  </a>
                </h3>
                <div className="project_desc">
                  <p>
                    Player-1 starts playing the game and both the players make
                    their moves in consecutive turns. The player who makes a
                    straight 3-block chain wins the game.
                  </p>
                </div>
                <ul className="project_techs">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
                <div className="project_links">
                  <a
                    href="https://github.com/Mr-Badr/Tic-tac-toe"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="https://mr-badr.github.io/Tic-tac-toe/"
                    target="_blank"
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="project_image">
              <a href="" target="_blank">
                <div className="img">
                  <img src="/images/xo.png" alt="" />
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
                  <a
                    href="https://photos.google.com/share/AF1QipNPbSvB6g7rvDezaaj7dX03b2VZY0MvpU5ww3hXw2raH7BfcgNsj3biSf9uWeVbOg/photo/AF1QipNwqhMorAIlo9paIqXgi7D9xqSMwalCb5aU_3OV?key=UTVjTWFhT1VaS2pjUzgxSkN0MF9SVXc4R1VvZ3lR"
                    target="_blank"
                  >
                    <VideoIcon />
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
                  <a
                    href="https://mr-badr.github.io/bank_modern_app/"
                    target="_blank"
                  >
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
