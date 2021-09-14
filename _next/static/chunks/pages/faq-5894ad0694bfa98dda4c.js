(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{8869:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(1664),o=r(1163),s=r(9008),i=r(4409),c=r.n(i);function l(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)(d,{}),(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:c().content,children:t}),(0,n.jsx)(h,{})]})}function d(){return(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"Card Game"}),(0,n.jsx)("meta",{name:"title",content:"Card Game"}),(0,n.jsx)("meta",{name:"description",content:"Randomized Cards generated and stored on chain."}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://cardgameproject.com/"}),(0,n.jsx)("meta",{property:"og:title",content:"Card Game"}),(0,n.jsx)("meta",{property:"og:description",content:"Randomized Cards generated and stored on chain"}),(0,n.jsx)("meta",{property:"og:image",content:"https://cardgameproject.com/meta.png"}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:url",content:"https://cardgameproject.com/"}),(0,n.jsx)("meta",{property:"twitter:title",content:"Card Game"}),(0,n.jsx)("meta",{property:"twitter:description",content:"Randomized Cards generated and stored on chain."}),(0,n.jsx)("meta",{property:"twitter:image",content:"https://cardgameproject.com/meta.png"})]})}function u(){var e=(0,o.useRouter)().pathname;return(0,n.jsxs)("div",{className:c().header,children:[(0,n.jsx)("div",{className:c().header__logo,children:(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:"Card Game"})})}),(0,n.jsx)("div",{className:c().header__links,children:(0,n.jsx)("ul",{children:[{name:"FAQ",path:"/faq"},{name:"Resources",path:"/resources"}].map((function(t,r){var o=t.name,s=t.path;return(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:s,children:(0,n.jsx)("a",{className:e===s?c().header__links_active:void 0,children:o})})},r)}))})})]})}function h(){return(0,n.jsx)("div",{className:c().footer,children:(0,n.jsxs)("p",{children:["This website is"," ",(0,n.jsx)("a",{href:"https://github.com/cardgameproject/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},s=r(1063),i=r(4651),c=r(7426);var l={};function d(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,a=i.useRouter(),u=o.default.useMemo((function(){var t=s.resolveHref(a,e.href,!0),r=n(t,2),o=r[0],i=r[1];return{href:o,as:e.as?s.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),h=u.href,f=u.as,p=e.children,m=e.replace,_=e.shallow,j=e.scroll,x=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var v=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,y=c.useIntersection({rootMargin:"200px"}),g=n(y,2),w=g[0],b=g[1],C=o.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);o.default.useEffect((function(){var e=b&&r&&s.isLocalURL(h),t="undefined"!==typeof x?x:a&&a.locale,n=l[h+"%"+f+(t?"%"+t:"")];e&&!n&&d(a,h,f,{locale:t})}),[f,h,b,x,r,a]);var k={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:i}))}(e,a,h,f,m,_,j,x)},onMouseEnter:function(e){s.isLocalURL(h)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(a,h,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof x?x:a&&a.locale,N=a&&a.isLocaleDomain&&s.getDomainLocale(f,L,a&&a.locales,a&&a.domainLocales);k.href=N||s.addBasePath(s.addLocale(f,L,a&&a.defaultLocale))}return o.default.cloneElement(t,k)};t.default=u},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,c=a.useRef(),l=a.useState(!1),d=n(l,2),u=d[0],h=d[1],f=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||u||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!s&&!u){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=r(7294),o=r(3447),s="undefined"!==typeof IntersectionObserver;var i=new Map},8579:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),a=r(1664),o=r(8869),s=r(2790),i=r.n(s);function c(){return(0,n.jsx)(o.Z,{children:(0,n.jsxs)("div",{className:i().faq,children:[(0,n.jsx)("h2",{children:"Frequently Asked Questions"}),(0,n.jsxs)("div",{className:i().faq__item,children:[(0,n.jsx)("h3",{children:"What is Card Game?"}),(0,n.jsxs)("p",{children:["Card Game is a collection of 44,444 unique trading cards. originally released by"," ",(0,n.jsx)("a",{href:"https://twitter.com/adecentworld",target:"_blank",rel:"noopener noreferrer",children:"Tom Decent"}),". Each card has:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"A card type - creature, item, spell, or place"}),(0,n.jsx)("li",{children:"Name"}),(0,n.jsx)("li",{children:"16 different stat numbers, in 4 groups of 4 around the card"}),(0,n.jsx)("li",{children:"0 - 4 Abilities - randomly named"})]})]}),(0,n.jsx)("p",{children:"Card Game is an unaudited project. All cards are claimable by anyone."})]}),(0,n.jsxs)("div",{className:i().faq__item,children:[(0,n.jsx)("h3",{children:"Why is card game special?"}),(0,n.jsx)("p",{children:"Card game has no company, art, team, or attributes. Card Game makes it impossible to gate-keep any creative decisions."})]}),(0,n.jsxs)("div",{className:i().faq__item,children:[(0,n.jsx)("h3",{children:"Can I create my own game that uses these cards?"}),(0,n.jsxs)("p",{children:["Yes, you are free to use Card Game in any way you want. For inspiration, see existing"," ",(0,n.jsx)(a.default,{href:"/resources",children:(0,n.jsx)("a",{children:"resources"})})," ","put together by the community."]})]}),(0,n.jsxs)("div",{className:i().faq__item,children:[(0,n.jsx)("h3",{children:"Can I create my own set of cards?"}),(0,n.jsx)("p",{children:"Yes, the initial Alpha set is to show the concept of this project. You can create your own set with any name and attributes you like. Games can then choose what sets they wish to allow."})]}),(0,n.jsxs)("div",{className:i().faq__item,children:[(0,n.jsx)("h3",{children:"Why launch this on Ethereum main chain when gas is so high?"}),(0,n.jsx)("p",{children:"We are working on being able to bridge Cards to Immutable X and possibly other chains in the future where gas will be much cheaper. If you would like your own set of cards on another chain feel free to create them there."})]})]})})}},4160:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return r(8579)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},2790:function(e){e.exports={faq:"FAQ_faq__Rl9-M",faq__item:"FAQ_faq__item__1YopL"}},9008:function(e,t,r){e.exports=r(639)},1664:function(e,t,r){e.exports=r(2167)},1163:function(e,t,r){e.exports=r(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=4160,e(e.s=t);var t}));var t=e.O();_N_E=t}]);