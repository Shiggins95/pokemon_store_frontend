(this.webpackJsonppokemon_store_frontend=this.webpackJsonppokemon_store_frontend||[]).push([[0],{35:function(e,a,t){e.exports=t(72)},40:function(e,a,t){},42:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),o=t.n(r),i=(t(40),t(7)),l=t(4),m=t(5),s=t.n(m),d=t(11),u=t(16),p=(t(42),function(e,a){return{type:"ADD_TO_CART",item:e,items:a}}),E=function(e){return{type:"REMOVE_FROM_CART",item:e}},f=function(e){return{type:"SET_ITEMS",items:e}},_=function(e){return{type:"FILTER_ITEMS",items:e}},b=function(e){return{type:"ADD_FILTER",newFilter:e}},g=function(e){return{type:"REMOVE_FILTER",filter:e}},y=function(e){return{type:"SET_FILTERED_ITEMS",items:e}},v=function(e){return{type:"UPDATE_ITEM",item:e}},h=function(e){window.localStorage.setItem("token_id",e.token_id),window.localStorage.setItem("expires_at",e.expires_at)},S=function(){return parseInt(window.localStorage.getItem("expires_at"))>(new Date).getTime()},N=function(){window.localStorage.removeItem("token_id"),window.localStorage.removeItem("expires_at")},C=function(e,a,t,n){1===a.length?(e(g(n)),e({type:"RESTORE_ITEMS"})):(e(g(n)),e(_(t)))},O=function(e,a){var t=[],n=["price_asc","price_desc","default"],c=!1,r=!1;a.forEach((function(e,a){-1!==n.indexOf(e)&&(r=!0,c=a)}));var o=a;if(r&&!1!==c)switch(a[c]){case"default":e=e.sort((function(e,a){return parseInt(e.id,10)-parseInt(a.id,10)})),o=a.filter((function(e){return"default"!==e}));break;case"price_desc":e=e.sort((function(e,a){return a.price-e.price})),o=a.filter((function(e){return"price_desc"!==e}));break;case"price_asc":e=e.sort((function(e,a){return e.price-a.price})),o=a.filter((function(e){return"price_asc"!==e}))}return 0===o.length?{filteredItems:e,newFilters:o}:(e.forEach((function(e){-1!==o.indexOf("oos")?e.quantity>0&&(1===o.length||-1!==o.indexOf(e.type))&&t.push(e):-1!==o.indexOf(e.type)&&t.push(e)})),{filteredItems:t,newFilters:o})},T=t(1),I=function(e){var a=e.onClick,t=e.updateStage;return S()||t("SELECT"),c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{className:"logged_in"},c.a.createElement("p",null,"Logged In"),c.a.createElement("button",{onClick:a},"Logout"),c.a.createElement(i.b,{to:"/"},c.a.createElement("button",null,"Shop Products"))))},k=function(e){var a=e.auth,t=e.onClick,n=e.logout;return a?c.a.createElement("div",{className:"logged_in"},c.a.createElement("button",{onClick:function(){t("SELECT"),n()}},"Logout")):c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){return t("LOGIN")}},"Login"),c.a.createElement("button",{onClick:function(){return t("CREATE")}},"Sign Up"))},A=t(14),M=t(12),R=function(e){var a=e.onClick,t=e.onSubmit;return c.a.createElement("div",{className:"login_container_inner"},c.a.createElement("div",{className:"back_button"},c.a.createElement(A.a,{icon:M.a,id:"fa_back_button",onClick:function(){return a("SELECT")}})),c.a.createElement("form",{method:"POST",className:"login_form",onSubmit:function(e){return t(e,"login")}},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email"}),c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"text",id:"password"}),c.a.createElement("input",{type:"submit",id:"login_submit",value:"Login"})))},L=function(e){var a=e.onSubmit,t=e.onClick;return c.a.createElement("div",{className:"login_container_inner"},c.a.createElement("div",{className:"back_button"},c.a.createElement(A.a,{icon:M.a,id:"fa_back_button",onClick:function(){return t("SELECT")}})),c.a.createElement("form",{className:"create_form",onSubmit:function(e){return a(e,"create")}},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email"}),c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"text",id:"password"}),c.a.createElement("div",{className:"checkbox"},c.a.createElement("div",{className:"label"},c.a.createElement("label",{htmlFor:"ts_cs_checkbox"},"I have read and I agree to the"," ",c.a.createElement("br",null),c.a.createElement(i.b,{to:"/ts_and_cs",target:"_blank"},"Terms and Conditions"))),c.a.createElement("div",{className:"check"},c.a.createElement("input",{type:"checkbox",id:"ts_cs_checkbox",name:"ts_cs_checkbox",required:!0}))),c.a.createElement("input",{type:"submit",id:"login_submit",value:"Create Account"})))},w=function(e){var a=e.onClick,t=e.location,n=e.reason,r=e.displayText;return c.a.createElement("div",{className:"wrong_email"},c.a.createElement("div",{className:"back_button"},c.a.createElement(A.a,{icon:M.a,id:"fa_back_button",onClick:function(){return a(t)}})),c.a.createElement("p",null,n),c.a.createElement("button",{onClick:function(){return a(t)}},r))},G=function(e){var a=e.changeDisplay,t=e.handleLogout,n=e.auth,r=e.handleLogin,o=e.stage;return{SELECT:c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){return a("LOGIN")}},"Login"),c.a.createElement("button",{onClick:function(){return a("CREATE")}},"Sign Up")),LOGGED_IN_SUCCESS:c.a.createElement(I,{onClick:t,updateStage:a}),LOGGED_IN:c.a.createElement(k,{onClick:a,auth:n,logout:t}),LOGIN:c.a.createElement(R,{onClick:a,onSubmit:r}),CREATE:c.a.createElement(L,{onClick:a,onSubmit:r}),WRONG_EMAIL:c.a.createElement(w,{reason:"Wrong email was provided. Please try again.",onClick:a,location:"LOGIN",displayText:"Try Again"}),WRONG_PWORD:c.a.createElement(w,{reason:"The password entered was wrong. Please try again.",onClick:a,location:"LOGIN",displayText:"Try Again"}),USER_EXISTS:c.a.createElement(w,{reason:"A user already exists with your email. Please log in.",onClick:a,location:"LOGIN",displayText:"Login"})}[o]},j=function(e){var a=Object(T.b)(),t=Object(T.c)((function(e){return e.auth})),r=Object(n.useState)(t?"LOGGED_IN":"SELECT"),o=Object(u.a)(r,2),i=o[0],l=o[1],m={incorrect_password:"WRONG_PWORD",incorrect_email:"WRONG_EMAIL",user_exists:"USER_EXISTS"};console.log(t);var p={auth:t,changeDisplay:function(e){l(e)},handleLogout:function(){N(),l("SELECT")},handleLogin:function(){var e=Object(d.a)(s.a.mark((function e(t,n){var c,r,o,i,d,u,p,E;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handle login"),t.preventDefault(),c=t.target.email.value,r=t.target.password.value,o={email:c,password:r},s="token_id",i=window.localStorage.getItem(s),e.next=8,fetch("".concat("http://139.162.211.53:8080/","/api/users/").concat(n),{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json",Authorization:i}});case 8:if(!(d=e.sent).ok){e.next=15;break}return e.next=12,d.json();case 12:e.t0=e.sent,e.next=16;break;case 15:e.t0=!1;case 16:u=e.t0,console.log("TOKEN OBJ",u),(p=u.token_info)?(console.log(p),h(p),a({type:"LOG_IN"}),l("LOGGED_IN_SUCCESS")):(E=u.error.replace(" ","_").toLowerCase(),console.log(m[E]),l(m[E]));case 20:case"end":return e.stop()}var s}),e)})));return function(a,t){return e.apply(this,arguments)}}(),stage:i};return c.a.createElement("div",{id:"login_container"},c.a.createElement("div",{className:"display_container"},c.a.createElement(G,p)))},x=(t(51),function(e){var a=Object(T.b)(),t=Object(T.c)((function(e){return e.nav})),n=Object(T.c)((function(e){return e.cart.display})),r=Object(T.c)((function(e){return e.auth})),o=t?"navbar show":"navbar hide",l=function(e){a({type:"UPDATE_NAVBAR"}),n&&a({type:"HIDE_CART"})};return c.a.createElement("div",{className:"navbar_container"},c.a.createElement("div",{className:"icon"},c.a.createElement(A.a,{icon:M.b,className:"fa_menu_bars",onClick:l,"data-testid":"navbar-event-firer"})),c.a.createElement("div",{className:o,"data-testid":"navbar-display"},c.a.createElement(i.b,{to:"/",className:"link",onClick:l},"Home"),r?c.a.createElement(i.b,{to:"/login",id:"log_in_out_button",onClick:function(){a({type:"LOG_OUT"}),N(),a({type:"UPDATE_NAVBAR"})},className:"link"},"Log Out"):c.a.createElement(i.b,{to:"/login",id:"log_in_out_button",className:"link",onClick:l},"Login")))}),D=(t(52),function(){var e=Object(d.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://139.162.211.53:8080/").concat(a));case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:e.t0=e.sent,e.next=13;break;case 9:return e.next=11,t;case 11:e.t1=e.sent,e.t0={error:!0,response:e.t1};case 13:return e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),P=(t(53),t(54),[{label:"Packages",type:"package"},{label:"Shiny Legends",type:"shiny_legend"},{label:"Shiny Singles",type:"shiny_single"},{label:"Event Pokemon",type:"event"}]),B=function(e){var a=Object(T.c)((function(e){return e.items})),t=a.items,n=a.filters,r=Object(T.b)(),o=function(e){var a=e.target.className;-1!==a.indexOf("clicked")?(C(r,n,t,e.target.className.split(" ")[0]),e.target.className=a.split(" ")[0]):(r(b(e.target.className)),r(_(t)),e.target.className=a+" clicked")},i=function(e){return-1!==n.indexOf(e)};return c.a.createElement("div",{className:"type_filter"},c.a.createElement("p",null,"Filter by categories"),c.a.createElement("div",{className:"filters"},P.map((function(e,a){return c.a.createElement("div",{key:a,onClick:o,className:i(e.type)?"".concat(e.type," clicked"):e.type},e.label)}))))},F=(t(55),[{label:"Price (ASC)",value:"price_asc"},{label:"Price (DESC)",value:"price_desc"}]),U=function(e){var a=Object(T.c)((function(e){return e.items})).items,t=Object(T.b)();return c.a.createElement("div",{className:"other_filter"},c.a.createElement("p",null,"Sort By"),c.a.createElement("div",{className:"filters"},c.a.createElement("select",{onChange:function(e){switch(e.target.value){case"default":t(g("price_asc")),t(g("price_desc")),t(b("default")),t(_());break;case"price_asc":t(g("default")),t(g("price_desc")),t(b("price_asc")),t(_());break;case"price_desc":t(g("price_asc")),t(g("default")),t(b("price_desc")),t(_());break;default:t(f(a))}},name:"other_filters_select",id:"other_filters_select"},c.a.createElement("option",{value:"default"},"Select an option"),F.map((function(e,a){return c.a.createElement("option",{key:a,value:e.value},e.label)})))))},H=(t(56),function(e){var a=Object(T.c)((function(e){return e.items})),t=a.items,n=a.filters,r=Object(T.b)(),o=-1!==n.indexOf("oos");return c.a.createElement("div",{className:"oos_filter"},c.a.createElement("p",null,"Hide out of stock"),c.a.createElement("div",{className:"filters"},c.a.createElement("div",{className:"checkbox",onClick:function(e){"X"===e.target.innerText?(e.target.innerText="",e.target.style.background="rgba(12, 238, 255, 1)",e.target.style.borderColor="rgb(12, 185, 255)",C(r,n,t,"oos")):(e.target.style.background="rgb(12, 185, 255)",e.target.style.borderColor="rgba(12, 238, 255, 1)",e.target.style.color="rgba(12, 238, 255, 1)",e.target.innerText="X",r(b("oos")),r(_()))},style:o?{background:"rgb(12, 185, 255)",borderColor:"rgba(12, 238, 255, 1)",color:"rgba(12, 238, 255, 1)"}:{background:"rgba(12, 238, 255, 1)",borderColor:"rgb(12, 185, 255)"}},o?"X":"")))}),K=(t(57),function(e){return c.a.createElement("div",{className:"store_filters"},c.a.createElement(B,e),c.a.createElement(H,e),c.a.createElement(U,e))}),V=(t(58),function(e){var a=e.item,t=Object(T.b)(),n=Object(T.c)((function(e){return e.items})),r=n.items,o=n.filteredItems,l=n.filters,m="High Stock",s="green";return 0===a.quantity?(m="Out Of Stock",s="red"):a.quantity<=10&&(m="Low Stock",s="orange"),c.a.createElement("div",{className:"product_container"},c.a.createElement("img",{src:a.img,alt:a.name}),c.a.createElement("div",{className:"header_info"},c.a.createElement("h3",null,a.name),c.a.createElement("h4",null,"\xa3",a.price),c.a.createElement("p",{style:{color:s}},m),c.a.createElement("h4",null,"Available: ",a.quantity>=10?"10+":a.quantity)),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(e){a.quantity>1?(a.quantity-=1,t(p(a,r)),t({type:"SHOW_CART"}),t(y(o))):(1===a.quantity&&(a.quantity-=1,t(p(a,r)),t(y(o))),-1!==l.indexOf("oos")&&t(_(r)))},value:a.id,id:"inner_button",className:"add_to_cart_inner"},"Add To Cart"),c.a.createElement(i.b,{to:"/item/".concat(a.id),id:"inner_button",className:"view_more_inner"},"View More")))}),J=function(e){var a=e.items,t=e.innerText;return a.length>0?c.a.createElement("div",{className:"products"},a.map((function(e,a){return c.a.createElement(V,{key:a,item:e})}))):c.a.createElement("div",{className:"store_container"},c.a.createElement("h1",null,t))},W=function(e){var a=Object(T.b)(),t=Object(T.c)((function(e){return e.items})),r=t.items,o=t.filteredItems,i=t.filters;console.log("FILTERS:::",i);var l=Object(T.c)((function(e){return e.cart})).items,m=function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("/api/products/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=i.length>0?"No products matched your criteria":"Loading...";return Object(n.useEffect)((function(){0===r.length&&m().then((function(e){e.forEach((function(e){e.startingQuantity=e.quantity,e.images=JSON.parse(e.images),l.forEach((function(a){a.name===e.name&&(e.quantity-=a.cartQuantity)}))})),setTimeout((function(){a(f(e))}),0)}))}),[l,a,r]),c.a.createElement("div",{className:"store_container"},c.a.createElement(K,{filters:i}),c.a.createElement(J,{items:o,innerText:u}))},q=(t(59),t(60),function(e){var a=e.item,t=e.productClassName,n=e.cartQuantity,r=Object(T.c)((function(e){return e.items})).items;console.log("ITEMS: ",r);var o=Object(T.b)(),i=(a.cartQuantity*a.price).toFixed(2);return c.a.createElement("div",{className:"cart_product ".concat(t)},c.a.createElement("div",{className:"cart_product_image"},c.a.createElement("img",{src:a.img,alt:a.name})),c.a.createElement("div",{className:"cart_product_info"},c.a.createElement("p",null,a.name),c.a.createElement("div",{className:"item_stats"},c.a.createElement("p",null,"Quantity: ",a.cartQuantity),c.a.createElement("p",null,"Total: \xa3",i)),c.a.createElement("div",{className:"cart_product_buttons"},c.a.createElement("button",{onClick:function(e){a.quantity>0&&(a.quantity-=1,o(p(a,r)),o(v(a)))},value:a.id},"+"),c.a.createElement("button",{onClick:function(e){1===n&&o({type:"HIDE_CART"}),a.quantity+=1,o(E(a)),o(v(a))},value:a.id},"-"),c.a.createElement("button",{onClick:function(e){console.log(n),console.log(r),1!==n&&a.cartQuantity!==n||o({type:"HIDE_CART"});for(var t=a.cartQuantity;t>0;t--)a.quantity+=1,o(E(a));o(v(a))},value:a.id},"Remove"))))}),Q=function(e){var a=Object(T.b)(),t=Object(T.c)((function(e){return e.cart})),n=t.display,r=t.items,o=n?"show_cart":"hide_cart",l=n?"gap":"no_gap",m=function(e){var a=0;return e.forEach((function(e){a+=e.cartQuantity})),a}(r),s=0!==r.length?r.map((function(e,a){var t="";return 0===a?t="first_cart_product":a===r.length-1&&(t="last_cart_product"),c.a.createElement(q,{cartQuantity:m,item:e,productClassName:t,key:a})})):c.a.createElement("div",{className:"no_items_in_cart_container"},c.a.createElement("div",{className:"no_items_in_cart"},c.a.createElement("p",null,"Please add items to your cart."),c.a.createElement(A.a,{icon:M.c,id:"fa_cart_button"})));return c.a.createElement("div",{className:"shopping_cart",style:{color:"white"}},c.a.createElement("div",{className:"show_cart_button ".concat(l),onClick:function(){return a(n?{type:"HIDE_CART"}:{type:"SHOW_CART"})}},c.a.createElement(A.a,{icon:n?M.d:M.c,id:"fa_cart_button"}),c.a.createElement("div",{className:"amount_in_cart"},m)),c.a.createElement("div",{className:"shopping_cart_container ".concat(o)},c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{id:"clear_cart",className:"cart_button",onClick:function(){r.forEach((function(e){e.quantity+=e.cartQuantity,a(v(e))})),a({type:"CLEAR_CART"})}},"Clear Cart"),c.a.createElement(i.b,{to:"/checkout",onClick:function(){return a({type:"HIDE_CART"})}},c.a.createElement("button",{id:"checkout",className:"cart_button"},"Checkout"))),s))},X=(t(61),t(62),t(34)),z=t(15),Z=(t(68),[{name:"Afghanistan",code:"AF"},{name:"\xc5land Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia (Plurinational State of)",code:"BO"},{name:"Bonaire, Sint Eustatius and Saba",code:"BQ"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Virgin Islands (British)",code:"VG"},{name:"Virgin Islands (U.S.)",code:"VI"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cabo Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo (Democratic Republic of the)",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cura\xe7ao",code:"CW"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and McDonald Islands",code:"HM"},{name:"Holy See",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"C\xf4te d'Ivoire",code:"CI"},{name:"Iran (Islamic Republic of)",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People's Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia (the former Yugoslav Republic of)",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia (Federated States of)",code:"FM"},{name:"Moldova (Republic of)",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montenegro",code:"ME"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Korea (Democratic People's Republic of)",code:"KP"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestine, State of",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Republic of Kosovo",code:"XK"},{name:"R\xe9union",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"Rwanda",code:"RW"},{name:"Saint Barth\xe9lemy",code:"BL"},{name:"Saint Helena, Ascension and Tristan da Cunha",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Martin (French part)",code:"MF"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia",code:"RS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Sint Maarten (Dutch part)",code:"SX"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Korea (Republic of)",code:"KR"},{name:"South Sudan",code:"SS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States of America",code:"US"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela (Bolivarian Republic of)",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]),Y=Object(z.injectStripe)((function(e){var a=function(e,a){for(var t in e)e.hasOwnProperty(t)&&(a[t]="price"===t?100*e[t]:e[t])},t=function(e){var a={};return["payment_line1","payment_line2","payment_city","payment_country","payment_postal_code"].forEach((function(t){var n=t.split("payment_")[1];a[n]=e[t].value})),console.log(a),a},n=function(){var n=Object(d.a)(s.a.mark((function n(c){var r,o,i,l,m,d,u,p,E;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),console.log(c.target),r=t(c.target),o=c.target.payment_email.value,n.next=6,e.stripe.createToken();case 6:return i=n.sent,l=i.token,console.log(l),(m=e.items).forEach((function(e){e.user={}})),a(l,d={}),d.address=r,d.ya_boys_products=m,d.email=o,d.price=parseInt((100*e.cartTotal).toFixed(2),10),console.log(d),u={"Content-Type":"application/json"},n.next=21,fetch("".concat("http://139.162.211.53:8080/","/api/payment/pay"),{method:"POST",body:JSON.stringify(d),headers:u});case 21:p=n.sent,E=p.ok?p.json():console.log("error: ",p),console.log(E);case 24:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return c.a.createElement("form",{onSubmit:n,id:"stripe_checkout_form"},c.a.createElement("div",{className:"payment_customer_details"},c.a.createElement("div",{className:"payment_input email"},c.a.createElement("label",null,"Email"),c.a.createElement("input",{type:"email",id:"payment_email",name:"payment_line_1",defaultValue:"test@test.com"})),c.a.createElement("div",{className:"payment_input line1"},c.a.createElement("label",null,"Address Line 1"),c.a.createElement("input",{type:"text",id:"payment_line1",name:"payment_line_1",defaultValue:"Test Line 1"})),c.a.createElement("div",{className:"payment_input line1"},c.a.createElement("label",null,"Address Line 2"),c.a.createElement("input",{type:"text",id:"payment_line2",name:"payment_line_2",defaultValue:"Test Line 2"})),c.a.createElement("div",{className:"city_postcode"},c.a.createElement("div",{className:"payment_input"},c.a.createElement("label",null,"City"),c.a.createElement("input",{type:"text",id:"payment_city",name:"payment_city",defaultValue:"Glasgow"})),c.a.createElement("div",{className:"payment_input postcode"},c.a.createElement("label",null,"Post Code"),c.a.createElement("input",{type:"text",id:"payment_postal_code",name:"payment_postal_code",defaultValue:"Test Post Code"}))),c.a.createElement("div",{className:"payment_input country"},c.a.createElement("label",null,"Country"),c.a.createElement("select",{name:"payment_country",id:"payment_country"},c.a.createElement("option",{value:"GB"},"United Kingdom"),Z.map((function(e){return c.a.createElement("option",{value:e.code},e.name)}))))),c.a.createElement("div",{className:"payment_info"},c.a.createElement("div",{className:"payment_input"},c.a.createElement("label",null,"Card Number"),c.a.createElement(z.CardNumberElement,{className:"stripe_card_element",id:"card_number_element"})),c.a.createElement("div",{className:"payment_input"},c.a.createElement("label",null,"Expiry"),c.a.createElement(z.CardExpiryElement,{className:"stripe_card_element",id:"expiry_element"})),c.a.createElement("div",{className:"payment_input"},c.a.createElement("label",null,"CVC"),c.a.createElement(z.CardCvcElement,{className:"stripe_card_element",id:"cvc_element"}))),c.a.createElement("button",{type:"submit"},"Pay Now"))})),$=function(e){var a=Object(T.c)((function(e){return e.cart})).items,t=function(){var e=0;return a.forEach((function(a){e+=a.cartQuantity*a.price})),e}();console.log(t);var n=0===a.length?"display":"hide";Object(X.a)("pk_test_E1sB3HebuXKmr9Avr80VltJw00gh3Xkzpo");return c.a.createElement("div",{className:"payment_container"},c.a.createElement("div",{className:"click_stopper_container ".concat(n)},c.a.createElement("div",{className:"click_stopper"},c.a.createElement("h2",null,"Please add items to your basket"),c.a.createElement(i.b,{to:"/",className:"link"},"Shop Products"))),c.a.createElement("div",{className:"inner_payment_container"},c.a.createElement("div",{className:"items_info"},a.map((function(e,a){var t=0===a?"first_cart_product":"";return c.a.createElement(q,{item:e,key:a,productClassName:t})})))),c.a.createElement("div",{className:"inner_totals_container"},c.a.createElement("div",{className:"totals"},c.a.createElement("p",null,"Cart Total: \xa3",t.toFixed(2))),c.a.createElement("div",{className:"pay_button"},c.a.createElement(z.StripeProvider,{apiKey:"pk_test_E1sB3HebuXKmr9Avr80VltJw00gh3Xkzpo"},c.a.createElement(z.Elements,null,c.a.createElement(Y,{items:a,cartTotal:t}))))))},ee=(t(69),t(70),function(e){var a=e.item,t=a.name,r=a.images,o=a.img,i=Object(n.useState)(o),l=Object(u.a)(i,2),m=l[0],s=l[1],d=function(e,a){s(e?a:o)};return c.a.createElement("div",{id:"image_gallery"},c.a.createElement("div",{className:"showcase"},c.a.createElement("img",{src:m,alt:t})),c.a.createElement("div",{className:"other_images",onMouseOut:function(){return d(!1)}},r.map((function(e,a){return c.a.createElement("img",{src:e,alt:t,onMouseOver:function(){return d(!0,e)},key:a})}))))}),ae=(t(71),function(e){var a=e.changeDisplay,t=e.item,n=e.cartItem,r=Object(T.b)();return c.a.createElement("div",{id:"add_to_cart_modal"},c.a.createElement("button",{onClick:function(){console.log("STD ITEM: ",t),console.log("CART ITEM: ",n);if((10<n.quantity-n.cartQuantity||!n.quantity)&&t.quantity>0){for(var e=0;e<10;e++)r(p(t));r({type:"SHOW_CART"})}a()}},"Add"))}),te=function(e){var a=Object(n.useState)(),t=Object(u.a)(a,2),r=t[0],o=t[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),m=l[0],p=l[1],E=e.match.params.id,f=Object(T.c)((function(e){return e.cart})).items;console.log("ITEMSSSS: ",f),console.log(r),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("/api/products/".concat(E));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){r||(e.images=JSON.parse(e.images),o(e))}))}),[E,r]),console.log(e);return r?c.a.createElement("div",{id:"product_container"},c.a.createElement("div",{className:"image_display"},c.a.createElement(ee,{item:r})),c.a.createElement("div",{className:"product_info"},c.a.createElement("h2",null,r.name),c.a.createElement("h3",null,r.price),c.a.createElement("p",null,r.description),c.a.createElement("button",{onClick:function(){p(!m)},value:r.id,id:"inner_button",className:"add_to_cart_inner"},"Add To Cart"),m?c.a.createElement(ae,{changeDisplay:p,item:r,cartItem:f.filter((function(e){return e.id===r.id}))[0]||{}}):null)):c.a.createElement("div",{id:"product_container"},c.a.createElement("p",null,"Loading"))};var ne=function(){var e=Object(T.c)((function(e){return e.auth}));return c.a.createElement(i.a,null,c.a.createElement("div",{className:"app_container"},c.a.createElement("div",{className:"nav_container"},c.a.createElement(x,{auth:e})),c.a.createElement("div",{className:"shopping_cart_container"},c.a.createElement(Q,null)),c.a.createElement("div",{className:"routes_container"},c.a.createElement(l.a,{exact:!0,path:"/",component:W}),c.a.createElement(l.a,{exact:!0,path:"/login",component:j}),c.a.createElement(l.a,{exact:!0,path:"/checkout",component:$}),c.a.createElement(l.a,{exact:!0,path:"/item/:id",render:function(e){return c.a.createElement(te,e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=t(17),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S(),a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOG_IN":return!0;case"LOG_OUT":return!1;default:return e}},oe=t(6),ie=t(21),le=localStorage.getItem("shopping_cart"),me=[];le&&(me=JSON.parse(le));var se={items:me,display:!1},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0,t=e.display;switch(a.type){case"ADD_TO_CART":var n,c=!1,r=a.item,o=localStorage.getItem("shopping_cart");o&&(n=JSON.parse(o));var i=[];return i=e.items.length>0?Object(ie.a)(e.items):[],n&&n.forEach((function(e){console.log(e),console.log(r),e.id.toString()===r.id.toString()&&(e.cartQuantity+=1,c=!0)})),i.forEach((function(e){e.id.toString()===r.id.toString()&&(e.cartQuantity+=1,c=!0)})),c||(r.cartQuantity=1,i.push(r)),localStorage.setItem("shopping_cart",JSON.stringify(i)),{items:i,display:t};case"REMOVE_FROM_CART":var l=e.items.filter((function(e){return e.cartQuantity>1&&e.id.toString()===a.item.id.toString()?(e.cartQuantity-=1,e):e.id.toString()!==a.item.id.toString()}));return localStorage.setItem("shopping_cart",JSON.stringify(l)),{items:l,display:t};case"SHOW_CART":return Object(oe.a)(Object(oe.a)({},e),{},{display:!0});case"HIDE_CART":return Object(oe.a)(Object(oe.a)({},e),{},{display:!1});case"CLEAR_CART":return localStorage.removeItem("shopping_cart"),{items:[],display:!1};default:return e}},ue={items:[],filteredItems:[],filters:[]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0,t=e.items,n=e.filters;switch(a.type){case"SET_ITEMS":return{items:a.items,filteredItems:a.items,filters:n};case"SET_FILTERED_ITEMS":return Object(oe.a)(Object(oe.a)({},e),{},{filteredItems:a.items});case"HIDE_OOS":return Object(oe.a)(Object(oe.a)({},e),{},{filteredItems:e.filteredItems.filter((function(e){return e.quantity>0}))});case"FILTER_ITEMS":var c=O(t,n),r=c.filteredItems,o=c.newFilters;return{items:t,filteredItems:r,filters:o};case"RESTORE_ITEMS":return Object(oe.a)(Object(oe.a)({},e),{},{filteredItems:Object(ie.a)(t)});case"ADD_FILTER":return Object(oe.a)(Object(oe.a)({},e),{},{filters:[].concat(Object(ie.a)(n),[a.newFilter])});case"REMOVE_FILTER":return Object(oe.a)(Object(oe.a)({},e),{},{filters:n.filter((function(e){return e!==a.filter}))});case"UPDATE_ITEM":var i=e.filteredItems,l=i.map((function(e){return e.name===a.item.name&&(e=a.item),e}));return Object(oe.a)(Object(oe.a)({},e),{},{filteredItems:l});default:return e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;return"UPDATE_NAVBAR"===a.type?!e:e},fe=Object(ce.b)({auth:re,cart:de,items:pe,nav:Ee}),_e=Object(ce.c)(fe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(c.a.createElement(T.a,{store:_e},c.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.a5f8c182.chunk.js.map