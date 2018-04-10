import React from 'react';

export default function Hobby({ color, listTitle, children }) {

  return (
    <div className="mb-4 flex-1 overflow-hidden">
      <div className={`bg-${color} h-1 w-8 rounded-full`} />
      <h4 className="font-semibold text-2xl text-white leading-normal pt-4 pb-6">
        {listTitle}
      </h4>
      <ul className="list-reset text-white">
        {children}
      </ul>
    </div>
  );
}
