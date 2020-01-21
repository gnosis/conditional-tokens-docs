---
id: doc3
title: Positions, Conditions and Outcomes
sidebar_label: Positions, Conditions and Outcomes
---
In order to understand conditional tokens, you need to grasp how they are used to construct positions. A “position” is a financial term which can be described as a buy or sell action that reflects someone’s belief in an asset’s, or multiple assets’, future price.

## Positions

Positions consist of collateral (ERC-20 tokens) and one or more conditions with outcome collections. Positions become valuable precisely when all of its outcome conditions are reported as true.

We explain conditions and outcome collections below, but shown here as some complex conditions to illustrate the power of conditional tokens and positions. Consider a dollar (DAI) collateralized position with two conditions:

1. Condition 1, with outcome collection `[A, B, C]`
2. Condition 2, with outcome collection `[HI, LO]`
Further, consider Boolean `OR` possibilities that might make interesting positions.
A or B, B or C, A or C
We can add those possibilities to the outcome collection for Condition 1:

Condition 1, with outcome collection `[A, B, C, A|B, B|C, A|C]`
We can commit collateral to either (or both!) of these conditions and create conditional tokens for each outcome. We denote collateralized positions as `$:(A|B)`, meaning “collateral” (can be DAI, US Dollar equivalents, or another ERC-20 token) for the “A or B” outcome. Similarly, `$:(LO)` means collateral and the “LO” outcome. Most interestingly, we can merge these positions into a deeper position like `$:(A|B)&(LO)`. This notation shows collateral staked on A or B for the first condition, and LO for the second condition. Moving between positions and trading on open markets has never been easier.

Here is a graph of all positions that are contingent on the outcome of these two conditions

