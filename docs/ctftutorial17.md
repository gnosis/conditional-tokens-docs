---
id: ctftutorial17
title: Reporting Scalar Markets
sidebar_label: Reporting Scalar markets
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=5534" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

Now let's try reporting for the result of the condition with the outcome slots `(hi)` and `(lo)`.

Make sure you are transacting from the oracle account associated with this condition and using the correct question ID.

Recall that the length of the `payouts` array needs to match the number of outcome slots. If you are reporting on a scalar market (a market where the results on scale, rather than categorical) you may not want the payouts for different conditions to be all or nothing.

For example, you may want the `(lo)` token to receive 25% and the `(hi)` token to receive 75% of the payout.

One way to do this is to simply provide the values 25 and 75 in the array.

However, the `payouts` array is actually defines the ratio of payouts. So you could express the same ratio by providing 1 and 3, or 3 and 9, etc. Really, you can provide any numbers in the array and the contract will consider them to be numerators and the sum to be the denominator for the payouts.

Call `reportPositions()`, using the second condition ID and an index set that expresses a ratio like 1:3.

---

In the next section, we'll redeem a positions in this scalar market.
