import"./3ecf4d48.js";import{h as e}from"./7b4e2b6a.js";import{H as t,E as n,a as s,C as o,S as l,D as i,Z as r}from"./97466b3b.js";import"./49bd6e75.js";import"./962426a7.js";let a,m,c=e=>e;customElements.define("holochain-playground-container",t),customElements.define("entry-graph",n),customElements.define("entry-contents",s),customElements.define("call-zome-fns",o),customElements.define("source-chain",l),customElements.define("dht-cells",i),customElements.define("zome-fns-results",r);const d={zomes:[{name:"demo_entries",entry_defs:[{id:"demo_entry",visibility:"Public"}],zome_functions:{create_entry:{call:({create_entry:e})=>async({content:t})=>e({content:t,entry_def_id:"demo_entry"}),arguments:[{name:"content",type:"any"}]}}}]},y=()=>e(a||(a=c`
    <holochain-playground-container
      .numberOfSimulatedConductors=${0}
      .simulatedDnaTemplate=${0}
    >
      <div
        style="display: flex; flex-direction: row; height: 400px; margin-bottom: 20px;"
      >
        <call-zome-fns
          id="call-zome"
          style="flex: 1; margin-right: 20px;"
          hide-zome-selector
        >
        </call-zome-fns>
        <dht-cells
          style="flex: 1"
          hide-filter
          hide-time-controller
          .workflowsToDisplay=${0}
          .networkRequestsToDisplay=${0}
        ></dht-cells>
      </div>
      <div
        style="display: flex; height: 450px; flex-direction: row; margin-bottom: 20px;"
      >
        <entry-graph
          style="flex: 1; margin-right: 20px;"
          .excludedEntryTypes=${0}
        >
        </entry-graph>
        <source-chain style="flex: 1; height: 100%; margin-right: 20px;">
        </source-chain>
      </div>
    </holochain-playground-container>
  `),4,d,[],[],["Agent"]),h={zomes:[{name:"demo_entries",entry_defs:[{id:"demo_entry",visibility:"Public"}],zome_functions:{create_entry:{call:({create_entry:e})=>async({content:t})=>e({content:t,entry_def_id:"demo_entry"}),arguments:[{name:"content",type:"any"}]},get:{call:({get:e})=>({hash:t})=>e(t),arguments:[{name:"hash",type:"AnyDhtHash"}]},get_details:{call:({get_details:e})=>({hash:t})=>e(t),arguments:[{name:"hash",type:"AnyDhtHash"}]}}}]},p=()=>e(m||(m=c`
    <holochain-playground-container
      .numberOfSimulatedConductors=${0}
      .simulatedDnaTemplate=${0}
      @ready=${0}
    >
      <div
        style="display: flex; flex-direction: row; height: 500px; margin-bottom: 20px;"
      >
        <call-zome-fns
          id="call-zome"
          style="flex: 1; margin-right: 20px;"
          hide-zome-selector
          hide-agent-pub-key
        >
        </call-zome-fns>
        <zome-fns-results
          hide-agent-pub-key
          style="flex: 1;"
        ></zome-fns-results>
      </div>
      <div
        style="display: flex; flex-direction: row; height: 350px; margin-bottom: 20px;"
      >
        <entry-graph
          style="flex: 1; margin-right: 20px;"
          .excludedEntryTypes=${0}
          hide-filter
          show-headers
        >
        </entry-graph>
        <entry-contents style="flex-basis: 500px;">
        </entry-contents>
      </div>
    </holochain-playground-container>
  `),1,h,(e=>{const t=e.detail.conductors[0].getAllCells()[0].cellId;e.target.activeAgentPubKey=t[1]}),["Agent"]),f=document,g=[{key:"Simple1",story:y},{key:"Simple2",story:p}];let u=!1;for(const e of g){const t=f.querySelector(`[mdjs-story-name="${e.key}"]`);t&&(t.story=e.story,t.key=e.key,u=!0,Object.assign(t,{}))}u&&(customElements.get("mdjs-preview")||import("./9c634124.js"),customElements.get("mdjs-story")||import("./de8039dc.js"));export{y as Simple1,p as Simple2};
