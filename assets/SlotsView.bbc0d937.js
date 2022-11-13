import{_ as p,o as c,c as h,r as d,a as u,n as g,b as t,t as l,F as v,d as w,e as x}from"./index.b3c39ceb.js";import{T as b,_ as S}from"./ToastNotification.8386bdbd.js";const B={props:["slotValues"],methods:{spin(n){const s=this.$refs.slotValue,o=this.$props.slotValues;return s.classList.add("spinning"),s.classList.remove("spun"),new Promise(i=>{function e(){if(n<=0)return s.classList.add("spun"),s.classList.remove("spinning"),i(s.innerText);s.innerText=o[Math.floor(Math.random()*o.length)],setTimeout(e,200,--n)}e()})}}},k={ref:"slotValue",id:"slotValue",class:"text-center w-14 bg-neutral text-primary p-5 rounded-xl font-black text-xl"};function V(n,s,o,i,e,r){return c(),h("div",k," $ ",512)}const y=p(B,[["render",V],["__scopeId","data-v-5f6b122b"]]),$={props:["points"],data(){return{slotSpinTimes:10,slotAmount:3,spinning:!1,slotBets:[5e3,1e4,2e4],slotValues:["$","0","7","-","="],lastPlacedBet:0,lastReward:0,autospinning:!1,buttonSound:new Audio("spin.mp3"),end:!1}},components:{ToastNotification:b,SlotComponent:y,BetSelectButton:S},methods:{playButtonSound(){this.buttonSound.play()},spinSlots(n,s=[]){if(n===1){if(this.spinning)return;if(this.lastPlacedBet=Number(this.$refs.betSelect.$data.value),this.$props.points-this.lastPlacedBet<0){this.autospinning=!1;return}this.$emit("changePoints",-this.lastPlacedBet)}else if(n>this.slotAmount){this.spinning=!1,this.calculateReward(s);return}this.spinning=!0,this.$refs["slot"+n][0].spin(this.slotSpinTimes).then(o=>{s.push(o),this.spinSlots(n+1,s)})},calculateReward(n){const s=n.reduce((i,e)=>i.set(e,(i.get(e)||0)+1),new Map);let o=0;s.get("$")===this.slotAmount?o=this.lastPlacedBet*5:s.get("7")===this.slotAmount?o=this.lastPlacedBet*7:s.get("=")>=2&&(o=this.lastPlacedBet*2),this.end=!0,this.lastReward=o,this.$emit("changePoints",o),setTimeout(()=>{this.end=!1},3e3)}},watch:{autospinning:function(){!this.spinning&&this.autospinning&&this.spinSlots(1)},spinning:function(){!this.spinning&&this.autospinning&&setTimeout(this.spinSlots,500,1)}}},M={class:"flex min-h-screen w-screen justify-center items-center transition-all"},A={class:"flex flex-col w-5/6 sm:w-2/3 items-center gap-5"},R={class:"flex flex-col items-center"},T=t("h2",{class:"text-[2em]"},"Slots",-1),P={id:"lastReward",class:"font-mono"},L={id:"slotSpace",class:"pt-3 flex justify-center gap-5 w-full"},j={id:"options",class:"flex flex-col sm:flex-row flex-wrap justify-center gap-3 trans"},z={class:"btn-group btn-group-horizontal"},N={tabindex:"0",class:"collapse rounded-box"},F=t("div",{class:"collapse-title text-2xl font-medium text-center p-5"}," Loot chances ",-1),C={class:"collapse-content"},O={class:"stats stats-vertical lg:stats-horizontal shadow"},E={class:"stat"},W=t("div",{class:"stat-figure text-secondary"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"inline-block w-8 h-8 stroke-current stroke-primary"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),D=t("div",{class:"stat-title"},"$$$",-1),I={class:"stat-value"},Y=t("div",{class:"stat-desc"},"Reward: Original bet x 5",-1),q={class:"stat"},G=t("div",{class:"stat-figure text-secondary"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"inline-block w-8 h-8 stroke-current stroke-primary"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),H=t("div",{class:"stat-title"},"777",-1),J={class:"stat-value"},K=t("div",{class:"stat-desc"},"Reward: Original bet x 7",-1),Q={class:"stat"},U=t("div",{class:"stat-figure text-secondary"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"inline-block w-8 h-8 stroke-current stroke-primary"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),X=t("div",{class:"stat-title"},"==",-1),Z={class:"stat-value"},tt=t("div",{class:"stat-desc"},"Reward: Original bet x 2",-1);function st(n,s,o,i,e,r){const _=d("ToastNotification"),f=d("SlotComponent"),m=d("BetSelectButton");return c(),h("main",M,[u(_,{message:"You earned "+e.lastReward+" points!",class:g(["transition-all",e.end?"translate-x-0":"translate-x-96"])},null,8,["message","class"]),t("div",A,[t("div",R,[T,t("p",P,"Last reward: "+l(e.lastReward),1)]),t("div",L,[(c(!0),h(v,null,w(e.slotAmount,a=>(c(),x(f,{key:a,slotValues:e.slotValues,ref_for:!0,ref:String("slot"+a),class:"slot"},null,8,["slotValues"]))),128))]),t("div",j,[u(m,{bets:e.slotBets,id:"betSelect",ref:"betSelect"},null,8,["bets"]),t("div",z,[t("button",{class:"btn btn-primary transition-all w-1/2",onClick:s[0]||(s[0]=a=>{r.spinSlots(1),r.playButtonSound()}),ref:"spinButton"},l(e.spinning?"Spinning...":"Spin"),513),t("button",{class:"btn",onClick:s[1]||(s[1]=a=>e.autospinning=!e.autospinning),id:"autospinButton"},l(e.autospinning?"Stop":"Autospin"),1)])]),t("div",N,[F,t("div",C,[t("div",O,[t("div",E,[W,D,t("div",I,l((1/Math.pow(this.slotValues.length,this.slotAmount)*100).toFixed(2))+"% ",1),Y]),t("div",q,[G,H,t("div",J,l((1/Math.pow(this.slotValues.length,this.slotAmount)*100).toFixed(2))+"% ",1),K]),t("div",Q,[U,X,t("div",Z,l(((1-(Math.pow(this.slotValues.length-1,this.slotAmount)+Math.pow(this.slotValues.length-1,this.slotAmount-1)*this.slotAmount)/Math.pow(this.slotValues.length,this.slotAmount))*100).toFixed(2))+"% ",1),tt])])])])])])}const ot=p($,[["render",st]]);export{ot as default};
