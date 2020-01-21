---
id: doc6
title: Your First Prediction Market
sidebar_label: Your First Prediction Market
---

If you’ve been reading these docs in order, you should have already cloned the correct repo and installed the necessary dependencies. If not, go back a few steps and start with:
```
mkdir Gnosis && cd Gnosis/
git clone https://github.com/gnosis/conditional-markets-interface.git
cd conditional-markets-interface
npm install
```
### Quick Start

Once all the node packages are in place, you need to start up Ganache in order to interact with your own “blockchain”. In a separate terminal, run:
```
ganache-cli -d -i 437894314313
```

This starts a local chain with the unique `ID` we’re passing in (to avoid any potential clash between your id and one of the actual networks Ganache can connect to). Once Ganache is up and running, return to your original terminal, and run the Truffle “migrations”, which deploy all the necessary contracts you’ll need for a simple prediction market onto your local, ganache chain:
```
npm run migrate
```

*Note*: you may find that you need to adjust L4 in `migrations/utils/writeToConfig.js` when working with local networks so that Truffle can find the correct files to overwrite once the migration has been successfully completed. If you have an issue with this, change that line to:
```
const CONFIG_FILE_PATH = path.join(__dirname, "..", "..", "app", "config.local.json");
```
Once the migration has been successfully completed and all the correct values have been written to file, it’s time to start the webpack dev server and get playing with all our new toys!
```
npm run start
```

### Understanding Migrations and Markets
So, what have we actually done by running these neat little scripts that set everything up and let us look at a demo prediction market in just a few minutes? Let’s break it down:

1. The questions which form the basis of the markets you can see are defined in the market.config.js file in the root of the project. Obviously, these would be dynamic in a production version, but you can create and take a position on any question you like by adjusting this file.
2. Once defined, the conditions are then prepared in the migration.
3. 1 ETH is wrapped in WETH9 for use as collateral by the operator running the migrations (the migrater). As can be seen on the following line, the market maker’s factory needs to be `approved` to transfer ETH on behalf of the migrater.
4. This creates the conditions required for you to be able to choose outcomes you think are likely, take a position on them with your ETH, and receive back even more magical internet tokens if your predictions turn out to be accurate!
5. Notice how at the end, the `app/config.json` file is overwritten with the latest values of the migrations.

### Understanding the UI

We only created 3 conditions in `markets.config.js` , so it is no surprise that they are the only ones which show up. “Your balance: 0 Ξ” is how you begin, as it displays your Wrapped ETH balance. This interface will allow you to wrap your ETH, allow the market maker to spend your wrapped ETH and purchase the position you choose.

Notice how the basic interface tells you that you will receive less than twice your wager if your prediction is correct. This is because you are purchasing both sets of tokens from the prediction market and selling to the market maker the tokens for the position you expect to lose for some % of the purchase price.

You’ll also see clearly how to create conditional tokens and positions in reality. If you choose to make one of your predictions conditional, you will see an `if, then` block pop up below it, and will be able to bet on another of 3 provided conditions based on your original position. In this case, if you think that the price of ETH will be over $200 by 23/09/2019, then it might make sense to set this as to `Conditional` and take a position on the number of users according to Dapp Radar based on your prediction about the price, as the two are likely correlated to some extent.

If you select `Yes` for the price of ETH being over $200, set this bet to be conditional and - based on the condition of ETH being over $200 - make a prediction about the number of users for cryptohands according to DApp Radar, you can see the actual mechanics at work:

1. If both predictions turn out to be true, you stand to earn 1.3022 Ξ back on an initial bet of 1 Ξ.
2. If ETH does not go over $200 by the specified date, you simply get your 1 Ξ back, as this is a conditional bet.
3. If ETH is above $200, but cryptohands does not have at least 1200 users, then you lose your 1 Ξ bet.
For the mathematically inclined, what we see here are the economic expression of conditional probabilities, which are written as `P(A|Y)`, the probability of A happening, when Y happens.

### Resolving It All
As the deadline looms, and the actual outcome becomes self-evident, it is incumbent on the market maker operator to pause the operation. We can then resolve the markets by acting as an oracle, and make sure everyone gets paid.

First, you will need to run the appropriate script to resolve the markets you have taken positions in:
```
npx truffle exec scripts/resolve_eoa_oracles.js
```
Again, if you run into issues on your local chain, make sure to change L16 in the above script to target `config.local.json` rather than just `config.json`. This script will allow you to pick markets to resolve and set them to one of the possible options. Who needs Delphic figures and sulfurous vents when you can just use software?

Now that the markets you’re interested in have been resolved, we need to use the other script provided in order to close them and allow all participants to redeem their positions and convert their Wrapped ETH into ETH if they so choose to. Again, this is as simple as executing the script provided for you:
```
npx truffle exec scripts/operate_lmsr.js
```
This script will give you the option to refresh, pause or resolve the markets in question. Here, we are interested in resolving them so that we can redeem our incredibly insightful positions that we took in the beginning of this tutorial. If you made sure that the oracle script resolved the conditions in favor of the mock bets you made, you should be able to close the markets here and then redeem your winning positions from the UI.

With this exercise, we have seen:

1. how we can take positions on outcomes,
2. how different bets and conditions will yield different 3. returns,
3. how markets can be resolved and winners paid out.

If you have made it this far, congratulations! Please submit a PR to the repo, or get in contact with us to continue contributing to a future where we can collectively pursue the most optimal predictions about how a better, more open, liquid and fair society might actually function.


