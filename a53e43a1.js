import"./3ecf4d48.js";import{h as e}from"./7b4e2b6a.js";import{H as t,E as n,a as s,C as a,Z as i,S as o,D as l}from"./97466b3b.js";import"./962426a7.js";let r,c,m=e=>e;customElements.define("holochain-playground-container",t),customElements.define("entry-graph",n),customElements.define("entry-contents",s),customElements.define("call-zome-fns",a),customElements.define("zome-fns-results",i),customElements.define("source-chain",o),customElements.define("dht-cells",l);const g={zomes:[{name:"snacking_journal",entry_defs:[{id:"snacking_log",visibility:"Public"}],zome_functions:{register_snacking:{call:({create_entry:e,hash_entry:t})=>async({content:t})=>e({content:t,entry_def_id:"snacking_log"}),arguments:[{name:"content",type:"String"}]}}}]},d=()=>e(r||(r=m`
    <holochain-playground-container
      .numberOfSimulatedConductors=${0}
      .simulatedDnaTemplate=${0}
      @ready=${0}
    >
      <div
        style="display: flex; flex-direction: row; align-items: start; margin-bottom: 20px;"
      >
        <source-chain style="flex: 1; height: 720px; margin-right: 20px;"> </source-chain>
        <entry-contents style="flex-basis: 550px; height: 720px;">
        </entry-contents>
      </div>
    </holochain-playground-container>
  `),1,g,(e=>{const t=e.detail.conductors[0],n=t.getAllCells()[0];e.target.activeAgentPubKey=n.cellId[1],t.callZomeFn({cellId:n.cellId,zome:"snacking_journal",fnName:"register_snacking",payload:{content:"april 1: gummi bears"},cap:null})})),y={zomes:[{name:"snacking_journal",entry_defs:[{id:"snacking_log",visibility:"Public"}],zome_functions:{register_snacking:{call:({create_entry:e,hash_entry:t})=>async({content:t})=>e({content:t,entry_def_id:"snacking_log"}),arguments:[{name:"content",type:"String"}]},get_by_entry_hash:{call:({get:e})=>({hash:t})=>e(t),arguments:[{name:"hash",type:"EntryHash"}]},get_by_header_hash:{call:({get:e})=>({hash:t})=>e(t),arguments:[{name:"hash",type:"HeaderHash"}]}}}]},h=()=>e(c||(c=m`
    <holochain-playground-container
      .numberOfSimulatedConductors=${0}
      .simulatedDnaTemplate=${0}
      @ready=${0}
    >
      <div
        style="display: flex; height: 400px; flex-direction: row; align-items: start; margin-bottom: 20px;"
      >
        <call-zome-fns
          id="call-zome"
          style="flex: 1; margin-right: 20px; height: 100%;"
          hide-agent-pub-key
        >
        </call-zome-fns>

        <zome-fns-results style="flex: 1; height: 100%;"></zome-fns-results>
      </div>
      <div
        style="display: flex; flex-direction: row; align-items: start; margin-bottom: 20px;"
      >
        <source-chain style="flex: 1; height: 600px; margin-right: 20px;"> </source-chain>
        <entry-contents style="flex-basis: 500px; height: 600px;">
        </entry-contents>
      </div>
    </holochain-playground-container>
  `),1,y,(e=>{const t=e.detail.conductors[0].getAllCells()[0];e.target.activeAgentPubKey=t.cellId[1]})),u=document,p=[{key:"Sim0",story:d},{key:"Sim1",story:h}];let f=!1;for(const e of p){const t=u.querySelector(`[mdjs-story-name="${e.key}"]`);t&&(t.story=e.story,t.key=e.key,f=!0,Object.assign(t,{}))}f&&(customElements.get("mdjs-preview")||import("./9c634124.js"),customElements.get("mdjs-story")||import("./de8039dc.js"));export{d as Sim0,h as Sim1};
