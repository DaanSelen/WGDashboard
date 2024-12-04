import{_ as R,E as $,W as V,o as W,H as J,D as L,r as b,I as A,a as m,c as g,b as e,d as a,m as f,z as p,n as K,y as M,V as B,t as U,e as D,i as F,F as S,v as H,h as I}from"./index-CRrH8rsP.js";import{L as n}from"./localeText-BwuzYH16.js";const T={class:"card rounded-3 flex-grow-1 bg-danger-subtle border-danger-subtle border shadow"},z={class:"card-body"},E={class:"d-flex align-items-center gap-3 inputGroup"},G=["value"],j={class:"mb-0"},q={class:"d-flex mt-3"},Z=["disabled"],Q={__name:"updateConfigurationName",props:{configurationName:String},emits:["close"],setup(v,{emit:x}){const _=v,P=x,l=$({data:"",valid:!1}),i=V();W(()=>{J(()=>l.data,d=>{l.valid=/^[a-zA-Z0-9_=+.-]{1,15}$/.test(d)&&d.length>0&&!i.Configurations.find(r=>r.Name===d)})});const o=L(),u=b(!1),c=A(),y=async()=>{l.data&&(u.value=!0,clearInterval(o.Peers.RefreshInterval),await M("/api/renameWireguardConfiguration",{Name:_.configurationName,NewConfigurationName:l.data},async d=>{d.status?(await i.getConfigurations(),o.newMessage("Server","Configuration renamed","success"),c.push(`/configuration/${l.data}/peers`)):(o.newMessage("Server",d.message,"danger"),u.value=!1)}))};return(d,r)=>(m(),g("div",T,[e("div",z,[e("p",null,[a(n,{t:"To update this configuration's name, WGDashboard will execute the following operations:"})]),e("ol",null,[e("li",null,[a(n,{t:"Duplicate current configuration's database table and .conf file with the new name"})]),e("li",null,[a(n,{t:"Delete current configuration's database table and .conf file"})])]),e("div",E,[e("input",{class:"form-control form-control-sm rounded-3",value:v.configurationName,disabled:""},null,8,G),r[3]||(r[3]=e("h3",{class:"mb-0"},[e("i",{class:"bi bi-arrow-right"})],-1)),f(e("input",{class:K(["form-control form-control-sm rounded-3",[l.data?l.valid?"is-valid":"is-invalid":""]]),id:"newConfigurationName","onUpdate:modelValue":r[0]||(r[0]=h=>l.data=h)},null,2),[[p,l.data]])]),e("div",{class:K(["invalid-feedback",{"d-block":!l.valid&&l.data}])},[a(n,{t:"Configuration name is invalid. Possible reasons:"}),e("ul",j,[e("li",null,[a(n,{t:"Configuration name already exist."})]),e("li",null,[a(n,{t:"Configuration name can only contain 15 lower/uppercase alphabet, numbers, underscore, equal sign, plus sign, period and hyphen."})])])],2),e("div",q,[e("button",{onClick:r[1]||(r[1]=h=>P("close")),class:"btn btn-sm bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3"},[a(n,{t:"Cancel"})]),e("button",{onClick:r[2]||(r[2]=h=>y()),disabled:!l.data||u.value,class:"btn btn-sm btn-danger rounded-3 ms-auto"},[a(n,{t:"Save"})],8,Z)])])]))}},X=R(Q,[["__scopeId","data-v-4be4f48a"]]),Y={class:"container d-flex h-100 w-100"},ee={class:"m-auto modal-dialog-centered dashboardModal",style:{width:"700px"}},te={class:"card rounded-3 shadow flex-grow-1"},se={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4"},oe={class:"mb-0"},ae={class:"card-body px-4 pb-4"},ne={class:"d-flex gap-2 flex-column"},le={key:0,class:"d-flex align-items-center gap-3"},ie={class:"text-muted"},re={class:"d-flex align-items-center gap-3"},de={class:"text-muted",style:{"word-break":"keep-all"}},ue={class:"ms-auto",style:{"word-break":"break-all"}},ce={class:"d-flex"},me={for:"configuration_private_key",class:"form-label"},fe={class:"text-muted d-block"},be={class:"form-check form-switch ms-auto"},ge=["disabled"],pe={for:"configuration_ipaddress_cidr",class:"form-label"},ve={class:"text-muted"},_e=["disabled"],ye={for:"configuration_listen_port",class:"form-label"},he={class:"text-muted"},Ce=["disabled"],we=["for"],xe={class:"text-muted"},Pe=["disabled","onUpdate:modelValue","id"],ke=["for"],Ne={class:"text-muted"},Se=["disabled","onUpdate:modelValue","id"],$e={class:"d-flex align-items-center gap-2 mt-4"},Ke=["disabled"],Ue=["disabled"],De={class:"d-flex gap-2"},Je={__name:"editConfiguration",props:{configurationInfo:Object},emits:["changed","close","backupRestore","deleteConfiguration"],setup(v,{emit:x}){const _=v,P=V(),l=L(),i=b(!1),o=$(JSON.parse(JSON.stringify(_.configurationInfo))),u=b(!1),c=b(!1);b(!1);const y=$({PrivateKey:!0,IPAddress:!0,ListenPort:!0}),d=B("editConfigurationContainer"),r=()=>{P.checkWGKeyLength(o.PrivateKey)?(y.PrivateKey=!0,o.PublicKey=window.wireguard.generatePublicKey(o.PrivateKey)):y.PrivateKey=!1},h=()=>{c.value=!1,Object.assign(o,JSON.parse(JSON.stringify(_.configurationInfo)))},k=x,O=()=>{i.value=!0,M("/api/updateWireguardConfiguration",o,C=>{i.value=!1,C.status?(l.newMessage("Server","Configuration saved","success"),c.value=!1,k("dataChanged",C.data)):l.newMessage("Server",C.message,"danger")})},w=b(!1);return J(o,()=>{c.value=JSON.stringify(o)!==JSON.stringify(_.configurationInfo)},{deep:!0}),(C,t)=>(m(),g("div",{class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll",ref_key:"editConfigurationContainer",ref:d},[e("div",Y,[e("div",ee,[e("div",te,[e("div",se,[e("h4",oe,[a(n,{t:"Configuration Settings"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:t[0]||(t[0]=s=>C.$emit("close"))})]),e("div",ae,[e("div",ne,[w.value?D("",!0):(m(),g("div",le,[e("small",ie,[a(n,{t:"Name"})]),e("small",null,U(o.Name),1),e("button",{onClick:t[1]||(t[1]=s=>w.value=!0),class:"btn btn-sm bg-danger-subtle border-danger-subtle text-danger-emphasis rounded-3 ms-auto"}," Update Name ")])),w.value?(m(),F(X,{key:1,onClose:t[2]||(t[2]=s=>w.value=!1),"configuration-name":o.Name},null,8,["configuration-name"])):(m(),g(S,{key:2},[t[17]||(t[17]=e("hr",null,null,-1)),e("div",re,[e("small",de,[a(n,{t:"Public Key"})]),e("small",ue,U(o.PublicKey),1)]),t[18]||(t[18]=e("hr",null,null,-1)),e("div",null,[e("div",ce,[e("label",me,[e("small",fe,[a(n,{t:"Private Key"})])]),e("div",be,[f(e("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"editPrivateKeySwitch","onUpdate:modelValue":t[3]||(t[3]=s=>u.value=s)},null,512),[[H,u.value]]),t[12]||(t[12]=e("label",{class:"form-check-label",for:"editPrivateKeySwitch"},[e("small",null,"Edit")],-1))])]),f(e("input",{type:"text",class:K(["form-control form-control-sm rounded-3",{"is-invalid":!y.PrivateKey}]),disabled:i.value||!u.value,onKeyup:t[4]||(t[4]=s=>r()),"onUpdate:modelValue":t[5]||(t[5]=s=>o.PrivateKey=s),id:"configuration_private_key"},null,42,ge),[[p,o.PrivateKey]])]),e("div",null,[e("label",pe,[e("small",ve,[a(n,{t:"IP Address/CIDR"})])]),f(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":t[6]||(t[6]=s=>o.Address=s),id:"configuration_ipaddress_cidr"},null,8,_e),[[p,o.Address]])]),e("div",null,[e("label",ye,[e("small",he,[a(n,{t:"Listen Port"})])]),f(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":t[7]||(t[7]=s=>o.ListenPort=s),id:"configuration_listen_port"},null,8,Ce),[[p,o.ListenPort]])]),(m(),g(S,null,I(["PreUp","PreDown","PostUp","PostDown"],s=>e("div",null,[e("label",{for:"configuration_"+s,class:"form-label"},[e("small",xe,[a(n,{t:s},null,8,["t"])])],8,we),f(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":N=>o[s]=N,id:"configuration_"+s},null,8,Pe),[[p,o[s]]])])),64)),v.configurationInfo.Protocol==="awg"?(m(),g(S,{key:0},I(["Jc","Jmin","Jmax","S1","S2","H1","H2","H3","H4"],s=>e("div",null,[e("label",{for:"configuration_"+s,class:"form-label"},[e("small",Ne,[a(n,{t:s},null,8,["t"])])],8,ke),f(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:i.value,"onUpdate:modelValue":N=>o[s]=N,id:"configuration_"+s},null,8,Se),[[p,o[s]]])])),64)):D("",!0),e("div",$e,[e("button",{class:"btn bg-secondary-subtle border-secondary-subtle text-secondary-emphasis rounded-3 shadow ms-auto",onClick:t[8]||(t[8]=s=>h()),disabled:!c.value||i.value},[t[13]||(t[13]=e("i",{class:"bi bi-arrow-clockwise me-2"},null,-1)),a(n,{t:"Reset"})],8,Ke),e("button",{class:"btn bg-primary-subtle border-primary-subtle text-primary-emphasis rounded-3 shadow",disabled:!c.value||i.value,onClick:t[9]||(t[9]=s=>O())},[t[14]||(t[14]=e("i",{class:"bi bi-save-fill me-2"},null,-1)),a(n,{t:"Save"})],8,Ue)]),t[19]||(t[19]=e("hr",null,null,-1)),t[20]||(t[20]=e("h5",{class:"mb-3"},"Danger Zone",-1)),e("div",De,[e("button",{onClick:t[10]||(t[10]=s=>k("backupRestore")),style:{"flex-basis":"100%"},class:"btn bg-warning-subtle border-warning-subtle text-warning-emphasis rounded-3 ms-auto"},[t[15]||(t[15]=e("i",{class:"bi bi-copy me-2"},null,-1)),a(n,{t:"Backup & Restore"})]),e("button",{onClick:t[11]||(t[11]=s=>k("deleteConfiguration")),style:{"flex-basis":"100%"},class:"btn bg-danger-subtle border-danger-subtle text-danger-emphasis rounded-3 ms-auto"},[t[16]||(t[16]=e("i",{class:"bi bi-trash-fill me-2"},null,-1)),a(n,{t:"Delete Configuration"})])])],64))])])])])])],512))}};export{Je as default};
