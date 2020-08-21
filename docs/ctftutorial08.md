---
id: ctftutorial08
title: Splitting Unions
sidebar_label: Splitting Unions
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=705" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

Previously, we split collateral into positions. But the conditional tokens framework also allows us to create combinations of conditions.

Here is an example of some valid and invalid splits, either from collateral ($) or from other positions.

![Valid and invalid splits](assets/valid-vs-invalid-splits.png)

Looking at the below image of positions, you'll notice a second layer of positions, this tied very closely to the parent collection ID parameter. When we passed in `0x0` as the parent `collectionId` what we are telling the contract is we would like to start from the root collection or the collateral token directly.

![Splitting Unions](assets/v2-cond-market-slots-only.png)

To split a position into the deeper positions, you will pass in the `collectionId` of one of your positions, instead of `0x0`.

A simple example, using our previous positions, would be to split `(B|C)` into `(B)` and `(C)`. You can try this split with the current state of the conditional tokens contract on your development chain.

To do this, we will keep the `collateralToken` the same, using the address of one of your ToyTokens.

We will also keep the `parentCollectionId` the same. The parent collection ID can be roughly thought of as the next level up.

We'll keep the `conditionId` the same as well, because that is the condition that outcome collections containing only `(B)` and only `(C)`.

Change that occurs here is in the partition. We want to figure out the index set values for only B and only C. With the process noted earlier, we can find those values. For example, the index set for the outcome collection containing only `(B)` is `2`, and the index set for the outcome collection containing only `(C)` is `(4)`.

Since this does not cover all of the outcome slots in the condition, the split will actually look for value in the position `(B|C)` instead of trying to get value from one level up, or in this case is from the collateral token.

---

In the next sections, we'll cover combining outcome collections and splitting into deeper positions.
