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
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjgwIDEyODAiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNiNWFjYWEiIGQ9Ik0wIDBoMTI4MHYxMjgwSDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09Im1hdHJpeCg1IDAgMCA1IDIuNSAyLjUpIiBmaWxsLW9wYWNpdHk9Ii41Ij48ZWxsaXBzZSBmaWxsPSIjMDgwNDAyIiBjeD0iNDciIGN5PSIyOSIgcng9IjEwMyIgcnk9Ijk4Ii8+PGVsbGlwc2UgZmlsbD0iIzI0MDAwMCIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtMTA0Ljg5OTE3IDcuMzc0NCAtMS44Mjc4NSAtMjYuMDAwNzYgMjE0LjMgOTkuNSkiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iMTQ1IiBjeT0iMTk3IiByeD0iMjU1IiByeT0iNzQiLz48ZWxsaXBzZSBjeD0iMTM3IiBjeT0iNSIgcng9IjI1NSIgcnk9IjgiLz48ZWxsaXBzZSBmaWxsPSIjYWRiMGFhIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0zMC41MDcxMiAtMzUuMzAwOTQgMjkuMjg5NTggLTI1LjMxMjEgMTQxLjQgNTUuNikiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDYuOTk2MDQgLTc0Ljk4OTggMTY5LjY2MyAxNS44Mjg0MSAxNDIuNCAyMDIuOSkiLz48ZWxsaXBzZSBmaWxsPSIjNTEwMDAwIiBjeD0iMjE0IiBjeT0iOTEiIHJ4PSI0MCIgcnk9IjI3Ii8+PHBhdGggZmlsbD0iIzE0MTgxNiIgZD0iTTAgMTAzaDEzNHYyM0gweiIvPjxwYXRoIGZpbGw9IiNmZmZmZmUiIGQ9Ik0wIDEyNmgyNTZ2MTMwSDB6Ii8+PHBhdGggZmlsbD0iI2Y0MDAwMCIgZD0iTTIwOSAxMzZoMzN2OGgtMzN6Ii8+PC9nPjwvc3ZnPg==);" />
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
