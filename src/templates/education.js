const general = {
  slugs: {
    company: 'What is the name of the company',
    addressee: 'What is the name of the addressee',
    listing: 'Where is the listing from'
  },
  letter: function({company, addressee, listing}) {
    return `Hey ${addressee},

I'm currently serving as a TA at UCLA Extension’s Coding bootcamp and am looking to take on additional teaching responsibility. 

I have experience leading classroom discussions, guiding inquiry, emphasizing the meta-skills and core concepts of software engineering, and supporting and providing valuable feedback to students in their projects and challenges.

Additionally, I have taught all of the following technologies: 
  
  * Both client & server-side Javascript – including frameworks like React/Native and Angular
  * Scalable, RESTful backends and Node server-side frameworks like Express
  * Data modeling and persistence with SQL/NoSQL db’s like MySQL and Mongo
  * A test-first, CI/CD delivery approach across multiple platforms and devices

I’m reaching out to you today on ${listing} because I'd love the opportunity to share all accumulated knwowledge with ${company}’s students.

If this sounds like a good fit, don't hesitate to reach out!

Best,
Tyler Reitz
`
  }
}

module.exports = general