/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner index-info-block grid-blocks two-blocks-grid">
          <div 
          className="index-info-block-title">
            Create conditional tokens, a new asset class with richer informational capabilities that makes the outcome of any future event tradable.
          </div>
          <div className="index-info-block-text">
            <p>
            This developer portal aims to provide an overview of the conditional tokens standard.
            </p>
            <p>
            It is a place to explore the various use cases for conditional tokens, as well as detailed tutorials on how to encode conditionality and liquidity into your own dapps and prediction markets.
            </p>
          </div>
        </div>

        <div className="inner index-section-boxes grid-blocks four-blocks-grid">
          <a href="" className="white-box">
            <h3>
              Introduction
            </h3>
            <p>
              A <strong>short primer</strong> on Conditional Tokens
            </p>
          </a>
          <a href="" className="white-box">
            <h3>
              User Cases
            </h3>
            <p>
              Explore the <strong>versatility</strong> of Conditional Tokens
            </p>
          </a>
          <a href="" className="white-box">
            <h3>
              Documentation
            </h3>
            <p>
              <strong>Deep dive</strong> into the Conditional Tokens contracts
            </p>
          </a>
          <a href="/tutorials" className="white-box">
            <h3>
              Tutorials
            </h3>
            <p>
              <strong>Get started</strong> and build your Conditional Token Dapp
            </p>
          </a>
        </div>

        <div className="inner index-section-last-boxes grid-blocks two-blocks-grid">
          <a href="" className="white-box">
            <h3>
              Support
            </h3>
            <p>
              Need some <strong>help</strong>? Reach out to us!
            </p>
          </a>

          <a href="" className="white-box">
            <h3>
              Projects
            </h3>
            <p>
              <strong>Explore</strong> existing Conditional Token applications
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
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </div>
        </div>

        <div className="inner index-advantages grid-blocks two-blocks-grid">
          <div>
            <h2>
              Advantages of <br></br>Conditional Tokens
            </h2>
          </div>
          <div className="index-advantages-boxes  grid-blocks two-blocks-grid">
            <a href="" className="white-box">
              <h3>
                Documentation
              </h3>
              <p>
                <strong>Deep Dive</strong> into the Conditional Token Contracts
              </p>
            </a>

            <a href="" className="white-box">
              <h3>
                Tutorials
              </h3>
              <p>
                <strong>Get started</strong> and build your Conditional Token Dapp
              </p>
            </a>

            <a href="" className="white-box">
              <h3>
                Documentation
              </h3>
              <p>
                <strong>Deep Dive</strong> into the Conditional Token Contracts
              </p>
            </a>

            <a href="" className="white-box">
              <h3>
                Tutorials
              </h3>
              <p>
                <strong>Get started</strong> and build your Conditional Token Dapp
              </p>
            </a>
          </div>
        </div>

        <div className="inner index-projects-using grid-blocks two-blocks-grid">
          <div>
            <h2>
              Projects using<br></br>Conditional Tokens
            </h2>
            <p>
              This project is used by all these people
            </p>
            <a href="" className="bordered-button">
              see more
            </a>
          </div>
          <div className="index-projects-boxes grid-blocks three-blocks-grid">
            <a href="" className="white-box background-color-1">
              P1
            </a>
            
            <a href="" className="white-box background-color-2">
              P2
            </a>
          
            <a href="" className="white-box background-color-3">
              P3
            </a>

            <a href="" className="white-box background-color-4">
              P4
            </a>
            
            <a href="" className="white-box background-color-5">
              P5
            </a>
          
            <a href="" className="white-box background-color-6">
              P6
            </a>
          </div>
        </div>

        <div className="inner index-support grid-blocks two-blocks-grid">
          <div>
            <h2>
              Support<br></br>and Community
            </h2>
            <p>
              Reach out to us!
            </p>
          </div>
          <div className="index-support-boxes grid-blocks">
            <a href="">
                Schedule a call with Gnosis
                <i className="icon icon-arrow"></i>
            
            </a>
            
            <a href="">
                Chat with us on discord
                <i className="icon icon-arrow"></i>
              
            </a>
          
            <a href="">
                Dev Focus Forum
                <i className="icon icon-arrow"></i>
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
