import React from 'react';
import axios from 'axios';
import Reaptcha from 'reaptcha';
import { pickBy, isString } from 'lodash';
import { isEmail, isLength } from 'validator';
import { Send } from 'react-feather';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

import storage from '../../services/storage';

const MESSAGE_STORAGE_KEY = 'home.contact.message';

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
  recaptchaEmpty: {
    id: 'home.contact.errors.recaptcha.empty',
    defaultMessage: 'Robot !',
  },
  submitMessageBtn: {
    id: 'home.contact.sendMessageBtn',
    defaultMessage: 'Send',
  },
  messageSentThe: {
    id: 'home.contact.messageSentThe',
    defaultMessage: 'The following message was send the {date}.',
  },
});

class Contact extends React.Component {
  state = {
    message: {
      email: '',
      content: '',
      recaptcha: null,
      createdAt: null,
    },
    messageErrors: {},
    _loading: false,
  };

  componentDidMount() {
    storage.getItem(MESSAGE_STORAGE_KEY).then(storedMessage => {
      if (!storedMessage) return;
      const now = new Date();
      const expiresAt = new Date(storedMessage.createdAt);
      expiresAt.setDate(expiresAt.getDate() + 1);

      if (expiresAt <= now) {
        storage.removeItem(MESSAGE_STORAGE_KEY);
        return;
      }

      this.setState(prevState => ({
        message: { ...prevState.message, ...storedMessage },
      }));
    });
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

  validateRecaptcha() {
    const { formatMessage } = this.props.intl;
    const { recaptcha } = this.state.message;
    if (!recaptcha) return formatMessage(i18n.recaptchaEmpty);
    return null;
  }

  validateMessage() {
    return {
      email: this.validateMessageEmail(),
      content: this.validateMessageContent(),
      recaptcha: this.validateRecaptcha(),
    };
  }

  sendMessage() {
    const { message } = this.state;
    this.setState({ _loading: true });
    axios
      .post(process.env.REACT_APP_CREATE_MESSAGE_ENDPOINT, {
        email: message.email,
        content: message.content,
        recaptcha: message.recaptcha,
      })
      .then(res => {
        this.setState(prevState => ({
          message: { ...prevState.message, ...res.data },
          _loading: false,
        }));

        storage.setItem(MESSAGE_STORAGE_KEY, res.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({ _loading: false });
        this.recaptchaRef.reset();
      });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => {
      const message = Object.assign({}, prevState.message);
      message[name] = value;
      return { message };
    });
  };

  handeRecaptchaVerify = hash => {
    this.setState(prevState => {
      return { message: { ...prevState.message, recaptcha: hash } };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ messageErrors: {} });
    const errors = this.validateMessage();

    if (Object.values(errors).some(e => e !== null)) {
      this.setState({ messageErrors: pickBy(errors, isString) });
      return false;
    }

    this.sendMessage();
  };

  render() {
    const { formatMessage, formatDate } = this.props.intl;
    const { message, messageErrors, _loading } = this.state;
    const inputsDisabled = _loading || message.createdAt;

    const emailValid = this.validateMessageEmail() === null;
    const contentValid = this.validateMessageContent() === null;

    return (
      <section className="container py-12">
        <h2 className="text-dark text-4xl font-heading font-bold tracking-tight antialiased leading-none mb-12">
          {formatMessage(i18n.title)}
        </h2>

        {message.createdAt && (
          <p className="alert alert-teal w-full max-w-md">
            <Send size={16} className="mr-4 flex-no-shrink" />
            {formatMessage(i18n.messageSentThe, {
              date: formatDate(message.createdAt, {
                day: 'numeric',
                month: 'long',
                hour: 'numeric',
              }),
            })}
          </p>
        )}
        <form
          id="contact-form"
          className="w-full max-w-md"
          onSubmit={this.handleSubmit}
        >
          <input
            placeholder={formatMessage(i18n.emailAddressPlaceholder)}
            type="email"
            name="email"
            value={message.email}
            onChange={this.handleChange}
            className={`field ${
              message.email.length > 0 && !emailValid ? 'invalid' : ''
            }`}
            disabled={inputsDisabled}
          />
          {messageErrors.email && (
            <p className="field-error">{messageErrors.email}</p>
          )}
          <textarea
            placeholder={formatMessage(i18n.contentPlaceholder)}
            rows="8"
            name="content"
            value={message.content}
            onChange={this.handleChange}
            className={`field ${
              message.content.length > 0 && !contentValid ? 'invalid' : ''
            }`}
            disabled={inputsDisabled}
          />
          {messageErrors.content && (
            <p className="field-error">{messageErrors.content}</p>
          )}
          {!message.createdAt && (
            <div>
              <div className="mb-4">
                <Reaptcha
                  ref={e => (this.recaptchaRef = e)}
                  sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                  onVerify={this.handeRecaptchaVerify}
                />
              </div>
              {messageErrors.recaptcha && (
                <p className="field-error">{messageErrors.recaptcha}</p>
              )}
              <input
                type="submit"
                value={formatMessage(i18n.submitMessageBtn)}
                className="btn btn-blue"
                disabled={inputsDisabled}
              />
            </div>
          )}
        </form>
      </section>
    );
  }
}

Contact.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Contact);
