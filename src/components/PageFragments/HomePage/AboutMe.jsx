import React from 'react';
import { Link } from 'gatsby';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `I'm Tushar. I fix and build things. Lots of things, in lots of ways. Some in software, some not. It's what I love to do.
    I'm a full stack software engineer by profession which is to say that I have experience with most parts of SDLC. I'm incredibly good at picking up and mastering new things.`,
  paraTwo: `I've two years of professional and much more years of personal experience in the tech world.
  I first encountered programming at the age of 10 years trying to figure out Logo and QBasic and have been fascinated ever since. 
  Post that I self learned Visual Basic, learned Java in junior high school, 
  and Python in senior High School. Thereafter, I did my undergradutaion from BITS Pilani where I worked on several different personal and course related projects and got the 
  chance to learn about behind the scenes details of how things work.`,
  paraThree: `Currently I'm working for Goldman Sachs on different internal applications as a full stack developer which involves me using Java, Python and AngularJs while dealing 
    with MongoDB, Elastic Search, Camunda, Hazelcast and Kafka on a daily basis. Please checkout my resume for more details and other technologies I'm familiar with.
    On the personal side, I'm aiming to learn about interpreters and write a toy language this year.
    I'm also trying to pick up writing blogs and musings which I have been stalling for quite a while now.`,
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
