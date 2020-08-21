---
id: ctftutorial11
title: Merging Positions
sidebar_label: Merging Positions
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=3318" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

The `splitPosition()` function has a corresponding inverse called `mergePosition()` which does exactly what it sounds like, merge equal amounts positions into their underlying collateral or positions.

First, let's merge conditional tokens representing `(A)` and conditional tokens representing `(B|C)` back into the ToyToken collateral backing those positions.

`mergePosition()` has the following parameters:
* `colleteralToken`: the address of the collateral token.
* `parantCollectionId`: the bytes32 ID of the parent collection. Zeros if you are merging back to collateral `0x0000000000000000000000000000000000000000000000000000000000000000`, or the collection ID of the position you would like to merge back into.
* `conditionId`: the bytes32 ID of the condition who's positions you are be merging.
* `partition`: an array of outcome index sets that define how the outcome slots have been partitioned.
* `amount`: the amount of each position that you are merging.

After merging `(A)` and `(B|C)` into their underlying collateral token, try merging. `(A) & (high)` and `(A) and (low)` to receive the underlying positions `(A)`,`(high)`, and `(low)`.

Try calling `balanceOfBatch()` with each of the position IDs before and after each merge to see how it affects the balances of your positions.

---
