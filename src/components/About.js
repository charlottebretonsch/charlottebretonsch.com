import React, { PureComponent } from 'react'

import config from '../../articles/site.yml'
import { Experience } from './atoms'

class About extends PureComponent {
  render () {
    return (
      <section className='page about'>
        <aside>
          <h3>I love design.</h3>

          <p>
            Working has always been a pleasure for me. Design brings excitement every day of my life!
          </p>

          <p>
            <strong>6 years of experience</strong><br />
            I worked for 10 different companies, including start-ups and mid-sized companies.
          </p>

          <p>
            <strong>70+ projects</strong><br />
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
            Back when I was a hackathon addict, I quickly learned to cover a wide range of areas. I am able to build products on my own but I prefer working in a team to learn from others and share my knowledge. I cover the full user experience process including UX strategy, <strong>user research, information architecture, interaction design</strong> and interface design. I can code too but I reserve this skill for side-projects only.
          </p>

          <h3>My work experience</h3>

          <Experience
            title='Lead User Experience Designer'
            subtitle='Trussle – London, UK'
            more={[
              'Since October 2017, full time, current position',
              'Mid-sized company, 60 employees'
            ]}
          >
            <p>Trussle is the home of home ownership. Our mission is to help everyone love their journey of owning a home. Disrupting the mortgage industry, we strive to create the very best experience for one of the most important and emotional moments of our lives. I am in charge of:</p>
            <ul>
              <li>
                Using empathy to highlight meaningful problems and spread a user-centric mindset in the company. I organise and lead regular qualitative user sessions involving everyone in the company and translating insights into shareable information which is used as a decision-making tool for each of our projects.
              </li>
              <li>
                Planning and running user experience activities to craft simple, delightful and usable solutions. As well as designing solutions, I plan projects ahead, organise design pairing exercises and lead workshops including people from different parts of the business.
              </li>
              <li>
                Creating and improving user experience processes to create a collaborative working environment.
              </li>
            </ul>
          </Experience>

          <Experience
            title='Senior UX Architect'
            subtitle='Appear Here – London, UK'
            more={[
              'From July 2017 to October 2017, full time',
              'Mid-sized company, 50 employees'
            ]}
          >
            <p>Appear Here is the leading marketplace for retail in the UK. My role was to develop a deep understanding of our users and translate insights into successful products. In 75 days, I brought UX to life by:</p>
            <ul>
              <li>
                Organising bi-weekly qualitative user sessions. I recruited and organised the first regular user sessions. In total, we interviewed 9 users for a £10/user budget which is 5 times lower than the industry standard. Each session was led by me. Anyone from the company could attend as a notetaker or an observer to better understand our user’s needs.
              </li>
              <li>
                Sharing UX progress across the company. I presented to the company 4 projects and posted 3 internal blog posts. I also created a transparent in-depth documentation of every UX initiatives.
              </li>
              <li>
                Involving the team in UX activities. I organised and led ideation workshops during discovery and design phases.
              </li>
            </ul>
          </Experience>

          <Experience
            title='Head of User Experience'
            subtitle='Enki Labs Inc. – London, UK'
            more={[
              'From March 2016 to July 2017, full time',
              'Startup, 10 employees'
            ]}
          >
            <p>Enki is a mobile app, with more than 240k users, which provides content to help developers improve their skills on a daily basis. My role was to advocate for the user and the user experience process. I was:</p>
            <ul>
              <li>Responsible for all stages of design: user research, information architecture, user interface, prototyping, visual design. I improved many aspects of our app which resulted in a higher retention and many positive reviews on Apple and Google stores.</li>
              <li>Product owner of multiple features: competition analysis, specifications, prioritisation, management and validation of the implementation, data analysis.</li>
              <li>Proactive in the continuous improvement of our internal delivery process. For example, I introduced and applied a continuous validation process which dramatically reduced the number of bugs in our app.</li>
              <li>Heavily involved in strategic business decisions as part of the weekly senior management meetings.</li>
              <li>In charge of organising team buildings: Enkithons (bi-weekly), special activities (occasionally) and ski-trip in France (yearly).</li>
            </ul>
          </Experience>

          <Experience
            title='UX Teacher'
            subtitle='Le Wagon – London, UK and Paris, France'
            more={[
              'Since April 2015, 5 days quarterly every year',
              'Bootcamp, 30-40 students'
            ]}
          >
            <p>Le Wagon is an unconventional school to learn how to code in Ruby. Every session brings together passionate people from various industries, often looking to reinvent themselves. My role is to:</p>
            <ul>
              <li>
                Introduce students to user experience methods during a 1h oral presentation.
              </li>
              <li>
                Guide students during their final project and organize workshops tailored to each team according to their level of progress.
              </li>
            </ul>
          </Experience>

          <Experience
            title='UX Designer'
            subtitle='Theodo – Paris, France'
            more={[
              'From November 2015 to March 2016, full time',
              'Agency, 80 employees'
            ]}
          >
            <p>Theodo is a famous agile tech agency working with startups and large companies. I was in charge of: </p>
            <ul>
              <li>Implementing UX methods in Theodo’s process and work on all design stages from the research to the front-end implementation of our client’s products.</li>
              <li>Introducing and upselling user experience to clients (eg. Societe Generale) during sales meetings as well as provide time estimations and budget.</li>
              <li>Managing the design process with our clients: organise meetings and workshops, update budget/timing and share my progress on a daily basis.</li>
              <li>Team buildings (cinema nights, Christmas party) and internal communication (branded hoodies, presentations for sales meetings).</li>
            </ul>
          </Experience>

          <Experience
            title='UX/UI Designer and Front End Developer'
            subtitle='Freelance – Paris, France'
            more={[
              'From May 2015 to November 2015, full time',
              '7+ clients'
            ]}
          >
            <p>Some of my missions: establishment of UX processes in agile projects, iterations on an MVP, introduction to UX Design and projects support, interface and PAO for a software dedicated to jurists and lawyers, visual identity, teaser websites.</p>
          </Experience>

          <Experience
            title='UX Designer'
            subtitle='Agorize – Paris, France'
            more={[
              'From September 2014 to May 2015, part time',
              'Mid-sized company, 50+ employees'
            ]}
          >
            <p>Agorize is an innovation challenge platform which brings online thousands of students, developers and startups. I worked for Agorise part-time, alternating with IESA Multimedia where I was enrolled as a UX student. I was in charge of user experience for both our public and private platforms. I was the only UX designer for the first 6 months and worked closely with the CEO to define new features and redesign old ones. I applied user research methods, improved the information architecture and designed interfaces.</p>
          </Experience>

          <Experience
            title='UI Designer and Front End Developer'
            subtitle='Toxicode – Paris, France'
            more={[
              'From September 2013 to August 2014, part time',
              'Agency, 10 employees'
            ]}
          >
            <p>Toxicode is a small company divided into two sides: agency and research/development. I worked part-time alternating with Fonderie de l'image where I was studying front-end development and web design. This was my first experience as a front-end developer: I learned to code in HTML, CSS and JavaScript. I worked closely with developers to create educational games. I imagined and designed many games as well as digital solutions for our clients (mainly e-commerce).</p>
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
