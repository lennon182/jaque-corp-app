(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{zrcO:function(t,e,a){"use strict";a.r(e),a.d(e,"UsersModule",function(){return M});var n=a("ofXK"),r=a("tyNb"),i=a("quSY"),s=a("fXoL"),c=a("AytR"),o=a("lJxs"),p=a("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.usersURL=c.a.usersAPI}getUsers(){return this.http.get(this.usersURL).pipe(Object(o.a)(t=>t.users))}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(p.a))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=a("M9IT"),b=a("Wp6s"),l=a("TU8p"),u=a("14Lx"),m=a("jhN1");let h=(()=>{class t{constructor(t){this.DSinitizer=t}transform(t){const e=this.DSinitizer.bypassSecurityTrustUrl(`background-image: url(${t});`);return""===t?"https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500":e}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(m.b))},t.\u0275pipe=s.Mb({name:"tob64",type:t,pure:!0}),t})();function f(t,e){if(1&t&&(s.Sb(0,"div",5),s.Sb(1,"mat-card",6),s.Sb(2,"mat-card-header",7),s.Sb(3,"div",8),s.ec(4,"tob64"),s.Rb(),s.Sb(5,"mat-card-title",9),s.Sb(6,"span",9),s.Ac(7),s.Rb(),s.Rb(),s.Rb(),s.Sb(8,"mat-card-content",10),s.Sb(9,"div",3),s.Sb(10,"div",11),s.Sb(11,"p"),s.Ac(12),s.Rb(),s.Rb(),s.Sb(13,"div",12),s.Sb(14,"p"),s.Ac(15),s.Rb(),s.Rb(),s.Rb(),s.Sb(16,"div",3),s.Sb(17,"div",13),s.Sb(18,"p"),s.Ob(19,"span",14),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t){const t=e.$implicit;s.Bb(3),s.wc(s.fc(4,7,t.image)),s.Bb(4),s.Dc(" ",t.first_name," ",t.last_name," "),s.Bb(5),s.Cc("Email: ",t.email,""),s.Bb(3),s.Cc("Gender: ",t.gender,""),s.Bb(4),s.jc("matBadge",t.id)}}let v=(()=>{class t{constructor(){this.dataCard=[],this.size_per_page=5,this.pag_number=0,this.pageSizeOptions=[5,10]}ngOnInit(){}paginator(t){this.size_per_page=t.pageSize,this.pag_number=t.pageIndex}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["app-paginator-cards"]],inputs:{dataCard:"dataCard"},decls:6,vars:8,consts:[[1,"row","m-top"],[1,"col","s12"],["showFirstLastButtons","",1,"custom-paginator",3,"length","pageSize","pageSizeOptions","page"],[1,"row"],["class","col s12 center",4,"ngFor","ngForOf"],[1,"col","s12","center"],[1,"example-card","m-vertical","z-depth-5"],[1,"card-header","v-align"],["mat-card-avatar","",1,"v-align"],[1,"v-align"],[1,"left-align","m-vertical","p-horizontal"],[1,"col","s6","left-align"],[1,"col","s6","right-align"],[1,"col","s12","right-align"],["matBadgeSize","medium",1,"m-right",3,"matBadge"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"mat-paginator",2),s.Zb("page",function(t){return e.paginator(t)}),s.Rb(),s.Rb(),s.Rb(),s.Sb(3,"div",3),s.yc(4,f,20,9,"div",4),s.ec(5,"pagination"),s.Rb()),2&t&&(s.Bb(2),s.jc("length",e.dataCard.length)("pageSize",e.size_per_page)("pageSizeOptions",e.pageSizeOptions),s.Bb(2),s.jc("ngForOf",s.gc(5,4,e.dataCard,e.size_per_page,e.pag_number)))},directives:[g.a,n.k,b.a,b.e,b.c,b.i,b.d,l.a],pipes:[u.a,h],styles:[".mat-card-header-text[_ngcontent-%COMP%]{margin-top:1rem!important}.example-card[_ngcontent-%COMP%]{padding:0;margin:0}.card-header[_ngcontent-%COMP%]{justify-content:space-between;background-color:var(--jaque-primary);padding:1rem;margin:0;color:var(--jaque-light)}.card-header[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]{display:flex;align-items:center}.example-card[_ngcontent-%COMP%]{width:80%}.user-image[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:320px}"]}),t})();function S(t,e){1&t&&(s.Sb(0,"div",2),s.Sb(1,"h1"),s.Ac(2,"Loading..."),s.Rb(),s.Rb())}function O(t,e){if(1&t&&s.Ob(0,"app-paginator-cards",3),2&t){const t=s.dc();s.jc("dataCard",t.users)}}let C=(()=>{class t{constructor(t){this.usersSVC=t,this.subscriptors=new i.a,this.users=[],this.isLoad=!0}ngOnInit(){this.getUsers()}getUsers(){this.usersSVC.getUsers().subscribe(t=>{this.users=t,this.isLoad=!1})}ngOnDestroy(){this.subscriptors.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(d))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-list"]],decls:2,vars:2,consts:[["class","loader",4,"ngIf"],[3,"dataCard",4,"ngIf"],[1,"loader"],[3,"dataCard"]],template:function(t,e){1&t&&(s.yc(0,S,3,0,"div",0),s.yc(1,O,1,1,"app-paginator-cards",1)),2&t&&(s.jc("ngIf",e.isLoad),s.Bb(1),s.jc("ngIf",!e.isLoad))},directives:[n.l,v],styles:[".mat-card-header-text[_ngcontent-%COMP%]{margin-top:1rem!important}.example-card[_ngcontent-%COMP%]{padding:0;margin:0}.card-header[_ngcontent-%COMP%]{justify-content:space-between;background-color:var(--jaque-primary);padding:1rem;margin:0;color:var(--jaque-light)}.card-header[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%]{display:flex;align-items:center}.example-card[_ngcontent-%COMP%]{width:80%}.user-image[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:320px}"]}),t})();var y=a("dt8f");const _=[{path:"",component:(()=>{class t{constructor(t){this.router=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(r.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-home"]],decls:3,vars:0,consts:[[1,"container","top"]],template:function(t,e){1&t&&(s.Ob(0,"app-toolbar-nav"),s.Sb(1,"div",0),s.Ob(2,"router-outlet"),s.Rb())},directives:[y.a,r.c],styles:[""]}),t})(),children:[{path:"",component:C},{path:"**",redirectTo:""}]}];let w=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[n.c,r.b.forChild(_)],r.b]}),t})();var R=a("otUU"),j=a("iTUp"),z=a("PCNd");let M=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[n.c,w,R.a,j.a,z.a]]}),t})()}}]);