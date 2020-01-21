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

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        Conditional Tokens
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/gnosis_logo_blue.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
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
const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Insert short description ',
            image: `${baseUrl}img/undraw_searching.svg`,
            imageAlign: 'left',
            title: 'What are Conditional Tokens',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content:
              'Reach out to us!',
            image: `${baseUrl}img/undraw_contact_us.svg`,
            imageAlign: 'right',
            title: 'Support and Community',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="dark">
        {[
          {
            content:
              'This developer portal will teach you what the conditional tokens standard is; discuss various ways in which it can be used to improve your decentralized application; show you how to encode conditionality so that you can plug into and create liquid prediction markets of your own; provide you with some basic tutorials for getting started with this standard and its many use cases; and connect you to the community of developers working with it.',
            image: `${baseUrl}img/gnosis_logo_white.png`,
            imageAlign: 'right',
            title: 'About',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block background="light" layout="sixColumn">
        {[
          {
            content: 'A short primer on Conditonal Tokens',
            title: 'Introduction',
          },
          {
            content: 'Explore the versatility of Conditonal Tokens',
            title: 'Use Cases',
          },
          {
            content: 'Deep Dive into the Conditional Token Contracts',
            title: 'Documentation',
          },
          {
            content: 'Get started and build your Conditional Token Dapp',
            title: 'Tutorials',
          },
          {
            content: 'Need some help? Reach out to us!',
            title: 'Support',
          },
          {
            content: 'Explore existing Conditional Token applications',
            title: 'Projects',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Projects using Conditional Tokens</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
