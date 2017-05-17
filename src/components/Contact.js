import React, { PureComponent } from 'react'

class Contact extends PureComponent {
  render () {
    return (

      <section className='page contact'>

        <aside>

          <h3>Feel free to contact me</h3>

          <p>
            I am currently working for Enki in London and looking out for new job opportunities as a UX/Product designer.
          </p>

          <p>Whether you want to talk about a project, give me feedback on my portfolio or want to hire me, don't hesitate to drop me an email:</p>

          <p><strong>charlottebretonsch@gmail.com</strong></p>

          <a href='mailto:charlottebretonsch@gmail.com' className='button'>Send me an email</a>

        </aside>

      </section>

    )
  }
}

export default Contact
