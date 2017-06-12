import React, { PureComponent } from 'react'

import config from '../../site.yml'
import { Experience } from './atoms'

class About extends PureComponent {
  render () {
    return (
      <section className='page about'>
        <aside>
          <h3>I love design.</h3>

          <p>
            Working has always been a pleasure for me. Design brings excitment everyday of my life!
          </p>

          <p>
            <strong>5 years of experience</strong><br />
            I worked for 7 different companies, including start-ups and mid-sized companies.
          </p>

          <p>
            <strong>65+ projects</strong><br />
            I designed dozens of projects, in various industries: health, insurance, technology, bank, education, e-commerce, travel...
          </p>

          <p>
            <strong>20+ hackathons</strong><br />
            I teamed up with lots of developers and won 11 prizes, including 5 first place.
          </p>

          <a className='button' href='https://charlottebretonsch.com/resume.pdf' target='blank'>Download my resume</a>
          <a className='button' href='https://www.linkedin.com/in/charlotte-breton-schreiner' target='blank'>View my LinkedIn</a>
          <a className='button' href='https://github.com/charlottebretonsch' target='blank'>View my GitHub</a>
        </aside>

        <main>
          <h3>My skills</h3>

          <p>
            As a hackathon addict, I quickly learned to cover a wide range of areas. I am able to build products on my own but I prefer working in a team to learn from others and share my knowledge. Although I initially specialized in <strong>user interface</strong> and <strong>visual design</strong>, I can cover the full user experience process including <strong>user research</strong> and <strong>information architecture</strong>. I am fond of <strong>code</strong> and love to produce my designs.
          </p>

          <h3>My work experience</h3>

          { config.about.experiences.map((exp, index) =>
            <Experience {...exp} key={index} />
          )}

          <h3>My education</h3>

          { config.about.education.map((exp, index) =>
            <Experience {...exp} key={index} />
          )}

        </main>
      </section>
    )
  }
}

export default About
