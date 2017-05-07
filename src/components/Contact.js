import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Contact extends PureComponent {
  render () {
    return (

      <section className="page contact">

        <aside>

          <h3>Feel free to contact me</h3>

          <p>I am currently working for Enki in London. Nonetheless, I am always looking for new opportunities to have fun and gain experience.</p>

          <p>Whether you want to talk about a project, give me some feedback on my portfolio or want to hire me, don't hesitate to drop me an email:</p>

          <p><strong>charlottebretonsch@gmail.com</strong></p>

          <Link to="mailto:charlottebretonsch@gmail.com" className="button">Send me an email</Link>

        </aside>

      </section>

    );
  }
}

export default Contact
