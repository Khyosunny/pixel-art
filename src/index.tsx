import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'components/Layout';
import App from './App';
import './styles/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
