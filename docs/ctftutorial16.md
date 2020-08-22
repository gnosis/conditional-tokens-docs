---
id: ctftutorial16
title: Deeper Redemptions
sidebar_label: Deeper Redemptions
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=5437" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

At this point, your account should also hold some deeper positions; `(A) & (hi)` and `(A) & (lo)`. Since the outcome slot `(A)` does not receive any of the payout, you can attempt to redeem `(A) & (hi)` for `(hi)` tokens, but you will get 0 `(hi)` tokens because the payout for `(A)` is 0.

Try calling `redeemPositions()` replacing the zeros in the `parentCollectionId` parameter with the collection ID for `(hi)` and the `indexSets` for A, `[1]`.

Calling `balanceOf()` or `balanceOfBatch()` you should notice that the balance of `(A) & (hi)` has been reduced to 0, but the balance of `(hi)` has not increased. This is because `(A)` does not receive any of the payout.

---

Next we'll learn about reporting scalar markets.
