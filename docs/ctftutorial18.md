---
id: ctftutorial18
title: Scalar Redemptions
sidebar_label: Scalar Redemptions
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=5649" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

Recall earlier that your account also had conditional tokens in `(A) & (lo)`. Earlier we demonstrated redeeming through the first condition, but we can actually redeem through any of the conditions contained in the position, in any order. Which means we can redeem through the second condition. In this case, we can redeem the A and low conditional token to the only A conditional token.

To do this, we go back to our `redeempositions()`. We keep the collateral token the same. However, for the `parentCollectionId` we want the `(A)` collection ID.

The index set of the `(lo)` outcome slot is `[1]`.

If we perform this redemption will find that the balance of this accounts A and low conditional tokens has been burnt down to zero.

Now recall that low is redeemable for 1/4 of the original amount. So if you check the balance for position `(A)` you should see that it has increase by 1/4 of the amount of collateral you originally put into the the `(A) & (lo)` position.

---

This concludes out tour of the conditional tokens contracts. Hopefully you found it useful.
✌️
