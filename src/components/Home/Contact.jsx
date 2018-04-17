import React from 'react';


export default () => {
  return (
    <div>
      
      <section className="bg-white py-8">
          <div className="container py-8 mx-auto flex flex-col align-center">

            <form className="w-full max-w-md">
              <input placeholder="Adresse email" className="appearance-none block w-full bg-grey-lighter text-grey-darker border-b-2 border-grey-light rounded py-4 px-4 mb-3" id="grid-first-name" type="email" />
              <textarea placeholder="Message" className="appearance-none block w-full bg-grey-lighter text-grey-darker border-b-2 border-grey-light rounded py-4 px-4 mb-3" rows="8" />
            </form>


          </div>
        </section>
    </div>
  )
}
