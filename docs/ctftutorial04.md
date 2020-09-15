---
id: ctftutorial04
title: Bit Arrays
sidebar_label: Bit Arrays
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=805" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

In order to proceed, we need to talk quickly about bit arrays.
Bit arrays are exactly how they sound, they are just an array of bits. They are useful for indicating whether something is included in a set or not.

Let's explore how bitwise operations affect numbers, quickly.

For example, a bit wise `AND` will only allow the bits that both values share in their respective places.

`0b110 & 0b011 = 0b010`

Bitwise `OR` will have a bit switched on every place that is switched on either value.

`0b110 | 0b011 = 0b111`

A bit wise, `exclusive OR` will leave a bit on only if exactly one of the bits are on in both values.

`0b110 ^ 0b011 = 0b101`

We use bit arrays to indicate whether or not an outcome is part of a specific set of outcomes.

One very efficient way to represent bit arrays is with unsigned integers, like so.
```
0b001 == 1
0b010 == 2
0b011 == 3
0b100 == 4
0b101 == 5
0b111 == 6
```
---

Now that we have an idea of what bit arrays are, we can talk about index sets and outcome collections.
