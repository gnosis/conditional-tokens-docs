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

function Tutorial(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
       <div className="index-info-block grid-blocks two-blocks-grid">
          <div className="index-info-block-title">
            Tutorials
          </div>
          <div className="index-info-block-text">
            <p>
            OK, enough about contracts and the many futures of <br></br>conditional tokens. Let’s start building it already!
            </p>
          </div>
        </div>
       
        <div className="inner grid-blocks four-blocks-grid tutorials-boxes">
          <a href={docUrl("pmtutorial1")} className="white-box">
            <h3>
             Set up a prediction market in 30min
            </h3>
            <p>
              How to set up a binary prediction market with the conditional token framework in 30min. 
            </p>
            <p className="box-icons">
              <i className="icon icon-small icon-time"></i>
              &nbsp;
              30min
              &nbsp;
              &nbsp;
              <i className="icon icon-small icon-star"></i>
              &nbsp;
              easy
              &nbsp;
              &nbsp;
              <i className="icon icon-small icon-pen"></i>
              react
            </p>
          </a>
          <a className="white-box">
            <h3>
              To be continued...
            </h3>
            <p>
             More tutorials will be added over time. Make sure to come back and learn more about Conditional Tokens.
            </p>
          </a>
        </div>
      </Container>
    </div>
  );
}

module.exports = Tutorial;
