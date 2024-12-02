import{a1 as w,r as c,I as x,D as _,o as B,a as l,c as b,b as t,d as o,n as D,m as N,z as I,C as v,i as k,y as M,g as T}from"./index-giM6Gyhs.js";import{L as s}from"./localeText-DcZBPGqi.js";const $={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll"},R={class:"container d-flex h-100 w-100"},S={class:"m-auto modal-dialog-centered dashboardModal",style:{width:"700px"}},V={class:"card rounded-3 shadow flex-grow-1 bg-danger-subtle border-danger-subtle",id:"deleteConfigurationContainer"},z={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-0"},A={class:"mb-0"},L={class:"card-body px-4 text-muted"},P={class:"mb-0"},W={key:0},E={key:1},G={key:2,class:"d-flex align-items-center gap-2"},O=["placeholder"],U=["disabled"],J={__name:"deleteConfiguration",emits:["backup","close"],setup(j,{emit:h}){const a=w().params.id,g=c(""),y=x(),p=_(),i=c(!1),C=()=>{clearInterval(p.Peers.RefreshInterval),i.value=!0,M("/api/deleteWireguardConfiguration",{Name:a},d=>{d.status?(y.push("/"),p.newMessage("Server","Configuration deleted","success")):i.value=!1})},r=c(!0),u=c([]),f=()=>{r.value=!0,T("/api/getWireguardConfigurationBackup",{configurationName:a},d=>{u.value=d.data,r.value=!1})};B(()=>{f()});const m=h;return(d,e)=>(l(),b("div",$,[t("div",R,[t("div",S,[t("div",V,[t("div",z,[t("h5",A,[o(s,{t:"Are you sure to delete this configuration?"})]),t("button",{type:"button",class:"btn-close ms-auto",onClick:e[0]||(e[0]=n=>m("close"))})]),t("div",L,[t("p",P,[o(s,{t:"Once you deleted this configuration:"})]),t("ul",null,[t("li",null,[o(s,{t:"All connected peers will get disconnected"})]),t("li",null,[o(s,{t:"Both configuration file (.conf) and database table related to this configuration will get deleted"})])]),t("div",{class:D(["alert",[r.value?"alert-secondary":u.value.length>0?"alert-success":"alert-danger"]])},[r.value?(l(),b("div",W,[e[5]||(e[5]=t("i",{class:"bi bi-search me-2"},null,-1)),o(s,{t:"Checking backups..."})])):u.value.length>0?(l(),b("div",E,[e[6]||(e[6]=t("i",{class:"bi bi-check-circle-fill me-2"},null,-1)),o(s,{t:"This configuration have "+u.value.length+" backups"},null,8,["t"])])):(l(),b("div",G,[e[9]||(e[9]=t("i",{class:"bi bi-x-circle-fill me-2"},null,-1)),o(s,{t:"This configuration have no backup"}),t("a",{role:"button",onClick:e[1]||(e[1]=n=>m("backup")),class:"ms-auto btn btn-sm btn-primary rounded-3"},[e[7]||(e[7]=t("i",{class:"bi bi-clock-history me-2"},null,-1)),o(s,{t:"Backup"})]),t("a",{role:"button",onClick:e[2]||(e[2]=n=>f()),class:"btn btn-sm btn-primary rounded-3"},e[8]||(e[8]=[t("i",{class:"bi bi-arrow-clockwise"},null,-1)]))]))],2),e[11]||(e[11]=t("hr",null,null,-1)),t("p",null,[o(s,{t:"If you're sure, please type in the configuration name below and click Delete"})]),N(t("input",{class:"form-control rounded-3 mb-3",placeholder:v(a),"onUpdate:modelValue":e[3]||(e[3]=n=>g.value=n),type:"text"},null,8,O),[[I,g.value]]),t("button",{class:"btn btn-danger w-100",onClick:e[4]||(e[4]=n=>C()),disabled:g.value!==v(a)||i.value},[e[10]||(e[10]=t("i",{class:"bi bi-trash-fill me-2 rounded-3"},null,-1)),i.value?(l(),k(s,{key:1,t:"Deleting..."})):(l(),k(s,{key:0,t:"Delete"}))],8,U)])])])])]))}};export{J as default};