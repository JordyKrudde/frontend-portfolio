import React from 'react';

function Card({ title, children, image, className = '', ...props }) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

export default Card;
