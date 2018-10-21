import React from 'react';
// import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import { pickBy, isString } from 'lodash';
import { isEmail, isLength } from 'validator';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

const i18n = defineMessages({
  title: {
    id: 'home.contact.title',
    defaultMessage: 'Contact',
  },
  emailAddressPlaceholder: {
    id: 'home.contact.placeholders.emailAddress',
    defaultMessage: 'Email address',
  },
  emailAddressEmpty: {
    id: 'home.contact.errors.emailAddress.empty',
    defaultMessage: 'Please specify your email address.',
  },
  emailAddressInvalid: {
    id: 'home.contact.errors.emailAddress.invalid',
    defaultMessage: 'The email address is invalid.',
  },
  contentPlaceholder: {
    id: 'home.contact.placeholders.messageContent',
    defaultMessage: 'Message',
  },
  contentTooShort: {
    id: 'home.contact.errors.content.tooShort',
    defaultMessage: 'Your message is too short.',
  },
  contentTooLong: {
    id: 'home.contact.errors.content.tooLong',
    defaultMessage: 'Your message is too long, keep it under 42000 characters.',
  },
  submitMessageBtn: {
    id: 'home.contact.sendMessageBtn',
    defaultMessage: 'Send',
  },
});

class Contact extends React.Component {
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

  validateMessageEmail() {
    const { formatMessage } = this.props.intl;
    const { email } = this.state.message;
    if (!email) return formatMessage(i18n.emailAddressEmpty);
    if (!isEmail(email)) return formatMessage(i18n.emailAddressInvalid);
    return null;
  }

  validateMessageContent() {
    const { formatMessage } = this.props.intl;
    const { content } = this.state.message;
    if (!isLength(content, { min: 42 })) {
      return formatMessage(i18n.contentTooShort);
    }
    if (!isLength(content, { max: 42000 })) {
      return formatMessage(i18n.contentTooLong);
    }
    return null;
  }

  validateMessage() {
    return {
      email: this.validateMessageEmail(),
      content: this.validateMessageContent(),
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
    const errors = this.validateMessage();

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
    const { formatMessage } = this.props.intl;
    const { message, messageErrors, _loading } = this.state;
    const { email, content } = message;

    const emailValid = this.validateMessageEmail() === null;
    const contentValid = this.validateMessageContent() === null;

    return (
      <section className="bg-white py-8">
        <div className="container py-8 mx-auto flex flex-col align-center">
          <h2 className="text-dark text-4xl font-heading font-bold tracking-tight antialiased leading-none mb-12">
            {formatMessage(i18n.title)}
          </h2>

          <form id="contact-form" className="w-full max-w-md" onSubmit={this.handleSubmit}>
            <input
              placeholder={formatMessage(i18n.emailAddressPlaceholder)}
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
              placeholder={formatMessage(i18n.contentPlaceholder)}
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
                sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                render="explicit"
                verifyCallback={this.handeRecaptchaVerify}
              />
            </div>
            <input
              type="submit"
              value={formatMessage(i18n.submitMessageBtn)}
              className="btn btn-blue"
              disabled={_loading}
            />
          </form>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Contact);
