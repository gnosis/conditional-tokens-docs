---
id: ctftutorial15
title: Basic Redemption
sidebar_label: Basic Redemption
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=5028" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

To redeem the underlying collateral from a conditional token that has been reported to be true, you can use the `redeemPositions()` method.

The parameters for `redeemPositions()` look similar to `splitPositions()` and `mergePositions()`, but there are a couple of important differences.

First, note that `indexSets` is not called partition. This is because the index sets provided to redeem positions do not have to actually partition the outcome slots of the condition. More precisely, they do not have to be disjoint sets. For example, if you're holding `(B|C)`, `(B)`, and `(C)`, you can pass in all three index sets into this array and redeem the conditional tokens associated with these index sets.

The other difference is that there is no amount. That's because redeem positions will automatically redeem all of the available balance that you have of conditional tokens in a given position.

The `parentCollectionId` is there so that we can redeem to shallower positions instead of directly to collateral.

For example, we can take the conditional token that pays out when only A occurs and redeems that for the same amount of collateral token. Similarly, we can take amounts of the token that pays out when A or B occurs redeemed for the same amount of collateral token, however, conditional tokens on a deeper layer containing this condition can be redeemed to conditional tokens on the shallower level.

By this point, your account should hold several positions related to the question that we reported in the previous section. Try redeeming some of them using `redeemPositions()`. Start by redeeming for collateral by setting the `parentCollectionId` as `0x0000000000000000000000000000000000000000000000000000000000000000`.

If you call `balanceOf()` in the collateral ToyToken after redemption, you should find that your collateral token balance has increased.

---

In the next section we'll try redeeming from deeper positions.
