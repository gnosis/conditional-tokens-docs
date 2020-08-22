---
id: ctftutorial13
title: Transferring to Contract Addresses
sidebar_label: Transferring to Contract Addresses
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=3821" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

Transferring conditional tokens, and any ERC-1155 tokens, to contract accounts differs slightly from transferring them externally owned accounts (EOAs). If the recipient's account address has code associated with it or if it's a contract account, the contract receiving the tokens has to implement methods for receiving ERC-1155 tokens.

We can demonstrate this by creating and deploying some new contracts.

Create a new file called `HODLer.sol` and add the following contract code.
```js
contract NaiveHodler {}
```
Compile it and deploy it on your development chain, then copy its address.

Now attempt another `safeTranserferFrom()` using the address of the `NaiveHodler` in the `to` field.

The transaction should fail, the reason given by the contract (which comes from the Open Zeppelin implementation of your ERC1155) is that this is an attempt to transfer to a non ERC1155 receiver implementer.

Receivers of your ERC1155 tokens that are contracts must implement certain methods.

Let's update our `HODLer.sol` to add `ERC1155Hodler` include these methods by importing them from OpenZeppelin.
```js
pragma solidity ^0.6.0;

import { ERC1155Receiver } from "github.com/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC1155/ERC1155Receiver.sol";

contract NaiveHodler {}

contract ERC1155Hodler is ERC1155Receiver {
  function onERC1155Received(
    address operator,
    address from,
    uint256 id,
    uint256 value,
    bytes calldata data
    )
    external
    override
    returns(bytes4)
    {
        this.onERC1155BatchReceived.selector;
    }

function onERC1155BatchReceived(
    address operator,
    address from,
    uint256[] calldata ids,
    uint256[] calldata values,
    bytes calldata data
    )
    external
    override
    returns(bytes4)
    {
        this.onERC1155BatchReceived.selector;
    }
}
```

Deploy an instance of the ERC1155Hodler and attempt a `safeTranserferFrom()` transaction to the ERC1155Hodler's address.

You can check the ERC1155Hodler's balance using `balanceOf()` or `balanceOfBatch`.

The `data` field in `safeTranserferFrom()` that we've been passing empty bytes into can can contain any number of bytes. One use case for this data field is to actually put call data in here for contracts to receive your ERC 1155 tokens. For example, we might have written the contract that should react to receiving ERC 1155 tokens as specific manner, maybe by checking accounts or something like that. In that case, the data in the data field that was supplied to save transfer from would actually be forwarded to the receiving contract in the `data` parameter in the corresponding reception method. Reacting to receiving certain ERC 1155 tokens, the contract might decide to parse this data out in some matter and use it somehow.

Contrast this with the way contracts typically handle your ERC-20 tokens. With your ERC-20 contracts. Often expect users to approve in allowance for the contracts use. Then users would call a method on the contract, which pulls the ERC-20 from the user into the contracts inventory and do accounting or actions after pulling that amount. ERC-1155 still supports this old pattern of first having the user approved the contract before having the contract pull ERC 1155 tokens from a user through the `setApprovalForAll` functionality. However, instead of having the user make two contract calls one to the conditional tokens to set approval for all and another to the contract which handles the logic, the contract writer can instead write the `onERC1155Received` and `onERC1155Batch` receive methods to directly react to receiving ERC-1155 tokens and performing actions as a reaction to this reception, where the actions can be further specified through this data parameter.

---

Next we'll learn about reporting payouts.
