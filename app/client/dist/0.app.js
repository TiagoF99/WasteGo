(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{371:function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e,n="object"==typeof self&&self&&self.Object===Object&&self,i=r||n||Function("return this")();function s(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function o(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var a=Object.prototype,u=a.hasOwnProperty,c=a.toString,p=i.Symbol,l=a.propertyIsEnumerable,b=p?p.isConcatSpreadable:void 0,h=Math.max;function f(t){return v(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){var e=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)?c.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}(t)}(t)&&u.call(t,"callee")&&(!l.call(t,"callee")||"[object Arguments]"==c.call(t))}(t)||!!(b&&t&&t[b])}var v=Array.isArray;var d,y,O,g=(d=!0,y=function(t){var e=(t=function t(e,r,n,i,s){var a=-1,u=e.length;for(n||(n=f),s||(s=[]);++a<u;){var c=e[a];r>0&&n(c)?r>1?t(c,r-1,n,i,s):o(s,c):i||(s[s.length]=c)}return s}(t,1)).length,r=e;for(d&&t.reverse();r--;)if("function"!=typeof t[r])throw new TypeError("Expected a function");return function(){for(var r=0,n=e?t[r].apply(this,arguments):arguments[0];++r<e;)n=t[r].call(this,n);return n}},O=h(void 0===O?y.length-1:O,0),function(){for(var t=arguments,e=-1,r=h(t.length-O,0),n=Array(r);++e<r;)n[e]=t[O+e];e=-1;for(var i=Array(O+1);++e<O;)i[e]=t[e];return i[O]=n,s(y,this,i)});t.exports=g}).call(this,r(65))},376:function(t,e,r){"use strict";r.d(e,"a",(function(){return S}));var n=r(369),i=r(0),s=r(1),o=r.n(s),a=r(70),u=r.n(a),c=r(85),p=r(42),l=r(4),b=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t,e){void 0===e&&(e=!1),e&&!Object(p.a)(this.options,t)&&(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(l.b)(!!t,2);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=Object(n.f)(t);Object(n.e)(e),Object(n.e)(r.type);Object(l.b)(r.type===e,3)},t}(),h=function(t){function e(e){var r=e.options,n=e.context,i=e.onNewData,s=t.call(this,r,n)||this;return s.previousData={},s.currentObservable={},s.runLazy=!1,s.runLazyQuery=function(t){s.cleanup(),s.runLazy=!0,s.lazyOptions=t,s.onNewData()},s.getExecuteResult=function(){var t=s.getQueryResult();return s.startQuerySubscription(),t},s.obsRefetch=function(t){return s.currentObservable.query.refetch(t)},s.obsFetchMore=function(t){return s.currentObservable.query.fetchMore(t)},s.obsUpdateQuery=function(t){return s.currentObservable.query.updateQuery(t)},s.obsStartPolling=function(t){s.currentObservable&&s.currentObservable.query&&s.currentObservable.query.startPolling(t)},s.obsStopPolling=function(){s.currentObservable&&s.currentObservable.query&&s.currentObservable.query.stopPolling()},s.obsSubscribeToMore=function(t){return s.currentObservable.query.subscribeToMore(t)},s.onNewData=i,s}return Object(i.__extends)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query;return(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:c.b.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this.getOptions();if(t.skip||!1===t.ssr)return!1;var e=this.currentObservable.query;return!!e.getCurrentResult().loading&&e.result()},e.prototype.afterExecute=function(t){var e=(void 0===t?{}:t).lazy,r=void 0!==e&&e;return this.isMounted=!0,r&&!this.runLazy||this.handleErrorOrCompleted(),this.previousOptions=this.getOptions(),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this);return this.lazyOptions&&(e.variables=Object(i.__assign)(Object(i.__assign)({},e.variables),this.lazyOptions.variables),e.context=Object(i.__assign)(Object(i.__assign)({},e.context),this.lazyOptions.context)),this.runLazy&&delete e.skip,e},e.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},e.prototype.getExecuteSsrResult=function(){var t,e=!1===this.getOptions().ssr,r=this.refreshClient().client.disableNetworkFetches,n=Object(i.__assign)({loading:!0,networkStatus:c.b.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields());return e&&(this.ssrInitiated()||r)?(this.previousData.result=n,n):(this.ssrInitiated()&&(t=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||n),t)},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,n.c.Query);var e=t.displayName||"Query";return!this.ssrInitiated()||"network-only"!==t.fetchPolicy&&"cache-and-network"!==t.fetchPolicy||(t.fetchPolicy="cache-first"),Object(i.__assign)(Object(i.__assign)({},t),{displayName:e,context:t.context,metadata:{reactComponent:{displayName:e}}})},e.prototype.initializeObservableQuery=function(){var t,e;if(this.ssrInitiated()&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var r=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(i.__assign)(Object(i.__assign)({},r),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(i.__assign)({},r)),this.ssrInitiated()&&(null===(e=null===(t=this.context)||void 0===t?void 0:t.renderPromises)||void 0===e||e.registerSSRObservable(this.currentObservable.query,r))}},e.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var t=Object(i.__assign)(Object(i.__assign)({},this.prepareObservableQueryOptions()),{children:null});Object(p.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,n=e.networkStatus,i=e.data,s=t.previousData.result;s&&s.loading===r&&s.networkStatus===n&&Object(p.a)(s.data,i)||t.onNewData()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;var r=t.previousData.result;(r&&r.loading||!Object(p.a)(e,t.previousData.error))&&(t.previousData.error=e,t.onNewData())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=Object(i.__assign)(Object(i.__assign)({},t),{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),n=r.loading,s=r.partial,o=r.networkStatus,a=r.errors,u=r.error,p=r.data;if(a&&a.length>0&&(u=new c.a({graphQLErrors:a})),t=Object(i.__assign)(Object(i.__assign)({},t),{loading:n,networkStatus:o,error:u,called:!0}),n){var l=this.previousData.result&&this.previousData.result.data;t.data=l&&p?Object(i.__assign)(Object(i.__assign)({},l),p):l||p}else if(u)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var b=this.currentObservable.query.options.fetchPolicy;if(e.partialRefetch&&!p&&s&&"cache-only"!==b)return Object.assign(t,{loading:!0,networkStatus:c.b.loading}),t.refetch(),t;t.data=p}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,this.currentObservable.query&&this.currentObservable.query.resetQueryStoreErrors(),t},e.prototype.handleErrorOrCompleted=function(){if(this.currentObservable.query&&this.previousData.result){var t=this.previousData.result,e=t.data,r=t.loading,n=t.error;if(!r){var i=this.getOptions(),s=i.query,o=i.variables,a=i.onCompleted,u=i.onError;if(this.previousOptions&&!this.previousData.loading&&Object(p.a)(this.previousOptions.query,s)&&Object(p.a)(this.previousOptions.variables,o))return;a&&!n?a(e):u&&n&&u(n)}}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(b);function f(t,e,r){void 0===r&&(r=!1);var o=Object(s.useContext)(Object(n.d)()),a=Object(s.useReducer)((function(t){return t+1}),0),u=a[0],c=a[1],l=e?Object(i.__assign)(Object(i.__assign)({},e),{query:t}):{query:t},b=Object(s.useRef)(),f=b.current||new h({options:l,context:o,onNewData:function(){f.ssrInitiated()?c():Promise.resolve().then(c)}});f.setOptions(l),f.context=o,f.ssrInitiated()&&!b.current&&(b.current=f);var v,d,y,O={options:Object(i.__assign)(Object(i.__assign)({},l),{onError:void 0,onCompleted:void 0}),context:o,tick:u},g=(v=function(){return r?f.executeLazy():f.execute()},d=O,(y=Object(s.useRef)()).current&&Object(p.a)(d,y.current.key)||(y.current={key:d,value:v()}),y.current.value),j=r?g[1]:g;return Object(s.useEffect)((function(){return b.current||(b.current=f),function(){return f.cleanup()}}),[]),Object(s.useEffect)((function(){return f.afterExecute({lazy:r})}),[j.loading,j.networkStatus,j.error,j.data]),g}var v=function(t){function e(e){var r=e.options,i=e.context,s=e.result,o=e.setResult,a=t.call(this,r,i)||this;return a.runMutation=function(t){void 0===t&&(t={}),a.onMutationStart();var e=a.generateNewMutationId();return a.mutate(t).then((function(t){return a.onMutationCompleted(t,e),t})).catch((function(t){if(a.onMutationError(t,e),!a.getOptions().onError)throw t}))},a.verifyDocumentType(r.mutation,n.c.Mutation),a.result=s,a.setResult=o,a.mostRecentMutationId=0,a}return Object(i.__extends)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,n.c.Mutation),t.client=this.refreshClient().client,[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,n=e.variables,s=e.optimisticResponse,o=e.update,a=e.context,u=void 0===a?{}:a,c=e.awaitRefetchQueries,p=void 0!==c&&c,l=e.fetchPolicy,b=Object(i.__assign)({},t),h=Object.assign({},n,b.variables);return delete b.variables,this.refreshClient().client.mutate(Object(i.__assign)({mutation:r,optimisticResponse:s,refetchQueries:b.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:p,update:o,context:u,fetchPolicy:l,variables:h},b))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),n=r.onCompleted,i=r.ignoreResults,s=t.data,o=t.errors,a=o&&o.length>0?new c.a({graphQLErrors:o}):void 0;this.isMostRecentMutation(e)&&!i&&this.updateResult({called:!0,loading:!1,data:s,error:a}),n&&n(s)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(p.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)},e}(b);var d=function(t){function e(e){var r=e.options,n=e.context,i=e.setResult,s=t.call(this,r,n)||this;return s.currentObservable={},s.setResult=i,s.initialize(r),s}return Object(i.__extends)(e,t),e.prototype.execute=function(t){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"==typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(p.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(i.__assign)(Object(i.__assign)({},e),{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e}(b);!function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise((function(e){e(t.fetchData())}))),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach((function(r,n){t.lookupQueryInfo(n).seen=!0,e.push(r)})),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,n=t.variables,i=e.get(r)||new Map;e.has(r)||e.set(r,i);var s=JSON.stringify(n),o=i.get(s)||{seen:!1,observable:null};return i.has(s)||i.set(s,o),o}}();var y=r(56),O=r.n(y);function g(t){var e=t.children,r=function(t,e){return f(t,e,!1)}(t.query,Object(i.__rest)(t,["children","query"]));return e&&r?e(r):null}function j(t){var e=function(t,e){var r=Object(s.useContext)(Object(n.d)()),o=Object(s.useState)({called:!1,loading:!1}),a=o[0],u=o[1],c=e?Object(i.__assign)(Object(i.__assign)({},e),{mutation:t}):{mutation:t},p=Object(s.useRef)(),l=(p.current||(p.current=new v({options:c,context:r,result:a,setResult:u})),p.current);return l.setOptions(c),l.context=r,Object(s.useEffect)((function(){return l.afterExecute()})),l.execute(a)}(t.mutation,t),r=e[0],o=e[1];return t.children?t.children(r,o):null}function m(t){var e=function(t,e){var r=Object(s.useContext)(Object(n.d)()),o=e?Object(i.__assign)(Object(i.__assign)({},e),{subscription:t}):{subscription:t},a=Object(s.useState)({loading:!o.skip,error:void 0,data:void 0}),u=a[0],c=a[1],p=Object(s.useRef)(),l=(p.current||(p.current=new d({options:o,context:r,setResult:c})),p.current);return l.setOptions(o,!0),l.context=r,Object(s.useEffect)((function(){return l.afterExecute()})),Object(s.useEffect)((function(){return l.cleanup.bind(l)}),[]),l.execute(u)}(t.subscription,t);return t.children&&e?t.children(e):null}(g||(g={})).propTypes={client:O.a.object,children:O.a.func.isRequired,fetchPolicy:O.a.string,notifyOnNetworkStatusChange:O.a.bool,onCompleted:O.a.func,onError:O.a.func,pollInterval:O.a.number,query:O.a.object.isRequired,variables:O.a.object,ssr:O.a.bool,partialRefetch:O.a.bool,returnPartialData:O.a.bool},(j||(j={})).propTypes={mutation:O.a.object.isRequired,variables:O.a.object,optimisticResponse:O.a.oneOfType([O.a.object,O.a.func]),refetchQueries:O.a.oneOfType([O.a.arrayOf(O.a.oneOfType([O.a.string,O.a.object])),O.a.func]),awaitRefetchQueries:O.a.bool,update:O.a.func,children:O.a.func.isRequired,onCompleted:O.a.func,onError:O.a.func,fetchPolicy:O.a.string},(m||(m={})).propTypes={subscription:O.a.object.isRequired,variables:O.a.object,children:O.a.func,onSubscriptionData:O.a.func,onSubscriptionComplete:O.a.func,shouldResubscribe:O.a.oneOfType([O.a.func,O.a.bool])};var _=function(){return{}},R=function(){return!1};function w(t){return t.displayName||t.name||"Component"}function x(t,e){for(var r={},n=0,i=t.variables;n<i.length;n++){var s=i[n],o=s.variable,a=s.type;if(o.name&&o.name.value){var u=o.name.value,c=e[u];void 0===c?"NonNullType"!==a.kind&&(r[u]=void 0):r[u]=c}}return r}var q=function(t){function e(e){var r=t.call(this,e)||this;return r.withRef=!1,r.setWrappedInstance=r.setWrappedInstance.bind(r),r}return Object(i.__extends)(e,t),e.prototype.getWrappedInstance=function(){return Object(l.b)(this.withRef,2),this.wrappedInstance},e.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},e}(o.a.Component);function S(t,e){switch(void 0===e&&(e={}),Object(n.f)(t).type){case n.c.Mutation:return function(t,e){void 0===e&&(e={});var r=Object(n.f)(t),s=e.options,a=void 0===s?_:s,c=e.alias,p=void 0===c?"Apollo":c,l=a;return"function"!=typeof l&&(l=function(){return a}),function(n){var s=p+"("+w(n)+")",a=function(a){function u(){return null!==a&&a.apply(this,arguments)||this}return Object(i.__extends)(u,a),u.prototype.render=function(){var s=this.props,a=l(s);return e.withRef&&(this.withRef=!0,s=Object.assign({},s,{ref:this.setWrappedInstance})),!a.variables&&r.variables.length>0&&(a.variables=x(r,s)),o.a.createElement(j,Object(i.__assign)({ignoreResults:!0},a,{mutation:t}),(function(t,r){var a,u,c=r.data,p=Object(i.__rest)(r,["data"]),l=Object.assign(p,c||{}),b=e.name||"mutate",h=e.name?b+"Result":"result",f=((a={})[b]=t,a[h]=l,a);if(e.props){var v=((u={})[b]=t,u[h]=l,u.ownProps=s,u);f=e.props(v)}return o.a.createElement(n,Object(i.__assign)({},s,f))}))},u.displayName=s,u.WrappedComponent=n,u}(q);return u()(a,n,{})}}(t,e);case n.c.Subscription:return function(t,e){void 0===e&&(e={});var r=Object(n.f)(t),s=e.options,a=void 0===s?_:s,c=e.skip,p=void 0===c?R:c,l=e.alias,b=void 0===l?"Apollo":l,h=e.shouldResubscribe,f=a;"function"!=typeof f&&(f=function(){return a});var v,d=p;return"function"!=typeof d&&(d=function(){return p}),function(n){var s=b+"("+w(n)+")",a=function(a){function u(t){var e=a.call(this,t)||this;return e.state={resubscribe:!1},e}return Object(i.__extends)(u,a),u.prototype.componentDidUpate=function(t){h&&this.setState({resubscribe:h(t,this.props)})},u.prototype.render=function(){var a=this,u=this.props,c=d(u),p=c?Object.create(null):f(u);return!c&&!p.variables&&r.variables.length>0&&(p.variables=x(r,u)),o.a.createElement(m,Object(i.__assign)({},p,{displayName:s,skip:c,subscription:t,shouldResubscribe:this.state.resubscribe}),(function(t){var r,s,p=t.data,l=Object(i.__rest)(t,["data"]);if(e.withRef&&(a.withRef=!0,u=Object.assign({},u,{ref:a.setWrappedInstance})),c)return o.a.createElement(n,Object(i.__assign)({},u,{}));var b=Object.assign(l,p||{}),h=e.name||"data",f=((r={})[h]=b,r);if(e.props){var d=((s={})[h]=b,s.ownProps=u,s);f=v=e.props(d,v)}return o.a.createElement(n,Object(i.__assign)({},u,f))}))},u.displayName=s,u.WrappedComponent=n,u}(q);return u()(a,n,{})}}(t,e);case n.c.Query:default:return function(t,e){void 0===e&&(e={});var r=Object(n.f)(t),s=e.options,a=void 0===s?_:s,c=e.skip,p=void 0===c?R:c,l=e.alias,b=void 0===l?"Apollo":l,h=a;"function"!=typeof h&&(h=function(){return a});var f,v=p;return"function"!=typeof v&&(v=function(){return p}),function(n){var s=b+"("+w(n)+")",a=function(a){function u(){return null!==a&&a.apply(this,arguments)||this}return Object(i.__extends)(u,a),u.prototype.render=function(){var a=this,u=this.props,c=v(u),p=c?Object.create(null):Object(i.__assign)({},h(u));return!c&&!p.variables&&r.variables.length>0&&(p.variables=x(r,u)),o.a.createElement(g,Object(i.__assign)({},p,{displayName:s,skip:c,query:t}),(function(t){t.client;var r,s,p=t.data,l=Object(i.__rest)(t,["client","data"]);if(e.withRef&&(a.withRef=!0,u=Object.assign({},u,{ref:a.setWrappedInstance})),c)return o.a.createElement(n,Object(i.__assign)({},u,{}));var b=Object.assign(l,p||{}),h=e.name||"data",v=((r={})[h]=b,r);if(e.props){var d=((s={})[h]=b,s.ownProps=u,s);v=f=e.props(d,f)}return o.a.createElement(n,Object(i.__assign)({},u,v))}))},u.displayName=s,u.WrappedComponent=n,u}(q);return u()(a,n,{})}}(t,e)}}}}]);