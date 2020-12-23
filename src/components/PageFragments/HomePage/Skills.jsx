import React from 'react';
import { Row, Col } from 'antd';

const SkillsGroup = ({ title, items }) => {
  const itemsStr = items.join(', ');
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={24}>
        <span style={{ 'font-weight': 'bold' }}>
          {title}
          :
        </span>
        {' '}
        {itemsStr}
      </Col>
    </Row>
  );
};

const Skills = () => (
  <div>
    <h2>I have worked with</h2>
    <SkillsGroup title='Languages' items={['Python', 'Java', 'Javascript', 'Ruby', 'Elixir', 'Golang', 'Matlab', 'Arduino']} />
    <SkillsGroup title='Python' items={['Kivy', 'Tensorflow', 'Flask', 'Requests', 'BeautifulSoup', 'Django']} />
    <SkillsGroup title='Ruby' items={['Ruby on Rails', 'Sidekiq', 'rspec', 'rswag']} />
    <SkillsGroup title='Javascript' items={['AngularJs', 'Angular', 'React', 'Preact', 'jQuery']} />
    <SkillsGroup title='Java' items={['Spring', 'Micrometer', 'Jersey', 'JUnit', 'Mockito']} />

    <h2>Other Interests</h2>
    Travel, Trek, Photography, Music, Reading, Chess, Speedcubing, Reddit, Tech Blogs
  </div>
);

export default Skills;
