import{e}from"./index.51bc881b.js";import{u as o}from"./useBasicTable.b982b51b.js";import{d as a,i as l,c as r,f as p,u as n}from"./vendor.b96c6562.js";import"./index.98ee80ec.js";const t=[{label:"批次编号",prop:"id"},{label:"分组名称",prop:"groupName",customRender:e=>{var o;return(null==(o=e.group)?void 0:o.name)||""}},{label:"套餐名称",prop:"packageName",customRender:e=>{var o;return(null==(o=e.package)?void 0:o.name)||""}},{label:"问答机会",prop:"packageNum",customRender:e=>"-1"==e.package.num?"不限次数":e.package.num},{label:"兑换码",prop:"code"},{label:"用户昵称",prop:"memberNickname",customRender:e=>{var o;return(null==(o=e.member)?void 0:o.nickname)||""}},{label:"用户手机号",prop:"memberMobile",customRender:e=>{var o;return(null==(o=e.member)?void 0:o.mobile)||""}},{label:"兑换时间",prop:"updated_at"},{label:"使用状态",prop:"status",customRender:({status:e})=>({1:"未兑换",2:"已兑换",3:"已过期"}[e])}],m=[{field:"name",component:"Input",label:"分组名称：",componentProps:{placeholder:"请输入分组名称"}},{field:"code",component:"Input",label:"兑换码：",componentProps:{placeholder:"请输入兑换码"}},{field:"nickname",component:"Input",label:"昵称：",componentProps:{placeholder:"请输入昵称"}},{field:"mobile",component:"Input",label:"手机号：",componentProps:{placeholder:"请输入手机号"}},{field:"status",component:"Select",label:"状态：",componentProps:{style:{width:"100%"},options:[{label:"未兑换",value:"1"},{label:"已兑换",value:"2"}]}}],s={class:"cb-page"},c=a({__name:"index",setup(a){const{registerTable:c,setProps:u,reload:i}=o({columns:t,formSchemas:m});return(o,a)=>(l(),r("div",s,[p(n(e),{onRegister:n(c),api:o.$api.code.getCdkList,extraParams:{with_query:["package","member","group"]}},null,8,["onRegister","api"])]))}});export{c as default};
