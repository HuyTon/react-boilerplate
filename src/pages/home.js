import React, { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <hr />
            <HomeContent />
        </Fragment>
    );
}

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
    <div className="text-center hero">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">React Sample Project</h1>
      <p className="lead">
        This is a sample application that demonstrates an authentication flow for
        an SPA, using{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://auth0.com/docs/quickstart/spa/react"
        >
          React
        </a>
      </p>
    </div>
  );

  const HomeContent = () => (
    <div className="next-steps">
      <h2 className="my-5 text-center">What can I do next?</h2>
  
      <div className="row">
        <div className="col-md-5 mb-4">
          <h6 className="mb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://auth0.com/docs/connections"
            >
              <i className="fas fa-link mr-2" />
              Configure other identity providers
            </a>
          </h6>
          <p>
            Auth0 supports social providers as Facebook, Twitter, Instagram and
            100+, Enterprise providers as Microsoft Office 365, Google Apps,
            Azure, and more. You can also use any OAuth2 Authorization Server.
          </p>
        </div>
  
        <div className="col-md" />
  
        <div className="col-md-5 mb-4">
          <h6 className="mb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://auth0.com/docs/multifactor-authentication"
            >
              <i className="fas fa-link mr-2" />
              Enable Multi-Factor Authentication
            </a>
          </h6>
          <p>
            Add an extra layer of security by enabling Multi-factor
            Authentication, requiring your users to provide more than one piece of
            identifying information. Push notifications, authenticator apps, SMS,
            and DUO Security are supported.
          </p>
        </div>
      </div>
  
      <div className="row">
        <div className="col-md-5 mb-4">
          <h6 className="mb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://auth0.com/docs/anomaly-detection"
            >
              <i className="fas fa-link mr-2" />
              Anomaly Detection
            </a>
          </h6>
          <p>
            Auth0 can detect anomalies and stop malicious attempts to access your
            application. Anomaly detection can alert you and your users of
            suspicious activity, as well as block further login attempts.
          </p>
        </div>
  
        <div className="col-md" />
  
        <div className="col-md-5 mb-4">
          <h6 className="mb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://auth0.com/docs/rules"
            >
              <i className="fas fa-link mr-2" />
              Learn About Rules
            </a>
          </h6>
          <p>
            Rules are JavaScript functions that execute when a user authenticates
            to your application. They run once the authentication process is
            complete, and you can use them to customize and extend Auth0's
            capabilities.
          </p>
        </div>
      </div>
    </div>
  );

export default Home;