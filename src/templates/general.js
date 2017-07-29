const general = {
  slugs: {
    company: 'What is the name of the company',
    addressee: 'What is the name of the addressee',
    listing: 'Where is the listing from'
  },
  letter: function({company, addressee, listing}) {
    return`Hey ${addressee},
    
I’m an experienced Full-Stack Javascript Developer and UX-Designer based in Los Angeles (DTLA) who's worked with the lowliest-of-startups on up to the top of the Fortune 500 (and everywhere in between).

My expertise runs anywhere Javascript does, beginning with the client, extending to the server/database layer, and ultimately, ending with delivery across multiple platforms and devices.

Like most, I particularly enjoy working with React and its accompanying ecosystem. However, I’ve have tried to remain as framework-agnostic as possible by keeping focus on competing frameworks, the native language of the web itself, and its associated technologies.

I’m reaching out to you today on ${listing} because I think ${company}’s core mission aligns perfectly with my core technical competencies and professional interests.

If your interest is at all piqued by what you’ve read so far feel free to reach out anytime that’s convenient.

Looking Forward To It,
Tyler Reitz
`
  }
}

module.exports = general