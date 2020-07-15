/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const pageUrl = page => `${baseUrl}${page}`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner index-section-boxes grid-blocks four-blocks-grid">
          <a href={docUrl("introduction1")} className="white-box">
            <h3>
              Introduction
            </h3>
            <p>
              A <strong>short primer</strong> on Conditional Tokens
            </p>
          </a>
          <a href={pageUrl("use-case")} className="white-box">
            <h3>
              Use Cases
            </h3>
            <p>
              Explore the <strong>versatility</strong> of Conditional Tokens
            </p>
          </a>
          <a href={docUrl("devguide01")} className="white-box">
            <h3>
              Documentation
            </h3>
            <p>
              <strong>Deep dive</strong> into the Conditional Tokens contracts
            </p>
          </a>
          <a href={pageUrl("tutorials")} className="white-box">
            <h3>
              Tutorials
            </h3>
            <p>
              <strong>Get started</strong> and build your Conditional Token Dapp
            </p>
          </a>
        </div>

        <div className="inner index-what-are grid-blocks two-blocks-grid">
          <div>
            <h2>
              What are <br></br>Conditional Tokens?
            </h2>
          </div>
          <div>
          <p>Conditional Tokens are a new, application-agnostic, asset class designed to facilitate the creation of highly liquid prediction markets. They enable combinatorial outcomes for high resolution information discovery through prediction markets.</p>
<p>
The Conditional Tokens Framework allows you to:
</p>
<p>
<ul>
  <li> Make simple markets on the likelihood of a given event.</li>
  <li> Make complex markets about how the likelihood of an event is affected by any other event.</li>
  <li> Trade any asset under the condition that a specific event occurs.</li>
</ul>
</p>
<p>
Prediction markets are the main use case for Conditional Tokens, Omen and Polimarket are two examples of projects built on the Conditional Tokens Framework. Conditional tokens have a wide range of additional use cases, from awarding access rights in games to paying milestone-based and social impact bonds. </p>

          </div>
        </div>

        <div className="inner index-advantages grid-blocks two-blocks-grid">
          <div>
            <h2>
              Advantages of <br></br>Conditional Tokens
            </h2>
          </div>
          <div className="index-advantages-boxes  grid-blocks two-blocks-grid">
            <a className="white-box">
              <h3>
                Deeper Combinatorial Markets
              </h3>
              <p>
              Enabling <strong>deeper information discovery</strong>  in respect to conditional probabilities of events.

              </p>
            </a>

            <a className="white-box">
              <h3>
               Oracle Agnostic
              </h3>
              <p>
                Work with the <strong>right oracle for the right question protocol</strong> is not tied to any specific oracle.

              </p>
            </a>

            <a className="white-box">
              <h3>
                ERC 1155 tokens
              </h3>
              <p>
               Allow batch transfers and receiver callbacks and <strong> avoid costly outcome token deployments</strong> for new events.
              </p>
            </a>

            <a  className="white-box">
              <h3>
                Audited contracts
              </h3>
              <p>
                Cut costs on development <strong>without sacrificing security</strong>.
              </p>
            </a>
          </div>
        </div>

        <div className="inner index-projects-using grid-blocks two-blocks-grid">
          <div>
           <a name="projects">
            <h2>
              Projects using<br></br>Conditional Tokens
            </h2>
            </a>

          </div>

          <div className="index-projects-boxes grid-blocks three-blocks-grid">

            <a href="https://omen.eth.link/" className="white-box">
              <img src={`${baseUrl}img/omen.png`}></img>
            </a>

            <a href="https://alice.si/" className="white-box">
              <img src={`${baseUrl}img/alice.png`}></img>
            </a>

            <a href="https://www.flyingcarpet.network/" className="white-box">
              <img src={`${baseUrl}img/flca.png`}></img>
            </a>

          </div>
        </div>


        <div className="inner index-projects-using grid-blocks two-blocks-grid">
          <div>
           <a name="projects">
            <h2>
              Analytics
            </h2>
            </a>
          </div>

          <div className="index-projects-boxes grid-blocks three-blocks-grid">

            <a href="https://defipulse.com" className="white-box">
              <strong>DeFi Pulse</strong>
            </a>

          </div>
        </div>
              </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );


    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
        </div>
      </div>
    );
  }
}

module.exports = Index;
