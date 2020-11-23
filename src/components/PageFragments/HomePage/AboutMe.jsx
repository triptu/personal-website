import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi There! My name is Tushar Tripathi. I build and fix things. Lots of things, in lots of ways. Some in software, some not. It's what I love to do.
    I'm a full stack software engineer by profession which is to say that I have experience with most parts of SDLC.`,
  paraTwo: `Currently I'm working on an application which involves me using Java, Python and AngularJs while dealing 
    with MongoDB, Elastic Search, Camunda, Hazelcast and Kafka on a daily basis. I have aso worked with Ruby, Elixir and Golang in the past.
    On the devops side I have experience with Gitlab CI/CD, Docker, Kubernetes, Jenkins, Netlify and GCP. 
    Checkout this post to see other technologies I'm familiar with or have worked with in past.
    In personal projects, I'm working on building a Themed programming language to learn more about compilers and low level OS details. 
    I'm also trying to pick up writing blogs and musings which I have been stalling for quite a while now.`,
  paraThree: `I've been lately reading up on large scale distributed systems and would be very interested to work on products which are in process of scaling up. 
  Functional programming is another thing which is quite fascinating to me, do reach out if you have a suitable opening(Elixir❤️, Erlang, Haskell etc.). Other things I'd be
  interested in working on are data science, Systems Programming(C, C++, Rust), IOT, AR/VR related projects. I'm more inclined towards remote based job offerings.`
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
      </div>
      <Row gutter={[20, 20]}>
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
      </Row>
    </>
  );
};
export default AboutMe;
