---
id: ctftutorial09
title: Combining Outcome Collections
sidebar_label: Combining Outcome Collections
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=2692" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

To this point we've been supplying zeros as our parent `collectionId` this whole time. What this means is that we're only talking about a first level of positions. However, another important feature of the condition tokens is the ability to combine many different conditions in a single position. As in the image below.

![Splitting Unions](assets/v2-cond-market-slots-only.png)

Let's say we want to create the position `(A) & (hi)`. We can use the `getCollection()` function to find the `collectionId`

Specify the `collectionId` for the collection of outcome slot `(A)` by itself as a `parentcollectionId`.

Then we specify the `conditionId` for the other condition, the second condition that we prepared, which has two outcome slots `(lo)` and `(high)`.

Finally, we specify an index set that represents the index set for only the outcome slot `(high)`, which is `2`.

In this case, we end up with a position that you can really call `(A) & (high)`, this is the position that pays out the collateral if both `(A)` occurs and `(high)` occurs.

Note that you can derive the same positionId for `(A) & (high)` by using the `collectionId` of `(high)`, the `conditionId` of the condition with outcome slots `A`, `B,`, and `C`, and the index set `[1]` which corresponds with `(high)`.

Find and note the `collectionID` for these positions.
```
(A) & (high)
(A) & (lo)
(B) & (high)
(B) & (lo)
(B|C) & (high)
(B|C) & (high)
```

From this, you can derive the `positionId` of each collection using their `collectionId` and the address of each collateral token.

---

Next we'll use these `collectionId`s and `positionId`s that we derived to split into deeper positions.
