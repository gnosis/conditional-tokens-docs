---
id: introduction3
title: Automated Market Makers for Prediction Markets
sidebar_label: Automated Market Makers for Prediction Markets
---

Prediction markets require liquidity to function well. However, while most people have an understanding of what it means for events to be probable, turning knowledge about the likelihood of events into corresponding orders in a prediction market can be a confusing endeavor. Moreover, coordinating trades of predictive assets between participants can be tricky.

## A simple case without a market maker

Let's say Alice and Bob are trying to figure out if it will rain in Gotham on Saturday. The outcomes of the event are Yes and No. Alice thinks that there's at least an 80% chance it will rain, but Bob thinks that while it seems likely that it will rain in Gotham, it's maybe a 70% chance at most.

Alice and Bob could get together and trade in the following manner:

1. Alice converts $7.50 into 7.5 Yes and 7.5 No tokens, while Bob converts $2.50 into 2.5 Yes and 2.5 No tokens.
2. Alice then swaps her 7.5 No tokens for Bob's 2.5 Yes tokens.

* If it rains, Alice redeems her 10 Yes tokens for the $10 collateralized by the system
* If it doesn't rain, Bob redeems his 10 No tokens for the $10.

Alice essentially paid $7.50 for her tokens, while Bob paid $2.50 for his tokens. Both parties would think they got good deals at the time of their trade, since Alice would consider her tokens to be worth at least $8, even though she only paid $7.50 for them, and Bob would consider his tokens to be worth at least $3, even though he only paid $2.50. Looking at the system from the outside, one might say that the odds of it raining in Gotham on Saturday is about 75% according to Alice and Bob's trading activity in this prediction market. However, arriving at that probability estimate requires collecting information from the trade that they've made.

Of course, add more traders and more trades, and the situation gets complicated. Coordinating trades of these predictive assets between many traders and making sense of what the trades are saying about the future can be difficult. These traders may be active at different times, and may not be able to coordinate effectively without multiple order books. Aggregating the trading data from these order books to come up with a concise measure of the probability of an outcome also become more difficult. These are issues which can be ameliorated with the use of an automated market maker.

## Basic AMM mechanics

Essentially, an automated market maker (AMM) is just a market participant that's a bot that makes sure there are always some outcome tokens for every outcome in its inventory and that there is always a price that can be offered for an outcome token. As long as the AMM is active, traders can buy and sell outcome tokens for a prediction market, and the AMM will aggregate the trade data to produce estimates for the odds of outcomes.

Gnosis offers smart contract implementations of two automated market makers for prediction markets: the logarithmic market scoring rule (LMSR) market maker, and the constant product market maker (CPMM). Both these market makers require funding to obtain the initial outcome tokens required to start providing liquidity.

