---
id: doc1
title: Conditional Tokens
sidebar_label: Overview
---

**Create** conditional tokens, a new asset class with richer informational capabilities that makes the outcome of any future event tradable.

## Motivation

We foresee a tokenized future — where no single currency is dominant and new tradable asset classes take on increasing informational complexity. Conditional tokens, that enable prediction markets, are one of these new asset classes. 

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/brFdf7pIYag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
</figure>

#### Conditional tokens allow you to:
1. Make simple markets on the likelihood of a given event.
2. Make complex markets about how the likelihood of an event is affected by any other event. For example, how is the probability of a global recession affected by a trade war between the United States and China over the next year?
3. Trade any asset under the condition that a specific event happens. For example, you can buy a tokenized equivalent of the British Pound but only under the condition that no hard Brexit happens. For market observers, these markets will surface asset prices in different possible futures.

Previously such instruments could only be created at a high cost by financial institutions. The arrival of conditional tokens on Ethereum brings down the costs to a few cents and give access to everyone. All conditional tokens can be globally accessible, and payouts are securely (and cheaply) executed through smart contracts.


## What are Condititional Tokens good for? 

### Prediction Markets
Consider a simple future event. Suppose Yang and Trump are engaged in a political election. How do we construct a market with economic incentives for correctly predicting the outcome?

First, we lock some collateral (e.g. DAI) into a contract in order and use it to mint conditional tokens. To then create a market, we must define a collection of outcomes for the condition. In this case, there are two possible outcomes: either Yang is elected or Trump is elected. For each DAI committed to the market, market participants receive conditional tokens representing all potential outcomes. The market contract holds the DAI tokens received as collateral until the outcome of the election is known.

Each participant begins in a neutral position, with both a “correct” and an “incorrect” token for each DAI locked as collateral. That is, fungible “Yang is elected” and “Trump is elected” tokens are issued to each participant who puts collateral into the contract. All “Yang is elected” tokens are fungible with other “Yang is elected” tokens. The “Trump is elected” tokens are materially different from “Yang is elected” tokens. They are fungible with other “Trump is elected” tokens. After the outcome is known, the contract will redeem each “correct” conditional token for the DAI held as collateral. The “incorrect” tokens are irredeemable.

#### Key Takeaway

 This brings us to the **central point** of this section: trading conditional tokens is the same as predicting which outcome is more likely. Suppose a participant believes Yang will be elected. They may sell their “Trump is elected” tokens at whatever price the market will bear, and later redeem their “Yang is elected” tokens at par value when (and if) Yang is elected. Trading conditional tokens helps discover the price of different opinions in a neutral way, as highly probable outcomes trade close to their redeemable “par” value, and highly improbable outcomes naturally find their market price near zero.

Astute readers will notice that, implicitly, there are two ways to enter a prediction market. One way is to buy a conditional token from another participant. Another way is to collateralize the issuance of new tokens (all outcomes) and divest of the unwanted outcomes. That is, sell the outcomes one thinks are overpriced.

The supply and demand – buyers and sellers – of “Yang is elected” and “Trump is elected” tokens establishes, through price discovery, the market’s estimation of the relative probability of the possible outcomes.

### Access Rights

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin venenatis lectus dui, vel ultrices ante bibendum hendrerit. Aenean egestas feugiat dui id hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in tellus laoreet, eleifend nunc id, viverra leo. Proin vulputate non dolor vel vulputate. Curabitur pretium lobortis felis, sit amet finibus lorem suscipit ut. Sed non mollis risus. Duis sagittis, mi in euismod tincidunt, nunc mauris vestibulum urna, at euismod est elit quis erat. Phasellus accumsan vitae neque eu placerat. In elementum arcu nec tellus imperdiet, eget maximus nulla sodales. Curabitur eu sapien eget nisl sodales fermentum.

### Others

## Advantages of Conditional Tokens

For example, building the conditional tokens standard on ERC-1155 has allowed Gnosis to pursue further 3 long-term goals:

1. **Counter low liquidity** with DutchX. With the potential to create millions of distinct markets, individual market liquidity is likely to be low, but using conditional tokens based on ERC-1155 means we can still find a reliable price, as trading on a fully decentralized exchange will unlock a shared global liquidity pool.
2. **Interconnected price dynamics** with our DEX prototype research. Take (1) the price of an asset, (2) the price of said asset in future A, (3) the price of said asset in future B, and finally (4) the likelihood of futures A and B. While each of these could have an individual market, with an individual price, the prices themselves are not independent. In other words, any 3 of those 4 prices dictates the 4th price. Conditional tokens allow us to feed such information back into the market to make the mechanism itself more efficient.
3. **No dominant currency**. In the future, many conventional asset classes will be tokenized, and these tokens will be used as collateral/currency in markets that previously only supported a single currency. Think of markets trading on geopolitical events using a basket of stocks as collateral. An efficient market mechanism will be able to bundle that liquidity while minimizing the cost paid to arbitrageurs.
The ERC-1155 token standard brings with it many other advantages, though these may differ between use cases. Batch sends, for instance, substantially decrease the gas costs for users, and so are ideal in gaming environments, with many different types of tokens and high-velocity economies. Another huge advantage, quoted directly from that link:

We helped fine tune the standard with a special focus on ERC-721 compatibility. This feature is important for us, as we want our creators to be able to create both NFTs (via ERC-721) which can work with the existing ecosystem, and fungible tokens (via ERC-1155) which offer them the ability to mint a collection of items they can sell for use in various gaming experiences.

You can already find a whole marketplace of these kind of ERC-1155 in-game assets over at OpenSea.



This documentation will teach you what the conditional tokens standard is; discuss various ways in which it can be used to improve your decentralized application (dapp); show you how to encode conditionality so that you can plug into and create liquid prediction markets of your own; provide you with some basic tutorials for getting started with this standard and its many use cases; and connect you to the community of developers working with it.


