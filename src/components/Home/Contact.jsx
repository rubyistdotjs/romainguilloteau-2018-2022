import React from 'react';
import axios from 'axios';
import { isEmail, isLength } from 'validator';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailValid: false,
      message: '',
      messageValid: false,
    };

    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleMessageChanged = this.handleMessageChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleEmailChanged(event) {
    const email = event.target.value;
    this.setState({
      emailValid: isEmail(email),
      email,
    });
  }

  handleMessageChanged(event) {
    const message = event.target.value;
    this.setState({
      messageValid: isLength(message, { min: 6 }),
      message,
    });
  }

  handleSubmit(event) {
    if (!this.state.emailValid || !this.state.messageValid) return false;

    axios.post('', {
      email: this.state.email,
      message: this.state.message,
    }).then((res) => {

    }).catch((error) => {

    });
  }

  render() {
    const { email, emailValid, message, messageValid } = this.state;
    const validityClass = (attr, valid) => {
      if (attr.length <= 0) return '';
      return valid ? 'valid' : 'invalid';
    };

    return (
      <section className="bg-white py-8">
        <div className="container py-8 mx-auto flex flex-col align-center">
          <h2 className="font-heading text-5xl text-black pb-8 antialiased font-extrabold">
            Contact
          </h2>
          <p className="text-lg text-green-dark">
            Votre message a bien été envoyé
          </p>

          <form className="w-full max-w-md" onSubmit={this.handleSubmit}>
            <input
              placeholder="Adresse email"
              type="email"
              value={email}
              onChange={this.handleEmailChanged}
              className={`field ${validityClass(email, emailValid)}`}
            />
            <textarea
              placeholder="Message"
              rows="8"
              value={message}
              onChange={this.handleMessageChanged}
              className={`field ${validityClass(message, messageValid)}`}
            />
            <input
              type="submit"
              value="Envoyer le message"
              className="btn btn-indigo"
            />
          </form>
        </div>
      </section>
    );
  }
}
