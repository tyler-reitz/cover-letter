const general = {
  slugs: {
    company: 'What is the name of the company',
    addressee: 'What is the name of the addressee',
    listing: 'Where is the listing from'
  },
  letter: function({company, addressee, listing}) {
    return `Hey ${addressee},
    
I’m a Los Angeles (DTLA) based UX Designer, turned Front-End Developer, turned Full-Stack Engineer who's worked for a wide variety of clients and companies—from the scrappiest-of-startups on up to the top of the Fortune 500 (and everywhere in between).

My expertise runs anywhere Javascript does, beginning with client-side technologies like React/React-Native + CSS-in-JS, extends to creating scalable backends with REST apis, GraphQL, and Node server-side frameworks like Express, handles data modeling and persistence with SQL/NoSQL db’s like MySQL and Mongo, and ultimately, ends with a test-first and CI/CD delivery approach across multiple platforms and devices.

I’m reaching out to you today on ${listing} because I think ${company}’s core mission aligns perfectly with my core technical competencies and professional interests.

If your interest is at all piqued by what you’ve read so far feel free to reach out anytime that’s convenient.

Best,
Tyler Reitz
`
  }
}

module.exports = general