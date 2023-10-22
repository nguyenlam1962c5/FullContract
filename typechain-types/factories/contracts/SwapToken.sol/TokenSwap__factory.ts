/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenSwap,
  TokenSwapInterface,
} from "../../../contracts/SwapToken.sol/TokenSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_BNBT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_USDT",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "BNBT",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BNBT_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDT_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setTBNBTRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setTUSDTRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
    ],
    name: "swapTBNBT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    name: "swapTUSDT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTBNBT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTUSDT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526019600355601e6004553480156200001b57600080fd5b5060405162001aaa38038062001aaa833981810160405281019062000041919062000221565b6200006162000055620000eb60201b60201c565b620000f360201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000268565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001e982620001bc565b9050919050565b620001fb81620001dc565b81146200020757600080fd5b50565b6000815190506200021b81620001f0565b92915050565b600080604083850312156200023b576200023a620001b7565b5b60006200024b858286016200020a565b92505060206200025e858286016200020a565b9150509250929050565b61183280620002786000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638e3dc3421161008c578063b5bc548d11610066578063b5bc548d146101c2578063c54e44eb146101e0578063ede15c59146101fe578063f2fde38b1461021c576100cf565b80638e3dc3421461016e578063a275b75c1461018a578063a31810e9146101a6576100cf565b806343544d0d146100d457806358b08893146100f0578063592a00e41461010c578063715018a61461012a5780637aef5bc2146101345780638da5cb5b14610150575b600080fd5b6100ee60048036038101906100e99190610f9b565b610238565b005b61010a60048036038101906101059190610f9b565b61024a565b005b61011461025c565b6040516101219190610fd7565b60405180910390f35b610132610262565b005b61014e60048036038101906101499190610f9b565b610276565b005b610158610405565b6040516101659190611033565b60405180910390f35b61018860048036038101906101839190610f9b565b61042e565b005b6101a4600480360381019061019f9190610f9b565b6105bd565b005b6101c060048036038101906101bb9190610f9b565b6107ac565b005b6101ca61099b565b6040516101d791906110ad565b60405180910390f35b6101e86109c1565b6040516101f591906110ad565b60405180910390f35b6102066109e7565b6040516102139190610fd7565b60405180910390f35b610236600480360381019061023191906110f4565b6109ed565b005b610240610a71565b8060038190555050565b610252610a71565b8060048190555050565b60045481565b61026a610a71565b6102746000610aef565b565b61027e610a71565b600081116102c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b89061117e565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161031c9190611033565b60206040518083038186803b15801561033457600080fd5b505afa158015610348573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036c91906111b3565b8111156103ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a59061122c565b60405180910390fd5b6104026103b9610405565b82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610bb39092919063ffffffff16565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610436610a71565b60008111610479576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104709061117e565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104d49190611033565b60206040518083038186803b1580156104ec57600080fd5b505afa158015610500573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052491906111b3565b811115610566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055d9061122c565b60405180910390fd5b6105ba610571610405565b82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610bb39092919063ffffffff16565b50565b60008111610600576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f79061117e565b60405180910390fd5b80600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161065c9190611033565b60206040518083038186803b15801561067457600080fd5b505afa158015610688573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ac91906111b3565b10156106ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e490611298565b60405180910390fd5b60006003546004548361070091906112e7565b61070a9190611370565b905061075b333084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610c39909392919063ffffffff16565b6107a83382600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610bb39092919063ffffffff16565b5050565b600081116107ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e69061117e565b60405180910390fd5b80600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161084b9190611033565b60206040518083038186803b15801561086357600080fd5b505afa158015610877573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089b91906111b3565b10156108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d390611298565b60405180910390fd5b6000600454600354836108ef91906112e7565b6108f99190611370565b905061094a333084600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610c39909392919063ffffffff16565b6109973382600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610bb39092919063ffffffff16565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b6109f5610a71565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5c90611413565b60405180910390fd5b610a6e81610aef565b50565b610a79610cc2565b73ffffffffffffffffffffffffffffffffffffffff16610a97610405565b73ffffffffffffffffffffffffffffffffffffffff1614610aed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae49061147f565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610c348363a9059cbb60e01b8484604051602401610bd292919061149f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cca565b505050565b610cbc846323b872dd60e01b858585604051602401610c5a939291906114c8565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cca565b50505050565b600033905090565b6000610d2c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610d929092919063ffffffff16565b9050600081511480610d4e575080806020019051810190610d4d9190611537565b5b610d8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d84906115d6565b60405180910390fd5b505050565b6060610da18484600085610daa565b90509392505050565b606082471015610def576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de690611668565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610e189190611702565b60006040518083038185875af1925050503d8060008114610e55576040519150601f19603f3d011682016040523d82523d6000602084013e610e5a565b606091505b5091509150610e6b87838387610e77565b92505050949350505050565b60608315610eda57600083511415610ed257610e9285610eed565b610ed1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec890611765565b60405180910390fd5b5b829050610ee5565b610ee48383610f10565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082511115610f235781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5791906117da565b60405180910390fd5b600080fd5b6000819050919050565b610f7881610f65565b8114610f8357600080fd5b50565b600081359050610f9581610f6f565b92915050565b600060208284031215610fb157610fb0610f60565b5b6000610fbf84828501610f86565b91505092915050565b610fd181610f65565b82525050565b6000602082019050610fec6000830184610fc8565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061101d82610ff2565b9050919050565b61102d81611012565b82525050565b60006020820190506110486000830184611024565b92915050565b6000819050919050565b600061107361106e61106984610ff2565b61104e565b610ff2565b9050919050565b600061108582611058565b9050919050565b60006110978261107a565b9050919050565b6110a78161108c565b82525050565b60006020820190506110c2600083018461109e565b92915050565b6110d181611012565b81146110dc57600080fd5b50565b6000813590506110ee816110c8565b92915050565b60006020828403121561110a57611109610f60565b5b6000611118848285016110df565b91505092915050565b600082825260208201905092915050565b7f536f206c756f6e672070686169206c6f6e20686f6e2030000000000000000000600082015250565b6000611168601783611121565b915061117382611132565b602082019050919050565b600060208201905081810360008301526111978161115b565b9050919050565b6000815190506111ad81610f6f565b92915050565b6000602082840312156111c9576111c8610f60565b5b60006111d78482850161119e565b91505092915050565b7f536f20647520686f7020646f6e67206b686f6e67206475000000000000000000600082015250565b6000611216601783611121565b9150611221826111e0565b602082019050919050565b6000602082019050818103600083015261124581611209565b9050919050565b7f536f206475206b686f6e67206475000000000000000000000000000000000000600082015250565b6000611282600e83611121565b915061128d8261124c565b602082019050919050565b600060208201905081810360008301526112b181611275565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112f282610f65565b91506112fd83610f65565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611336576113356112b8565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061137b82610f65565b915061138683610f65565b92508261139657611395611341565b5b828204905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006113fd602683611121565b9150611408826113a1565b604082019050919050565b6000602082019050818103600083015261142c816113f0565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611469602083611121565b915061147482611433565b602082019050919050565b600060208201905081810360008301526114988161145c565b9050919050565b60006040820190506114b46000830185611024565b6114c16020830184610fc8565b9392505050565b60006060820190506114dd6000830186611024565b6114ea6020830185611024565b6114f76040830184610fc8565b949350505050565b60008115159050919050565b611514816114ff565b811461151f57600080fd5b50565b6000815190506115318161150b565b92915050565b60006020828403121561154d5761154c610f60565b5b600061155b84828501611522565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006115c0602a83611121565b91506115cb82611564565b604082019050919050565b600060208201905081810360008301526115ef816115b3565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611652602683611121565b915061165d826115f6565b604082019050919050565b6000602082019050818103600083015261168181611645565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156116bc5780820151818401526020810190506116a1565b838111156116cb576000848401525b50505050565b60006116dc82611688565b6116e68185611693565b93506116f681856020860161169e565b80840191505092915050565b600061170e82846116d1565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061174f601d83611121565b915061175a82611719565b602082019050919050565b6000602082019050818103600083015261177e81611742565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b60006117ac82611785565b6117b68185611121565b93506117c681856020860161169e565b6117cf81611790565b840191505092915050565b600060208201905081810360008301526117f481846117a1565b90509291505056fea2646970667358221220f46078731237dbad06d499397501bdb6f64f1ac9637a50f6b895ac55a2a6a69064736f6c63430008090033";

type TokenSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenSwap__factory extends ContractFactory {
  constructor(...args: TokenSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _BNBT: PromiseOrValue<string>,
    _USDT: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenSwap> {
    return super.deploy(_BNBT, _USDT, overrides || {}) as Promise<TokenSwap>;
  }
  override getDeployTransaction(
    _BNBT: PromiseOrValue<string>,
    _USDT: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_BNBT, _USDT, overrides || {});
  }
  override attach(address: string): TokenSwap {
    return super.attach(address) as TokenSwap;
  }
  override connect(signer: Signer): TokenSwap__factory {
    return super.connect(signer) as TokenSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenSwapInterface {
    return new utils.Interface(_abi) as TokenSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenSwap {
    return new Contract(address, _abi, signerOrProvider) as TokenSwap;
  }
}
