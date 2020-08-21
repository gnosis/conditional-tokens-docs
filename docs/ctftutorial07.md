---
id: ctftutorial07
title: Splitting From Collateral
sidebar_label: Splitting From Collateral
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=1668" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

So far, we have created position IDs in conditions, but there is no value at stake in them yet. In fact, we haven't even minted any of our ToyTokens yet. This means that we don't have any conditional tokens.

So let's learn how to create some conditional tokens!

Before we create any conditional tokens, we'll need some collateral.

Call the `mint()` function in each of your `ToyToken` contracts to mint some `amount` of tokens (say `1000`) to your `address`.

Then we need to set approval for the conditional tokens contract to send your ToyTokens. Call the `approve()` function on each of your `ToyToken` contracts with the `address` of your conditional tokens contract and the `amount` of tokens that you minted.


Conditional tokens are created using the `splitPosition()` function, which takes the following parameters:
* `colleteralToken`: the address of the collateral token.
* `parantCollectionId`: the bytes32 ID of the parent collection. Since we're splitting from collateral, we set this to zero with `0x0000000000000000000000000000000000000000000000000000000000000000`.
* `conditionId`: the bytes32 ID of the condition that we'll be creating conditional tokens for.
* `partition`: an array of outcome index sets that define how the outcome slots will be partitioned.
* `amount`: the amount of collateral that will be split into conditional tokens.

For the first condition you created (the one with three outcomes, A, B, and C), let's use the `splitPosition()` create two positions `(A)` and `(B|C)` using your first `ToyToken` as collateral.

The `partion` parameter in `splitPosition()` is the only one we haven't encountered yet. For this, we'll input an array of the index sets that we derived earlier. To split the collateral into positions `(A)` and `(B|C)`, the array should be `[1,6]`. Remember the index set for `(A)` is `0x001 --> 1` and the index set for `(B|C)` is `0x110 --> 6`.

You can check the balance of your positions using the `balanceOf()` or `balanceOfBatch()` functions, with your `address` and the `positionId`s of your positions as parameters.

Repeat these steps to create the same set of positions with your other ToyToken, and then repeat the steps to create the positions `(lo)` and `(high)` in your second condition with each of your ToyTokens as collateral.

When you're done, you should have eight positions.
```
T1(A)
T1(B|C)
T2(A)
T2(B|C)
T1(lo)
T1(high)
T2(lo)
T2(high)
```

Call `balanceOfBatch()` on your conditional tokens contract to check the balances of each in one function call.

---

Notice that the `parantCollectionId` was `0x0` for all of our splits so far. Next we'll try splitting from other conditions, allowing us to create complex combinations of conditions. A quality that is unique to the conditional tokens framework.
