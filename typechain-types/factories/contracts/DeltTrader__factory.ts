/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeltTrader,
  DeltTraderInterface,
} from "../../contracts/DeltTrader";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AuctionEnd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endAt",
        type: "uint256",
      },
    ],
    name: "AuctionStart",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bid",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct DeltTrader.Bid[]",
        name: "updatedBids",
        type: "tuple[]",
      },
    ],
    name: "BidPlaced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Purchaced",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "activeAuctions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_auction",
        type: "bool",
      },
    ],
    name: "addListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "endAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "erc721",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
    ],
    name: "getListings",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "auctioned",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
        ],
        internalType: "struct DeltTrader.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
    ],
    name: "purchace",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "contractAddr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct DeltTrader.Listing",
        name: "_listing",
        type: "tuple",
      },
    ],
    name: "removeListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isErc721",
        type: "bool",
      },
    ],
    name: "setContractStandard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "auctioned",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600055612d4d806100256000396000f3fe6080604052600436106100c25760003560e01c806373c2bf071161007f5780639f0d7a31116100595780639f0d7a31146102c7578063a316ee93146102e7578063a62e970814610314578063e574dfa61461035a57600080fd5b806373c2bf071461022c5780637ce0fb2c1461026c57806398f1e6e8146102a757600080fd5b806327e235e3146100c75780632e1a7d4d146101075780634440199f1461012957806344f91c1e146101855780635b623cff146101f957806371221c181461020c575b600080fd5b3480156100d357600080fd5b506100f46100e2366004612908565b60056020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561011357600080fd5b50610127610122366004612a65565b61036d565b005b34801561013557600080fd5b506101496101443660046129ae565b61043c565b604080516001600160a01b03978816815296909516602087015293850192909252606084015215156080830152151560a082015260c0016100fe565b34801561019157600080fd5b506101d46101a0366004612982565b600260208181526000938452604080852090915291835291208054600182015491909201546001600160a01b039092169183565b604080516001600160a01b0390941684526020840192909252908201526060016100fe565b610127610207366004612a00565b6104af565b34801561021857600080fd5b50610127610227366004612a1c565b610ae5565b34801561023857600080fd5b5061025c610247366004612908565b60046020526000908152604090205460ff1681565b60405190151581526020016100fe565b34801561027857600080fd5b5061025c610287366004612982565b600360209081526000928352604080842090915290825290205460ff1681565b3480156102b357600080fd5b506101276102c2366004612a00565b6111e7565b3480156102d357600080fd5b506101276102e2366004612a00565b611cb4565b3480156102f357600080fd5b50610307610302366004612a00565b612046565b6040516100fe9190612adb565b34801561032057600080fd5b5061012761032f366004612949565b6001600160a01b03919091166000908152600460205260409020805460ff1916911515919091179055565b610127610368366004612a00565b612116565b600260005414156103995760405162461bcd60e51b815260040161039090612b90565b60405180910390fd5b60026000908155338152600560205260409020548111156103f05760405162461bcd60e51b8152602060048201526011602482015270696e737566666963656e742066756e647360781b6044820152606401610390565b604051339082156108fc029083906000818181858888f1935050505015801561041d573d6000803e3d6000fd5b5033600090815260056020526040812080549290920390915560019055565b6001602052826000526040600020602052816000526040600020818154811061046457600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b039384169750929091169450925060ff8082169161010090041686565b600260005414156104d25760405162461bcd60e51b815260040161039090612b90565b600260005580600181516001600160a01b03166000908152600160209081526040808320828601518452909152902054156105a55781516001600160a01b039081166000908152600160208181526040808420828801805186529083528185208851909616855283835281852090518552909152909120546105549190612c9b565b8154811061056457610564612cde565b906000526020600020906005020160040160019054906101000a900460ff16156105a05760405162461bcd60e51b815260040161039090612b63565b6105bd565b60405162461bcd60e51b815260040161039090612b63565b82600181516001600160a01b0316600090815260036020908152604080832082860151845290915290205460ff166106375760405162461bcd60e51b815260206004820152601f60248201527f61756374696f6e20666f7220746f6b656e206973206e6f7420616374697665006044820152606401610390565b84516001600160a01b039081166000908152600260209081526040808320828a01518452909152902054163314156106aa5760405162461bcd60e51b815260206004820152601660248201527536bab9ba103737ba1037bbb7103a3432903a37b5b2b760511b6044820152606401610390565b84516001600160a01b03166000908152600260209081526040808320828901518452909152902060030154156107aa5784516001600160a01b039081166000908152600260208181526040808420828b01805186529083528185208b5190961685529282528084209251845291905290206003908101549101805490916000190190811061073a5761073a612cde565b90600052602060002090600202016001015434116107a55760405162461bcd60e51b815260206004820152602260248201527f6d75737420706179206d6f7265207468616e20746865206869676865737420626044820152611a5960f21b6064820152608401610390565b61082e565b84516001600160a01b03166000908152600260208181526040808420828a015185529091529091200154341161082e5760405162461bcd60e51b8152602060048201526024808201527f6d75737420706179206d6f7265207468616e2074686520696e697469616c20706044820152637269636560e01b6064820152608401610390565b84516001600160a01b039081166000908152600260208181526040808420828b01805186529083528185208b5190961685529282528084209251845291905290206003908101549101805490916000190190811061088e5761088e612cde565b600091825260208083206002928302016001015488516001600160a01b03908116855283835260408086208b8501805188529085528187208c519093168752948452808620945186529390925291832060039081015491018054929360059390926000190190811061090257610902612cde565b600091825260208083206002909202909101546001600160a01b0390811684528382019490945260409283018220805490950190945588518316815260018085528282208a8601805184529086528383208b519095168352908552828220905182529093529091205481543492916000190190811061098357610983612cde565b600091825260208083206002600590930201919091019290925586516001600160a01b039081168252600180845260408084208a8601805186529086528185208b51909416855282865281852090518552909452929091205433926109e791612c9b565b815481106109f7576109f7612cde565b60009182526020808320600590920290910180546001600160a01b039485166001600160a01b031991821617909155885184168352600280835260408085208b85018051875290855281862082518084018452338152348188019081526003928301805460018181018355918b52898b2093519088029093018054938c1693909816929092178755519501949094558b51909616855290835280842094518452939091529082902091517f753a4515fb6d0ef71f9d75dbf60abf453b1daea38820d5861fb4b635b15d4a0692610ad1928992910190612c06565b60405180910390a150506001600055505050565b83516001600160a01b0316600090815260046020526040902054849060ff16156110f957805160208201516040516331a9108f60e11b8152600481019190915233916001600160a01b031690636352211e9060240160206040518083038186803b158015610b5257600080fd5b505afa158015610b66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8a919061292c565b6001600160a01b031614156110b1578460005b81516001600160a01b0316600090815260016020908152604080832082860151845290915290205415610c845781516001600160a01b03908116600090815260016020818152604080842082880180518652908352818520885190961685528383528185209051855290915290912054610c179190612c9b565b81548110610c2757610c27612cde565b906000526020600020906005020160040160019054906101000a900460ff16610c845760405162461bcd60e51b815260206004820152600f60248201526e1d1bdad95b881a5cc81b1a5cdd1959608a1b6044820152606401610390565b60008611610cd45760405162461bcd60e51b815260206004820152601c60248201527f7072696365206d7573742062652067726561746572207468616e2030000000006044820152606401610390565b6040805160c08101825230815233602080830191909152818301899052606082018890528615156080830152600060a083018190528a516001600160a01b031681526004909152919091205460ff1615610dfc57875160405163e985e9c560e01b81523360048201523060248201526001600160a01b039091169063e985e9c59060440160206040518083038186803b158015610d7057600080fd5b505afa158015610d84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da891906129e3565b610df05760405162461bcd60e51b815260206004820152601960248201527818dbdb9d1c9858dd081b5d5cdd08189948185c1c1c9bdd9959603a1b6044820152606401610390565b60016060820152610ec4565b875160405163e985e9c560e01b81523360048201523060248201526001600160a01b039091169063e985e9c59060440160206040518083038186803b158015610e4457600080fd5b505afa158015610e58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7c91906129e3565b610ec45760405162461bcd60e51b815260206004820152601960248201527818dbdb9d1c9858dd081b5d5cdd08189948185c1c1c9bdd9959603a1b6044820152606401610390565b87516001600160a01b039081166000908152600160208181526040808420828e0151855282528084208054808501825590855293829020865160059095020180549486166001600160a01b031995861617815591860151928201805493909516929093169190911790925582015160028201556060820151600382015560808201516004909101805460a084015115156101000261ff00199315159390931661ffff199091161791909117905584156110a95760208181015189516001600160a01b039081166000908152600280855260408083208e87018051855290875281842080546001600160a01b0319169686169690961790955580870180518f519095168452828752818420955184529490955293902090920191909155517f93798252b5e46ac8a68f8d92ada9840709df81a31d62d3b3a2fa58dd03c148699089906110124262015180612c83565b6040805184516001600160a01b0316815260209485015194810194909452830191909152606082015260800160405180910390a16110534262015180612c83565b88516001600160a01b039081166000908152600260209081526040808320828e01805185529083528184206001908101969096558d519094168352600382528083209351835292905220805460ff191690911790555b5050506111e0565b60405162461bcd60e51b815260206004820152601860248201527f6e6f74206f776e6572206f6620676976656e20746f6b656e00000000000000006044820152606401610390565b80516020820151604051627eeac760e11b815233600482015260248101919091526000916001600160a01b03169062fdd58e9060440160206040518083038186803b15801561114757600080fd5b505afa15801561115b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117f9190612a7e565b111561118d57846000610b9d565b60405162461bcd60e51b815260206004820152602260248201527f6d757374206f776e206174206c656173742031206f6620676976656e20746f6b60448201526132b760f11b6064820152608401610390565b5050505050565b6002600054141561120a5760405162461bcd60e51b815260040161039090612b90565b6002600090815581516001600160a01b0316815260046020526040902054819060ff1615611ba257805160208201516040516331a9108f60e11b8152600481019190915233916001600160a01b031690636352211e9060240160206040518083038186803b15801561127b57600080fd5b505afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b3919061292c565b6001600160a01b031614156110b15781600181516001600160a01b03166000908152600160209081526040808320828601518452909152902054156105a55781516001600160a01b0390811660009081526001602081815260408084208288018051865290835281852088519096168552838352818520905185529091529091205461133f9190612c9b565b8154811061134f5761134f612cde565b906000526020600020906005020160040160019054906101000a900460ff161561138b5760405162461bcd60e51b815260040161039090612b63565b83600181516001600160a01b0316600090815260036020908152604080832082860151845290915290205460ff166114055760405162461bcd60e51b815260206004820152601f60248201527f61756374696f6e20666f7220746f6b656e206973206e6f7420616374697665006044820152606401610390565b85516001600160a01b03166000908152600260209081526040808320828a01518452909152902060030154156114725785516001600160a01b03166000908152600360209081526040808320828a015184529091529020805460ff1916905561146d86611cb4565b611b47565b85516001600160a01b039081166000908152600360209081526040808320828b0180518552908352818420805460ff191690558a518516845260018084528285208251865284528285208c519096168552808452828520915185529252909120549091906114e1908390612c9b565b815481106114f1576114f1612cde565b6000918252602080832060046005909302019190910180549315156101000261ff00199094169390931790925587516001600160a01b039081168252600280845260408084208b8601805186529086528185208c5190941685529185528084209151845293529190206003908101549101805490916000190190811061157957611579612cde565b6000918252602080832060029290920290910160019081015489516001600160a01b03908116855282845260408086208c8601805188529086528187208d519093168752938552808620935186529290935292205481546000199091019081106115e5576115e5612cde565b60009182526020808320600260059093020182019390935588516001600160a01b03908116835281845260408084208b8601805186529086528185208c519093168552928552808420925184529190935290206003908101549101805490916000190190811061165757611657612cde565b600091825260208083206002928302016001015489516001600160a01b03908116855292825260408085208b840151865283528085205484168552600583528085208054909201909155895190921683526004905290205460ff16156117c05785516001600160a01b039081166000818152600260208181526040808420828d0180518652908352818520548d51881686528484528286208251875284528286208e518916875294845282862091518652925290922060039081015493946342842e0e9493169291019061172d90600190612c9b565b8154811061173d5761173d612cde565b60009182526020918290206002919091020154908a015160405160e085901b6001600160e01b03191681526001600160a01b0393841660048201529290911660248301526044820152606401600060405180830381600087803b1580156117a357600080fd5b505af11580156117b7573d6000803e3d6000fd5b5050505061196f565b85516001600160a01b039081166000818152600260208181526040808420828d0180518652908352818520548d51881686528484528286208251875284528286208e5189168752948452828620915186529252909220600390810154939463f242432a9493169291019061183690600190612c9b565b8154811061184657611846612cde565b906000526020600020906002020160000160009054906101000a90046001600160a01b03168960200151600160008c600001516001600160a01b03166001600160a01b0316815260200190815260200160002060008c60200151815260200190815260200160002060018060008e600001516001600160a01b03166001600160a01b0316815260200190815260200160002060008e602001518152602001908152602001600020805490506118fb9190612c9b565b8154811061190b5761190b612cde565b9060005260206000209060050201600301546040518563ffffffff1660e01b815260040161193c9493929190612a97565b600060405180830381600087803b15801561195657600080fd5b505af115801561196a573d6000803e3d6000fd5b505050505b85516001600160a01b039081166000908152600260208181526040808420828c01805186529083528185208c5190961685529282528084209251845291905290206003908101547fc00d01d4b1030583c02bbacb94c97c7df2548674f0382d3630a618b5005e332492899201906119e890600190612c9b565b815481106119f8576119f8612cde565b60009182526020808320600292830201548b516001600160a01b03908116855283835260408086208e8501805188529085528187208f51841688529585528187209051875290935291909320600390810154919093169290910190611a5f90600190612c9b565b81548110611a6f57611a6f612cde565b906000526020600020906002020160010154600160008b600001516001600160a01b03166001600160a01b0316815260200190815260200160002060008b60200151815260200190815260200160002060018060008d600001516001600160a01b03166001600160a01b0316815260200190815260200160002060008d60200151815260200190815260200160002080549050611b0c9190612c9b565b81548110611b1c57611b1c612cde565b906000526020600020906005020160030154604051611b3e9493929190612bc7565b60405180910390a15b85516001600160a01b03166000908152600260208181526040808420828b01518552909152822080546001600160a01b03191681556001810183905590810182905590611b976003830182612853565b505050505050611cab565b80516020820151604051627eeac760e11b815233600482015260248101919091526000916001600160a01b03169062fdd58e9060440160206040518083038186803b158015611bf057600080fd5b505afa158015611c04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c289190612a7e565b111561118d5781600181516001600160a01b03166000908152600160209081526040808320828601518452909152902054156105a55781516001600160a01b0390811660009081526001602081815260408084208288018051865290835281852088519096168552838352818520905185529091529091205461133f9190612c9b565b50506001600055565b80516001600160a01b0316600090815260046020526040902054819060ff1615611f3957805160208201516040516331a9108f60e11b8152600481019190915233916001600160a01b031690636352211e9060240160206040518083038186803b158015611d2157600080fd5b505afa158015611d35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d59919061292c565b6001600160a01b031614156110b15781600181516001600160a01b03166000908152600160209081526040808320828601518452909152902054156105a55781516001600160a01b03908116600090815260016020818152604080842082880180518652908352818520885190961685528383528185209051855290915290912054611de59190612c9b565b81548110611df557611df5612cde565b906000526020600020906005020160040160019054906101000a900460ff1615611e315760405162461bcd60e51b815260040161039090612b63565b83600081516001600160a01b0316600090815260036020908152604080832082860151845290915290205460ff1615611eac5760405162461bcd60e51b815260206004820152601b60248201527f61756374696f6e20666f7220746f6b656e2069732061637469766500000000006044820152606401610390565b85516001600160a01b03166000908152600160209081526040808320828a015184529091529020805480611ee257611ee2612cc8565b60008281526020812060056000199093019283020180546001600160a01b031990811682556001820180549091169055600281018290556003810191909155600401805461ffff1916905590555061204292505050565b80516020820151604051627eeac760e11b815233600482015260248101919091526000916001600160a01b03169062fdd58e9060440160206040518083038186803b158015611f8757600080fd5b505afa158015611f9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fbf9190612a7e565b111561118d5781600181516001600160a01b03166000908152600160209081526040808320828601518452909152902054156105a55781516001600160a01b03908116600090815260016020818152604080842082880180518652908352818520885190961685528383528185209051855290915290912054611de59190612c9b565b5050565b80516001600160a01b031660009081526001602090815260408083208285015184528252808320805482518185028101850190935280835260609492939192909184015b8282101561210b5760008481526020908190206040805160c0810182526005860290920180546001600160a01b03908116845260018083015490911684860152600282015492840192909252600381015460608401526004015460ff8082161515608085015261010090910416151560a0830152908352909201910161208a565b505050509050919050565b600260005414156121395760405162461bcd60e51b815260040161039090612b90565b600260005580600181516001600160a01b03166000908152600160209081526040808320828601518452909152902054156105a55781516001600160a01b039081166000908152600160208181526040808420828801805186529083528185208851909616855283835281852090518552909152909120546121bb9190612c9b565b815481106121cb576121cb612cde565b906000526020600020906005020160040160019054906101000a900460ff16156122075760405162461bcd60e51b815260040161039090612b63565b82600081516001600160a01b0316600090815260036020908152604080832082860151845290915290205460ff16156122825760405162461bcd60e51b815260206004820152601b60248201527f61756374696f6e20666f7220746f6b656e2069732061637469766500000000006044820152606401610390565b84516001600160a01b039081166000908152600160208181526040808420828b01805186529083528185208b51909616855283835281852090518552909152909120546122cf9190612c9b565b815481106122df576122df612cde565b60009182526020909120600590910201600101546001600160a01b03163314156123115761230c85611cb4565b6127ac565b84516001600160a01b039081166000908152600160208181526040808420828b01805186529083528185208b51909616855292825280842092518452919052902054815460001990910190811061236a5761236a612cde565b9060005260206000209060050201600201543410156123cb5760405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742066756e64732073656e740000000000000000006044820152606401610390565b84516001600160a01b039081166000908152600160208181526040808420828b01805186529083528185208b519096168552928252808420925184529190528120548254349360059392909160001990910190811061242c5761242c612cde565b60009182526020808320600160059093020191909101546001600160a01b03908116845283820194909452604092830182208054909501909455885190921682526004909252205460ff16156125655784516001600160a01b039081166000818152600160208181526040808420828c01805186529083528185208c519097168552838352818520905185529091529091205491926342842e0e9290916124d291612c9b565b815481106124e2576124e2612cde565b600091825260209182902060059190910201600101549088015160405160e084901b6001600160e01b03191681526001600160a01b0390921660048301523360248301526044820152606401600060405180830381600087803b15801561254857600080fd5b505af115801561255c573d6000803e3d6000fd5b505050506126a5565b84516001600160a01b039081166000818152600160208181526040808420828c01805186529083528185208c5190971685528383528185209051855290915290912054919263f242432a9290916125bb91612c9b565b815481106125cb576125cb612cde565b6000918252602080832060016005909302018201548a820180518c516001600160a01b03908116875285855260408088208451895286528088208f5183168952878752818920945189529390955293909520549290911693339390926126319190612c9b565b8154811061264157612641612cde565b9060005260206000209060050201600301546040518563ffffffff1660e01b81526004016126729493929190612a97565b600060405180830381600087803b15801561268c57600080fd5b505af11580156126a0573d6000803e3d6000fd5b505050505b84516001600160a01b039081166000908152600160208181526040808420828b01805186529083528185208b51909616855283835281852090518552909152909120543392916126f491612c9b565b8154811061270457612704612cde565b6000918252602080832060059290920290910180546001600160a01b0319166001600160a01b03948516179055875183168252600180825260408084208a8401805186529084528185208b51909616855282845281852090518552909252912054909190612773908390612c9b565b8154811061278357612783612cde565b906000526020600020906005020160040160016101000a81548160ff0219169083151502179055505b84516001600160a01b039081166000908152600160208181526040808420828b01805186529083528185208b51909616855283835281852090518552909152909120547ff4f727021726e04a5cdc52957b6846084e42c3e6bea10f3ab4b67791a1dc0a4f928892339234929161282191612c9b565b8154811061283157612831612cde565b906000526020600020906005020160030154604051610ad19493929190612bc7565b50805460008255600202906000526020600020908101906128749190612877565b50565b5b8082111561289d5780546001600160a01b031916815560006001820155600201612878565b5090565b6000604082840312156128b357600080fd5b6040516040810181811067ffffffffffffffff821117156128e457634e487b7160e01b600052604160045260246000fd5b60405290508082356128f581612cf4565b8152602092830135920191909152919050565b60006020828403121561291a57600080fd5b813561292581612cf4565b9392505050565b60006020828403121561293e57600080fd5b815161292581612cf4565b6000806040838503121561295c57600080fd5b823561296781612cf4565b9150602083013561297781612d09565b809150509250929050565b6000806040838503121561299557600080fd5b82356129a081612cf4565b946020939093013593505050565b6000806000606084860312156129c357600080fd5b83356129ce81612cf4565b95602085013595506040909401359392505050565b6000602082840312156129f557600080fd5b815161292581612d09565b600060408284031215612a1257600080fd5b61292583836128a1565b60008060008060a08587031215612a3257600080fd5b612a3c86866128a1565b935060408501359250606085013591506080850135612a5a81612d09565b939692955090935050565b600060208284031215612a7757600080fd5b5035919050565b600060208284031215612a9057600080fd5b5051919050565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a0608082018190526003908201526203078360ec1b60c082015260e00190565b602080825282518282018190526000919060409081850190868401855b82811015612b5657815180516001600160a01b03908116865287820151168786015285810151868601526060808201519086015260808082015115159086015260a09081015115159085015260c09093019290850190600101612af8565b5091979650505050505050565b6020808252601390820152721d1bdad95b881a5cc81b9bdd081b1a5cdd1959606a1b604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b84516001600160a01b031681526020808601519082015260a081016001600160a01b039490941660408201526060810192909252608090910152919050565b82516001600160a01b0316815260208084015190820152600060608201604060608185015281855480845260808601915086600052602093508360002060005b82811015612c755781546001600160a01b03168452600182810154878601529385019360029092019101612c46565b509198975050505050505050565b60008219821115612c9657612c96612cb2565b500190565b600082821015612cad57612cad612cb2565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b038116811461287457600080fd5b801515811461287457600080fdfea2646970667358221220d6f84a5613474d0caf0ebf02cfa69dbd13bc71bd0f6de7c4f7786b357e06e94e64736f6c63430008070033";

type DeltTraderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeltTraderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeltTrader__factory extends ContractFactory {
  constructor(...args: DeltTraderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DeltTrader> {
    return super.deploy(overrides || {}) as Promise<DeltTrader>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeltTrader {
    return super.attach(address) as DeltTrader;
  }
  override connect(signer: Signer): DeltTrader__factory {
    return super.connect(signer) as DeltTrader__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeltTraderInterface {
    return new utils.Interface(_abi) as DeltTraderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeltTrader {
    return new Contract(address, _abi, signerOrProvider) as DeltTrader;
  }
}