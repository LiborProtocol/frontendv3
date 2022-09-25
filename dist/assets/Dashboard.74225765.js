import{a as Ae,b as H}from"./AbiCurve.d7ceeeb5.js";/* empty css              */import{r,u as Ee,a as b,b as o,j as e,F as Be,c as t,C as ve,d as we,S as Ce}from"./index.2e6b1144.js";import{p as Pe,a as P}from"./AbiIERC20.9d3ad542.js";import{a as F,P as Ie,b as Te,c as g}from"./AbiVaultController.8bbe504e.js";import{T as I,a as T,b as x,c as n,d as c,e as y,f as a}from"./chakra-ui-table.esm.971655d4.js";function We(){var U,W,$,k,L,J,Y,j,_;const q="#393E46",G=async()=>{await u.runContractFunction()},K=async()=>{await p.runContractFunction()},Q=async()=>{await A.runContractFunction()},X=async()=>{await E.runContractFunction()},Z=async()=>{await m.runContractFunction()},ee=async()=>{await ye.runContractFunction()},te=async()=>{await Se.runContractFunction()},ae=async()=>{await B.runContractFunction()},re=async()=>{await v.runContractFunction()},ne=async()=>{await w.runContractFunction()},ie=async()=>{await C.runContractFunction()},[s,oe]=r.exports.useState(""),[Me,ce]=r.exports.useState(""),[l,se]=r.exports.useState(""),[d,de]=r.exports.useState(""),[i,le]=r.exports.useState(0),[f,fe]=r.exports.useState(0),[h,he]=r.exports.useState(0),[M,ue]=r.exports.useState(0),[N,pe]=r.exports.useState(0),[me,be]=r.exports.useState(0),[Fe,ge]=r.exports.useState(0),{isAuthenticated:xe,Moralis:Ne,account:R,user:D}=Ee(),S=b({address:"0x74b23882a30290451a17c44f4f05243b6b58c76d",chain:"fantom"}),V=b({address:"0x321162cd933e2be498cd2267a90534a804051b11",chain:"fantom"}),z=b({address:"0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",chain:"fantom"}),O=b({address:"0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE",chain:"fantom"}),u=o({abi:F,address:"0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA",functionName:"vaultIDs",params:{wallet:s},chain:"goerli"}),p=o({abi:F,address:"0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA",functionName:"vaultAddress",params:{id:l[0]},chain:"goerli"}),A=o({abi:g,address:d,functionName:"tokenBalance",params:{addr:"0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"},chain:"goerli"});o({abi:g,address:d,functionName:"tokenBalance",params:{addr:"0x321162cd933e2be498cd2267a90534a804051b11"},chain:"goerli"}),o({abi:g,address:d,functionName:"tokenBalance",params:{addr:"0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83"},chain:"goerli"}),o({abi:g,address:d,functionName:"tokenBalance",params:{addr:"0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE"},chain:"goerli"});const m=o({abi:F,address:"0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA",functionName:"vaultBorrowingPower",params:{id:l[0]},chain:"goerli"}),E=o({abi:F,address:"0x4B586a04886bf4ba0875eE6546Ff9447f6947ffA",functionName:"vaultLiability",params:{id:l[0]},chain:"goerli"}),ye=o({abi:P,address:"0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",functionName:"balanceOf",params:{account:s},chain:"goerli"}),Se=o({abi:P,address:"0x43120a1c70A06b194eaB354d32089f630c43A4b6",functionName:"balanceOf",params:{account:s},chain:"goerli"}),B=o({abi:H,address:"0x43120a1c70A06b194eaB354d32089f630c43A4b6",functionName:"_totalSupply",params:{},chain:"goerli"}),v=o({abi:P,address:"0x07865c6E87B9F70255377e024ace6630C1Eaa37F",functionName:"balanceOf",params:{account:"0x43120a1c70A06b194eaB354d32089f630c43A4b6"},chain:"goerli"}),w=o({abi:Ae,address:"0x1F770CCda0Ebaa907B9d2B17E6d318A9F036DB8e",functionName:"getValueAt",params:{curve_address:"0x0000000000000000000000000000000000000000",x_value:Pe(Fe.toString(),"wei")},chain:"goerli"}),C=o({abi:H,address:"0x43120a1c70A06b194eaB354d32089f630c43A4b6",functionName:"reserveRatio",params:{},chain:"goerli"});return r.exports.useEffect(()=>{xe&&(D&&ce(D.attributes.ethAddress),R&&oe(R))}),r.exports.useEffect(()=>{s&&G()},[s]),r.exports.useEffect(()=>{d.length>0&&Q()},[d]),r.exports.useEffect(()=>{l.length>0&&(K(),X(),Z(),ee(),te())},[l]),r.exports.useEffect(()=>{s&&(ae(),re(),ie(),ne())},[s]),r.exports.useEffect(()=>{u.data&&se(u.data),A.data&&le(parseInt(A.data)),p.data&&de(p.data),E.data&&fe(parseInt(E.data)),m.data&&he(parseInt(m.data)),B.data&&ue(parseInt(B.data)),v.data&&pe(parseInt(v.data)),C.data&&ge(parseInt(C.data)),w.data&&be(parseInt(w.data))}),console.log("START"),console.log(s),console.log(l),console.log(u.data),console.log(p.data),console.log(d),console.log(i),console.log(f),console.log(m.data),console.log("END"),e(Be,{children:[e(I,{borderWidth:"2px",borderRadius:"3xl",p:"4",flexDirection:"column",justifyContent:"space-between",boxShadow:"dark-lg",borderColor:"blackAlpha.500",bg:q,color:"#EEEEEE",fontFamily:"Montserrat",children:[e(T,{variant:"simple",color:"#EEEEEE",children:[t(x,{children:e(n,{children:[t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:" Your deposited Assets"}),t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Your Value deposited"}),t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Your Value deposited in $"}),t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Loan-To-Value"}),t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Borrowing power"})]})}),e(y,{fontFamily:"Montserrat",fontSize:"xl",fontWeight:"light",children:[e(n,{children:[t(a,{children:"Wrapped Fantom WFTM"}),e(a,{children:[(i/10**18).toFixed(4)," WFTM"]}),e(a,{children:[(parseInt(JSON.stringify((U=z.data)==null?void 0:U.usdPrice,null,2))*i/10**18).toFixed(2),"$"]}),t(a,{children:"85%"}),e(a,{children:[(parseInt(JSON.stringify((W=z.data)==null?void 0:W.usdPrice,null,2))*i/10**18*.85).toFixed(2),"$"]})]}),e(n,{children:[t(a,{children:"Wrapped Ethereum WETH"}),e(a,{children:[(i/10**18).toFixed(4)," WETH"]}),e(a,{children:[(parseInt(JSON.stringify(($=S.data)==null?void 0:$.usdPrice,null,2))*i/10**18).toFixed(2),"$"]}),t(a,{children:"85%"}),e(a,{children:[(parseInt(JSON.stringify((k=S.data)==null?void 0:k.usdPrice,null,2))*i/10**18*.85).toFixed(2),"$"]})]}),e(n,{children:[t(a,{children:"Wrapped Bitcoin BTC"}),e(a,{children:[(i/10**18).toFixed(4)," WBTC"]}),e(a,{children:[(parseInt(JSON.stringify((L=V.data)==null?void 0:L.usdPrice,null,2))*i/10**18).toFixed(2),"$"]}),t(a,{children:"85%"}),e(a,{children:[(parseInt(JSON.stringify((J=V.data)==null?void 0:J.usdPrice,null,2))*i/10**18*.85).toFixed(2),"$"]})]}),e(n,{children:[t(a,{children:"xBOO"}),e(a,{children:[(i/10**18).toFixed(4)," xBOO"]}),e(a,{children:[(parseInt(JSON.stringify((Y=O.data)==null?void 0:Y.usdPrice,null,2))*i/10**18).toFixed(2),"$"]}),t(a,{children:"70%"}),e(a,{children:[(parseInt(JSON.stringify((j=O.data)==null?void 0:j.usdPrice,null,2))*i/10**18*.85).toFixed(2),"$"]})]}),e(n,{children:[t(a,{children:"Total"}),t(a,{}),e(a,{children:[(parseInt(JSON.stringify((_=S.data)==null?void 0:_.usdPrice,null,2))*i/10**18).toFixed(2),"$"]}),t(a,{}),e(a,{children:[(h/10**18).toFixed(2)," $"]})]})]}),t(x,{children:e(n,{children:[t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Your Borrowed assets"}),t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Your Value Borrowed"}),t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Your Value Borrowed in $"}),t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Interest rate"}),t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Borrowing power used "})]})}),t(y,{fontFamily:"Montserrat",fontSize:"xl",fontWeight:"light",children:e(n,{children:[t(a,{children:"Libor Protocol Stablecoin USDL"}),e(a,{children:[f/10**18," USDL"]}),e(a,{children:[f/10**18," $"]}),e(a,{children:[(me/10**16).toFixed(2),"%"]}),e(a,{children:[(f/h*100).toFixed(2),"%"]})]})})]}),t(Ie,{isAnimated:!0,hasStripe:!0,value:f/h*100,height:"15px",colorScheme:"red",bg:"green.400",borderRadius:"10",top:"7px",children:e(Te,{fontSize:"lg",fontFamily:"Montserrat",children:[(f/h*100).toFixed(2),"%"]})})]}),t(ve,{children:e(we,{w:"70%",pos:"relative",bottom:"-10",children:[t(I,{layerStyle:"primaryData",children:e(T,{variant:"simple",color:"#EEEEEE",children:[t(x,{children:e(n,{children:[t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:" borrowing market stats"}),t(c,{})]})}),e(y,{fontFamily:"Montserrat",fontSize:"xl",fontWeight:"light",children:[e(n,{children:[t(a,{children:" Current borrow APR :"}),t(a,{children:" 2.5%"})]}),e(n,{children:[t(a,{children:" Target borrow APR :"}),t(a,{children:" 1%"})]})]})]})}),t(Ce,{}),t(I,{layerStyle:"primaryData",children:e(T,{variant:"simple",color:"#EEEEEE",children:[t(x,{children:e(n,{children:[t(c,{color:"cyan.600",fontFamily:"Montserrat",fontSize:"md",children:"Reserve Stats"}),t(c,{})]})}),e(y,{fontFamily:"Montserrat",fontSize:"xl",fontWeight:"light",children:[e(n,{children:[t(a,{children:" Current Deposit APR :"}),t(a,{children:" 2.5%"})]}),e(n,{children:[t(a,{children:" Target Deposit APR :"}),t(a,{children:" 2.5%"})]}),e(n,{children:[t(a,{children:" USDi in Circulation :"}),e(a,{children:[" ",(M/10**18).toFixed(2)," "]})]}),e(n,{children:[t(a,{children:" USDC in Reserve :"}),e(a,{children:[" ",(N/10**6).toFixed(2),"$"]})]}),e(n,{children:[t(a,{children:" Reserve Ratio :"}),e(a,{children:[" ",(N*10**12/M*100).toFixed(2),"%"]})]})]})]})})]})})]})}export{We as default};
