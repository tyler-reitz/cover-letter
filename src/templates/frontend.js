const general = {
  slugs: {
    company: 'What is the name of the company',
    addressee: 'What is the name of the addressee',
    listing: 'Where is the listing from'
  },
  letter: function({company, addressee, listing}) {
    return `Hello ${addressee},

I’m a Los Angeles (DTLA) based UX Designer, turned Front-End Developer, turned Fullstack Engineer with ~3 years experience working with JS libs/frameworks and 1+ year into completely focusing on the React ecosystem. 

I can work with all of the following technologies (and have taught them to students): Redux, React Native, React Router, SSR, REST APIs, GraphQL, Webpack, Jest/Mocha, Styled Components, CSS-in-JS, CSS Modules and anything else the community can come up with. 

I’ve also tried to remained as framework-agnostic as possible by keeping focus on competing frameworks, the native language of the web itself, and its associated technologies.

I’m reaching out to you today on ${listing} because I think ${company}’s core mission aligns perfectly with my core technical competencies and professional interests.

If your interest is at all piqued by what you’ve read so far feel free to reach out anytime that’s convenient.

Looking Forward To It,
Tyler Reitz
`;
  }
}

module.exports = general