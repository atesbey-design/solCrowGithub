# solCrow

## Available Scripts

First Step: Install dependencies

### `yarn install`

Second Step: Create a .env file in the root directory and add the following variables:

REACT_APP_SOLANA_NETWORK=devnet

REACT_APP_SOLANA_RPC_HOST=https://api.devnet.solana.com

REACT_APP_SOLANA_RPC_PORT=443

REACT_APP_SOLANA_RPC_PROTOCOL=https

Next Step: Run the app

### `yarn start`


If you want to run the app in production mode, run the following command:

### `yarn build`


Easy as that!


ıf you want to create custom program id, you can use the following command:

First Step: Change route to program directory

### `cd program`

Second Step: Run the following command

### `cargo build-bpf --manifest-path=Cargo.toml --bpf-out-dir=dist/program`

Now deploy the program to the devnet

### `solana deploy --keypair keypair.json dist/program/program.so --url https://api.devnet.solana.com `

The output of the command will be the program id. Copy the program id and paste it to the src/solana/index file as follows:


## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




**Bir mum, diğer mumu tutuşturmakla ışığından bir şey kaybetmez.**
**Mevlana**

