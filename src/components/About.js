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

          <Experience
            title='Head of User Experience'
            subtitle='Enki Labs Inc. – London, United Kingdom'
            more={[
              'From March 2016 – Full time – Current position',
              'Startup – Less than 10 employees'
            ]}
          >
            <p>Enki is a mobile app, with more than 200k users, which provides content to help developers improve their skills on a daily basis. My job is to advocate for the user and the user experience process. I am primarily in charge of the research, information architecture, user interface, prototyping, visual design and data analysis. I also act as a product owner for some of our features: writing specifications, priorisation and product management. I also help to improve our management tools and processes. Finally, I am responsible for the planning of team building events: organisation of parties (bi-weekly) and ski trip (yearly).</p>
          </Experience>

          <Experience
            title='UX Teacher'
            subtitle='Le Wagon – Paris, France'
            more={[
              'From April 2015 – Occasionally',
              'School – 20-30 students'
            ]}
          >
            <p>Le Wagon is an unconventional school to learn to code in Ruby. Every session brings together passionate people from various industries, often looking to reinvent themselves. As a UX Teacher, I guide students during their final project to help them build the product they dreamed of. I introduce them to user experience methods and organize workshops tailored to each team according to their level of progress.</p>
          </Experience>

          <Experience
            title='UX Designer'
            subtitle='Theodo – Paris, France'
            more={[
              'From November 2015 to March 2016 – Full time',
              'Agency – More than 80 employees'
            ]}
          >
            <p>Theodo is a famous agile tech agency working with startups and large companies. As the first designer in the company, I had to find solutions to implement UX methods in the Theodo agile development process as well as introducing/selling UX to our clients. While working on project, I used all my design skills: user research, information architecture, user interfaces, visual design, prototyping and front end development. I was also in charge of some of the team building events (cinema nights, Christmas party) and internal communication (branded hoodies, powerpoint presentations).</p>
          </Experience>

          <Experience
            title='UX/UI Designer and Front End Developer'
            subtitle='Freelance – Paris, France'
            more={[
              'From May 2015 to November 2015 – Full time',
              '7+ clients'
            ]}
          >
            <p>Some of my missions: establishment of UX processes in agile projects, iterations on an MVP, introduction to UX Design and projects support, interface and PAO for a software dedicated to jurists and lawyers, visual identity, teaser websites.</p>
          </Experience>

          <Experience
            title='UX Designer'
            subtitle='Agorize – Paris, France'
            more={[
              'From september 2014 to May 2015 – Part time',
              'Startup – Less than 80 employees'
            ]}
          >
            <p>Agorize is an innovation challenge platform which bring online thousands of students, developers and startups. I worked for Agorise part-time, alternating with IESA Multimedia where I was enrolled as an UX student. I was in charge of user experience for both our public and private platforms. I was the only UX designer for the first 6 months and worked closely with the CEO to define new features and re-design old ones. I applied user research methods, improved the information architecture and designed interfaces.</p>
          </Experience>

          <Experience
            title='UI Designer and Front End Developer'
            subtitle='Toxicode – Paris, France'
            more={[
              'From September 2013 to August 2014 – Part time',
              'Agency – Less than 10 employees'
            ]}
          >
            <p>Toxicode is a small company divided in two side: agency and research/development. I worked part-time alternating with Fonderie de l'image where I was studying front-end development and web design. This was my first experience as a front-end developer: I learned to code in HTML, CSS and JavaScript. I worked closely with developers to create education games. I imagined and designed many games as well as digital solutions for our clients (mainly e-commerce).</p>
          </Experience>

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
