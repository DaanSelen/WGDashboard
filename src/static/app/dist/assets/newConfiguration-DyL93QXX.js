import{p as P}from"./index-L60y6kc9.js";import{_ as x,W as L,r as S,g as k,D as K,y as A,c as l,b as t,d as a,w as U,n as v,e as b,m as p,z as h,t as g,f as w,F as y,h as _,j as C,a as d}from"./index-Ba3zFuui.js";import{L as I}from"./localeText-BdsQ3m5j.js";const N=s=>{const e=s.split(`
`),i={};for(let c of e){if(c==="[Peer]")break;if(c.length>0){let n=c.replace(" = ","=");n.indexOf("=")>-1&&(n=[n.slice(0,n.indexOf("=")),n.slice(n.indexOf("=")+1)],n[0]==="ListenPort"?i[n[0]]=parseInt(n[1]):i[n[0]]=n[1])}}return i},O=s=>{const e=s.split(`
`),i=[];let c=-1;const n=e.indexOf("[Peer]");if(n===-1)return!1;for(let u=n;u<e.length;u++)if(e[u]==="[Peer]")c+=1,i.push({}),i[c].name="";else{let f=e[u].replace(" = ","=");f.indexOf("=")>-1&&(f=[f.slice(0,f.indexOf("=")),f.slice(f.indexOf("=")+1)],i[c][f[0]]=f[1])}return i},q={name:"newConfiguration",components:{LocaleText:I},async setup(){const s=L(),e=S([]);await k("/api/protocolsEnabled",{},c=>{e.value=c.data});const i=K();return{store:s,protocols:e,dashboardStore:i}},data(){return{newConfiguration:{ConfigurationName:"",Address:"",ListenPort:"",PrivateKey:"",PublicKey:"",PresharedKey:"",PreUp:"",PreDown:"",PostUp:"",PostDown:"",Protocol:"wg",Jc:5,Jmin:49,Jmax:998,S1:17,S2:110,H1:0,H2:0,H3:0,H4:0},numberOfAvailableIPs:"0",error:!1,errorMessage:"",success:!1,loading:!1,parseInterfaceResult:void 0,parsePeersResult:void 0}},created(){this.wireguardGenerateKeypair();let s=[];for(;[...new Set(s)].length!==4;)s=[this.rand(1,2**31-1),this.rand(1,2**31-1),this.rand(1,2**31-1),this.rand(1,2**31-1)];this.newConfiguration.H1=s[0],this.newConfiguration.H2=s[1],this.newConfiguration.H3=s[2],this.newConfiguration.H4=s[3]},methods:{rand(s,e){return Math.floor(Math.random()*(e-s)+s)},wireguardGenerateKeypair(){const s=window.wireguard.generateKeypair();this.newConfiguration.PrivateKey=s.privateKey,this.newConfiguration.PublicKey=s.publicKey,this.newConfiguration.PresharedKey=s.presharedKey},async saveNewConfiguration(){this.goodToSubmit&&(this.loading=!0,await A("/api/addWireguardConfiguration",this.newConfiguration,async s=>{s.status?(this.success=!0,await this.store.getConfigurations(),this.$router.push(`/configuration/${this.newConfiguration.ConfigurationName}/peers`)):(this.error=!0,this.errorMessage=s.message,document.querySelector(`#${s.data}`).classList.remove("is-valid"),document.querySelector(`#${s.data}`).classList.add("is-invalid"),this.loading=!1)}))},openFileUpload(){document.querySelector("#fileUpload").click()},readFile(s){const e=s.target.files[0];if(!e)return!1;const i=new FileReader;i.onload=c=>{this.parseInterfaceResult=N(c.target.result),this.parsePeersResult=O(c.target.result);let n=0;if(this.parseInterfaceResult){this.newConfiguration.ConfigurationName=e.name.replace(".conf","");for(let u of Object.keys(this.parseInterfaceResult))Object.keys(this.newConfiguration).includes(u)&&(this.newConfiguration[u]=this.parseInterfaceResult[u],n+=1)}n>0?this.dashboardStore.newMessage("WGDashboard",`Parse successful! Updated ${n} field(s)`,"success"):this.dashboardStore.newMessage("WGDashboard","Parse failed","danger")},i.readAsText(e)}},computed:{goodToSubmit(){let s=["ConfigurationName","Address","ListenPort","PrivateKey"],e=[...document.querySelectorAll("input[required]")];return s.find(i=>this.newConfiguration[i].length===0)===void 0&&e.find(i=>i.classList.contains("is-invalid"))===void 0}},watch:{"newConfiguration.Address"(s){let e=document.querySelector("#Address");e.classList.remove("is-invalid","is-valid");try{if(s.trim().split("/").filter(n=>n.length>0).length!==2)throw Error();let i=P(s),c=i.end-i.start;this.numberOfAvailableIPs=c.toLocaleString(),e.classList.add("is-valid")}catch{this.numberOfAvailableIPs="0",e.classList.add("is-invalid")}},"newConfiguration.ListenPort"(s){let e=document.querySelector("#ListenPort");e.classList.remove("is-invalid","is-valid"),s<0||s>65353||!Number.isInteger(s)?e.classList.add("is-invalid"):e.classList.add("is-valid")},"newConfiguration.ConfigurationName"(s){let e=document.querySelector("#ConfigurationName");e.classList.remove("is-invalid","is-valid"),!/^[a-zA-Z0-9_=+.-]{1,15}$/.test(s)||s.length===0||this.store.Configurations.find(i=>i.Name===s)?e.classList.add("is-invalid"):e.classList.add("is-valid")},"newConfiguration.PrivateKey"(s){let e=document.querySelector("#PrivateKey");e.classList.remove("is-invalid","is-valid");try{wireguard.generatePublicKey(s),e.classList.add("is-valid")}catch{e.classList.add("is-invalid")}}},mounted(){document.querySelector("#fileUpload").addEventListener("change",this.readFile,!1)}},D={class:"mt-md-5 mt-3 text-body"},R={class:"container mb-4"},H={class:"mb-4 d-flex align-items-center gap-4 align-items-center"},$={class:"mb-0"},M={class:"d-flex gap-2 ms-auto"},F={class:"card rounded-3 shadow"},G={class:"card-header"},T={class:"card-body d-flex gap-2 protocolBtnGroup"},V={key:0,class:"bi bi-check-circle-fill me-2"},B={key:1,class:"bi bi-circle me-2"},W={key:0,class:"bi bi-check-circle-fill me-2"},J={key:1,class:"bi bi-circle me-2"},z={class:"card rounded-3 shadow"},E={class:"card-header"},j={class:"card-body"},Z=["disabled"],Q={class:"invalid-feedback"},X={key:0},Y={key:1},ee={class:"mb-0"},te={class:"card rounded-3 shadow"},se={class:"card-header"},ie={class:"card-body",style:{"font-family":"var(--bs-font-monospace)"}},oe={class:"mb-2"},ne={class:"text-muted fw-bold mb-1"},ae={class:"input-group"},re=["disabled"],le={class:"text-muted fw-bold mb-1"},de={class:"card rounded-3 shadow"},ce={class:"card-header"},ue={class:"card-body"},fe=["disabled"],pe={class:"invalid-feedback"},he={key:0},ge={key:1},me={class:"card rounded-3 shadow"},be={class:"card-header d-flex align-items-center"},ve={class:"badge rounded-pill text-bg-success ms-auto"},we={class:"card-body"},ye=["disabled"],_e={class:"invalid-feedback"},Ce={key:0},Pe={key:1},xe={class:"accordion",id:"newConfigurationOptionalAccordion"},Le={class:"accordion-item"},Se={class:"accordion-header"},ke={class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#newConfigurationOptionalAccordionCollapse"},Ke={id:"newConfigurationOptionalAccordionCollapse",class:"accordion-collapse collapse","data-bs-parent":"#newConfigurationOptionalAccordion"},Ae={class:"accordion-body d-flex flex-column gap-3"},Ue={class:"card rounded-3"},Ie={class:"card-header"},Ne={class:"card-body"},Oe=["id","onUpdate:modelValue"],qe={class:"card rounded-3"},De={class:"card-header"},Re={class:"card-body"},He=["id","onUpdate:modelValue"],$e=["disabled"],Me={key:0,class:"d-flex w-100"},Fe={key:1,class:"d-flex w-100"},Ge={key:2,class:"d-flex w-100 align-items-center"};function Te(s,e,i,c,n,u){const f=C("RouterLink"),r=C("LocaleText");return d(),l("div",D,[t("div",R,[t("div",H,[a(f,{to:"/",class:"btn btn-dark btn-brand p-2 shadow",style:{"border-radius":"100%"}},{default:U(()=>e[10]||(e[10]=[t("h2",{class:"mb-0",style:{"line-height":"0"}},[t("i",{class:"bi bi-arrow-left-circle"})],-1)])),_:1}),t("h2",$,[a(r,{t:"New Configuration"})]),t("div",M,[t("button",{class:"titleBtn py-2 text-decoration-none btn text-primary-emphasis bg-primary-subtle rounded-3 border-1 border-primary-subtle",onClick:e[0]||(e[0]=o=>u.openFileUpload()),type:"button","aria-expanded":"false"},[e[11]||(e[11]=t("i",{class:"bi bi-upload me-2"},null,-1)),a(r,{t:"Upload File"})]),e[12]||(e[12]=t("input",{type:"file",id:"fileUpload",multiple:"",class:"d-none",accept:"text/plain"},null,-1))])]),t("form",{class:"text-body d-flex flex-column gap-3",onSubmit:e[9]||(e[9]=o=>{o.preventDefault(),this.saveNewConfiguration()})},[t("div",F,[t("div",G,[a(r,{t:"Protocol"})]),t("div",T,[this.protocols.includes("wg")?(d(),l("a",{key:0,onClick:e[1]||(e[1]=o=>this.newConfiguration.Protocol="wg"),class:v([{"opacity-50":this.newConfiguration.Protocol!=="wg"},"btn btn-primary wireguardBg border-0"]),style:{"flex-basis":"100%"}},[this.newConfiguration.Protocol==="wg"?(d(),l("i",V)):(d(),l("i",B)),e[13]||(e[13]=t("strong",null," WireGuard ",-1))],2)):b("",!0),this.protocols.includes("awg")?(d(),l("a",{key:1,onClick:e[2]||(e[2]=o=>this.newConfiguration.Protocol="awg"),class:v([{"opacity-50":this.newConfiguration.Protocol!=="awg"},"btn btn-primary amneziawgBg border-0"]),style:{"flex-basis":"100%"}},[this.newConfiguration.Protocol==="awg"?(d(),l("i",W)):(d(),l("i",J)),e[14]||(e[14]=t("strong",null," AmneziaWG ",-1))],2)):b("",!0)])]),t("div",z,[t("div",E,[a(r,{t:"Configuration Name"})]),t("div",j,[p(t("input",{type:"text",class:"form-control",placeholder:"ex. wg1",id:"ConfigurationName","onUpdate:modelValue":e[3]||(e[3]=o=>this.newConfiguration.ConfigurationName=o),disabled:this.loading,required:""},null,8,Z),[[h,this.newConfiguration.ConfigurationName]]),t("div",Q,[this.error?(d(),l("div",X,g(this.errorMessage),1)):(d(),l("div",Y,[a(r,{t:"Configuration name is invalid. Possible reasons:"}),t("ul",ee,[t("li",null,[a(r,{t:"Configuration name already exist."})]),t("li",null,[a(r,{t:"Configuration name can only contain 15 lower/uppercase alphabet, numbers, underscore, equal sign, plus sign, period and hyphen."})])])]))])])]),t("div",te,[t("div",se,[a(r,{t:"Private Key"}),e[15]||(e[15]=w(" & ")),a(r,{t:"Public Key"})]),t("div",ie,[t("div",oe,[t("label",ne,[t("small",null,[a(r,{t:"Private Key"})])]),t("div",ae,[p(t("input",{type:"text",class:"form-control",id:"PrivateKey",required:"",disabled:this.loading,"onUpdate:modelValue":e[4]||(e[4]=o=>this.newConfiguration.PrivateKey=o)},null,8,re),[[h,this.newConfiguration.PrivateKey]]),t("button",{class:"btn btn-outline-primary",type:"button",title:"Regenerate Private Key",onClick:e[5]||(e[5]=o=>u.wireguardGenerateKeypair())},e[16]||(e[16]=[t("i",{class:"bi bi-arrow-repeat"},null,-1)]))])]),t("div",null,[t("label",le,[t("small",null,[a(r,{t:"Public Key"})])]),p(t("input",{type:"text",class:"form-control",id:"PublicKey","onUpdate:modelValue":e[6]||(e[6]=o=>this.newConfiguration.PublicKey=o),disabled:""},null,512),[[h,this.newConfiguration.PublicKey]])])])]),t("div",de,[t("div",ce,[a(r,{t:"Listen Port"})]),t("div",ue,[p(t("input",{type:"number",class:"form-control",placeholder:"0-65353",id:"ListenPort",min:"1",max:"65353","onUpdate:modelValue":e[7]||(e[7]=o=>this.newConfiguration.ListenPort=o),disabled:this.loading,required:""},null,8,fe),[[h,this.newConfiguration.ListenPort]]),t("div",pe,[this.error?(d(),l("div",he,g(this.errorMessage),1)):(d(),l("div",ge,[a(r,{t:"Invalid port"})]))])])]),t("div",me,[t("div",be,[a(r,{t:"IP Address/CIDR"}),t("span",ve,g(n.numberOfAvailableIPs)+" Available IPs",1)]),t("div",we,[p(t("input",{type:"text",class:"form-control",placeholder:"Ex: 10.0.0.1/24",id:"Address","onUpdate:modelValue":e[8]||(e[8]=o=>this.newConfiguration.Address=o),disabled:this.loading,required:""},null,8,ye),[[h,this.newConfiguration.Address]]),t("div",_e,[this.error?(d(),l("div",Ce,g(this.errorMessage),1)):(d(),l("div",Pe," IP Address/CIDR is invalid "))])])]),e[21]||(e[21]=t("hr",null,null,-1)),t("div",xe,[t("div",Le,[t("h2",Se,[t("button",ke,[a(r,{t:"Optional Settings"})])]),t("div",Ke,[t("div",Ae,[(d(),l(y,null,_(["PreUp","PreDown","PostUp","PostDown"],o=>t("div",Ue,[t("div",Ie,g(o),1),t("div",Ne,[p(t("input",{type:"text",class:"form-control font-monospace",id:o,"onUpdate:modelValue":m=>this.newConfiguration[o]=m},null,8,Oe),[[h,this.newConfiguration[o]]])])])),64)),this.newConfiguration.Protocol==="awg"?(d(),l(y,{key:0},_(["Jc","Jmin","Jmax","S1","S2","H1","H2","H3","H4"],o=>t("div",qe,[t("div",De,g(o),1),t("div",Re,[p(t("input",{type:"text",class:"form-control font-monospace",id:o,"onUpdate:modelValue":m=>this.newConfiguration[o]=m},null,8,He),[[h,this.newConfiguration[o]]])])])),64)):b("",!0)])])])]),t("button",{class:"btn btn-dark btn-brand rounded-3 px-3 py-2 shadow ms-auto",disabled:!this.goodToSubmit||this.loading||this.success},[this.success?(d(),l("span",Me,[a(r,{t:"Success"}),e[17]||(e[17]=w("! ")),e[18]||(e[18]=t("i",{class:"bi bi-check-circle-fill ms-2"},null,-1))])):this.loading?(d(),l("span",Ge,[a(r,{t:"Saving..."}),e[20]||(e[20]=t("span",{class:"ms-2 spinner-border spinner-border-sm",role:"status"},null,-1))])):(d(),l("span",Fe,[e[19]||(e[19]=t("i",{class:"bi bi-save-fill me-2"},null,-1)),a(r,{t:"Save"})]))],8,$e)],32)])])}const Je=x(q,[["render",Te],["__scopeId","data-v-16f85066"]]);export{Je as default};