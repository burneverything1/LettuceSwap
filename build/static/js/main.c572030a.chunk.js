(this["webpackJsonplettuceswap-app"]=this["webpackJsonplettuceswap-app"]||[]).push([[0],{205:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var r=n(70),c=n.n(r),s=n(2),a=n.n(s),i=n(4),o=n(3),u=n(1),l=n.n(u),j=n(0),d=function(e){var t=e.createPlant,n=Object(u.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],a=Object(u.useState)(""),i=Object(o.a)(a,2),l=i[0],d=i[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Enter a new Plant"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:c,weeksToHarvest:l}),s(""),d("")},children:[Object(j.jsxs)("div",{children:["Plant Name:",Object(j.jsx)("input",{value:c,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)("div",{children:["# of Weeks until Harvest:",Object(j.jsx)("input",{type:"number",value:l,onChange:function(e){d(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",children:"Save"})]})]})},b=l.a.forwardRef((function(e,t){var n=Object(u.useState)(!1),r=Object(o.a)(n,2),c=r[0],s=r[1],a={display:c?"none":""},i={display:c?"":"none"},l=function(){s(!c)};return Object(u.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:a,children:Object(j.jsx)("button",{onClick:l,children:e.buttonLabel})}),Object(j.jsxs)("div",{style:i,children:[e.children,Object(j.jsx)("button",{onClick:l,children:e.closeLabel})]})]})})),h=function(e){var t=e.sendOffer,n=Object(u.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],a=Object(u.useState)("bids"),i=Object(o.a)(a,2),l=i[0],d=i[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:l,price:String(c)}),s(""),d("bids")},children:[Object(j.jsxs)("select",{value:l,onChange:function(e){d(e.target.value)},children:[Object(j.jsx)("option",{value:"bids",children:"Bid"}),Object(j.jsx)("option",{value:"asks",children:"Ask"})]}),Object(j.jsx)("br",{}),"Price in cents/oz in 5c increments",Object(j.jsx)("input",{type:"number",value:c,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Send"})]})},p=n(73),f=function(e){var t=e.priceChartData,n={labels:t.labels,datasets:[{label:"Bids",data:t.bid_data,backgroundColor:"rgb(34,139,34)"},{label:"Asks",data:t.ask_data,backgroundColor:"rgb(220,20,60)"}]};return Object(j.jsx)("div",{children:Object(j.jsx)(p.a,{data:n})})},O=n(6),x=n.n(O),m="/api/prices",v=function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(m,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(m,"/chart/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.put("".concat(m,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w={getPrice:v,sendPrice:y,getChart:g},S="/api/location",k=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(S);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://geolocation-db.com/json/");case 2:return n=e.sent,r={city:n.data.city,state:n.data.state,plant:t},e.next=6,x.a.post(S,r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A={getLocations:k,sendLocation:C},L=function(e){var t=e.plant,n=e.notifyUser,r=Object(u.useState)([]),c=Object(o.a)(r,2),s=c[0],l=c[1],d=function(){w.getChart(t.priceData).then((function(e){l(e)}))};Object(u.useEffect)((function(){d()}),[]);var p=function(){var e=Object(i.a)(a.a.mark((function e(r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.current.toggleVisibility(),Number(r.price)%5===0){e.next=5;break}return n("Please submit an offer in increment of 5 cents","red"),e.abrupt("return");case 5:return A.sendLocation(t.id),e.prev=6,e.next=9,w.sendPrice(t.priceData,r);case 9:(c=e.sent).sale_happen.result?n("successful sale @ ".concat(c.sale_happen.price," c/oz of ").concat(t.name),"green"):n("".concat(r.type," successful @ ").concat(r.price," c/oz of ").concat(t.name),"green"),d(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}(),O=Object(u.useRef)();return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:t.name}),Object(j.jsx)("td",{children:Object(j.jsx)(f,{priceChartData:s})}),Object(j.jsx)("td",{children:Object(j.jsx)(b,{buttonLabel:"Send Bid/Ask",closeLabel:"Cancel",ref:O,children:Object(j.jsx)(h,{sendOffer:p})})})]})},P=function(e){var t=e.plants,n=e.notifyUser;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Produce Market Prices"}),Object(j.jsx)("table",{children:function(e){return e.map((function(e){return Object(j.jsx)(L,{plant:e,notifyUser:n})}))}(t)})]})},E=n.p+"static/media/emissions.ba609137.png",T=n.p+"static/media/volume_food.6f41ea90.png",z=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Why is Agriculture Reform Important for Humanity?"}),Object(j.jsxs)(b,{buttonLabel:"Click Here to Find Out More",closeLabel:"Close",children:[Object(j.jsx)("h2",{children:"The Emissions Associated with Agriculture"}),Object(j.jsx)("img",{src:E,style:{width:"400px"}}),Object(j.jsx)("h3",{children:"10% of US Emissions is due to Agriculture"}),Object(j.jsx)("p",{children:"\"The US food system as a whole is responsible for the emissions of approximately 2.6 tCO2e per person per year [35]. By our calculations, this accounts for roughly 10% of overall US GHG emissions [35, 36]. Fresh produce accounts for roughly one-tenth of food-related GHG emissions, or approximately 1% of overall US GHG emissions [35]. While 1% of US GHG emissions may not seem like much, the United States emits roughly 20% of the world's greenhouse gases, despite having only 5% of the world's population. With global population growth and increasing preference for the consumer patterns of wealthier nations, food-related emissions\u2014in particular, emissions associated with specialty commodities such as fresh produce\u2014are likely to increase.\""}),Object(j.jsxs)("p",{children:["Source:",Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"https://iopscience.iop.org/article/10.1088/1748-9326/ab6c2f",children:"Scientific Paper"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{children:"The Food Wastage"}),Object(j.jsx)("h3",{children:"30% of global food production is wasted"}),Object(j.jsx)("p",{children:'"The United Nations\u2019 Food and Agriculture Organization estimates that, with over 30% of global food production ending up as food waste, it is $2.6 trillion dollar issue.... According to ReFED, a nonprofit committed to reducing US food waste, over 80% of food waste occurs at food service and retail locations as well as consumers\u2019 homes so, the quicker food gets to its destination, the less likely it will have to be thrown away."'}),Object(j.jsxs)("p",{children:["Source:",Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"https://indooragtechnyc.com/is-agriculture-the-next-area-to-experience-decentralization/",children:"Eco Investor Op-ed"})]}),Object(j.jsx)("h3",{children:"Total Vood Volume"}),Object(j.jsx)("img",{src:T,style:{width:"400px"}}),Object(j.jsxs)("p",{children:["Source:",Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"https://css.umich.edu/factsheets/us-food-system-factsheet",children:"Source for Total Volume of Food"})]})]})]})},U=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"LettuceSwap"}),Object(j.jsx)("h2",{children:"A Localized Produce Market"}),Object(j.jsx)("h3",{children:"Promote Food Security, Reduce Waste and Emissions, Improve Nutrition and Taste"}),Object(j.jsx)("p",{children:"As Hydroponic vertical gardens become accessible, a decentralized agricultural paradigm becomes possible. In addition to the actual cultivating technology, an accompanying decentralized market is integral to the sustained success and longevity of a new agricultural system. Allowing people to easily sell their own grown produce helps to financially incentivize food independence, improve people's access to healthy foods, reduce food wastage through market efficiency, and help reduce transportation distance for produce."})]})},H=function(e){var t=e.message,n={color:e.type,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10};return null===t?null:Object(j.jsx)("div",{style:n,children:t})},R=function(e){var t=e.locations;return Object(j.jsxs)("ul",{children:[Object(j.jsx)("h3",{children:"Is Your Community Ready?"}),Object(j.jsx)("p",{children:"Check out which places are trading produce!"}),function(){var e=[];for(var n in t)e.push(Object(j.jsxs)("li",{children:[t[n]," bid/asks in ",n]}));return e}()]})},G=n.p+"static/media/emission_calc.64bc74a2.png",B=function(e){var t=e.totalSales;return Object(j.jsxs)("p",{children:[Object(j.jsx)("h3",{children:"Estimate on Emissions Saved"}),Object(j.jsxs)(b,{buttonLabel:"Learn About This Calculation",closeLabel:"Close",children:[Object(j.jsxs)("p",{children:["Calculation done with rough estimates of 2.6 tCO2e ",Object(j.jsx)("br",{})," of emissions per person per year for the food system, ",Object(j.jsx)("br",{})," producing 355,880 million pounds a year"]}),Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:G,style:{width:"200px"}}),Object(j.jsx)("p",{children:"((emissions * us population) / total produce) / oz in pound"}),Object(j.jsx)("p",{children:"Roughly 150 mCO2e per ounce of food"})]}),Object(j.jsxs)("p",{style:{fontSize:"20px"},children:[150*t," mCO2e Emissions Saved"]})]})},D=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/statistic");case 2:return t=e.sent,e.abrupt("return",t.data[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F={getStats:D},I=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(u.useState)([]),s=Object(o.a)(c,2),a=s[0],i=s[1],l=function(){F.getStats().then((function(e){r(e)})),A.getLocations().then((function(e){i(e)}))};return Object(u.useEffect)((function(){l()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Market Statistics"}),Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Total Sales:"}),Object(j.jsx)("td",{children:n.totalSales})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Total Asks:"}),Object(j.jsx)("td",{children:n.totalAsks})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Total Bids:"}),Object(j.jsx)("td",{children:n.totalBids})]}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colspan:"2",children:Object(j.jsx)(B,{totalSales:n.totalSales})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colspan:"2",children:Object(j.jsx)(R,{locations:a})})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:l,children:"Refresh Stats"})]})},V="/api/plants",W=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(V);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(V,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N={getAll:W,create:_},M=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(u.useState)(null),s=Object(o.a)(c,2),l=s[0],h=s[1],p=Object(u.useState)(""),f=Object(o.a)(p,2),O=f[0],x=f[1];Object(u.useEffect)((function(){N.getAll().then((function(e){r(e)}))}),[]);var m=function(){var e=Object(i.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.current.toggleVisibility(),e.prev=1,e.next=4,N.create(t);case 4:c=e.sent,r(n.concat(c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),v=Object(u.useRef)();return Object(j.jsxs)("div",{children:[Object(j.jsx)(U,{}),Object(j.jsx)("br",{}),Object(j.jsx)(H,{message:l,type:O}),Object(j.jsxs)("div",{children:[Object(j.jsx)(P,{plants:n,notifyUser:function(e,t){h(e),x(t),setTimeout((function(){h(null)}),7e3)}}),Object(j.jsx)("br",{}),Object(j.jsx)(b,{buttonLabel:"New Plant",closeLabel:"Cancel",ref:v,children:Object(j.jsx)(d,{createPlant:m})}),Object(j.jsx)("br",{}),Object(j.jsx)(I,{}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),Object(j.jsx)(z,{})]})};n(205);c.a.render(Object(j.jsx)(M,{}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.c572030a.chunk.js.map