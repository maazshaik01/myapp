import React from 'react';

const MyComponent = () => {
  return (
    <div className="component-box">
      <h2>Hello from MyComponent!</h2>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyComponent;