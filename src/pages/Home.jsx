import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-lg mb-4">
        I'm a passionate developer focused on creating beautiful and functional web applications.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p>Description of the amazing project goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p>Description of another fantastic project.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p>Yet another impressive project description.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
