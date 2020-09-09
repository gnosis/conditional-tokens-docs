---
id: ctftutorial14
title: Reporting Payouts
sidebar_label: Reporting Payouts
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=4751" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

So far, we talked about conditional tokens as if tokens as if they had a value denominated in some backing ERC20 token in the case that a specific condition is met.

First, let's look at the first condition we have prepared with three outcome slots (A, B, and C).

In order to resolve this condition, we used the method `reportPayouts`, which takes two parameters.
* `questionID`: the bytes32 representation of your question. We'ved used `0x0000000000000000000000000000000000000000000000000000000000000001` and `0x0000000000000000000000000000000000000000000000000000000000000002`.
* `payouts`: an array of uint256 values representing the ratio of the collateral that each outcome can claim. The length of this array must be equal to the `outcomeSlotCount`.

In most cases, the oracle would be expected to set one outcome as true and the others false.

Let's use our first question (`0x0...1`), with three outcome slots (A, B, and C) as an example and resolve it to B.

Call `reportPayouts()` using the first condition's question ID as for the `questionId` parameter and `[0,1,0]` for the `parouts` parameter.

---

Now that we have successfully reported the results of this condition, conditional tokens that depend on this condition can now use the redemption functionality to claim the underlying collateral.
