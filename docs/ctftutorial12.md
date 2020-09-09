---
id: ctftutorial12
title: Transferring to EOA addresses
sidebar_label: Transferring to EOA addresses
description:
---
<div class="resp-container">
    <iframe class="resp-iframe" src="https://www.youtube-nocookie.com/embed/uZNWq07Y4Ag?start=3545" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

As conditional tokens follow the ERC-1155 standard, they can be transferred between accounts using the `safeTranserferFrom()` and `safeBatchTransferFrom()` functions.

Let's first start with the case where we're transferring to an externally owned account. Call `balanceOfBatch()` again to check your balances in the different positions you have created and pick one to transfer to a different account.

Then call `safeTranserferFrom()` with the following parameters:
* `from`: your addresses
* `to`: the address you want to send to
* `id`: the position ID of the position you would like to transfer
* `amount`: the amount of the position you would like to transfer
* `data`: ignore this for now and just specify empty bytes `0x`

Now call `balanceOfBatch()` with the address you used for the `to` parameter in your last transaction as the `address` and you should see the balance of this addresses positions have changed to reflect the transfer.

It is also woth noting that you can approve other addresses to transfer your ERC1155 tokens from your address by calling the `setApprovalForAll()`.

---

Next we'll talk about transferring to contract accounts.
