---
id: ctftutorial05
title: Basic Outcome Collections
sidebar_label: Basic Outcome Collections
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=1037" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Derive Index Sets

Earlier, we mentioned that [bit arrays can be used to represent inclusion inside of a set](ctftutorial04.md). Let's say a condition has three outcomes. You can number these outcomes with indices starting from zero, so the first outcome has index zero. Second outcome has index one in the third outcome has indexed two. An index set for these outcomes would be a bit array with three bits.

Let's consider the first condition that we prepared; a condition with three outcomes slots.
This condition, together with another parameter called the index set, specifies an outcome collection.

Let's give the outcomes slots for this condition colloquial names to ease the discussion.

We will call the outcome slots for this first condition A, B and C. For example, in order to determine the index sets for an outcome collection containing outcome slots B and C first list the outcome slots in order.

For example:
```
Outcome A,B,C
        0,1,1 --> 0b110 --> 6
        1,0,0 --> 0b001 --> 1
```

Here have written zero for A, one for B and one for C in order indicate that is not included in this outcome collection while B and C are. To turn this array of bits into a uint. We will start counting from the least significant bit. Basically, take 011 Write it backwards and put zero b in front of it, as you can see in the ones place corresponding to index zero or the first outcome slot, there is a zero while in the twos in fourth place. There are ones which correspond to the second and third outcome slots being inside of the collection. We can also recognize this integer as the integer six. What this means is that the outcome Collection containing B and C, which represents the outcome in which either B or C occurs can be derived from the condition ID. And the index set here written in normal decimal notation.

## Get Outcome Collection IDs

With the index sets derived, we can now get the outcome collection ID with the `getCollectionId()` function.

For now, we will supply a value of all zeros as the `parentCollectionId`.
`0x0000000000000000000000000000000000000000000000000000000000000000`

Use your condition's ID as for the `conditionId` parameter.

And `6` for the index set, as derived above.


*Please note that this collection ID is different from the condition ID and that represents a collection of outcome slots on a specific condition.*

Make a note of this collection ID and follow the same steps for an outcome collection containing only one outcome slot. For example, the outcome slot A. The index set associated with the outcome collection with only the Outcome slot A can be found to be the integer one.


Similarly, for the second condition that you prepared earlier, we can give these conditions outcome slots names as well. We will call the first outcome slot `low` and the second outcome slot `hi` and will consider two outcome collections based off of this condition; the outcome collection with only `low` and the outcome collection with only `hi`.

```
Outcome low, hi
        1  , 0 --> 0b01 --> 1
        0  , 1 --> 0b10 --> 2
```

*Note that while the outcome collection of Only Low may have the same index set as the outcome collection for only A, it differs in the condition as used to derive this outcome collection.*

follow the same steps as earlier to derive collection IDs for `low` and `hi`, remembering to use the condition ID for the second condition you created earlier.

---

Now that we've derived our outcome collection IDs, we can use them to create positions.
