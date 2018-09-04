import React from 'react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import { pickBy, isString } from 'lodash';
import { isEmail, isLength, escape } from 'validator';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        email: '',
        content: '',
        captcha: null,
      },
      messageErrors: {},
      _loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handeRecaptchaVerify = this.handeRecaptchaVerify.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail(email) {
    if (!email) return 'Veuillez entrer votre adresse email.';
    if (!isEmail(email)) return "L'adresse email n'est pas valide";
    return null;
  }

  validateContent(content) {
    if (!isLength(content, { min: 42 })) return 'Votre message est trop court';
    if (!isLength(content, { max: 42000 })) {
      return 'Votre message est trop long';
    }
    return null;
  }

  validate(message) {
    return {
      email: this.validateEmail(message.email),
      content: this.validateContent(message.content),
    };
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState((prevState) => {
      const message = Object.assign({}, prevState.message);
      message[name] = value;
      return { message };
    });
  }

  handeRecaptchaVerify(hash) {
    this.setState({ captcha: hash });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { message } = this.state;
    const errors = this.validate(message);

    if (errors.email !== null || errors.content !== null) {
      this.setState({ messageErrors: pickBy(errors, isString) });
      return false;
    }

    this.setState({ _loading: true });
    setTimeout(() => {
      this.setState({ _loading: false });
    }, 2000);

    // axios.post('https://www.romainguilloteau.com/messages', {
    //   email: message.email,
    //   message: message.content,
    //   captcha: message.captcha,
    // }).then((res) => {

    // }).catch((error) => {

    // });
  }

  render() {
    const { message, messageErrors, _loading } = this.state;
    const { email, content } = message;

    const emailValid = this.validateEmail(email) === null;
    const contentValid = this.validateContent(content) === null;

    return (
      <section className="bg-white py-8">
        <div className="container py-8 mx-auto flex flex-col align-center">
          <h2 className="text-dark text-4xl font-heading font-bold tracking-tight antialiased leading-none mb-12">
            Contact
          </h2>

          <form className="w-full max-w-md" onSubmit={this.handleSubmit}>
            <input
              placeholder="Adresse email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={`field ${email.length > 0 && !emailValid ? 'invalid' : ''}`}
              disabled={_loading}
            />
            {messageErrors.email && (
              <p className="field-error">
                {messageErrors.email}
              </p>
            )}
            <textarea
              placeholder="Message"
              rows="8"
              name="content"
              value={content}
              onChange={this.handleChange}
              className={`field ${content.length > 0 && !contentValid ? 'invalid' : ''}`}
              disabled={_loading}
            />
            {messageErrors.content && (
              <p className="field-error">
                {messageErrors.content}
              </p>
            )}

            <div className="mb-3">
              <Recaptcha
                sitekey="6Le5um0UAAAAALXeSUOT_O61sOmseb1VXICcvGXk"
                render="explicit"
                verifyCallback={this.handeRecaptchaVerify}
              />
            </div>
            <input
              type="submit"
              value="Envoyer"
              className="btn btn-blue"
              disabled={_loading}
            />
          </form>
        </div>
      </section>
    );
  }
}
