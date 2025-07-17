import React from 'react';

function Card({ title, children, image, className = '', ...props }) {
  return (
    <div 
      className={`rounded-xl overflow-hidden bg-neutral-900 backdrop-blur-[8px] ${className}`}
      {...props}
    >
      {image && (
        <div className="h-64 m-4">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      <div className="p-6 h-full m-4 mt-0 rounded-lg bg-neutral-800">
        {title && <h3 className="text-xl mb-3 text-white">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

export default Card;
