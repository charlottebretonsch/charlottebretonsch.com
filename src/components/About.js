import React, { PureComponent } from 'react'

import config from '../../site.yml'
import { Experience } from './atoms'

class About extends PureComponent {
  render () {
    return (
      <section className="page about">
        <aside>
          <h3>I love design.</h3>

          <p>
            Working has always been a pleasure for me... Design brings excitment everyday of my life!
          </p>

          <p>
            <strong>5 years of experience</strong><br/>
            I worked for 8 different companies, including start-ups with less than 10 employees.
          </p>

          <p>
            <strong>65+ projects</strong><br/>
            I designed hundred of projects, in various industries: health, insurance, technology, bank, education, e-commerce, travel...
          </p>

          <p>
            <strong>16 hackathons</strong><br/>
            I teamed up with lots of developers and won 11 prices, including 5 first place.
          </p>

          {/* TODO: add link to linkedin */}
          <a className="button" href="" target="blank">My LinkedIn</a>
          <a className="button" href="https://github.com/charlottebretonsch" target="blank">My GitHub</a>
        </aside>

        <main>
          <h3>My skills</h3>

          <p>
            Hackathons addict, I quickly learned to cover a wide range of areas. I am able to build products on my own but I prefer working as a team to share my knowledge and learn from others. Although I am initially specialized in <strong>user interface</strong> and <strong>visual design</strong>, I can cover the full user experience process including #[strong user research] and <strong>information architecture</strong>. I am fond of <strong>code</strong> and love to produce my designs.
          </p>

          <h3>My work experience</h3>

          { config.cv.experiences.map(exp =>
            <Experience {...exp} />
          )}

          <h3>My education</h3>

          { config.cv.education.map(exp =>
            <Experience {...exp} />
          )}
        </main>
      </section>
    )
  }
}

export default About
