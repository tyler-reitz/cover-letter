const general = {
  slugs: {
    company: 'What is the name of the company',
    addressee: 'What is the name of the addressee',
    listing: 'Where is the listing from'
  },
  letter: function({company, addressee, listing}) {
    return`Hello ${addressee},

I’m a DTLA-based, Full-Stack Javascript Developer with ~3 years experience working with JS libs/frameworks and 1+ year into completely focusing on the React ecosystem. 

I can work with all of the following technologies (and have taught them to students): Redux, React Native, React Router, SSR, REST APIs, GraphQL, Webpack, Jest/Mocha, Styled Components, CSS Modules. Basically, anything the React community can come up with is fair game. 

I’m reaching out to you today on ${listingSource} because I think ${companyName}’s core mission aligns perfectly with my core technical competencies and professional interests.

If your interest is at all piqued by what you’ve read so far feel free to reach out anytime that’s convenient.

Looking Forward To It,
Tyler Reitz

`
  }
}

module.exports = general