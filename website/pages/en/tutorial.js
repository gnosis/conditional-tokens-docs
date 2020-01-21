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

  const tutorialLinks = [
    {
      content: `Set up everything to build your [Prediction Market](${docUrl(
        'doc5.html',
      )})`,
      title: 'Get Started',
    },
    {
      content: 'Build a Prediction Market in 30 min',
      title: 'Template Tutorial',
    },
    {
      content: "Use Conditional Tokens to build a game",
      title: 'Game Tutorial',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Tutorials</h1>
          </header>
          <p>OK, enough about contracts and the many futures of conditional tokens. Let’s start building it already!</p>
          <GridBlock contents={tutorialLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Tutorial;
