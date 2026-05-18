import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Register for CMMS</h2>
        <form>
          <input className="w-full p-2 mb-4 bg-slate-700 rounded" type="text" placeholder="Name" />
          <input className="w-full p-2 mb-4 bg-slate-700 rounded" type="email" placeholder="Email" />
          <input className="w-full p-2 mb-4 bg-slate-700 rounded" type="password" placeholder="Password" />
          <button className="w-full bg-green-600 hover:bg-green-500 p-2 rounded font-bold" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
