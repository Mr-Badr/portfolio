import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div
        className="about_container"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <h2>About Me</h2>

        <div className="inner">
          <div className="about_text">
            <div>
              <p>
                Hello! My name is Badr Eddine El-Harchali and I enjoy creating
                things that live on the internet and helps out people. My
                interest in programming grew back in 2020 when I decided to
                write a blog, lack of good themes on the platform and thinking
                lot of people will read my blog I decided to make my own
                templates — turns out customizing blogger templates and creating
                new from scratch taught me a lot about the whole front end
                world.
              </p>
              <p>
                I do this because I love the process of turning dreams into
                reality by converting <a>ideas into code</a>. I have a serious
                passion for designing the top-grade UI’s with working logic to
                create a &nbsp;<a>dynamic user experience</a>.
              </p>
              <p>
                I have spent the past year learning top-notch technologies and
                enhancing my skill sets. I have developed some projects that you
                can see on my{" "}
                <a
                  href="https://github.com/Mr-Badr?tab=repositories"
                  rel="badr eddine el harchali github"
                  target="_blank"
                >
                  Github
                </a>{" "}
                page.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <ul className="skill-list">
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>React</li>
              <li>Sql & NoSql</li>
              <li>Node.js</li>
              <li>WordPress</li>
            </ul>
          </div>

          <div className="about_pic">
            <div className="wrapper">
              <img src="/images/badr.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
