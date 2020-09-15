---
id: ctftutorial10
title: Splitting to Deeper Positions
sidebar_label: Splitting to Deeper Positions
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=3076" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

Now we will return to split position in order to create a stake in these deeper positions.

![Splitting](assets/v2-cond-market-slots-only.png)

You can call `balaceOfBatch()` to get the balance of each of the `positionId`s you have derived thus far.

Let's split your position in `(A)` into positions in `(A) & (hi)` and `(A) & (lo)`.

We'll call the `splitPosition()` function, with use the address of one of your ToyTokens as `collateralToken`, the `collectionId` of `(A)` as `parentCollectionId`, the `conditionId` of the condition with outcome slots `(hi) & (lo)`, the index sets for `(hi)` and `(low)` for the `partition` (`[1,2]`), and finally the `amount` that you want to split.

Call `balanceOfBatch()` again to see how your balances have changed.

---

 Now that we have learned how to derive position IDs and split positions, the next sections will focus on recombining positions for their collateral.
