import React from 'react';
import { Link } from 'gatsby';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi There! I'm Tushar. I fix and build things. Lots of things, in lots of ways. Some in software, some not. It's what I love to do.
    I'm a full stack software engineer by profession which is to say that I have experience with most parts of SDLC. I'm incredibly good at picking up and mastering new things
     surprising even myself at times.😃`,
  paraTwo: `Currently I'm working for Goldman Sachs on different internal applications which involves me using Java, Python and AngularJs while dealing 
    with MongoDB, Elastic Search, Camunda, Hazelcast and Kafka on a daily basis. I have also worked with Ruby, Elixir and Golang in the past.
    On the devops side I have experience with Gitlab CI/CD, Docker, Kubernetes, Jenkins, Netlify and GCP. 
    Checkout this post to see other technologies I'm familiar with or have worked on in past alongwith more details.
    On the personal side, I'm aiming to learn about compilers and write a toy language this year.
    I'm also trying to pick up writing blogs and musings which I have been stalling for quite a while now.`,
  paraThree: `I've been lately reading up a lot on large scale distributed systems and would be very interested to work on products that are in the process of scaling up. 
  Functional programming is another thing which is quite fascinating to me and I would be very interested in working with FP languages(Elixir❤️, Erlang, Haskell etc.). Other things I'd be
  interested in working on are data science, Systems Programming(C, C++, Rust), IOT, AR/VR related projects.`,
  tldr: `I am a software engineer with experience in building distributed systems using a multitude of different tools. 
  I'm interested in remote based job/freelance offerings.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Tushar', 'Tripathi', 'Software Engineer', 'Javascript', 'ReactJS', 'AngularJS', 'Java', 'Python', 'DSA']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p>
          {pageText.paraThree}
        </p>
        <p>
          <b>TLDR;</b>
          {' '}
          {pageText.tldr}
          <Link to="/contact"> Contact Me.</Link>
        </p>
      </div>
      {/* <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Mangalore, KA, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row> */}
    </>
  );
};
export default AboutMe;
