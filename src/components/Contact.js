import React, { PureComponent } from 'react'

class Contact extends PureComponent {
  render () {
    return (

      <section className='page contact'>

        <aside>

          <h3>Feel free to contact me</h3>

          <p>
            I am currently working as Lead User Experience Designer for Trussle in London, UK.
          </p>

          <p>Whether you want to talk about a project, give me feedback on my portfolio or simply have a chat, don't hesitate to drop me an email:</p>

          <p><strong>charlottebretonsch@gmail.com</strong></p>

          <a href='mailto:charlottebretonsch@gmail.com' className='button'>Send me an email</a>

        </aside>

      </section>

    )
  }
}

export default Contact