The [LMSR market maker](http://mason.gmu.edu/~rhanson/mktscore.pdf), originally described by Robin Hanson, has a rich academic history. It is a market maker designed specifically for the prediction market use case, and its properties have been well researched.

The [CPMM](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf) is a newer market maker using the same mechanism as Uniswap and Balancer pools. It is also known as the *fixed product market maker (FPMM)* in Gnosis' codebase. It was originally designed for the more general use case of swapping tokens, but has been tailored for the prediction market use case in the FixedProductMarketMaker contract.

Both market makers can be described in terms of an invariant value kept between trades:

* For LMSR, the formula for the invariant is

  ```
  invariant = sum(numOutcomes^(-numOutcomeTokensInInventoryForOutcome / funding) for every outcome)
  ```

* For CPMM, the formula for the invariant is

  ```
  invariant = product(numOutcomeTokensInInventoryForOutcome for every outcome)
  ```

This invariant value can be considered in the context of a [constant *function* market maker](https://web.stanford.edu/~guillean/papers/constant_function_amms.pdf).

When traders buy an amount of an outcome token from an AMM, essentially the following steps occur:

1. The trader sends the cost amount to the AMM.
2. The AMM converts the cost amount received to a set of outcome tokens and adds the outcome tokens to its inventory. The AMM's invariant expression is now broken.
3. The AMM now sends enough of the demanded outcome token back to the trader so that the invariant is restored. This is the amount of the demanded outcome token bought.

Similarly, selling works as follows:

1. The trader sends the sold amount of an outcome token to the AMM.
2. The AMM adds the sold outcome token to its inventory. The AMM's invariant expression is now broken.
3. The AMM converts an amount of the full set of outcome tokens back to collateral and sends this collateral back the trader so that the invariant is restored. This amount is the sale price.

Both AMMs can also estimate the odds of outcomes as well.

* The odds for an outcome with LMSR can be found with the formula:

  ```
  oddsForOutcome = numOutcomes^(-numOutcomeTokensInInventoryForOutcome / funding)
  ```

* The odds for an outcome with the CPMM can be found with the formula:

  ```
  oddsWeightForOutcome = product(numOutcomeTokensInInventoryForOtherOutcome for every otherOutcome)
  oddsForOutcome = oddsWeightForOutcome / sum(oddsWeightForOutcome for every outcome)
  ```

## An example with LMSR

Let's return to Alice and Bob in Gotham. We will create and fund an LMSR market maker named CPU with $10. CPU takes the funding and converts it into 10 Yes and 10 No for its own inventory. The initial odds estimate for the market is 50:50.

Now let's say Alice buys $10 worth of Yes tokens from CPU:

1. Alice sends $10 to CPU.
2. CPU turns $10 into 10 Yes and 10 No tokens. CPU now has 20 Yes and 20 No tokens, and CPU's invariant is broken (invariant should be 1, but now it is 1/2).
3. CPU returns 15.84963 Yes tokens to Alice, restoring the invariant.

At the end of this trade, CPU has 4.15037 Yes and 20 No tokens, and it estimates the odds of Yes are 75% and the odds of No are 25%.

## An example with CPMM

Let's fund a CPMM named Digi with $10. Like CPU, Digi takes $10, converts it to 10 Yes and 10 No tokens, and adds them to its inventory.

Now let's say Alice buys $10 worth of Yes tokens from Digi:

1. Alice sends $10 to Digi.
2. Digi turns $10 into 10 Yes and 10 No tokens. Digi has now 20 Yes and 20 No tokens, breaking its invariant (invariant should be 100, but now it's 400).
3. Digi returns 15 Yes tokens to Alice, restoring the invariant.

At the end of this trade, Digi has 5 Yes and 20 No tokens, and it estimates the odds of Yes are 80% and the odds of No are 20%.

## Differences between LMSR and CPMM

LMSR and CPMM have a few differences, beyond the numerical differences from a different curve shape. These differences manifest in pros and cons for each in application.

### LMSR Advantages

For one, LMSR has more recognition in academic work, and its properties are much more studied than CPMM. It is easier to find papers on the properties of LMSR, or to leverage existing research on this market maker.

LMSR breaks down into self-similar components when applied to combinatorial prediction markets. Its analysis in those scenarios has been quite explored in the literature.

Finally, the closed form expressions for buying and selling with the LMSR allow calculating a net cost for a batch of buys and sells done simultaneously. The CPMM does not admit such an expression for the prediction market use case, so buying and selling is limited on the contract to one outcome token at a time.

### CPMM Advantages

The arithmetic involved in the CPMM tends to be more elementary than the LMSR. There is no need to program approximations of logarithms and exponentials with the CPMM.

The CPMM can also be easily dynamically crowdfunded similar to Uniswap and Balancer pools. LMSR market makers cannot be easily crowdfunded dynamically though. The funding parameter of the LMSR (derived from a 'liquidity parameter' in the literature), has no elementary closed form depending on the outcome token amounts in an LMSR instance's inventory, even though this parameter is completely determined by the instance's inventory.
