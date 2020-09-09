---
id: ctftutorial03
title: Conditions
sidebar_label: Conditions
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=705" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

The first topic when discussing the conditional tokens is the concept of a condition.

A condition can be thought of as a question that an oracle is expected to give an answer to in the future.

On the conditional tokens contract conditions are represented by three parameters.

1. **An oracle:** an Ethereum address that is expected to make a transaction to the conditional tokens in the future, reporting the result of a condition.
2. **A question ID:** 32 bytes of data used to uniquely identify a question. Note that the contract has no knowledge of how to interpret the question ID, it is just used as an input for distinguishing different conditions. However, many front ends choose to interpret the question ID in very specific ways. For example, when they have a database where entries of the database may be identified by this question ID.
3. **Outcome slots:** A 256 bit unsigned integer that determines the different potential outcomes of this condition. Conditions can have between 2 and 256 outcome slots.

## Get Condition ID
To get a condition ID, we'll use the `getConditionId()` function from the conditional tokens contract.
It requires the three parameters mentioned above: oracle address, questionId bytes32, and outcomeSlotCount uint256.

Use the address an account you control to use as the `oracle`.

Use any random 32 bytes of hex data as your `questionId`, you can copy and paste this if you like:
`0x0000000000000000000000000000000000000000000000000000000000000001`

Use `3` for the `outcomeSlotCount`.

Call the `getConditionId()` function and make note of the bytes30 `conditonId` that it returns.

## Prepare Condition
We need to prepare a condition before we can create conditional tokens for it.
To prepare a condition, we'll call the `prepareCondition()` function using the same parameters as above.
Note that the `oracle` does not need to be the same as the address calling the function.

You can verify that the condition was properlly prepared by calling `getOutcomeSlotCount()` using the `conditionID` you previously created as the parameter. If it returns `3` (or the number of outcome slots you set, if you did something different), then the condition was prepared correctly.

Prepare a second condition using the same steps, using a different `questionId` (you can use `0x0000000000000000000000000000000000000000000000000000000000000002` if you like) and a different `2` outcome slots.

---

Next we'll talk a little about bit arrays and why they are important for conditional tokens.
