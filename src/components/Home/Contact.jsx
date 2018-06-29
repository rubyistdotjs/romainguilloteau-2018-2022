import React, { Component } from 'react';

export default class Contact extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       emailAddress: '',
       message: '',
    }
  }
  

  render() {
    return (
      <section className="bg-white py-8">
        <div className="container py-8 mx-auto flex flex-col align-center">
          <h2 className="font-heading text-5xl text-black pb-8 antialiased font-extrabold">
            Contact
          </h2>
          <form className="w-full max-w-md">
            <input placeholder="Adresse email" className="appearance-none block w-full bg-grey-lighter text-grey-darker border-b-2 border-grey-light rounded py-4 px-4 mb-3" id="grid-first-name" type="email" />
            <textarea placeholder="Message" className="appearance-none block w-full bg-grey-lighter text-grey-darker border-b-2 border-grey-light rounded py-4 px-4 mb-3" rows="8" />
            <input type="submit" value="Envoyer le message" className="appearance-none inline-block text-white font-semibold no-underline py-2 px-4 bg-indigo border-2 border-transparent rounded hover:bg-indigo-dark" />
          </form>
        </div>
      </section>
    );
  }
}
