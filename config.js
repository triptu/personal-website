module.exports = {
  pathPrefix: '',
  siteUrl: 'https://tushartripathi.netlify.app/',
  siteTitle: 'Tushar Tripathi',
  siteDescription: 'Logbook of a software engineer',
  author: 'Tushar Tripathi',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://tushartripathi.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/triptu',
    linkedin: 'https://www.linkedin.com/in/tushar297',
    instagram: 'https://www.instagram.com/musicinchaos/',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/5983ac61-7def-47a5-a682-ca455663ecf6',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to add styles to HTML.',
      color: '#43ace0',
    },
    programming: {
      name: 'programming',
      description: 'My thoughts on different things tech.',
      color: '#43ace0',
    },
    interview: {
      name: 'interview',
      description: 'My experience with giving and taking interviews.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    elixir: {
      name: 'elixir',
      description: 'A functional programming language based on Erlang VM.',
      color: '#f9c646',
    },
  },
};