/* INSERT PICTURE/*

Focus on this *critical point*: a position is now a clearly defined mathematical construct on a public and decentralized network. Anybody can create a condition, and anybody can take a position on that condition. This construct allows as many markets to exist as there are tokens, and for each of those markets to benefit from a global pool of liquidity.



## Conditions
Let’s take a step back. Before conditional tokens can exist, a condition must be prepared. Preparing a condition means that you must define several specifications of a condition, including how a specific oracle reports the condition’s outcome. The following function is used to prepare a condition, which will be decided when the oracle submits what we call a “payout vector”:

1. oracle – The account assigned to report the result for the prepared condition.
2. questionId – An identifier for the question to be answered by the oracle.
3. payoutDenominator – What the payouts reported by the oracle must eventually sum up to.
4. outcomeSlotCount – The number of outcome slots which should be used for this condition. Must not exceed 256.

You, the consumer of the contract, have to interpret the question ID correctly. For example, it could be an IPFS hash which can be used to retrieve a document specifying the question more fully. Allowing clients to choose their own mechanisms for generating questionIds and choosing orcales allows for more flexibility in the long run.


## Simple Example

Say we have a question where only one out of multiple choices may be chosen:

> Who out of the following will be chosen? [A, B, C, D, E]

Through some commonly agreed upon mechanism, the detailed description for this question becomes a 32 byte questionId: `0xabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc1234`

Let’s also suppose we trust the oracle with address `0x1337aBcdef1337abCdEf1337ABcDeF1337AbcDeF` to deliver the answer for this question, and that the payoutDenominator should sum to 1 for simplicty.

To prepare this condition, the following code gets run:
```
await conditionalTokens.prepareCondition(
    '0x1337aBcdef1337abCdEf1337ABcDeF1337AbcDeF',
    '0xabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc1234',
    1,
    5
)
```
Later, if the oracle makes a report that the payout vector for the condition is `[0, 1, 0, 0, 0]`, it is stating that B was chosen, and the outcome slot associated with B would receive all of the payout.

## Outcome Collections

An outcome collection is defined as a **nonempty proper subset of a condition’s outcome slots which represents the sum total of all the contained slots payout values**. Outcome collections are represented by an index set. An index set is a uint whose bits identify whether the nth outcome is present in the collection, starting from the lower weight bits. In the example above, the five trivial outcomes represented in binary are:

1. (A): 0b00001
2. (B): 0b00010
3. (C): 0b00100
4. (D): 0b01000
5. (E): 0b10000

We are not limited to trivial collections, we can compose them:

1. (A|B): 0b00011
2. (A|C): 0b00101
3. (A|E): 0b10001
4. (C|E): 0b10100
5. (A|B|D): 0b01011
6. (A|B|C|D|E): 0b11111


This last one is called the `fullIndexSet`. It is calculated by bit-shifting, to make a number with as many 1s as there are outcomes. But why bother with an index set at all? First off, it allows us to enumerate all possible combinations of outcomes:

1. 0b0 represents no outcome
2. 0b11…11 represents all outcomes
3. Any other combination is a number strictly between 0b0 and 0b11…11 in a one-to-one relationship.


Further, it is useful because of the bitwise operations it offers. For instance, if you want to merge the collections `(A|D)` and `(D|E)`, you use OR, so in this case `0b01001 OR 0b11000 -> 0b11001`. We recognise the new index set as `(A|D|E)`, exactly what we are looking for. We can also check the intersection between index sets. For example, if we have `(B|E)` and `(B|C|D)`, we can discover if they intersect in O(1) using AND. In this case `0b10010 AND 0b01110 -> 0b00010`. The result represents the `(B)` outcome, which is where the collections intersect. It is > 0, so they intersect. The AND of two sets is == 0 if they do not intersect.

This logic allows us to partition outcome collections. A partition is outcome collections which do not intersect. A trivial partition is `[(A), (B), (C), (D), (E)]`. `[(A|C), (B|D), (E)]` is another. We could easily check for intersections in O(m^2), where m is the number of collections, but we do it in considerably more efficient O(m) fashion. The Gnosis prediction market contract tracks the outcomes that have not been mentioned yet in `freeIndexSet`. It starts as “all outcomes have not been mentioned yet”. Then, on every collection, it makes sure that this collection is fully inside the still available outcomes, then flips down the bits of the collection with the use of XOR. Bonus feature: when `freeIndexSet == 0`, meaning there remain no unmentioned outcomes, your list of index sets, referred to as your *partition*, is exhaustive


## Scalar Example

Let’s ask a question whose answer may lie in a range:

> What will the score be? [0, 1000]

Assume the questionId is `0x777def777def777def777def777def777def777def777def777def777def7890`, and that we trust the oracle `0xCafEBAbECAFEbAbEcaFEbabECAfebAbEcAFEBaBe` to deliver the results for this question.

To prepare this condition, the following code gets run:
```
await conditionalTokens.prepareCondition(
    '0xCafEBAbECAFEbAbEcaFEbabECAfebAbEcAFEBaBe',
    '0x777def777def777def777def777def777def777def777def777def777def7890',
    1,
    2
)
```
This results in a collectionId of `0x52ff54f0f5616e34a2d4f56fb68ab4cc636bf0d92111de74d1ec99040a8da118.`

We prepare the condition with two slots: one which represents the low end of the range (0) and another which represents the high end (1000). The payout vector should indicate how close the answer was to these endpoints. For example, if the oracle makes a report that the payout vector is `[0.9, 0.1]`, then this means the score was 100 (the slot corresponding to the low end is worth nine times what the slot corresponding with the high end is worth, meaning the score should be nine times closer to 0 than it is close to 1000). Likewise, if the payout vector is reported to be `[0, 1]`, then the oracle is saying that the score was at least 1000.

Now, let’s denote the enpoints 0 and 1000 as **LO** and **HI**respectively. Using the same method as above, we can find the collectionId for `(LO)` to be `0xd79c1d3f71f6c9d998353ba2a848e596f0c6c1a9f6fa633f2c9ec65aaa097cdc`.

Finally, we can find the combined collectionId for the two different conditions from both our questions in an expression like `(A|B)&(LO)`:

```
'0x' + BigInt.asUintN(256,
    0x52ff54f0f5616e34a2d4f56fb68ab4cc636bf0d92111de74d1ec99040a8da118n +
    0xd79c1d3f71f6c9d998353ba2a848e596f0c6c1a9f6fa633f2c9ec65aaa097cdcn
).toString(16)
This yields the value 0x2a9b72306758380e3b0a31125ed39a635432b283180c41b3fe8b5f5eb4971df4.
```

This yields the value `0x2a9b72306758380e3b0a31125ed39a635432b283180c41b3fe8b5f5eb4971df4.`

## Compounding Conditions

Let’s add some collateral into the example now. We’ll use DAI to collateralize our positions, and pretend the contract exists at the address `0xD011ad011ad011AD011ad011Ad011Ad011Ad011A`. We will denote this token with `$`. We can calculate the positionId for the position `$:(A|B)` via:

```
web3.utils.soliditySha3({
    t: 'address',
    v: '0xD011ad011ad011AD011ad011Ad011Ad011Ad011A'
}, {
    t: 'bytes32',
    v: '0x52ff54f0f5616e34a2d4f56fb68ab4cc636bf0d92111de74d1ec99040a8da118'
})
```
Which returns `0x6147e75d1048cea497aeee64d1a4777e286764ded497e545e88efc165c9fc4f0`.

Similarly, `$:(LO)` is `0xfdad82d898904026ae6c01a5800c0a8ee9ada7e7862f9bb6428b6f81e06f53bb`, and `$:(A|B)&(LO)` has an postionId of `0xcc77e750b61d29e158aa3193faa3673b2686ba9f6a16f51b5cdbea2a4f694be0`.

The important point to grasp here is that DAI may be staked in the contract as collateral in order to take a position in either of our two examples, or indeed, both. In other words, there are shallow positions like `$:(LO)`, or deep positions like `$:(A|B)&(LO)`. Stake in shallow positions can only be obtained through locking collateral directly in the contract; stake in deeper positions may be accessed by burning stake in shallower positions.

It’s easiest to see this at work if we draw out the same graph as earlier, hopefully now with greater understanding:

INSERT IMAGE

The resulting nested and interconnected positions are what we are talking about when we say that every one of the millions of future tokens ought to have a market associated with it that can genuinely survive due to its access to a global liquidity pool.



