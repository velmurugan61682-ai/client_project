import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Login to CMMS ERP</h2>
        <form>
          <input className="w-full p-2 mb-4 bg-slate-700 rounded" type="email" placeholder="Email" />
          <input className="w-full p-2 mb-4 bg-slate-700 rounded" type="password" placeholder="Password" />
          <button className="w-full bg-blue-600 hover:bg-blue-500 p-2 rounded font-bold" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
