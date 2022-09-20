import{C as U}from"./chakra-ui-icons.esm.99b335ba.js";import{n as W,r as o,u as _,p as D,a as i,b as N,j as t,c as e,C as n,d as a,H as s,S as p,ag as O,ah as R,B as d,ai as P,aj as g,T as z}from"./index.962715a0.js";import{a as v}from"./AbiIERC20.a932546c.js";import{a as F}from"./AbiSeedRound.764bc36d.js";import{p as w}from"./index.b1adf3a0.js";import{N as H,a as j,A as Y,M as L,b as $,c as q,d as G,e as J,f as K}from"./chakra-ui-number-input.esm.69eb2bd9.js";const Q=[{inputs:[{internalType:"uint256",name:"_minInvest",type:"uint256"},{internalType:"uint256",name:"_launchTime",type:"uint256"},{internalType:"uint256",name:"_endTime",type:"uint256"},{internalType:"address payable",name:"_teamAddress",type:"address"},{internalType:"address payable",name:"_reserve",type:"address"},{internalType:"uint256",name:"_price",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"BUSD",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"LBR",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenAmount",type:"uint256"}],name:"Participate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"USDC",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"USDT",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"allowClaim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimedSeedTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"endTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_sender",type:"address"}],name:"getMySeedTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMyTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getTotalBuys",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalDollarContributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalUsers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_sender",type:"address"}],name:"getUserParticipations1",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_sender",type:"address"}],name:"getUserParticipations2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_sender",type:"address"}],name:"getUserParticipations3",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"launchTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minInvest",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"remaingSeedTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"seedTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalBuys",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalDollarContributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalUsers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userBalances",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userParticipations1",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userParticipations2",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userParticipations3",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}];var c=Q;function ae(){var C;const u=W(),E=o.exports.useRef(null),r=_().account,[l,A]=o.exports.useState(""),[S,y]=o.exports.useState("WETH"),[m,b]=o.exports.useState("0x326C977E6efc84E512bB9C30f76E30c160eD06FB");o.exports.useEffect(()=>{setTimeout(()=>{M.runContractFunction(),h.runContractFunction(),f.runContractFunction(),T.runContractFunction(),B.fetchTokenPrice()},2e3)},[]);const k=D({abi:v,contractAddress:m,functionName:"approve",params:{spender:"0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148",amount:w(l||"0","ether")}}),M=i({abi:v,address:m,functionName:"balanceOf",params:{account:r||"0x0"},chain:"goerli"}),h=i({abi:c,address:"0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148",functionName:"getUserParticipations1",params:{_sender:r||"0x0"},chain:"goerli"}),f=i({abi:c,address:"0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148",functionName:"getMySeedTokens",params:{_sender:r||"0x0"},chain:"goerli"}),T=i({abi:c,address:"0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148",functionName:"getTotalDollarContributed",params:{},chain:"goerli"}),B=N({address:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",chain:"eth"});i({abi:F,address:"0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148",functionName:"getTotalBuys",params:{},chain:"goerli"}),i({abi:F,address:"0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148",functionName:"getTotalUsers",params:{},chain:"goerli"});const x=D();return console.log(T.data),console.log(h.data),console.log(f.data),console.log((C=B.data)==null?void 0:C.usdPrice),console.log(r),t("div",{children:[e(n,{children:t(a,{w:"90%",flexDirection:"row",h:"auto",borderWidth:"2px",borderRadius:"3xl",p:"6",boxShadow:"dark-lg",borderColor:"blackAlpha.500",bg:"#393E46",top:"20px",pos:"relative",children:[t(a,{layerStyle:"data",children:[e(n,{children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Total USD raised"})}),t(n,{textStyle:"data",children:[(parseInt(T.data||"0")/10**18).toFixed(2)," USD"]})]}),e(p,{}),t(a,{layerStyle:"data",children:[e(n,{children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Your current deposit "})}),t(n,{textStyle:"data",children:[(parseInt(h.data||"0")*10**18).toFixed(2),"  USD"]})]}),e(p,{}),t(a,{layerStyle:"data",children:[e(n,{children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Your current token allocation "})}),t(n,{textStyle:"data",children:[" ",(parseInt(f.data||"0")/10**18).toFixed(0)," "]})]}),e(p,{}),t(a,{layerStyle:"data",children:[e(n,{children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" LIBOR token price"})}),e(n,{textStyle:"data",children:"0.0012$"})]})]})}),e(n,{children:e(a,{layerStyle:"background",justifyContent:"center",top:"110px",children:t(a,{layerStyle:"primary",children:[e(n,{children:t(a,{layerStyle:"secondary",children:[e(n,{position:"relative",top:"-6px",children:e(s,{size:"lg",fontFamily:"Merienda One",fontWeight:"900",children:" Select your asset"})}),t(O,{children:[e(R,{as:d,rightIcon:e(U,{}),color:"black",pos:"relative",top:"0px",bg:"#EEEEEE",children:S}),e(n,{children:t(P,{bg:"#EEEEEE",children:[e(g,{onClick:()=>{y("BNB"),b("0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984")},children:"BNB"}),e(g,{onClick:()=>{y("WETH"),b("0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C")},children:"WETH"}),e(g,{onClick:()=>{y("WBTC"),b("0x326C977E6efc84E512bB9C30f76E30c160eD06FB")},children:"WBTC"})]})})]}),e(n,{position:"relative",top:"10px",children:e(s,{size:"md",fontFamily:"Merienda One",fontWeight:"900",children:" Your wallet balance "})}),t(n,{position:"relative",top:"10px",textStyle:"dataSmall",children:[(parseInt(M.data||"0")/10**18).toFixed(2),r," USDIl"]})]})}),e(H,{variant:"NumberInputField",value:l,onChange:I=>A(I),children:e(n,{children:e(j,{borderColor:"grey",borderWidth:"2px",fontWeight:"300",fontFamily:"Merienda One",w:"70%",borderRadius:"30",color:"white",placeholder:"Enter your desired amount",_placeholder:{opacity:1,color:"white",textAlign:"center"},textAlign:"center",top:"30",bg:"gray.600"})})}),t(n,{children:[e(d,{onClick:u.onOpen,variant:"greenButton",w:"50%",children:" Deposit"}),t(Y,{motionPreset:"slideInBottom",leastDestructiveRef:E,onClose:u.onClose,isOpen:u.isOpen,isCentered:!0,children:[e(L,{backdropFilter:"auto",backdropBlur:"10px",bg:"blackAlpha.500"}),t($,{bg:"#393E46",borderRadius:"20px",w:"2000px",children:[e(q,{fontFamily:"Merienda One",color:"#EEEEEE",fontWeight:"100",children:"Confirm Deposit"}),e(G,{}),e(J,{fontFamily:"Merienda One",color:"#EEEEEE",fontWeight:"500",fontSize:"lg",children:t(n,{children:[" ",t(z,{children:["are you sure you want to deposit ",l," USD ? "]})," "]})}),e(K,{children:t(a,{gap:"2",children:[e(d,{ref:E,onClick:u.onClose,bgColor:"red.500",w:"12",children:"No"}),e(p,{}),e(d,{bgColor:"green.500",w:"12",onClick:()=>{x.fetch({params:{abi:c,contractAddress:"0x30dDDFAB8F17106DdB5d700330015Ae99BEeE148",functionName:"Participate",params:{_tokenAddress:m,_tokenAmount:w(l||"0","ether")}}}),k.fetch()},disabled:x.isFetching,children:"Yes"})]})})]})]})]})]})})})]})}export{ae as default};