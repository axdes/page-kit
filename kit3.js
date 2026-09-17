/* Page kit, second shape: the stylesheet, the page itself, its configuration and the editor.
 * The page the assistant returns carries only its data and one script tag; this file puts the rest
 * in, and bakes everything back into the file when the reader downloads it. */
(function(){
var __css=String.raw`:root{
--grid-unit: 4px; --font-xs: 0.75rem; --font-sm: 0.8125rem; --font-base: 0.9375rem; --font-md: 1.0625rem; --font-lg: 1.25rem; --font-2xl: 1.875rem; --font-family: 'museo-sans', 'Inter', ui-sans-serif, system-ui, sans-serif; --font-weight-regular: 400; --font-weight-semibold: 600; --leading-none: 1; --leading-tight: 1.15; --leading-snug: 1.3; --leading-normal: 1.5; --leading-relaxed: 1.65; --radius: 8px; --space-1: calc(var(--grid-unit) * 1); --space-2: calc(var(--grid-unit) * 2); --space-3: calc(var(--grid-unit) * 3); --space-4: calc(var(--grid-unit) * 4); --space-5: calc(var(--grid-unit) * 5); --space-6: calc(var(--grid-unit) * 6); --space-8: calc(var(--grid-unit) * 8); --space-12: calc(var(--grid-unit) * 12); --space-16: calc(var(--grid-unit) * 16); --qpanel-w: 24rem; --page-w: 68rem; --qshift: 0px; --qshift-bar: 0px; --brand-200: #ffb13b; --brand-400: #ff6b1a; --brand-700: #a94712; --neutral-0: #ffffff; --neutral-100: #f1f6fd; --neutral-200: #ebf0f7; --neutral-400: #bbbfc6; --neutral-700: #5f6369; --neutral-800: #3b3f45; --neutral-820: #2c3036; --neutral-900: #1f2328; --success-50: #e6f6eb; --success-200: #9ddbaf; --success-900: #006529; --warning-100: #fffac8; --warning-200: #fff6a3; --warning-930: #6b4915; --shadow-md: 0 4px 12px rgb(0 0 0 / 0.10); --radius-lg: calc(var(--radius) + var(--grid-unit)); --radius-full: 9999px; --foreground: var(--neutral-900); --card: var(--neutral-0); --muted: var(--neutral-100); --muted-foreground: var(--neutral-700); --primary: var(--brand-400); --primary-foreground: var(--neutral-0); --link: var(--primary-accent); --primary-accent: var(--brand-400); --primary-soft-foreground: var(--brand-700); --accent: var(--neutral-200); --success-soft: var(--success-50); --success-soft-foreground: var(--success-900); --warning-soft: var(--warning-100); --warning-soft-foreground: var(--neutral-900); --border: var(--neutral-200);
--brand-mark: var(--brand-400); --info-soft: rgb(255 107 26 / .12); --info-soft-foreground: var(--brand-700); --hero-bg: #0e1114; --hero-fg: #ffffff; --hero-muted: #9aa1ab; --hero-soft: #c9ced6; --hero-line: rgb(255 255 255 / .12); --edit-wash: rgb(255 107 26 / .07); --edit-wash-hover: rgb(255 107 26 / .15);
}
:root[data-theme="dark"]{
--shadow-md: 0 4px 12px rgb(0 0 0 / 0.40); --foreground: var(--neutral-100); --card: var(--neutral-900); --muted: var(--neutral-820); --muted-foreground: var(--neutral-400); --primary: var(--brand-400); --primary-foreground: var(--neutral-0); --primary-accent: var(--brand-400); --primary-soft-foreground: var(--brand-200); --accent: var(--neutral-800); --success-soft: var(--success-900); --success-soft-foreground: var(--success-200); --warning-soft: var(--warning-930); --warning-soft-foreground: var(--warning-200); --info-soft: rgb(255 107 26 / .18); --info-soft-foreground: var(--brand-200); --border: var(--neutral-800); --edit-wash: rgb(255 107 26 / .13); --edit-wash-hover: rgb(255 107 26 / .24);
}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){
--shadow-md: 0 4px 12px rgb(0 0 0 / 0.40);
--foreground: var(--neutral-100);
--card: var(--neutral-900);
--muted: var(--neutral-820);
--muted-foreground: var(--neutral-400);
--primary: var(--brand-400);
--primary-foreground: var(--neutral-0);
--primary-accent: var(--brand-400);
--primary-soft-foreground: var(--brand-200);
--accent: var(--neutral-800);
--success-soft: var(--success-900);
--success-soft-foreground: var(--success-200);
--warning-soft: var(--warning-930);
--warning-soft-foreground: var(--warning-200);
--info-soft: rgb(255 107 26 / .18);
--info-soft-foreground: var(--brand-200);
--border: var(--neutral-800);
}}
*,*::before,*::after{box-sizing:border-box} [hidden]{display:none!important}
html{color-scheme:light dark}
body{margin:0;background:var(--muted);color:var(--foreground);
font-family:var(--font-family);font-size:var(--font-base);line-height:var(--leading-normal);
-webkit-font-smoothing:antialiased}
h1,h2,h3,p,dl,dd,ul,ol,figure{margin:0} ul,ol{padding:0;list-style:none}
p{text-wrap:pretty}
.page{max-width:var(--page-w);margin:0 auto;padding:var(--space-12) var(--space-6) var(--space-16);
transform:translateX(calc(-1 * var(--qshift)));transition:transform .18s ease}
.icon{width:1em;height:1em;flex:none} .icon--xs{width:.85em;height:.85em}
.head{padding-bottom:var(--space-6)}
.head-top{display:flex;align-items:center;justify-content:space-between;gap:var(--space-4)}
.brand{display:flex;margin:0;color:var(--brand-mark)}
.brand-word{display:block;height:var(--space-12);width:auto;color:currentColor}
.theme{display:grid;place-items:center;width:var(--space-8);height:var(--space-8);
border:0;border-radius:var(--radius-full);background:var(--card);
color:var(--muted-foreground);
cursor:pointer;font-size:var(--font-base)}
.theme:hover{color:var(--foreground)} .theme-moon{display:none}
:root[data-theme="dark"] .theme-sun{display:none} :root[data-theme="dark"] .theme-moon{display:block}
@media (prefers-color-scheme:dark){
:root:not([data-theme="light"]) .theme-sun{display:none} :root:not([data-theme="light"]) .theme-moon{display:block}
}
.ident{margin-top:var(--space-4);font-size:var(--font-2xl);font-weight:700;
line-height:var(--leading-tight);letter-spacing:-.01em}
.ident-code{margin-top:var(--space-1);font-size:var(--font-xs);letter-spacing:.06em;
text-transform:uppercase;color:var(--muted-foreground)}
.tagline{margin-top:var(--space-3);font-size:var(--font-md);color:var(--muted-foreground)}
.identity{margin-top:var(--space-6);display:flex;flex-direction:column;gap:var(--space-5);
padding:var(--space-5) var(--space-6)}
.facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(9rem,1fr));gap:var(--space-5)}
.fact+.fact{padding-left:var(--space-5)}
.fact dt{font-size:var(--font-xs);text-transform:uppercase;letter-spacing:.06em;
color:var(--muted-foreground)}
.fact dd{margin:var(--space-2) 0 0;font-weight:var(--font-weight-semibold);
line-height:var(--leading-snug)}
.fact--wide{padding:0;max-width:52rem}
.people-strip{display:flex;flex-wrap:wrap;gap:var(--space-3);padding-top:var(--space-2)}
.person{display:flex;flex-direction:column;line-height:var(--leading-snug);background:var(--muted);
border-radius:var(--radius-lg);padding:var(--space-2) var(--space-4)}
.person-name{font-size:var(--font-sm);font-weight:var(--font-weight-semibold)}
.person-role{font-size:var(--font-xs);color:var(--muted-foreground)}
.progress{display:flex;flex-direction:column;gap:var(--space-3);padding-top:var(--space-2)}
.progress-bar{width:100%;height:6px;border-radius:var(--radius-full);
background:var(--muted);overflow:hidden}
.progress-bar span{display:block;height:100%;background:var(--primary);border-radius:inherit}
.progress-text{font-size:var(--font-sm);color:var(--muted-foreground)}
.progress-text strong{color:var(--foreground)} .section{margin-top:var(--space-8)}
.section-title{display:flex;align-items:center;gap:var(--space-3);font-size:var(--font-lg);
font-weight:var(--font-weight-semibold);letter-spacing:-.01em;color:var(--foreground);
margin-bottom:var(--space-4)}
.section-icon{flex:none;width:1.1em;height:1.1em;color:var(--primary-accent)}
.card{background:var(--card);border-radius:var(--radius-lg);padding:var(--space-5)}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-6);align-items:stretch}
.field-stack{display:flex;flex-direction:column;gap:var(--space-5)}
.field-label{font-size:var(--font-xs);text-transform:uppercase;letter-spacing:.06em;
color:var(--muted-foreground);margin-bottom:var(--space-2)}
.field-text{font-size:var(--font-base);line-height:var(--leading-relaxed)}
.field-text--empty{color:var(--muted-foreground)} .chip-row{display:flex;flex-wrap:wrap;gap:var(--space-2)}
.tag{font-size:var(--font-xs);color:var(--muted-foreground);background:var(--muted);
border-radius:var(--radius-full);padding:var(--space-1) var(--space-3)}
.tag--empty{background:transparent;padding-inline:0} .card--hero{padding:var(--space-6)}
.hero-text{font-size:var(--font-base);line-height:var(--leading-relaxed);max-width:60rem}
.scales{margin-top:var(--space-5)}
.scale-score{margin-top:var(--space-2);font-size:var(--font-2xl);font-weight:700;
line-height:var(--leading-none);letter-spacing:-.02em;color:var(--primary-accent)}
.scale-of{font-size:var(--font-lg);font-weight:var(--font-weight-semibold);color:var(--muted-foreground)}
.scale-legend{margin-top:var(--space-2);font-size:var(--font-sm);color:var(--muted-foreground)}
.meter{margin-top:var(--space-3)}
.meter-track{position:relative;height:6px;border-radius:var(--radius-full);background:var(--muted)}
.meter-fill{position:absolute;top:0;bottom:0;left:0;border-radius:var(--radius-full);background:var(--primary)}
.meter-target{position:absolute;top:-3px;bottom:-3px;width:2px;border-radius:var(--radius-full);
background:var(--foreground);box-shadow:0 0 0 2px var(--card)}
.meter-ticks{display:flex;justify-content:space-between;margin-top:var(--space-1);
font-size:var(--font-xs);color:var(--muted-foreground);font-variant-numeric:tabular-nums}
.shift{margin-top:var(--space-5);display:grid;grid-template-columns:1fr auto 1fr;
gap:var(--space-4);align-items:stretch}
.shift-side{background:var(--muted);border-radius:var(--radius);padding:var(--space-4);
font-size:var(--font-base);line-height:var(--leading-relaxed);color:var(--muted-foreground)}
.shift-side--to{background:var(--card);color:var(--primary-soft-foreground);
border:2px solid var(--primary-accent);padding:calc(var(--space-4) - 2px)}
.shift-arrow{display:flex;align-items:center;color:var(--primary-accent);font-size:var(--font-lg)}
.hero-foot{margin-top:var(--space-5);padding-top:var(--space-2);
display:grid;grid-template-columns:repeat(auto-fit,minmax(18rem,1fr));gap:var(--space-5)}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(24rem,1fr));gap:var(--space-4)}
.step{display:flex;flex-direction:column;gap:var(--space-3);break-inside:avoid} .step>.step-text{flex:1 0 auto}
.step-head{display:flex;align-items:center;gap:var(--space-3)}
.step-icon{flex:none;display:grid;place-items:center;width:var(--space-8);height:var(--space-8);
border-radius:var(--radius-full);background:var(--muted);color:var(--primary-accent);
font-size:var(--font-md)}
.step-name{font-size:var(--font-md);font-weight:var(--font-weight-semibold);
line-height:var(--leading-snug);margin-right:auto}
.step-level{flex:none;font-size:var(--font-xs);font-weight:var(--font-weight-semibold);
text-transform:uppercase;letter-spacing:.06em;color:var(--primary-accent);
background:var(--muted);border-radius:var(--radius-full);padding:var(--space-1) var(--space-3)}
.step-text{font-size:var(--font-base);color:var(--muted-foreground);line-height:var(--leading-relaxed)}
.metrics{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:var(--space-3)}
.metric{display:grid;grid-template-rows:auto minmax(1.6em,auto) auto 1fr;gap:var(--space-2);
background:var(--muted);border-radius:var(--radius);padding:var(--space-3)}
.metric-label{font-size:var(--font-xs);text-transform:uppercase;letter-spacing:.05em;
color:var(--muted-foreground);line-height:var(--leading-snug)}
.metric-value{font-size:var(--font-lg);line-height:var(--leading-none);display:flex;
align-items:center;gap:var(--space-2);flex-wrap:wrap;font-variant-numeric:tabular-nums}
.metric-value strong{font-weight:700}
.metric-value .was{color:var(--muted-foreground);text-decoration:line-through;
text-decoration-thickness:1px}
.metric-arrow{color:var(--muted-foreground)}
.metric-value--md{font-size:var(--font-md);line-height:var(--leading-snug)}
.metric-value--sm{font-size:var(--font-sm);line-height:var(--leading-snug)}
.metric-value--empty{font-size:var(--font-sm);font-weight:var(--font-weight-semibold);
color:var(--muted-foreground)}
.metric-foot{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2);min-height:1.2em}
.metric-note{display:flex;flex-direction:column;gap:var(--space-1);font-size:var(--font-xs);
color:var(--muted-foreground);line-height:var(--leading-snug)}
.chip{display:inline-flex;align-items:center;gap:var(--space-1);font-size:var(--font-xs);
font-weight:var(--font-weight-semibold);border-radius:var(--radius-full);padding:0 var(--space-3)}
.chip--success{background:var(--success-soft);color:var(--success-soft-foreground)}
.chip--warning{background:var(--warning-soft);color:var(--warning-soft-foreground)}
.chip--info{background:var(--info-soft);color:var(--info-soft-foreground)}
.chip--muted{background:var(--accent);color:var(--muted-foreground)}
.tiles{display:grid;grid-template-columns:repeat(5,1fr);gap:var(--space-3)}
.tile{display:grid;grid-template-rows:minmax(2.6em,auto) minmax(2em,auto) auto 1fr;gap:var(--space-2);
background:var(--card);border-radius:var(--radius-lg);
padding:var(--space-4);break-inside:avoid}
.tile-label{font-size:var(--font-xs);text-transform:uppercase;letter-spacing:.05em;
color:var(--muted-foreground);line-height:var(--leading-snug)}
.tile-value{font-size:var(--font-lg);font-weight:700;line-height:var(--leading-snug);
color:var(--primary-accent);font-variant-numeric:tabular-nums}
.tile-value--prose{font-size:var(--font-base);font-weight:var(--font-weight-semibold);
line-height:var(--leading-snug);color:var(--foreground)}
.tile-value--empty{font-size:var(--font-sm);font-weight:var(--font-weight-semibold);
color:var(--muted-foreground);line-height:var(--leading-snug)}
.tile-foot{font-size:var(--font-xs);color:var(--muted-foreground);line-height:var(--leading-snug)}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-6);align-items:stretch}
.two-col>div{min-width:0;display:flex;flex-direction:column} .two-col>div>.card{flex:1}
.ref li+li,.notes li+li{margin-top:var(--space-5)}
.ref-what{font-weight:var(--font-weight-semibold);font-size:var(--font-sm)}
.ref-where{margin-top:var(--space-1);font-size:var(--font-sm);color:var(--muted-foreground)}
.ref-caveat{margin-top:var(--space-2);display:flex;gap:var(--space-2);align-items:flex-start;
font-size:var(--font-xs);color:var(--muted-foreground)}
.ref-caveat .icon{margin-top:.2em;color:var(--warning-soft-foreground)}
.ref,.notes{display:flex;flex-direction:column} .notes{counter-reset:l}
.notes li{counter-increment:l}
.note-title{display:flex;gap:var(--space-2);align-items:baseline;
font-weight:var(--font-weight-semibold);font-size:var(--font-sm)}
.note-title::before{content:counter(l);flex:none;display:inline-grid;place-items:center;
width:1.5em;height:1.5em;border-radius:var(--radius);background:var(--muted);
color:var(--primary-accent);font-size:var(--font-xs)}
.note-text{margin-top:var(--space-2);padding-left:calc(1.5em + var(--space-2));
font-size:var(--font-sm);color:var(--muted-foreground);line-height:var(--leading-relaxed)}
.card--tip{background:var(--card)}
.foot{margin-top:var(--space-8);padding-top:var(--space-5);
display:flex;flex-direction:column;gap:var(--space-3)}
.caveat{display:flex;gap:var(--space-2);align-items:flex-start;font-size:var(--font-sm);
color:var(--muted-foreground);background:var(--card);
border-radius:var(--radius);padding:var(--space-3) var(--space-4)}
.caveat .icon{margin-top:.25em}
.foot-lines{display:flex;flex-wrap:wrap;justify-content:space-between;gap:var(--space-3);
font-size:var(--font-xs);color:var(--muted-foreground)}
.people{display:flex;gap:var(--space-2);align-items:baseline;font-size:var(--font-xs);
color:var(--muted-foreground)}
@media (max-width:64rem){
.steps{grid-template-columns:1fr} .tiles{grid-template-columns:repeat(2,1fr)}
.two-col,.grid-2{grid-template-columns:1fr} .shift{grid-template-columns:1fr}
.shift-arrow{transform:rotate(90deg);justify-content:center}
}
.pieces{list-style:none;margin:var(--space-4) 0 0;padding:0;display:flex;flex-direction:column;gap:var(--space-3)}
.piece{border-left:2px solid var(--border);padding-left:var(--space-4)}
.piece-name{font-size:var(--font-sm);font-weight:var(--font-weight-semibold);
display:flex;align-items:baseline;gap:var(--space-2);flex-wrap:wrap}
.piece-tool{font-size:var(--font-xs);font-weight:var(--font-weight-regular);color:var(--muted-foreground);
background:var(--muted);border-radius:var(--radius-full);padding:0 var(--space-3)}
.piece-role{font-size:var(--font-sm);color:var(--muted-foreground);line-height:var(--leading-relaxed)}
.field--block{margin-top:var(--space-5)}
.links{list-style:none;margin:var(--space-3) 0 0;padding:0;display:flex;flex-direction:column;gap:var(--space-2)}
.link{display:flex;align-items:baseline;gap:var(--space-3);flex-wrap:wrap;font-size:var(--font-sm)}
.link-kind{flex:none;min-width:9rem;color:var(--muted-foreground)}
.link-url{flex:1;min-width:12rem;color:var(--primary-accent);overflow-wrap:anywhere;word-break:break-word}
:root:not([data-editing]) .link:has(> .link-url[data-ph]){display:none}
:root:not([data-editing]) .field:has(> .links):not(:has(.link-url:not([data-ph]))){display:none}
.lines{list-style:none;margin:var(--space-3) 0 0;padding:0;display:flex;flex-direction:column;gap:var(--space-4)}
.line{border-left:2px solid var(--border);padding-left:var(--space-4)}
.line-what{font-size:var(--font-base);line-height:var(--leading-relaxed)}
.line-foot{margin-top:var(--space-2);display:flex;align-items:center;gap:var(--space-2);flex-wrap:wrap}
.line-amount{font-size:var(--font-sm);font-weight:var(--font-weight-semibold);
font-variant-numeric:tabular-nums}
.line-amount:empty{font-weight:var(--font-weight-regular)}
.lines:not(:has(> [data-row]))::before{content:attr(data-none);font-size:var(--font-sm);
color:var(--muted-foreground)}

.issues{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--space-4)}
.issue-what{font-size:var(--font-base);line-height:var(--leading-relaxed)}
.issue-fix{margin-top:var(--space-2);display:flex;gap:var(--space-2);align-items:flex-start;
font-size:var(--font-sm);color:var(--primary-soft-foreground)}
.issue-fix--none{color:var(--muted-foreground)} .issue-fix .icon{margin-top:.25em;flex:none}
.issue-needs{margin-top:var(--space-2);font-size:var(--font-xs);color:var(--muted-foreground)}
.qa-q{font-size:var(--font-xs);text-transform:uppercase;letter-spacing:.06em;
color:var(--muted-foreground);margin-bottom:var(--space-2)}
.qa-a{font-size:var(--font-base);line-height:var(--leading-relaxed)}
.section-no{flex:none;font-size:inherit;font-weight:inherit;color:var(--muted-foreground);
font-variant-numeric:tabular-nums}
.section-name{min-width:0} [data-ph]{color:var(--muted-foreground)}
[data-empty]:empty::before{content:attr(data-empty);color:var(--muted-foreground)}
.piece-role[data-empty]:empty::before,.metric-note [data-empty]:empty::before{font-style:normal}
.tools{position:fixed;left:50%;bottom:var(--space-5);z-index:50;
transform:translateX(calc(-50% - var(--qshift-bar)));transition:transform .18s ease;
display:flex;align-items:center;gap:var(--space-2);padding:var(--space-2) var(--space-3);
background:var(--neutral-900);border-radius:var(--radius-full);
box-shadow:0 1px 2px rgb(0 0 0 / .18),0 10px 28px rgb(0 0 0 / .26)}
.tool{display:inline-flex;align-items:center;gap:var(--space-2);border:0;cursor:pointer;
font-family:inherit;font-size:var(--font-sm);font-weight:var(--font-weight-semibold);
border-radius:var(--radius-full);padding:var(--space-2) var(--space-4);
background:transparent;color:var(--muted-foreground)}
.tool:hover{background:var(--muted);color:var(--foreground)}
.tool:focus-visible{outline:2px solid var(--primary-accent);outline-offset:2px}
.tool[aria-pressed="true"]{background:var(--primary);color:var(--primary-foreground)}
#tools .tool{color:var(--neutral-400)} #tools .tool:hover{background:rgb(255 255 255 / .10);color:var(--neutral-0)}
#tools .tool:focus-visible{outline-color:var(--brand-200);outline-offset:3px}
#tools .tool[aria-pressed="true"]{background:var(--neutral-0);color:var(--neutral-900)}
#tools .tool[aria-pressed="true"]:hover{background:var(--neutral-0);color:var(--neutral-900)}
#tools .tool--white{background:var(--neutral-0);color:var(--neutral-900)}
#tools .tool--white:hover{background:var(--neutral-100);color:var(--neutral-900)}
#tools .tool--white:active{background:var(--neutral-200)}
#tools .tool--white[aria-pressed="true"],
#tools .tool--white[aria-pressed="true"]:hover{background:var(--primary);color:var(--primary-foreground)}
#tools .tool--white[aria-pressed="true"]:hover{filter:brightness(1.1)}
#tools .tool--go{background:var(--primary);color:var(--primary-foreground);
padding-inline:var(--space-5);box-shadow:none}
#tools .tool--go:hover{background:var(--primary);color:var(--primary-foreground);opacity:1;filter:brightness(1.1)}
#tools .tool--go:active{filter:brightness(.92)}
#tools .tool--draft{border:1px dashed rgb(255 255 255 / .28);color:var(--neutral-400);font-weight:var(--font-weight-semibold)}
#tools .tool--draft:hover{border-color:rgb(255 255 255 / .45)} [data-editing] #tool-save{display:none}
[data-filed] #tools{background:none;box-shadow:none;padding:0;gap:var(--space-2)}
[data-filed] #tool-count,[data-filed] #tool-questions,[data-filed] #tool-save,
[data-filed] #tool-draft{display:none}
[data-filed] #tool-edit,[data-filed] #tool-slides{background:var(--card);color:var(--foreground);
font-size:var(--font-md);padding:var(--space-3) var(--space-6);gap:var(--space-3);
box-shadow:0 1px 2px rgb(0 0 0 / .14),0 6px 18px rgb(0 0 0 / .12)}
[data-filed] #tool-edit:hover,[data-filed] #tool-slides:hover{background:var(--card);color:var(--primary-accent)}
.tool-count{font-size:var(--font-xs);color:var(--neutral-400);
font-variant-numeric:tabular-nums;padding-inline:var(--space-2);white-space:nowrap}
.tip{position:absolute;z-index:70;max-width:22rem;padding:var(--space-2) var(--space-3);
background:var(--neutral-900);color:var(--neutral-0);border:1px solid rgb(255 255 255 / .12);
border-radius:var(--radius);box-shadow:var(--shadow-md);pointer-events:none;
font-size:var(--font-sm);font-weight:var(--font-weight-regular);line-height:var(--leading-snug);
text-transform:none;letter-spacing:0;text-align:left;animation:tip-in .12s ease}
@keyframes tip-in{from{opacity:0;transform:translateY(-2px)}}
[data-deck] body{overflow:hidden}
.deck{position:fixed;inset:0;z-index:90;background:var(--muted);color:var(--foreground);overflow:hidden}
.deck[data-idle]{cursor:none}
.deck-slide{position:absolute;left:50%;top:50%;width:1280px;height:720px;margin:-360px 0 0 -640px;transform-origin:center;
display:flex;flex-direction:column;padding:44px 64px 26px;background:var(--muted)}
.deck-head{flex:none;display:flex;align-items:center;min-height:64px;padding-bottom:18px;border-bottom:1px solid var(--border)}
.deck-head>*{margin:0;font-size:36px;font-weight:700;line-height:1.15;letter-spacing:-.015em;color:var(--foreground)}
.deck-head .section-title{gap:16px}
.deck-head .section-no{color:var(--muted-foreground);font-weight:var(--font-weight-semibold)}
.deck-step{margin-left:16px;padding:4px 12px;border-radius:var(--radius-full);background:var(--info-soft);
color:var(--info-soft-foreground);font-size:15px;font-weight:var(--font-weight-semibold);letter-spacing:0;font-variant-numeric:tabular-nums;white-space:nowrap}
.deck-part{margin-left:16px;font-size:16px;font-weight:var(--font-weight-regular);letter-spacing:.06em;
text-transform:uppercase;color:var(--muted-foreground)}
.deck-main{position:relative;flex:1;min-height:0;margin:28px 0 20px;overflow:hidden}
.deck-main[data-scroll]{overflow-y:auto}
.deck-body{position:absolute;left:0;top:0;transform-origin:top left}
.deck-body .section{margin:0}
.deck-body .head{padding-bottom:0}
.deck-body .deck-one{display:block}
.deck-body .hero-text,.deck-body .tagline{max-width:none}
.deck-body .deck-cont{margin-top:1em}
/* Slides read from across a room: the page's blocks keep their markup and take a layout of their own here. */
.deck-body .card{padding:28px 32px;border-radius:16px}
.deck-body .hero-text{font-size:17px;line-height:1.6;color:var(--foreground)}
.deck-body .field-text,.deck-body .line-what,.deck-body .issue-what,.deck-body .qa-a{font-size:16px;line-height:1.6}
.deck-body .field-label,.deck-body .qa-q,.deck-body .metric-label,.deck-body .tile-label{font-size:12px;letter-spacing:.1em}
.deck-body .grid-2{gap:40px}
/* North star: the level is the headline. */
.deck-body .scale-score{font-size:56px;letter-spacing:-.02em}
.deck-body .scale-of{font-size:28px}
.deck-body .shift-side{font-size:15px;line-height:1.55;padding:18px 20px}
/* A stage: the workflow on the left, its numbers on the right. */
.deck-body .step{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);column-gap:40px;row-gap:14px;align-content:start}
.deck-body .step>*{grid-column:1}
.deck-body .step>.metrics{grid-column:2;grid-row:1 / span 6;align-self:start;display:flex;flex-direction:column;gap:14px}
.deck-body .step:not(:has(> .metrics)){display:flex}
.deck-body .step-name{font-size:24px;font-weight:700;letter-spacing:-.01em}
.deck-body .step-text{font-size:16px;line-height:1.6;color:var(--foreground)}
.deck-body .metric{padding:18px 20px;border-radius:12px}
.deck-body .metric-value{font-size:30px;font-weight:700;line-height:1.1;flex-wrap:wrap;gap:6px 10px}
.deck-body .metric-value .was{font-size:20px;font-weight:600}
.deck-body .metric-note{font-size:13px}
/* The five numbers: big figures, the method under them. */
.deck-body .tiles{gap:14px}
.deck-body .tile{padding:22px 18px;border-radius:14px;grid-template-rows:minmax(2.8em,auto) auto auto 1fr}
.deck-body .tile-value{font-size:26px;line-height:1.15;letter-spacing:-.01em;color:var(--primary-accent)}
.deck-body .tile-value--empty{color:var(--muted-foreground)}
/* Costs: the figure stands out from the line. */
.deck-body .lines{gap:18px}
.deck-body .line{border-left-width:3px;border-left-color:var(--primary-accent);padding-left:18px}
.deck-body .line-amount{font-size:20px;font-weight:700}
/* Learnings and blockers side by side in cards. */
.deck-body .notes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.deck-body .notes li+li{margin-top:0}
.deck-body .notes li{padding:20px 22px;border-radius:14px;background:var(--muted)}
.deck-body .note-title{font-size:17px;line-height:1.35}
.deck-body .note-text{font-size:14px;line-height:1.6}
.deck-body .issue{padding:20px 24px;border-radius:14px;background:var(--muted);border-left:4px solid var(--primary-accent)}
.deck-body .issue-what{font-size:18px;font-weight:var(--font-weight-semibold)}
/* Answers in the team's own words read as quotes. */
.deck-body .card--tip{position:relative;padding:40px 48px 40px 96px}
.deck-body .card--tip::before{content:"\201C";position:absolute;left:32px;top:10px;font-size:96px;line-height:1;font-weight:700;color:var(--primary-accent)}
.deck-body .card--tip .field-text{font-size:24px;line-height:1.5;color:var(--foreground)}
.deck-body .qa{padding-left:22px;border-left:3px solid var(--primary-accent)}
.deck-body .qa-q{color:var(--primary-accent)}
.deck-body .qa-a{font-size:19px;line-height:1.55}
/* Lists of parts and sources: a name that reads, a line under it. */
.deck-body .pieces{gap:16px}
.deck-body .piece{border-left-width:3px;padding-left:18px}
.deck-body .piece-name{font-size:17px}
.deck-body .piece-tool{font-size:13px;padding:2px 10px}
.deck-body .piece-role{font-size:15px;line-height:1.55}
.deck-body .ref li+li{margin-top:22px}
.deck-body .ref-what{font-size:17px}
.deck-body .ref-where{font-size:15px}
.deck-body .ref-caveat{font-size:14px}
.deck-body .link{font-size:15px}
.deck-body .chip{font-size:13px;padding:4px 12px}
.deck-body .tag{font-size:13px}
.deck-body .deck-flow{margin-top:0}
.deck-body>:first-child,.deck-body>:first-child>:first-child,.deck-body>:first-child>:first-child>:first-child{margin-top:0}
.deck [data-ph],.deck .tag--empty,.deck .field-text--empty{display:none}
.deck-foot{flex:none;display:flex;align-items:center;gap:16px;padding-top:14px;border-top:1px solid var(--border);
font-size:14px;color:var(--muted-foreground)}
.deck-foot .brand-word{height:26px;color:var(--brand-mark)}
.deck-team{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:2px;padding-left:16px;
border-left:1px solid var(--border);line-height:1.2}
.deck-team>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.deck-team-name{font-size:15px;font-weight:var(--font-weight-semibold);color:var(--foreground)}
.deck-team-sub{font-size:12px;letter-spacing:.08em;text-transform:uppercase}
.deck-no{font-variant-numeric:tabular-nums}
.deck-bar{position:absolute;left:50%;bottom:calc(20px + env(safe-area-inset-bottom, 0px));transform:translateX(-50%);
display:flex;align-items:center;gap:var(--space-2);padding:6px;border-radius:var(--radius-full);
background:rgb(20 22 26 / .82);border:1px solid rgb(255 255 255 / .08);box-shadow:0 6px 24px rgb(0 0 0 / .25);transition:opacity .25s ease}
.deck[data-idle] .deck-bar{opacity:0;pointer-events:none}
.deck .deck-bar:focus-within{opacity:1;pointer-events:auto}
.deck-btn{display:inline-grid;place-items:center;flex:none;width:2.75rem;height:2.75rem;padding:0;border:0;border-radius:var(--radius-full);
background:rgb(255 255 255 / .10);color:var(--neutral-0);cursor:pointer}
.deck-btn .icon{width:20px;height:20px}
.deck-btn:hover:not(:disabled){background:rgb(255 255 255 / .20)}
.deck-btn:disabled{opacity:.35;cursor:default}
.deck-btn:focus-visible{outline:2px solid var(--brand-200);outline-offset:2px}
.deck-count{min-width:4.5rem;padding:0 var(--space-1);line-height:2.75rem;text-align:center;color:var(--neutral-400);font-size:var(--font-sm);font-variant-numeric:tabular-nums}
.deck[data-picking] .deck-bar{opacity:1;pointer-events:auto}
.deck-btn[aria-pressed="true"]{background:rgb(255 107 26 / .45)}
.deck[data-hero]{background:var(--hero-bg)}
.deck-hero{position:absolute;inset:0;display:none;overflow:hidden;color:var(--hero-fg);
background:radial-gradient(620px 420px at 92% 108%, rgb(255 107 26 / .30), transparent 70%),
var(--hero-bg)}
.hero-runner{position:absolute;right:-48px;top:24px;width:520px;height:500px;pointer-events:none;
background:url("data:image/webp;base64,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") right center / contain no-repeat;
-webkit-mask-image:linear-gradient(to bottom,#000 55%,transparent 92%);mask-image:linear-gradient(to bottom,#000 55%,transparent 92%)}
.deck-slide[data-kind="hero"]>.deck-head,.deck-slide[data-kind="hero"]>.deck-main,.deck-slide[data-kind="hero"]>.deck-foot{visibility:hidden}
.deck-slide[data-kind="hero"]{background:var(--hero-bg)}
.deck-slide[data-kind="hero"]>.deck-hero{display:block}
.hero{position:absolute;inset:0;display:flex;flex-direction:column;padding:56px 72px 52px}
.hero-top{position:relative;z-index:1;flex:none;display:flex;align-items:center;gap:20px}
.hero-top .brand-word{height:40px;color:var(--brand-400)}
.hero-eyebrow{padding-left:20px;border-left:1px solid var(--hero-line);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--hero-muted)}
.hero-mid{position:relative;z-index:1;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;max-width:700px;overflow:hidden}
.hero-code{margin:0 0 18px;font-size:16px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--brand-400)}
.hero-name{margin:0;font-size:calc(76px * var(--hero-k, 1));font-weight:700;line-height:1.04;letter-spacing:-.025em;color:var(--hero-fg);overflow-wrap:anywhere}
.hero-rule{flex:none;width:72px;height:4px;margin:calc(28px * var(--hero-k, 1)) 0;border-radius:2px;background:var(--brand-400)}
.hero-lead{margin:0;font-size:calc(26px * var(--hero-k, 1));line-height:1.45;color:var(--hero-soft);white-space:pre-line;overflow:hidden}
.hero-lead[data-clamp]{display:-webkit-box;-webkit-box-orient:vertical}
.hero-band{position:relative;z-index:1;flex:none;margin-top:20px;padding:20px 28px;border-radius:16px;border:1px solid var(--hero-line)}
.hero-facts{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);margin:0}
.hero-facts>div{padding:0 24px;border-left:1px solid var(--hero-line)}
.hero-facts>div:first-child{padding-left:0;border-left:0}
.hero-facts dt,.hero-people-label{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--hero-muted)}
.hero-facts dd{margin:6px 0 0;font-size:17px;font-weight:600;line-height:1.3;color:var(--hero-fg);overflow-wrap:anywhere}
.hero-people-box{display:flex;align-items:baseline;gap:24px;margin-top:16px;padding-top:14px;border-top:1px solid var(--hero-line)}
.hero-people-label{flex:none;width:64px}
.hero-people{flex:1;min-width:0;display:flex;flex-wrap:wrap;gap:calc(8px * var(--people-k, 1)) calc(28px * var(--people-k, 1));margin:0;padding:0;list-style:none}
.hero-people li{display:flex;flex-direction:column;font-size:calc(14px * var(--people-k, 1));line-height:1.25}
.hero-people b{font-weight:var(--font-weight-semibold);color:var(--hero-fg)}
.hero-people span{font-size:.86em;color:var(--hero-muted)}
.deck-pick{position:absolute;top:20px;right:20px;bottom:calc(88px + env(safe-area-inset-bottom, 0px));width:min(360px, calc(100% - 40px));
display:flex;flex-direction:column;border-radius:14px;background:rgb(20 22 26 / .96);color:var(--neutral-0);
box-shadow:0 12px 40px rgb(0 0 0 / .4);font-size:var(--font-sm);z-index:2}
.deck-pick[hidden]{display:none}
.deck-pick-head{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);padding:var(--space-4) var(--space-4) 0}
.deck-pick-head strong{font-size:var(--font-md)}
.deck-pick-note{margin:var(--space-2) var(--space-4) var(--space-3);color:var(--neutral-400);line-height:var(--leading-snug)}
.deck-pick-list{flex:1;min-height:0;overflow:auto;list-style:none;margin:0;padding:0 var(--space-2)}
.deck-pick-list label{display:flex;align-items:center;gap:var(--space-3);padding:var(--space-2);border-radius:var(--radius);cursor:pointer}
.deck-pick-list label:hover{background:rgb(255 255 255 / .06)}
.deck-pick-list .deck-pick-sub label{padding-left:calc(var(--space-2) + 28px)}
.deck-pick-list input{width:16px;height:16px;margin:0;flex:none;accent-color:var(--brand-400)}
.deck-pick-name{flex:1;min-width:0}
.deck-pick-list [data-off] .deck-pick-name{color:var(--neutral-400);text-decoration:line-through}
.deck-pick-n{color:var(--neutral-400);font-size:var(--font-xs);font-variant-numeric:tabular-nums}
.deck-pick-foot{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);padding:var(--space-3) var(--space-4);
border-top:1px solid rgb(255 255 255 / .1);color:var(--neutral-400)}
.deck-pick-foot button{border:0;border-radius:var(--radius-full);background:rgb(255 255 255 / .1);color:var(--neutral-0);font:inherit;padding:var(--space-1) var(--space-3);cursor:pointer}
.deck-pick-foot button:hover{background:rgb(255 255 255 / .2)}
.tagline,.hero-text,.field-text,.step-text,.shift-side,.qa-a,.issue-what,.line-what,.piece-role{white-space:pre-line}
[data-editing] [data-edit][data-num]{min-width:2.75em;text-align:center}
[data-editing] [data-edit]{outline:1px dashed rgb(255 107 26 / .55);outline-offset:2px;border-radius:2px;
min-width:2ch;min-height:1.2em;display:inline-block;cursor:text}
[data-editing] [data-edit]:not([data-enum]){background:var(--edit-wash);box-shadow:0 0 0 2px var(--edit-wash)}
[data-editing] .tag[data-row]{padding-right:var(--space-6);min-width:8ch}
[data-editing] p[data-edit],[data-editing] h1[data-edit]{display:block}
[data-editing] [data-edit]:hover{outline-color:var(--primary-accent)}
[data-editing] [data-edit]:not([data-enum]):hover{background:var(--edit-wash-hover);box-shadow:0 0 0 2px var(--edit-wash-hover)}
[data-editing] [data-edit]:focus{outline:2px solid var(--primary-accent);outline-offset:2px}
[data-editing] .facts,[data-editing] .person,[data-editing] .piece,[data-editing] .metric-note,
[data-editing] .ref li,[data-editing] .notes li,[data-editing] .issue,
[data-editing] .tile,[data-editing] .metric,[data-editing] .field,[data-editing] .field-stack,
[data-editing] .head,[data-editing] .hero-foot,[data-editing] .shift-side{line-height:var(--leading-relaxed)}
[data-editing] p[data-edit],[data-editing] h1[data-edit],[data-editing] h3[data-edit]{margin-block:6px}
[data-editing] .person-name,[data-editing] .person-role,
[data-editing] .piece-name,[data-editing] .piece-role,
[data-editing] .ref-what,[data-editing] .ref-where,[data-editing] .ref-caveat,
[data-editing] .metric-note>[data-edit]{margin-block:5px} [data-editing] .chip-row{margin-block:5px}
[data-editing] .piece-name>[data-edit]+[data-edit],
[data-editing] .metric-shift>[data-edit]+[data-edit]{margin-left:6px}
[data-editing] [data-row]{padding-right:var(--space-8)} [data-editing] .tag[data-row]{padding-right:var(--space-6)}
[data-editing] [data-enum]{cursor:pointer}
[data-editing] [data-enum]::after{content:"\21bb";margin-left:.4em;font-weight:400;opacity:.7}
[data-editing] .step-icon[data-enum]{position:relative;border-radius:8px;outline:1px dashed var(--primary-accent);outline-offset:3px}
[data-editing] .step-icon[data-enum]::after{position:absolute;top:-.85em;right:-.95em;margin:0;font-size:.75rem;line-height:1}
.row-del{position:absolute;top:0;right:0;display:none;width:1.6em;height:1.6em;border:0;
border-radius:var(--radius-full);background:var(--muted);color:var(--muted-foreground);
cursor:pointer;font:inherit;font-size:var(--font-xs);line-height:1;
user-select:none;-webkit-user-select:none}
.row-del::before{content:"\00d7"} .row-del:hover{background:var(--primary);color:var(--primary-foreground)}
[data-editing] [data-row]{position:relative} [data-editing] .row-del{display:grid;place-items:center}
.row-add{display:none;align-self:flex-start;margin-top:var(--space-3);border:1px dashed var(--border);background:none;
cursor:pointer;font-family:inherit;font-size:var(--font-xs);font-weight:var(--font-weight-semibold);
color:var(--muted-foreground);border-radius:var(--radius-full);padding:var(--space-1) var(--space-3)}
.row-add:hover{color:var(--primary-accent);border-color:var(--primary-accent)}
[data-editing] .row-add{display:inline-block}
.nojs{position:fixed;left:50%;transform:translateX(-50%);bottom:var(--space-5);z-index:56;
width:min(44rem,calc(100vw - var(--space-6)));
background:var(--warning-soft);color:var(--warning-soft-foreground);
border-radius:var(--radius);padding:var(--space-3) var(--space-4);
box-shadow:0 1px 2px rgb(0 0 0 / .18),0 10px 28px rgb(0 0 0 / .26);
font-size:var(--font-sm);line-height:var(--leading-snug)}
[data-js] .nojs{display:none}
.notice{position:fixed;left:50%;bottom:calc(var(--space-5) + 3.75rem);z-index:55;
transform:translateX(calc(-50% - var(--qshift-bar)));
width:min(44rem,calc(100vw - var(--space-6)));
display:flex;gap:var(--space-3);align-items:flex-start;
background:var(--warning-soft);color:var(--warning-soft-foreground);
border-radius:var(--radius);padding:var(--space-3) var(--space-4);
box-shadow:0 1px 2px rgb(0 0 0 / .18),0 10px 28px rgb(0 0 0 / .26);
font-size:var(--font-sm);line-height:var(--leading-snug);transition:transform .18s ease}
.notice-text{flex:1}
.notice-do{margin-top:var(--space-2);display:flex;gap:var(--space-3);align-items:center;flex-wrap:wrap}
.notice-b{border:1px solid rgb(0 0 0 / .25);background:none;border-radius:var(--radius-full);
padding:var(--space-1) var(--space-3);font:inherit;font-weight:var(--font-weight-semibold);
color:inherit;cursor:pointer}
.notice-b:hover{background:rgb(0 0 0 / .06)}
.notice-x{border:0;background:none;font:inherit;font-size:var(--font-md);line-height:1;
color:inherit;cursor:pointer;opacity:.6;padding:0 var(--space-1)}
.notice-x:hover{opacity:1}
@keyframes notice-flash{0%,100%{transform:translateX(calc(-50% - var(--qshift-bar))) scale(1)}
50%{transform:translateX(calc(-50% - var(--qshift-bar))) scale(1.03)}}
.notice[data-flash]{animation:notice-flash .34s ease 2}
.qpanel{position:fixed;top:0;right:0;bottom:0;width:min(var(--qpanel-w),100%);z-index:60;
background:var(--card);box-shadow:-8px 0 32px rgba(0,0,0,.16);
display:flex;flex-direction:column;transform:translateX(100%);transition:transform .18s ease}
[data-questions] .qpanel{transform:none}
[data-questions]{
--qshift: min(calc(var(--qpanel-w) / 2), max(0px, calc((100vw - var(--page-w)) / 2 - 1rem)));
--qshift-bar: min(calc(var(--qpanel-w) / 2), max(0px, calc((100vw - 30rem) / 2)));
}
.qpanel-head{display:flex;align-items:center;gap:var(--space-3);
padding:var(--space-5) var(--space-5) var(--space-4)}
.qpanel-title{font-size:var(--font-md);font-weight:var(--font-weight-semibold);margin-right:auto}
.qpanel-body{overflow:auto;padding:0 var(--space-5) var(--space-6);flex:1} .qgroup+.qgroup{margin-top:var(--space-5)}
.qgroup-name{display:flex;align-items:center;gap:var(--space-2);font-size:var(--font-xs);
text-transform:uppercase;letter-spacing:.06em;color:var(--muted-foreground);
margin-bottom:var(--space-2)}
.qgroup-count{margin-left:auto;font-variant-numeric:tabular-nums;text-transform:none;letter-spacing:0}
.qitem{display:flex;gap:var(--space-3);width:100%;text-align:left;border:0;background:none;
cursor:pointer;font-family:inherit;font-size:var(--font-sm);line-height:var(--leading-snug);
color:var(--muted-foreground);padding:var(--space-2);border-radius:var(--radius)}
.qitem:hover{background:var(--muted);color:var(--foreground)}
.qitem::before{content:"";flex:none;width:.7em;height:.7em;margin-top:.4em;border-radius:50%;
border:1.5px solid var(--border)}
.qitem[data-done]::before{background:var(--primary);border-color:var(--primary)}
.qitem[data-done]{color:var(--foreground)}
@media (max-width:64rem){
.tools{flex-wrap:wrap;justify-content:center;max-width:calc(100vw - var(--space-6))}
}
@media print{
.tools,.qpanel,.row-add,.row-del,.nojs,.notice,.tip,.deck{display:none!important}
}
@media print{
@page{size:A4;margin:12mm}
:root{color-scheme:light} body{background:var(--card);font-size:12px}
.page{max-width:none;padding:0;transform:none} .theme{display:none}
.section{margin-top:18px;break-inside:avoid-page} .tiles{grid-template-columns:repeat(5,1fr)}
a{color:inherit} *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}`;
var __markup="<main class=\"page\">\n<header class=\"head\">\n<div class=\"head-top\">\n<p class=\"brand\"><svg class=\"brand-word\" viewBox=\"78.7 124.6 227.1 130.2\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"AI/RUN\"><defs><clipPath id=\"airun-word\"><rect x=\"0\" y=\"0\" width=\"225.977\" height=\"64.7462\" fill=\"currentColor\" transform=\"translate(79 194.824)\"/></clipPath></defs><g clip-path=\"url(#airun-word)\"><path d=\"M78.6743 199.076 108.955 199.076C114.915 199.076 119.253 199.381 121.969 199.99 124.685 200.599 127.013 202.012 128.967 204.214 130.921 206.43 131.919 209.2 131.975 212.524L131.975 212.842C131.975 218.271 130.478 221.983 127.471 223.991 125.835 225.099 123.327 225.916 119.959 226.442L119.959 226.844C120.486 226.789 121.013 226.761 121.539 226.761 122.274 226.761 122.994 226.816 123.673 226.913 126.792 227.329 128.995 228.423 130.326 230.196 131.642 231.968 132.307 234.267 132.307 237.12L132.307 249.571C132.307 251.385 130.838 252.853 129.023 252.853L127.124 252.853C125.309 252.853 123.84 251.385 123.84 249.571L123.84 238.062C123.84 236.165 123.452 234.614 122.689 233.395 121.927 232.176 120.569 231.484 118.615 231.304 116.661 231.124 114.18 231.027 111.173 231.027L90.8007 231.027C88.9852 231.027 87.5161 232.495 87.5161 234.309L87.5161 249.571C87.5161 251.385 86.0471 252.853 84.2316 252.853L81.9588 252.853C80.1433 252.853 78.6743 251.385 78.6743 249.571L78.6743 227.578C78.6743 225.778 80.1156 224.323 81.9172 224.296L87.5023 224.227 109.981 224.227C113.667 224.227 116.8 223.686 119.363 222.606 121.927 221.526 123.23 218.95 123.285 214.892L123.285 214.657C123.285 212.441 122.454 210.419 120.791 208.563 119.128 206.721 115.261 205.793 109.205 205.793L78.6881 205.793\" fill=\"currentColor\"/><path d=\"M203.429 229.919C203.429 235.722 202.459 240.403 200.546 243.948 198.62 247.507 195.862 250.125 192.273 251.815 188.683 253.504 183.195 254.349 175.809 254.349 168.422 254.349 162.809 253.352 159.109 251.344 155.422 249.336 152.664 246.732 150.835 243.519 149.02 240.306 148.105 235.763 148.105 229.919L148.105 202.358C148.105 200.544 149.574 199.076 151.389 199.076L153.371 199.076C155.187 199.076 156.656 200.544 156.656 202.358L156.656 229.919C156.656 235.722 158.139 240.084 161.091 243.006 164.042 245.929 168.976 247.397 175.892 247.397 183.694 247.397 188.836 245.845 191.289 242.729 193.742 239.613 194.975 235.348 194.975 229.919L194.975 202.358C194.975 200.544 196.444 199.076 198.26 199.076L200.158 199.076C201.974 199.076 203.443 200.544 203.443 202.358L203.443 229.919 203.429 229.919Z\" fill=\"currentColor\"/><path d=\"M219.254 249.571 219.254 202.358C219.254 200.544 220.723 199.076 222.538 199.076L226.904 199.076C227.874 199.076 228.803 199.505 229.426 200.253L259.278 235.819C261.246 238.173 265.085 236.774 265.085 233.713L265.085 202.358C265.085 200.544 266.554 199.076 268.369 199.076L270.268 199.076C272.083 199.076 273.552 200.544 273.552 202.358L273.552 249.571C273.552 251.385 272.083 252.853 270.268 252.853L265.902 252.853C264.932 252.853 264.004 252.424 263.38 251.676L233.612 216.125C231.644 213.77 227.805 215.169 227.805 218.23L227.805 249.571C227.805 251.385 226.336 252.853 224.52 252.853L222.538 252.853C220.723 252.853 219.254 251.385 219.254 249.571Z\" fill=\"currentColor\"/><path d=\"M287.122 207.87 287.122 201.444C287.122 201.139 286.872 200.876 286.554 200.876L283.726 200.876C283.422 200.876 283.158 200.627 283.158 200.308 283.158 200.004 283.408 199.741 283.726 199.741L291.875 199.741C292.18 199.741 292.444 199.99 292.444 200.308 292.444 200.613 292.194 200.876 291.875 200.876L289.048 200.876C288.743 200.876 288.48 201.126 288.48 201.444L288.48 207.87C288.48 208.175 288.23 208.438 287.912 208.438L287.662 208.438C287.357 208.438 287.094 208.189 287.094 207.87L287.122 207.87Z\" fill=\"currentColor\"/><path d=\"M293.719 207.87 293.719 200.308C293.719 200.004 293.968 199.741 294.287 199.741L295.41 199.741C295.617 199.741 295.798 199.851 295.895 200.031L299.193 205.848C299.415 206.236 299.969 206.222 300.177 205.848L303.378 200.045C303.475 199.865 303.669 199.754 303.877 199.754L304.861 199.754C305.166 199.754 305.429 200.004 305.429 200.322L305.429 207.87C305.429 208.175 305.18 208.438 304.861 208.438L304.626 208.438C304.321 208.438 304.057 208.189 304.057 207.87L304.057 203.66C304.057 203.078 303.267 202.884 303.004 203.397L300.523 208.133C300.426 208.313 300.232 208.438 300.024 208.438L299.359 208.438C299.151 208.438 298.957 208.327 298.86 208.147L296.172 203.134C295.895 202.621 295.118 202.815 295.118 203.397L295.118 207.87C295.118 208.175 294.869 208.438 294.55 208.438L294.301 208.438C293.996 208.438 293.733 208.189 293.733 207.87L293.719 207.87Z\" fill=\"currentColor\"/></g><path d=\"M124.998 156.563 111.86 131.966 110.835 131.966 97.8629 156.563 94.218 163.515 87.067 177.032C86.4988 178.113 85.3762 178.777 84.1705 178.777L82.2857 178.777C79.8189 178.777 78.239 176.174 79.3754 173.985L103.836 126.773C104.404 125.679 105.527 125 106.746 125L115.907 125C117.126 125 118.249 125.679 118.817 126.759L143.694 173.972C144.844 176.16 143.264 178.777 140.783 178.777L138.926 178.777C137.72 178.777 136.612 178.113 136.03 177.046L128.726 163.515 125.012 156.563 124.998 156.563Z\" fill=\"currentColor\"/><path d=\"M160.253 175.495 160.253 128.282C160.253 126.468 161.722 125 163.537 125L165.436 125C167.252 125 168.721 126.468 168.721 128.282L168.721 175.495C168.721 177.309 167.252 178.777 165.436 178.777L163.537 178.777C161.722 178.777 160.253 177.309 160.253 175.495Z\" fill=\"currentColor\"/></svg></p>\n<button type=\"button\" class=\"theme\" id=\"theme-toggle\" aria-label=\"Switch between light and dark\">\n<svg class=\"icon theme-sun\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/></svg><svg class=\"icon theme-moon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\"/></svg>\n</button>\n</div>\n<h1 class=\"ident\" data-edit=\"team.name\" data-ph>Team name</h1>\n<p class=\"ident-code\" data-edit=\"team.code\" data-ph>TEAM-CODE</p>\n<p class=\"tagline\" data-edit=\"team.tagline\" data-ph>One sentence: what this team delivers for the client.</p>\n\n<div class=\"card identity\">\n<dl class=\"facts\"><div class=\"fact\"><dt>Account</dt><dd data-edit=\"team.account\" data-ph>Account</dd></div><div class=\"fact\"><dt>Coach</dt><dd data-edit=\"team.coach\" data-ph>Coach name</dd></div><div class=\"fact\"><dt>Team</dt><dd data-edit=\"team.size\" data-ph>N people</dd></div><div class=\"fact\"><dt>Deadline</dt><dd>30 September 2026</dd></div></dl>\n    \n<div class=\"people-strip\" data-list=\"team.people\"><span class=\"person\" data-row=\"team.people[0]\">\n<span class=\"person-name\" data-edit=\"team.people[0].name\" data-ph>Team member</span><span class=\"person-role\" data-edit=\"team.people[0].role\" data-ph>Their role, for example: Business analyst</span>\n</span><span class=\"person\" data-row=\"team.people[1]\">\n<span class=\"person-name\" data-edit=\"team.people[1].name\" data-ph>Another member</span><span class=\"person-role\" data-edit=\"team.people[1].role\" data-ph>Their role, for example: QA engineer</span>\n</span></div>\n<div class=\"progress\" aria-label=\"Evidence completeness\">\n<div class=\"progress-bar\"><span style=\"width:28%\"></span></div>\n<p class=\"progress-text\"><strong>9 of 32</strong> facts in this template are backed by a number or a source.\nStill open: what the team delivers for the client, the delivery pain you started from, the baseline period to compare against, the target state of the factory, the client business outcome, at least two sdlc stages described, and 17 more.</p>\n</div>\n</div>\n</header>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">01</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/><path d=\"M12 7v5l4 2\"/></svg><span class=\"section-name\">Where we started</span></h2>\n<div class=\"card grid-2\">\n<div class=\"field\">\n<p class=\"field-label\">The pain we started from</p>\n<p class=\"field-text\" data-edit=\"context.painPoint\" data-ph>The biggest delivery pain before this programme, in one or two sentences. Concrete: what took too long, what kept breaking, what the client complained about.</p>\n</div>\n<div class=\"field-stack\">\n<div class=\"field\">\n<p class=\"field-label\">AI tooling on this project</p>\n<p class=\"chip-row\" data-list=\"context.aiTools\"><span class=\"tag\" data-row=\"context.aiTools[0]\" data-edit=\"context.aiTools[0]\" data-empty=\"Not stated\" data-ph>The AI tooling this project actually has</span></p>\n</div>\n<div class=\"field\">\n<p class=\"field-label\">Baseline period</p>\n<p class=\"field-text\" data-edit=\"context.baseline\" data-ph>The period the after-numbers are compared against, for example: sprints 36 to 40</p>\n</div>\n</div>\n</div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">02</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></svg><span class=\"section-name\">North star</span></h2>\n<div class=\"card card--hero\">\n<p class=\"hero-text\" data-edit=\"northStar.goal\" data-ph>The target state in three or four sentences: which SDLC stages become agentic, in what order, and what humans keep governing.</p>\n<div class=\"scales\">\n<p class=\"field-label\">AI maturity</p>\n<p class=\"scale-score\">1<span class=\"scale-of\"> \u2192 3</span></p>\n<p class=\"scale-legend\">Level <span data-edit=\"northStar.currentLevel\" data-num=\"1-3\">1</span> \u00b7 target <span data-edit=\"northStar.targetLevel\" data-num=\"1-3\">3</span></p>\n<div class=\"meter\" role=\"meter\" aria-valuenow=\"1\" aria-valuemin=\"0\" aria-valuemax=\"3\" aria-label=\"AI maturity 1 of 3, target 3\">\n<div class=\"meter-track\"><div class=\"meter-fill\" style=\"width:33.33333333333333%\"></div><div class=\"meter-target\" style=\"left:100%\"></div></div>\n<div class=\"meter-ticks\"><span>0</span><span>1</span><span>2</span><span>3</span></div>\n</div>\n</div>\n<div class=\"shift\">\n<div class=\"shift-side\"><p class=\"field-label\">Today</p><p data-edit=\"northStar.shiftFrom\" data-ph>How the work is done today, in one sentence.</p></div>\n<div class=\"shift-arrow\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg></div>\n<div class=\"shift-side shift-side--to\"><p class=\"field-label\">The factory</p><p data-edit=\"northStar.shiftTo\" data-ph>How it is done once the factory is in place, in one sentence.</p></div>\n</div>\n<div class=\"hero-foot\">\n<div class=\"field\"><p class=\"field-label\">What the client gets</p><p class=\"field-text\" data-edit=\"northStar.clientOutcome\" data-ph>The client business outcome this is connected to. Money, risk or speed, not adoption.</p></div>\n      \n</div>\n</div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">03</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2\"/><rect x=\"14\" y=\"2\" width=\"8\" height=\"8\" rx=\"1\"/></svg><span class=\"section-name\">How it is built</span></h2>\n<div class=\"card\">\n<p class=\"hero-text\" data-edit=\"architecture.summary\" data-ph>How it is built, in one paragraph: what the pieces are, what triggers what, where the AI sits and where a human does. Name the platform each piece runs on.</p>\n<ul class=\"pieces\" data-list=\"architecture.pieces\"><li class=\"piece\" data-row=\"architecture.pieces[0]\">\n<p class=\"piece-name\"><span data-edit=\"architecture.pieces[0].name\" data-ph>A piece of the solution</span><span class=\"piece-tool\" data-edit=\"architecture.pieces[0].tool\" data-ph data-empty=\"what it runs on\">What it runs on</span></p>\n<p class=\"piece-role\" data-edit=\"architecture.pieces[0].role\" data-ph data-empty=\"what it does\">What it does, in a few words</p>\n</li></ul>\n<div class=\"field field--block\">\n<p class=\"field-label\">From the EPAM AI Assets marketplace</p>\n<ul class=\"pieces\" data-list=\"architecture.assets\"><li class=\"piece\" data-row=\"architecture.assets[0]\">\n<p class=\"piece-name\" data-edit=\"architecture.assets[0].name\" data-ph>An EPAM AI Assets marketplace asset you reused</p>\n<p class=\"piece-role\" data-edit=\"architecture.assets[0].use\" data-ph data-empty=\"what you used it for\">What you used it for, and whether it survived contact with the project</p>\n</li></ul>\n</div>\n<div class=\"field field--block\">\n<p class=\"field-label\">What the demo showed</p>\n<p class=\"field-text\" data-edit=\"architecture.demo\" data-ph>What the demo showed, step by step, in the order it was shown. The run, not the feature list \u2014 this is what a reviewer reads when they cannot open the recording.</p>\n</div>\n</div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">04</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"/><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"/><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"/></svg><span class=\"section-name\">What changed, stage by stage</span></h2>\n<div class=\"steps\" data-list=\"stages\"><article class=\"card step\" data-row=\"stages[0]\">\n<div class=\"step-head\">\n<span class=\"step-icon\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m16 18 6-6-6-6\"/><path d=\"m8 6-6 6 6 6\"/></svg></span>\n<h3 class=\"step-name\" data-edit=\"stages[0].title\" data-empty=\"Name this stage\">Engineering &amp; Coding</h3>\n    \n</div>\n<p class=\"chip-row\" data-list=\"stages[0].tools\"><span class=\"tag\" data-row=\"stages[0].tools[0]\" data-edit=\"stages[0].tools[0]\" data-empty=\"Tool not chosen yet\" data-ph>The tool doing the work</span></p>\n<p class=\"step-text\" data-edit=\"stages[0].description\" data-ph>One paragraph: what triggers the agent, what it produces, and what a human reviews or decides. The workflow, not the tool's marketing.</p>\n<div class=\"metrics\" data-list=\"stages[0].metrics\"><div class=\"metric\" data-row=\"stages[0].metrics[0]\">\n<p class=\"metric-label\" data-edit=\"stages[0].metrics[0].label\" data-ph>What you measured</p>\n<p class=\"metric-value\"><span class=\"was\" data-edit=\"stages[0].metrics[0].before\" data-ph>3 h</span><svg class=\"icon icon--xs metric-arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg><strong data-edit=\"stages[0].metrics[0].after\" data-ph>30 min</strong></p>\n<p class=\"metric-foot\"><span class=\"chip chip--success\" data-edit=\"stages[0].metrics[0].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/></svg><span class=\"chip-text\">Measured</span></span></p>\n<p class=\"metric-note\"><span class=\"metric-method\" data-edit=\"stages[0].metrics[0].method\" data-ph>How it was counted: Jira label, telemetry, manual count, survey</span><span class=\"metric-method\" data-edit=\"stages[0].metrics[0].period\" data-ph>Sprints 41 to 44</span></p>\n</div><div class=\"metric\" data-row=\"stages[0].metrics[1]\">\n<p class=\"metric-label\" data-edit=\"stages[0].metrics[1].label\" data-ph>A second number</p>\n<p class=\"metric-value\"><strong data-edit=\"stages[0].metrics[1].value\" data-ph>~40%</strong></p>\n<p class=\"metric-foot\"><span class=\"chip chip--warning\" data-edit=\"stages[0].metrics[1].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n<p class=\"metric-note\"><span class=\"metric-method\" data-edit=\"stages[0].metrics[1].method\" data-ph>How you arrived at it</span><span data-edit=\"stages[0].metrics[1].note\" data-ph>One line of context.</span></p>\n</div></div>\n</article><article class=\"card step\" data-row=\"stages[1]\">\n<div class=\"step-head\">\n<span class=\"step-icon\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2\"/><path d=\"M6.453 15h11.094\"/><path d=\"M8.5 2h7\"/></svg></span>\n<h3 class=\"step-name\" data-edit=\"stages[1].title\" data-empty=\"Name this stage\">Quality &amp; Testing</h3>\n</div>\n<p class=\"chip-row\" data-list=\"stages[1].tools\"><span class=\"tag tag--empty\" data-row=\"stages[1].tools[0]\" data-edit=\"stages[1].tools[0]\" data-empty=\"Tool not chosen yet\"></span></p>\n<p class=\"step-text\" data-edit=\"stages[1].description\" data-ph>The second stage, in the same four parts: what the agent does, what triggers it, what a human still decides, and where the evidence lives.</p>\n<div class=\"metrics\" data-list=\"stages[1].metrics\"><div class=\"metric\" data-row=\"stages[1].metrics[0]\">\n<p class=\"metric-label\" data-edit=\"stages[1].metrics[0].label\" data-ph>The metric you will move</p>\n<p class=\"metric-value metric-value--empty\"><strong data-edit=\"stages[1].metrics[0].value\" data-empty=\"Baseline open\"></strong></p>\n<p class=\"metric-foot\"></p>\n<p class=\"metric-note\"><span data-edit=\"stages[1].metrics[0].note\" data-ph>Why there is no number yet, and what will produce one.</span></p>\n</div><div class=\"metric\" data-row=\"stages[1].metrics[1]\">\n<p class=\"metric-label\" data-edit=\"stages[1].metrics[1].label\" data-ph>Target</p>\n<p class=\"metric-value metric-value--empty\"><strong data-edit=\"stages[1].metrics[1].value\" data-empty=\"Planned\"></strong></p>\n<p class=\"metric-foot\"></p>\n<p class=\"metric-note\"><span data-edit=\"stages[1].metrics[1].note\" data-ph>Set once the baseline exists.</span></p>\n</div><template data-row-template data-row-shape='{\"label\":null,\"before\":null,\"after\":null,\"status\":\"estimated\",\"method\":null,\"period\":null,\"note\":null}'><div class=\"metric\" data-row=\"stages[1].metrics[0]\">\n<p class=\"metric-label\" data-edit=\"stages[1].metrics[0].label\" data-ph>What you measured</p>\n<p class=\"metric-value\"><span class=\"was\" data-edit=\"stages[1].metrics[0].before\" data-ph data-empty=\"before\">Before</span><svg class=\"icon icon--xs metric-arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg><strong data-edit=\"stages[1].metrics[0].after\" data-ph data-empty=\"after\">After</strong></p>\n<p class=\"metric-foot\"><span class=\"chip chip--warning\" data-edit=\"stages[1].metrics[0].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n<p class=\"metric-note\"><span class=\"metric-method\" data-edit=\"stages[1].metrics[0].method\" data-ph>How it was counted: Jira label, telemetry, manual count, survey</span><span data-edit=\"stages[1].metrics[0].period\" data-ph data-empty=\"over what stretch\">Over what stretch</span></p>\n</div></template></div>\n</article></div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">05</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m12 14 4-4\"/><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"/></svg><span class=\"section-name\">The five programme numbers</span></h2>\n<div class=\"tiles\"><div class=\"tile\">\n<p class=\"tile-label\">Daily active AI users</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#daily-active.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#daily-active.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#daily-active.note\" data-empty=\"How it was counted\" data-ph>Give a value and the method behind it, or say why it is not tracked.</p>\n</div><div class=\"tile\">\n<p class=\"tile-label\">AI-assisted deliverables</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#ai-assisted.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#ai-assisted.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#ai-assisted.note\" data-empty=\"How it was counted\" data-ph>Give a value and the method behind it, or say why it is not tracked.</p>\n</div><div class=\"tile\">\n<p class=\"tile-label\">Cycle / lead time</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#cycle-time.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#cycle-time.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#cycle-time.note\" data-empty=\"How it was counted\" data-ph>Give a value and the method behind it, or say why it is not tracked.</p>\n</div><div class=\"tile\">\n<p class=\"tile-label\">Hours saved per person</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#hours-saved.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#hours-saved.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#hours-saved.note\" data-empty=\"How it was counted\" data-ph>Give a value and the method behind it, or say why it is not tracked.</p>\n</div><div class=\"tile\">\n<p class=\"tile-label\">AI cost</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#token-cost.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#token-cost.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#token-cost.note\" data-empty=\"How it was counted\" data-ph>Required for a Level 3 claim.</p>\n</div></div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">06</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M13.744 17.736a6 6 0 1 1-7.48-7.48\"/><path d=\"M15 6h1v4\"/><path d=\"m6.134 14.768.866-.5 2 3.464\"/><circle cx=\"16\" cy=\"8\" r=\"6\"/></svg><span class=\"section-name\">What it cost</span></h2>\n<div class=\"card grid-2\">\n<div class=\"field\">\n<p class=\"field-label\">To build \u00b7 one-off</p>\n<ul class=\"lines\" data-list=\"costs.build\" data-none=\"Not stated\"><li class=\"line\" data-row=\"costs.build[0]\">\n<p class=\"line-what\" data-edit=\"costs.build[0].what\" data-ph data-empty=\"Not stated\">Who built it, and for how long.</p>\n<p class=\"line-foot\"><span class=\"line-amount\" data-edit=\"costs.build[0].amount\" data-ph data-empty=\"no figure\">6 people-weeks</span><span class=\"chip chip--warning\" data-edit=\"costs.build[0].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n</li><li class=\"line\" data-row=\"costs.build[1]\">\n<p class=\"line-what\" data-edit=\"costs.build[1].what\" data-ph data-empty=\"Not stated\">Licences, platform or money bought for this - or nothing extra.</p>\n<p class=\"line-foot\"><span class=\"line-amount\" data-edit=\"costs.build[1].amount\" data-ph data-empty=\"no figure\">\u00a30 extra</span><span class=\"chip chip--warning\" data-edit=\"costs.build[1].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n</li></ul>\n</div>\n<div class=\"field\">\n<p class=\"field-label\">To run \u00b7 per month or per sprint</p>\n<ul class=\"lines\" data-list=\"costs.run\" data-none=\"The AI cost tile above is the whole answer\"><li class=\"line\" data-row=\"costs.run[0]\">\n<p class=\"line-what\" data-edit=\"costs.run[0].what\" data-ph data-empty=\"Not stated\">AI spend, when it needs more than the tile above: what moves it, what it becomes at full adoption.</p>\n<p class=\"line-foot\"><span class=\"line-amount\" data-edit=\"costs.run[0].amount\" data-ph data-empty=\"no figure\">~$180 a month</span><span class=\"chip chip--warning\" data-edit=\"costs.run[0].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n</li><li class=\"line\" data-row=\"costs.run[1]\">\n<p class=\"line-what\" data-edit=\"costs.run[1].what\" data-ph data-empty=\"Not stated\">What else it takes to keep it running: infrastructure, the human review nobody budgets for.</p>\n<p class=\"line-foot\"><span class=\"line-amount\" data-edit=\"costs.run[1].amount\" data-ph data-empty=\"no figure\">2 h a sprint</span><span class=\"chip chip--warning\" data-edit=\"costs.run[1].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n</li></ul>\n</div>\n</div>\n</section>\n<section class=\"section two-col\">\n<div>\n<h2 class=\"section-title\"><span class=\"section-no\">07</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m11 17 2 2a1 1 0 1 0 3-3\"/><path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"/><path d=\"m21 3 1 11h-2\"/><path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"/><path d=\"M3 4h8\"/></svg><span class=\"section-name\">The client</span></h2>\n<div class=\"card field-stack\">\n<p class=\"chip-row\"><span class=\"chip chip--warning\" data-edit=\"customer.shown\" data-enum=\"shown\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/></svg><span class=\"chip-text\">Shown in part</span></span></p>\n<div class=\"field\"><p class=\"field-label\">What they said</p><p class=\"field-text\" data-edit=\"customer.reaction\" data-ph>What the client said. Their words where you have them, not your reading of them.</p></div>\n<div class=\"field\"><p class=\"field-label\">Support to deploy and scale</p><p class=\"field-text\" data-edit=\"customer.support\" data-ph>Whether you have the support you need to deploy, use or scale it, and from whom. Say so plainly when you do not.</p></div>\n</div>\n</div>\n<div>\n<h2 class=\"section-title\"><span class=\"section-no\">08</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"M8 14h.01\"/><path d=\"M12 14h.01\"/><path d=\"M16 14h.01\"/><path d=\"M8 18h.01\"/><path d=\"M12 18h.01\"/><path d=\"M16 18h.01\"/></svg><span class=\"section-name\">The next two months</span></h2>\n<div class=\"card field-stack\">\n<div class=\"field\"><p class=\"field-label\">Scaling</p><p class=\"field-text\" data-edit=\"plan.scaling\" data-ph>What gets scaled in the next two months, and along which axis: more of the same work, more of the pipeline, more environments.</p></div>\n<div class=\"field\"><p class=\"field-label\">Adoption by other teams</p><p class=\"field-text\" data-edit=\"plan.adoption\" data-ph>Which other teams take this up, and what has to be true before they can. Name them if you know them.</p></div>\n<div class=\"field\"><p class=\"field-label\">New functionality</p><p class=\"field-text\" data-edit=\"plan.newFunction\" data-ph>What the factory will do in two months that it cannot do today.</p></div>\n</div>\n</div>\n</section>\n<section class=\"section two-col\">\n<div>\n<h2 class=\"section-title\"><span class=\"section-no\">09</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/></svg><span class=\"section-name\">Evidence and measurement</span></h2>\n<div class=\"card\"><ul class=\"ref\" data-list=\"evidence\"><li data-row=\"evidence[0]\">\n<p class=\"ref-what\" data-edit=\"evidence[0].what\" data-ph>The claim this backs</p>\n<p class=\"ref-where\" data-edit=\"evidence[0].where\" data-ph>The system it lives in</p>\n<p class=\"ref-caveat\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/></svg><span data-edit=\"evidence[0].caveat\" data-ph data-empty=\"nothing weakens it\">What weakens it. Say it here rather than let a reviewer find it.</span></p>\n</li></ul>\n<div class=\"field field--block\">\n<p class=\"field-label\">Where it lives</p>\n<ul class=\"links\" data-list=\"links\"><li class=\"link\" data-row=\"links[0]\">\n<span class=\"link-kind\" data-edit=\"links[0].kind\" data-empty=\"What this link is\">Demo recording</span>\n<span class=\"link-url\" data-edit=\"links[0].url\" data-ph data-empty=\"not linked yet\">The recording a reviewer can watch</span>\n</li><li class=\"link\" data-row=\"links[1]\">\n<span class=\"link-kind\" data-edit=\"links[1].kind\" data-empty=\"What this link is\">Repository</span>\n<span class=\"link-url\" data-edit=\"links[1].url\" data-ph data-empty=\"not linked yet\">github.com/...</span>\n</li><li class=\"link\" data-row=\"links[2]\">\n<span class=\"link-kind\" data-edit=\"links[2].kind\" data-empty=\"What this link is\">Dashboard</span>\n<span class=\"link-url\" data-edit=\"links[2].url\" data-ph data-empty=\"not linked yet\">The board or dashboard with the numbers on it</span>\n</li><li class=\"link\" data-row=\"links[3]\">\n<span class=\"link-kind\" data-edit=\"links[3].kind\" data-empty=\"What this link is\">Evidence pack</span>\n<span class=\"link-url\" data-edit=\"links[3].url\" data-ph data-empty=\"not linked yet\">Where the evidence in this section lives</span>\n</li><li class=\"link\" data-row=\"links[4]\">\n<span class=\"link-kind\" data-edit=\"links[4].kind\" data-empty=\"What this link is\">LEAP record</span>\n<span class=\"link-url\" data-edit=\"links[4].url\" data-ph data-empty=\"not linked yet\">The programme's own record of this team</span>\n</li></ul>\n</div>\n</div>\n</div>\n<div>\n<h2 class=\"section-title\"><span class=\"section-no\">10</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\"/><path d=\"M9 18h6\"/><path d=\"M10 22h4\"/></svg><span class=\"section-name\">What we learned</span></h2>\n<div class=\"card\"><ol class=\"notes\" data-list=\"learnings\"><li data-row=\"learnings[0]\">\n<p class=\"note-title\"><span data-edit=\"learnings[0].title\" data-ph>What you know now that you did not before</span></p>\n<p class=\"note-text\" data-edit=\"learnings[0].text\" data-ph>One short paragraph. The surprising and the failed both count, and a failure with a reason reads stronger than a success with none.</p>\n</li></ol></div>\n</div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">11</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"/></svg><span class=\"section-name\">What is stuck</span></h2>\n<div class=\"card\"><ul class=\"issues\" data-list=\"issues\"><li class=\"issue\" data-row=\"issues[0]\">\n<p class=\"issue-what\" data-edit=\"issues[0].what\" data-ph>What is stuck, in one or two sentences.</p>\n<p class=\"issue-fix\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg><span data-edit=\"issues[0].fix\" data-ph data-empty=\"No way out of it yet.\">How it gets unblocked, if you know. Leave it out rather than invent one.</span></p>\n<p class=\"issue-needs\">Needs: <span data-edit=\"issues[0].needs\" data-ph data-empty=\"nothing from the programme\">What you need from the programme or the account</span></p>\n</li></ul></div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">12</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/></svg><span class=\"section-name\">If you are building the same factory</span></h2>\n<div class=\"card card--tip\"><p class=\"field-text\" data-edit=\"advice\" data-ph>What you would tell another team building the same factory to do differently. One paragraph, and the more specific the better.</p></div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">13</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/></svg><span class=\"section-name\">Two questions from the programme</span></h2>\n<div class=\"card grid-2\">\n<div class=\"qa\"><p class=\"qa-q\">Would you call this an AI Factory?</p><p class=\"qa-a\" data-edit=\"programme.factory\" data-ph>Would you call what you have built an AI Factory? One line.</p></div>\n<div class=\"qa\"><p class=\"qa-q\">How is the programme working for you?</p><p class=\"qa-a\" data-edit=\"programme.feedback\" data-ph>How is the programme working for you? One line, including the part that is not working.</p></div>\n</div>\n</section>\n<footer class=\"foot\">\n<p class=\"caveat\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/></svg><span data-edit=\"source.caveat\" data-ph>The honest limit of this submission, for example: tested across four sprints on one sub-stream.</span></p>\n<div class=\"foot-lines\">\n<p>AI/Run Mission 2026 \u00b7 Build your AI factory</p>\n<p>Written from one qualification meeting \u00b7 <span data-edit=\"source.date\" data-ph>date</span></p>\n</div>\n</footer>\n</main>\n<div class=\"nojs\" id=\"nojs\">\n<p><b>This is the document, not the editor.</b> Scripts are not running here, which is what a\nSharePoint or Teams preview does to a file. Download it and open it from your own machine to\nfill it in.</p>\n</div>\n<div class=\"tools\" id=\"tools\" hidden>\n<span class=\"tool-count\" id=\"tool-count\"></span>\n<button type=\"button\" class=\"tool\" id=\"tool-questions\" aria-pressed=\"false\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/></svg><span>Questions</span></button>\n<button type=\"button\" class=\"tool\" id=\"tool-slides\" aria-pressed=\"false\" title=\"Show the page as slides. Arrow keys move, Esc closes.\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2 3h20\"/><path d=\"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3\"/><path d=\"m7 21 5-5 5 5\"/></svg><span>Slides</span></button>\n<button type=\"button\" class=\"tool tool--white\" id=\"tool-edit\" aria-pressed=\"false\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/><path d=\"m15 5 4 4\"/></svg><span>Edit</span></button>\n<button type=\"button\" class=\"tool tool--go\" id=\"tool-save\" title=\"Saves the submission to your computer, ready to upload to your team page on Leap.\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 15V3\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><path d=\"m7 10 5 5 5-5\"/></svg><span>Download for Leap</span></button>\n</div>\n<aside class=\"qpanel\" id=\"qpanel\" aria-label=\"The questions this template asks\" hidden>\n<div class=\"qpanel-head\">\n<p class=\"qpanel-title\">What this template asks</p>\n<button type=\"button\" class=\"tool\" id=\"qpanel-close\" aria-label=\"Close the questions\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></button>\n</div>\n<div class=\"qpanel-body\" id=\"qpanel-body\"></div>\n</aside>";
var __config="{\"stamp\":\"source.date\",\"title\":\"{team.name} \u00b7 AI/RUN Mission 2026 \u00b7 Milestone 1\",\"storage\":\"milestone\",\"file\":{\"name\":[\"team.code\",\"team.name\"],\"number\":\"team.milestone\",\"named\":\"{name}-milestone-{no}.html\",\"unnamed\":\"milestone-{no}-submission.html\"},\"groups\":{\"foot\":\"Before you send\",\"other\":\"About the team\"},\"text\":{\"progress\":\" facts in this template are backed by a number or a source. \",\"framed\":\" This copy is open inside a SharePoint or Teams preview, and a browser refuses downloads from one.\",\"framedHow\":\"Download the file itself - in SharePoint, the Download on the file, not this page - open it from your machine, and everything works.\"},\"scale\":{\"now\":\"northStar.currentLevel\",\"target\":\"northStar.targetLevel\",\"max\":3,\"label\":\"AI maturity {now} of {max}, target {target}\"},\"steps\":{\"list\":\"stages\",\"field\":\"stage\",\"title\":\"title\",\"tip\":\"Click to change which SDLC stage this is. Shift-click goes back.\",\"types\":[[\"requirements\",\"Requirements & Analysis\",\"clipboard\"],[\"architecture\",\"Architecture & Design\",\"blocks\"],[\"engineering\",\"Engineering & Coding\",\"code\"],[\"quality\",\"Quality & Testing\",\"flask\"],[\"review\",\"Code Review\",\"branch\"],[\"documentation\",\"Documentation\",\"file\"]]},\"keep\":[\"stage\",\"status\",\"kind\",\"id\"],\"adds\":{\"team.people\":\"person\",\"context.aiTools\":\"tool\",\"architecture.pieces\":\"piece\",\"architecture.assets\":\"asset\",\"stages\":\"stage\",\"stages.tools\":\"tool\",\"stages.metrics\":\"metric\",\"costs.build\":\"cost line\",\"costs.run\":\"cost line\",\"evidence\":\"source\",\"learnings\":\"learning\",\"issues\":\"blocker\",\"links\":\"link\"},\"enums\":{\"metric-status\":[[\"measured\",\"Measured\",\"success\"],[\"estimated\",\"Estimated\",\"warning\"],[\"qualitative\",\"In place\",\"info\"],[\"baseline\",\"Baseline open\",\"muted\"],[\"untracked\",\"Not tracked\",\"muted\"],[\"planned\",\"Planned\",\"muted\"]],\"shown\":[[\"yes\",\"Shown to the client\",\"success\"],[\"partly\",\"Shown in part\",\"warning\"],[\"no\",\"Not shown yet\",\"muted\"]]},\"checks\":[[\"text\",\"team.tagline\",\"What the team delivers for the client\"],[\"text\",\"context.painPoint\",\"The delivery pain you started from\"],[\"anyText\",\"context.aiTools\",\"The AI tooling the project has\"],[\"text\",\"context.baseline\",\"The baseline period to compare against\"],[\"text\",\"northStar.goal\",\"The target state of the factory\"],[\"text\",\"northStar.clientOutcome\",\"The client business outcome\"],[\"set\",\"northStar.currentLevel\",\"The maturity level today\"],[\"set\",\"northStar.targetLevel\",\"The maturity level targeted\"],[\"minText\",\"stages\",\"At least two SDLC stages described\",[\"description\",2]],[\"inner\",\"stages\",\"At least one measured before and after\",{\"list\":\"metrics\",\"where\":{\"status\":\"measured\"},\"text\":[\"before\",\"after\"]}],[\"number\",\"keyNumbers#daily-active.value\",\"Daily active AI users\",{\"status\":\"keyNumbers#daily-active.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"number\",\"keyNumbers#ai-assisted.value\",\"AI-assisted deliverables\",{\"status\":\"keyNumbers#ai-assisted.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"number\",\"keyNumbers#cycle-time.value\",\"Cycle / lead time\",{\"status\":\"keyNumbers#cycle-time.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"number\",\"keyNumbers#hours-saved.value\",\"Hours saved per person\",{\"status\":\"keyNumbers#hours-saved.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"number\",\"keyNumbers#token-cost.value\",\"AI cost\",{\"status\":\"keyNumbers#token-cost.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"text\",\"architecture.summary\",\"How the solution is built\"],[\"text\",\"architecture.demo\",\"What the demo showed\"],[\"list\",\"architecture.assets\",\"Reuse from the EPAM AI Assets marketplace\"],[\"rowText\",\"costs.build\",\"What building it cost\",[\"what\",\"amount\"]],[\"allText\",\"plan\",\"Scaling, adoption and new functionality for the next two months\",[\"scaling\",\"adoption\",\"newFunction\"]],[\"list\",\"issues\",\"What is stuck\"],[\"set\",\"customer.shown\",\"Whether the client has seen it\"],[\"text\",\"customer.support\",\"Support to deploy and scale\"],[\"text\",\"programme.factory\",\"Whether the team calls this an AI Factory\"],[\"text\",\"programme.feedback\",\"How the programme is working for the team\"],[\"min\",\"evidence\",\"Where the evidence lives\",1],[\"min\",\"learnings\",\"Three learnings or more\",3],[\"someText\",\"links\",\"At least one artifact linked\",\"url\"],[\"text\",\"advice\",\"What you would tell another team\"],[\"text\",\"source.caveat\",\"The honest limit of the claim\"]],\"questions\":{\"team.name\":\"Team name as the client and the programme know it.\",\"team.code\":\"Programme team code, e.g. 0042-ACME-K9TR. Null when the team does not know it, and then it is not printed.\",\"team.tagline\":\"One sentence: what this team delivers for the client.\",\"team.account\":\"Account or client name, if it may be named.\",\"team.coach\":\"The AI coach working with this team.\",\"team.size\":\"Team size as a phrase.\",\"team.people.name\":\"The person's name, as the project writes it.\",\"team.people.role\":\"Their role, as the project names it: Business analyst, Backend engineer, QA. The role, not what they worked on. Leave it out rather than guess.\",\"context.painPoint\":\"The biggest delivery pain before this programme, in one or two sentences. Concrete: what took too long, what kept breaking, what the client complained about.\",\"context.aiTools\":\"What AI tooling the project actually has access to, licences and platforms.\",\"context.baseline\":\"The period the after-numbers are compared against.\",\"northStar.goal\":\"The target state in three or four sentences: which SDLC stages become agentic, what humans keep governing.\",\"northStar.currentLevel\":\"The team's AI maturity TODAY, on the programme's AI maturity scale: how far AI runs the team's delivery as a whole, not how much one person uses a tool. From 1 to 3, one decimal allowed: 2.9 is a real answer. The target is 3 for every team.\",\"northStar.shiftFrom\":\"How the work is done today, in one sentence.\",\"northStar.shiftTo\":\"How it is done once the factory is in place, in one sentence.\",\"northStar.clientOutcome\":\"The client business outcome this is connected to. Money, risk or speed, not adoption.\",\"architecture.summary\":\"How it is built, in one paragraph: what the pieces are, what triggers what, where the AI sits and where a human does. Name the platform each piece runs on.\",\"architecture.pieces.name\":\"What the piece is called.\",\"architecture.pieces.tool\":\"What it runs on.\",\"architecture.pieces.role\":\"What it does, in a few words.\",\"architecture.assets.name\":\"The asset as the marketplace names it.\",\"architecture.assets.use\":\"What you used it for, and whether it survived contact with the project.\",\"architecture.demo\":\"What the demo showed, step by step, in the order it was shown. This is the sentence a reviewer reads when they cannot open the recording, so write the RUN, not the feature list.\",\"stages.title\":\"Overrides the stage label when the team calls it something of its own.\",\"stages.tools\":\"The tools doing the work.\",\"stages.description\":\"One paragraph: what triggers the agent, what it does, what a human reviews or decides. Write the workflow, not the tool's marketing.\",\"stages.metrics.label\":\"What is being measured.\",\"stages.metrics.before\":\"The baseline value with its unit.\",\"stages.metrics.after\":\"The current value with its unit.\",\"stages.metrics.status\":\"How true this number is. `measured` needs before, after, period and method. Never dress an estimate as a measurement.\",\"stages.metrics.method\":\"How it was counted: Jira label, telemetry, manual count, survey. A reviewer will ask.\",\"stages.metrics.period\":\"Over what stretch it was measured.\",\"stages.metrics.value\":\"A single value, when there is no before and after.\",\"stages.metrics.note\":\"One line of context, including why a number is missing.\",\"keyNumbers#daily-active.status\":\"How true this number is. A `measured` one needs a method and a period behind it, and `untracked` is an answer - a better one than a figure nobody can defend.\",\"keyNumbers#ai-assisted.status\":\"How true this number is.\",\"keyNumbers#cycle-time.status\":\"How true this number is.\",\"keyNumbers#hours-saved.status\":\"How true this number is.\",\"keyNumbers#token-cost.status\":\"How true this number is.\",\"keyNumbers#daily-active.value\":\"Share of team members using AI tools daily, and how that was measured.\",\"keyNumbers#daily-active.note\":\"How the daily-active share was counted: a licence report, a telemetry query, a show of hands. Or why it is not tracked.\",\"keyNumbers#ai-assisted.value\":\"Share of core deliverables (stories, PRs, test cases) meaningfully AI-assisted this sprint.\",\"keyNumbers#ai-assisted.note\":\"How the AI-assisted share was counted: a Jira label, a PR tag, a manual count. Or why it is not tracked.\",\"keyNumbers#cycle-time.value\":\"Change in cycle or lead time against the baseline period. Negative is faster.\",\"keyNumbers#cycle-time.note\":\"How cycle or lead time was counted, and over which period. Or why it is not tracked.\",\"keyNumbers#hours-saved.value\":\"Engineering hours saved per person per week, and how that was arrived at.\",\"keyNumbers#hours-saved.note\":\"How the hours saved were arrived at: a survey, a timing exercise, an estimate said to be one. Or why it is not tracked.\",\"keyNumbers#token-cost.value\":\"AI token or tool cost per sprint or per month. Required for a Level 3 claim.\",\"keyNumbers#token-cost.note\":\"Where the AI cost figure comes from: the platform's own billing, an account estimate. Required for a Level 3 claim.\",\"costs.build.what\":\"One kind of cost that went into building it: people, licences, money. One line each \u2014 add a line for every kind you have, delete the ones you do not.\",\"costs.build.amount\":\"The figure, in whatever unit you hold it: 6 people-weeks, \u00a34k, nothing extra. Leave it empty rather than invent one \u2014 the line still counts.\",\"costs.build.status\":\"How true this figure is. An estimate said to be an estimate is worth more than a number nobody can defend.\",\"costs.run.what\":\"What it takes to keep it running, per month or per sprint \u2014 the part the AI cost tile cannot hold: a cost that moves with volume, a raise requested, review time somebody pays for. Delete every line here if the tile above is the whole answer.\",\"costs.run.amount\":\"The figure, per month or per sprint. Empty is an answer too.\",\"costs.run.status\":\"How true this figure is.\",\"customer.shown\":\"Have you shown the solution to the client. `partly` for a demo to one person or one part of it.\",\"customer.reaction\":\"What they said. Their words where you have them, not your reading of them.\",\"customer.support\":\"Whether you have the support you need to deploy, use or scale it \u2014 and from whom. Say so plainly when you do not.\",\"plan.scaling\":\"What gets scaled, and along which axis: more of the same work, more of the pipeline, more environments.\",\"plan.adoption\":\"Which other teams take this up, and what has to be true before they can. Name them if you know them.\",\"plan.newFunction\":\"What the factory will do in two months that it cannot do today.\",\"evidence.what\":\"The claim this backs.\",\"evidence.where\":\"The system it lives in.\",\"evidence.caveat\":\"What weakens it. Say it here rather than let a reviewer find it.\",\"links.kind\":\"What this link is: the demo recording, the repository, the dashboard a reviewer opens.\",\"links.url\":\"The address itself. A reviewer will click it, so it has to be one they can reach - and a page nobody outside the team can open is worth saying so about.\",\"learnings.title\":\"The learning in one line, as a finding rather than a topic.\",\"learnings.text\":\"One short paragraph: what happened, and what you concluded from it.\",\"issues.what\":\"What is stuck, in one or two sentences.\",\"issues.fix\":\"How it gets unblocked, if the team knows. Leave it out rather than invent one: \\\"we do not know yet\\\" is the answer the programme is asking for.\",\"issues.needs\":\"What you need from the programme or the account to move it.\",\"advice\":\"What you would tell another team building the same factory to do differently. One paragraph.\",\"programme.factory\":\"Would you call what you have built an AI Factory? One line. A straight \\\"not yet, because...\\\" is a better answer than a yes, and the programme reads it that way.\",\"programme.feedback\":\"How is the programme working for you? One line. Say the part that is not working: this is the only channel the programme has for it.\",\"source.caveat\":\"The honest limit of this submission, e.g. tested across 4 sprints on one sub-stream.\",\"northStar.targetLevel\":\"Where the team expects to be by the end of the programme, on the same scale. 3 by default, the top of the scale and the programme's goal; a team that knows it will not get there says so.\"},\"slides\":{\"cover\":\".head\",\"parts\":\".page > .section:not(.two-col), .page > .two-col > div\",\"split\":\"stages\",\"title\":\".section-title\",\"hide\":\".theme,.progress,.head-top\",\"coverTitle\":\".ident\",\"coverSub\":\".ident-code\",\"coverLead\":\".tagline\",\"coverFacts\":\".facts .fact\",\"coverFactsBox\":\".facts\",\"coverPeople\":\".people-strip .person\",\"coverPeopleBox\":\".people-strip\",\"personName\":\".person-name\",\"personRole\":\".person-role\",\"splitTitle\":\".step-name\",\"brand\":\".head .brand-word\",\"eyebrow\":\"AI/RUN Mission 2026 \u00b7 Milestone 1\",\"teamLabel\":\"The team\",\"peopleLabel\":\"People\",\"thanks\":{\"title\":\"Thank you\",\"text\":\"Questions and discussion\",\"team\":\"Team\"},\"store\":\"presentation.hidden\",\"needs\":{\".link\":\".link-url\",\".line\":\".line-what,.line-amount\"}}}";

function __theme(){
var root=document.documentElement, key="page-theme";
try{ var cfg=JSON.parse(document.getElementById("page-config").textContent); if(cfg&&cfg.storage) key=cfg.storage+"-theme"; }catch(e){}
try{ var saved=localStorage.getItem(key); if(saved) root.setAttribute("data-theme",saved); }catch(e){}
document.addEventListener("click",function(ev){
if(!ev.target||!ev.target.closest||!ev.target.closest("#theme-toggle")) return;
var dark=getComputedStyle(root).colorScheme==="dark"||root.getAttribute("data-theme")==="dark";
if(!root.getAttribute("data-theme")){
dark=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;
}
var next=dark?"light":"dark"; root.setAttribute("data-theme",next);
try{ localStorage.setItem(key,next); }catch(e){}
});
}

function __editor(){
"use strict"; var ROOT=document.documentElement; ROOT.setAttribute("data-js","");
function shape(doc){
var out=[], seen={}, i, n=0;
var styles=doc.getElementsByTagName("style"); for(i=0;i<styles.length;i++) n+=styles[i].textContent.length;
out.push("css:"+n); n=0; var scripts=doc.getElementsByTagName("script");
for(i=0;i<scripts.length;i++) if(!scripts[i].type||scripts[i].type.indexOf("json")<0) n+=scripts[i].textContent.length;
out.push("js:"+n); var cfg=doc.getElementById("page-config"); out.push("cfg:"+(cfg?cfg.textContent.length:0));
var slots=doc.querySelectorAll("[data-edit]"), k;
for(i=0;i<slots.length;i++){
if(slots[i].getAttribute("data-enum")==="step") continue;
k=String(slots[i].getAttribute("data-edit")).replace(/\[\d+\]/g,"");
if(!seen[k]){ seen[k]=1; out.push(k); }
}
var lists=doc.querySelectorAll("[data-list]");
for(i=0;i<lists.length;i++){
k="list:"+String(lists[i].getAttribute("data-list")).replace(/\[\d+\]/g,"");
if(!seen[k]){ seen[k]=1; out.push(k); }
}
var bar=doc.getElementById("tools"); out.push("bar:"+(bar?bar.innerHTML.replace(/>[^<]*</g,"><").length:0));
return out.sort().join("|");
}
var CFG={};
try{ CFG=JSON.parse(document.getElementById("page-config").textContent)||{}; }catch(e){ CFG={}; }
var DRAFT=(CFG.storage||"page")+"-draft:"+location.pathname, restoredAt=0;
try{
var keep=JSON.parse(localStorage.getItem(DRAFT)||"null");
if(keep&&typeof keep.doc==="string"&&/<html[\s>]/i.test(keep.doc)){
var mine=shape(document), theirs=null;
try{ theirs=shape(new DOMParser().parseFromString(keep.doc,"text/html")); }catch(e){}
if(theirs===mine){
ROOT.innerHTML=keep.doc.replace(/^[\s\S]*?<html[^>]*>/i,"").replace(/<\/html>[\s\S]*$/i,"");
restoredAt=Number(keep.at)||0;
}
}
}catch(e){}
var ISLAND=document.getElementById("page-data");
if(!ISLAND) return;
var DATA; try{ DATA=JSON.parse(ISLAND.textContent); }catch(e){ return; }
var ENUMS=CFG.enums||{}, QUESTIONS=CFG.questions||{}, CHECKS=CFG.checks||[], STEP=CFG.steps||null;
var SCALE=CFG.scale||null, FILE=CFG.file||{}, GROUPS=CFG.groups||{}, TEXT=CFG.text||{};
/* the icons a step can wear, by the name the config gives it */
var ICONS={
"clipboard":"<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"M12 11h4\"/><path d=\"M12 16h4\"/><path d=\"M8 11h.01\"/><path d=\"M8 16h.01\"/>",
"blocks":"<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"/><path d=\"M12 12V8\"/>",
"code":"<path d=\"m16 18 6-6-6-6\"/><path d=\"m8 6-6 6 6 6\"/>",
"flask":"<path d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2\"/><path d=\"M6.453 15h11.094\"/><path d=\"M8.5 2h7\"/>",
"branch":"<circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"/><path d=\"M6 9v12\"/>",
"file":"<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M10 9H8\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/>"
};
function fmt(pattern,values){
return String(pattern||"").replace(/\{(\w+)\}/g,function(all,k){ return Object.prototype.hasOwnProperty.call(values,k)?String(values[k]):all; });
}
var askedAt=function(path){ return QUESTIONS[String(path).replace(/\[\d+\]/g,"")]||""; };
/* WHAT COUNTS AS FILLED IN IS THE PAGE'S OWN BUSINESS. Each rule in the config is
 * [kind, path, label, argument]; the kinds below are the only logic this file holds. A value that
 * is still one of the page's own prompts does not count. */
function completeness(blank){
var no=blank||new Set();
var txt=function(v){ return typeof v==="string"&&v.trim()!==""&&!no.has(v.trim()); };
var missing=[], have=0, total=0;
CHECKS.forEach(function(c){
var kind=c[0], path=c[1], arg=c[3], v=get(path), list=Array.isArray(v)?v:[], ok=false;
if(kind==="text") ok=txt(v);
else if(kind==="set") ok=!!v;
else if(kind==="number") ok=txt(v)&&/\d/.test(v)&&!(arg&&arg.status&&(arg.open||[]).indexOf(get(arg.status))>=0);
else if(kind==="list") ok=Array.isArray(v);
else if(kind==="min") ok=list.length>=arg;
else if(kind==="anyText") ok=list.some(txt);
else if(kind==="someText") ok=list.some(function(r){ return !!r&&txt(r[arg]); });
else if(kind==="minText") ok=list.filter(function(r){ return !!r&&txt(r[arg[0]]); }).length>=arg[1];
else if(kind==="every") ok=list.length>0&&list.every(function(r){ return !!r&&!!r[arg]; });
else if(kind==="allText") ok=arg.every(function(k){ return !!v&&txt(v[k]); });
else if(kind==="rowText") ok=Array.isArray(v)?list.some(function(r){ return arg.some(function(k){ return !!r&&txt(r[k]); }); }):txt(v);
else if(kind==="inner") ok=list.some(function(r){
return ((r&&r[arg.list])||[]).some(function(x){
if(!x) return false;
for(var k in arg.where) if(x[k]!==arg.where[k]) return false;
return arg.text.every(function(f){ return txt(x[f]); });
});
});
total+=1; if(ok) have+=1; else missing.push({id:path,label:c[2]});
});
return {have:have,total:total,share:total?have/total:0,missing:missing};
}
function blanks(){
var out=new Set();
Array.prototype.forEach.call(document.querySelectorAll("[data-ph]"),function(el){ out.add(textOf(el).trim()); });
return out;
}
var dirty=false;
function reach(path, make){
var parts=String(path).split("."), obj=DATA, i;
for(i=0;i<parts.length;i++){
var key=parts[i], idx=null, hash=key.indexOf("#"), m=key.match(/^(.*)\[(\d+)\]$/);
if(hash>0){
var arr=obj[key.slice(0,hash)]; if(!arr) return null; var id=key.slice(hash+1), row=null, j;
for(j=0;j<arr.length;j++) if(arr[j] && arr[j].id===id) row=arr[j];
if(!row){ if(!make) return null; row={id:id}; arr.push(row); }
obj=row; continue;
}
if(m){ key=m[1]; idx=Number(m[2]); }
if(i===parts.length-1 && idx===null) return {on:obj,key:key};
var next=obj[key];
if(next==null){ if(!make) return null; next=(idx===null?{}:[]); obj[key]=next; }
if(idx!==null){
if(i===parts.length-1) return {on:next,key:idx};
if(next[idx]==null){ if(!make) return null; next[idx]={}; }
obj=next[idx];
} else obj=next;
}
return null;
}
function get(path){ var r=reach(path,false); return r?r.on[r.key]:undefined; }
function set(path,value){ var r=reach(path,true); if(r) r.on[r.key]=value; }
var slots=function(){ return Array.prototype.slice.call(document.querySelectorAll("[data-edit]")); };
function slotKey(el){ return String(el.getAttribute("data-edit")||"").replace(/\[\d+\]/g,""); }
function editSlots(el){
var out=(el.nodeType===1&&el.hasAttribute("data-edit"))?[el]:[];
return out.concat(Array.prototype.slice.call(el.querySelectorAll("[data-edit]")));
}
var PROMPTS={};
/* A SLOT THAT HAS AN ANSWER IN IT IS NOT A PROMPT, whatever its attributes say. Whoever filled
 * the page may have left data-ph where they found it, and then the counter reports a full page as
 * mostly empty and offers to select-all-and-replace what somebody came to correct. The page settles it from what it can see: a slot whose text is no longer the
 * prompt this file shipped has been answered. Runs once, before anything is counted. */
function adoptAnswers(){
  slots().forEach(function(el){
    var kind=el.getAttribute("data-enum"); if(kind==="step") return;
    /* The data block is the one witness that cannot have been overwritten by whoever filled the
     * page: every edit and every save writes it from what the reader sees, so where it holds a value
     * and the markup shows something else, the markup is what was left behind. */
    var v=get(el.getAttribute("data-edit"));
    if(v===null||v===undefined||typeof v==="object"||String(v).trim()==="") return;
    if(kind){
      var opt=(ENUMS[kind]||[]).filter(function(o){ return o[0]===v; })[0]; if(!opt) return;
      el.className=el.className.replace(/chip--\w+/,"chip--"+opt[2]);
      var label=el.querySelector(".chip-text"); if(label) label.textContent=opt[1];
      el.removeAttribute("data-ph"); return;
    }
    el.removeAttribute("data-ph");
    if(el.hasAttribute("data-num")){
      var n=numIn(el,v); if(n===null) n=v; else if(n!==v) set(el.getAttribute("data-edit"),n);
      if(textOf(el).trim()!==String(n)) el.textContent=String(n); return;
    }
    if(el.querySelector("[data-edit]")) return;
    var other=Array.prototype.filter.call(el.children,function(c){ return !(c.classList&&c.classList.contains("row-del")); });
    if(other.length) return;
    if(textOf(el).trim()!==String(v).trim()){
      var del=el.querySelector(":scope > .row-del"); el.textContent=String(v); if(del) el.appendChild(del);
    }
    el.classList.remove("tag--empty","field-text--empty");
  });
}
function capturePrompts(){
var add=function(el){
if(!el.hasAttribute("data-ph")) return;
var k=slotKey(el); if(!(k in PROMPTS)) PROMPTS[k]=el.textContent;
};
Array.prototype.forEach.call(document.querySelectorAll("template[data-row-template]"),function(t){
var root=t.content.firstElementChild; if(root) editSlots(root).forEach(add);
}); slots().forEach(add);
}
function textOf(el){
var s="",i,n;
for(i=0;i<el.childNodes.length;i++){
n=el.childNodes[i];
if(n.nodeType===1&&n.classList&&n.classList.contains("row-del")) continue;
s+=n.textContent;
}
return s;
}
var answered=function(el){ return !el.hasAttribute("data-ph") && textOf(el).trim()!==""; };
function redrawScale(){
if(!SCALE) return;
var max=Number(SCALE.max)||1, now=Number(get(SCALE.now))||0;
/* A pinned target is the top of the scale, whatever the data says: nobody edits it. */
if(SCALE.pin&&SCALE.target) set(SCALE.target,max);
var target=Number(get(SCALE.target))||0;
var fill=document.querySelector(".meter-fill"), mark=document.querySelector(".meter-target");
if(fill) fill.style.width=(now/max*100)+"%";
if(mark) mark.style.left=(target/max*100)+"%";
var score=document.querySelector(".scale-score");
if(score&&score.firstChild&&score.firstChild.nodeType===3) score.firstChild.nodeValue=String(now);
var of=score&&score.querySelector(".scale-of");
if(of) of.textContent=target?" → "+String(target):"";
var meter=document.querySelector(".meter[role=meter]");
if(meter){
meter.setAttribute("aria-valuenow",String(now));
if(SCALE.label) meter.setAttribute("aria-label",fmt(SCALE.label,{now:now,max:max,target:target}));
}
}
function redrawProgress(){
var c=completeness(blanks()), pct=Math.round(c.share*100);
var box=document.querySelector(".progress"); if(!box) return c;
var bar=box.querySelector(".progress-bar span"); if(bar) bar.style.width=pct+"%";
var text=box.querySelector(".progress-text"); if(!text) return c;
var open=c.missing.length
? "Still open: "+c.missing.slice(0,6).map(function(m){return m.label.toLowerCase();}).join(", ")+(c.missing.length>6?", and "+(c.missing.length-6)+" more":"")+"."
: "Nothing is outstanding."; text.innerHTML="";
var b=document.createElement("strong"); b.textContent=c.have+" of "+c.total; text.appendChild(b);
text.appendChild(document.createTextNode((TEXT.progress||" of the items on this page are filled in. ")+open));
return c;
}
function retitle(){
if(!CFG.title) return; var ok=true;
var t=String(CFG.title).replace(/\{([^{}]+)\}/g,function(all,k){ var x=get(k); if(typeof x!=="string"||!x.trim()){ ok=false; return all; } return x.trim(); });
if(ok) document.title=t;
}
function sync(){
retitle(); var c=redrawProgress(); var n=document.getElementById("tool-count");
if(n&&c) n.textContent=c.have+" of "+c.total+" answered";
paintQuestions();
if(dirty) scheduleDraft();
}
function onFocus(e){
var el=e.target.closest && e.target.closest("[data-edit]"); if(!el) return;
if(!el.hasAttribute("data-ph")) return;
var r=document.createRange(); r.selectNodeContents(el); var del=el.querySelector(":scope > .row-del");
if(del) r.setEndBefore(del);
var sel=window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
}
function onInput(e){
var el=e.target.closest && e.target.closest("[data-edit]"); if(!el) return; el.removeAttribute("data-ph");
var text=textOf(el).replace(/\s+$/,"");
if(el.hasAttribute("data-row")&&ROOT.hasAttribute("data-editing")&&!el.querySelector(":scope > .row-del")) armRow(el);
if(el.hasAttribute("data-num")){
var live=numOf(el);
if(live!==null){ set(el.getAttribute("data-edit"), live); redrawScale(); }
dirty=true; sync(); return;
}
set(el.getAttribute("data-edit"), text===""?null:text); dirty=true; sync();
}
function numOf(el){
var text=textOf(el).replace(/,/g,".").replace(/[^0-9.]/g,"");
return numIn(el,parseFloat(text));
}
/* A number slot keeps one decimal inside its range, whether it was typed or arrived in the data:
 * 2.9 stays 2.9, 2.94 becomes 2.9, 7 becomes the top of the range. */
function numIn(el,v){
var n=Number(v); if(v===null||v===""||isNaN(n)) return null;
var range=(el.getAttribute("data-num")||"").split("-"), lo=Number(range[0]), hi=Number(range[1]);
return Math.min(hi,Math.max(lo,Math.round(n*10)/10));
}
/* Rows drawn from the data come after adoptAnswers, so every number slot is settled once more here. */
function settleNumbers(){
Array.prototype.forEach.call(document.querySelectorAll("[data-edit][data-num]"),function(el){
if(el.closest("template")) return;
var path=el.getAttribute("data-edit"), v=get(path), n=numIn(el,v); if(n===null) return;
if(n!==v) set(path,n); if(textOf(el).trim()!==String(n)) el.textContent=String(n);
});
}
function onBlur(e){
var el=e.target.closest && e.target.closest("[data-edit]"); if(!el) return;
if(!el.hasAttribute("data-num")) return;
var range=el.getAttribute("data-num").split("-"), lo=Number(range[0]); var n=numOf(el);
if(n===null) n=Number(get(el.getAttribute("data-edit")))||lo;
el.textContent=String(n); set(el.getAttribute("data-edit"), n); dirty=true; redrawScale(); sync();
}
function onEnum(e){
if(!ROOT.hasAttribute("data-editing")) return;
var el=e.target.closest && e.target.closest("[data-enum]"); if(!el) return; e.preventDefault();
if(el.getAttribute("data-enum")==="step"){ turnStep(el,e.shiftKey?-1:1); return; }
var opts=ENUMS[el.getAttribute("data-enum")]||[], path=el.getAttribute("data-edit");
var cur=get(path), at=0, i;
for(i=0;i<opts.length;i++) if(opts[i][0]===cur) at=i;
var step=e.shiftKey?-1:1, next=opts[(at+step+opts.length)%opts.length]; set(path,next[0]);
el.className=el.className.replace(/chip--\w+/,"chip--"+next[2]);
var label=el.querySelector(".chip-text"); if(label) label.textContent=next[1]; el.removeAttribute("data-ph");
dirty=true; sync();
}
function rows(listEl){
return Array.prototype.filter.call(listEl.children, function(c){ return c.hasAttribute && c.hasAttribute("data-row"); });
}
function reindex(listEl){
var base=listEl.getAttribute("data-list");
rows(listEl).forEach(function(row,i){
var from=row.getAttribute("data-row"), to=base+"["+i+"]";
if(from===to) return;
var nodes=[row].concat(Array.prototype.slice.call(row.querySelectorAll("[data-edit],[data-row],[data-list]")));
nodes.forEach(function(n){
["data-edit","data-row","data-list"].forEach(function(a){
var v=n.getAttribute(a);
if(v && v.indexOf(from)===0) n.setAttribute(a,to+v.slice(from.length));
});
});
});
}
var KEEP={}; (CFG.keep||["id"]).forEach(function(k){ KEEP[k]=1; });
function blankLike(value){
if(value===null||typeof value!=="object") return "";
if(Array.isArray(value)) return [];
var out={},k;
for(k in value) if(Object.prototype.hasOwnProperty.call(value,k)) out[k]=KEEP[k]?value[k]:(typeof value[k]==="boolean"?false:null);
return out;
}
var TPL=new WeakMap();
function captureTemplates(){
Array.prototype.forEach.call(document.querySelectorAll("[data-list]"),function(listEl){
if(TPL.has(listEl)) return;
var holder=listEl.querySelector(":scope > template[data-row-template]"), dom=null, shape=null;
if(holder&&holder.content.firstElementChild){
dom=holder.content.firstElementChild.cloneNode(true);
try{ shape=JSON.parse(holder.getAttribute("data-row-shape")); }catch(e){}
}else{
var first=rows(listEl)[0]; if(!first) return; dom=first.cloneNode(true);
Array.prototype.forEach.call(dom.querySelectorAll(".row-del,.row-add"),function(b){ b.parentNode.removeChild(b); });
Array.prototype.forEach.call(dom.querySelectorAll("[contenteditable],[data-tip],[aria-describedby]"),function(e){ e.removeAttribute("contenteditable"); e.removeAttribute("data-tip"); e.removeAttribute("aria-describedby"); });
dom.removeAttribute("contenteditable"); dom.removeAttribute("data-tip"); dom.removeAttribute("aria-describedby");
var arr=get(listEl.getAttribute("data-list"));
shape=(Array.isArray(arr)&&arr.length)?blankLike(arr[0]):(dom.hasAttribute("data-edit")?"":{});
holder=document.createElement("template"); holder.setAttribute("data-row-template","");
holder.setAttribute("data-row-shape",JSON.stringify(shape));
holder.content.appendChild(dom.cloneNode(true)); listEl.appendChild(holder);
}
TPL.set(listEl,{dom:dom,shape:shape});
});
}
function addRow(listEl){
var existing=rows(listEl), base=listEl.getAttribute("data-list"), tpl=TPL.get(listEl);
var source=(tpl&&tpl.dom)||(existing.length?existing[existing.length-1]:null);
if(!source) return;
var arr=get(base); if(!Array.isArray(arr)){ arr=[]; set(base,arr); }
var copy=source.cloneNode(true);
Array.prototype.forEach.call(copy.querySelectorAll(".row-del,.row-add"),function(b){ b.parentNode.removeChild(b); });
editSlots(copy).forEach(function(n){
if(n.hasAttribute("data-enum")) return;
var q=PROMPTS[slotKey(n)]; n.textContent=q||"";
if(q) n.setAttribute("data-ph",""); else n.removeAttribute("data-ph");
});
listEl.insertBefore(copy,existing.length?source.nextSibling:listEl.querySelector(":scope > template[data-row-template]"));
arr.splice(existing.length,0,blankLike(tpl&&tpl.shape!=null?tpl.shape:(existing.length?arr[existing.length-1]:null)));
editSlots(copy).forEach(function(n){
if(!n.hasAttribute("data-enum")) return;
var opts=ENUMS[n.getAttribute("data-enum")]||[], lab=n.querySelector(".chip-text"), i;
if(!lab) return;
for(i=0;i<opts.length;i++) if(opts[i][1]===lab.textContent) set(n.getAttribute("data-edit"),opts[i][0]);
}); reindex(listEl); if(STEP&&base===STEP.list) freshStep(copy); armLists(); armEditing(copy); dirty=true; sync();
var first=copy.querySelector("[data-edit]")||copy;
if(first.focus) first.focus();
}
function delRow(row){
var listEl=row.parentNode, base=listEl.getAttribute("data-list"); var at=rows(listEl).indexOf(row);
var arr=get(base); if(Array.isArray(arr)) arr.splice(at,1); else { arr=[]; set(base,arr); }
row.parentNode.removeChild(row); reindex(listEl); dirty=true; sync();
}
/* THE DATA BLOCK HOLDS EVERY ITEM; THE MARKUP MAY HOLD ONE. Whoever fills the page may put seven
 * items into the JSON and one row into the markup, and a reader then sees one item out of seven. So the page
 * draws what the data holds: a list with fewer rows than its array gets the missing rows, cloned
 * the way "+ Add" clones them and filled from the data. Rows already on the page are never
 * rewritten or removed. Runs once, before anything is counted. */
function fillSlot(n){
var v=get(n.getAttribute("data-edit")), i;
if(n.hasAttribute("data-enum")){
var opts=ENUMS[n.getAttribute("data-enum")]||[], lab=n.querySelector(".chip-text");
for(i=0;i<opts.length;i++) if(opts[i][0]===v){
n.className=n.className.replace(/chip--\w+/,"chip--"+opts[i][2]); if(lab) lab.textContent=opts[i][1];
}
return;
}
if(v!==null&&v!==undefined&&typeof v!=="object"&&String(v).trim()!==""){
n.textContent=String(v); n.removeAttribute("data-ph"); n.classList.remove("tag--empty","field-text--empty"); return;
}
var q=PROMPTS[slotKey(n)]; n.textContent=q||"";
if(q) n.setAttribute("data-ph",""); else n.removeAttribute("data-ph");
}
/* A ROW THE PAGE SHIPPED CAN BE THE WRONG SHAPE FOR ITS DATA. The second card's metrics ship as
 * "no number yet" rows, and a metric with a before and an after written into one of them has nowhere
 * to show those. When a row of the same kind anywhere on the page (the same list path, whatever card
 * it sits in) fits more of what the item actually says, the shipped row is redrawn in that shape, in
 * place, and filled from the data. Keys the config keeps as defaults (a status, a kind) do not count:
 * an empty row with only its default status stays the example it shipped as. */
function fitOf(item,proto){
var keys={}, k, n=0;
editSlots(proto).forEach(function(el){ keys[String(el.getAttribute("data-edit")).split(".").pop()]=1; });
for(k in item) if(!KEEP[k]&&keys[k]&&item[k]!==null&&item[k]!==""&&typeof item[k]!=="object") n++;
return n;
}
function kindOf(path){ return String(path).replace(/\[\d+\]/g,"[]"); }
function refitRows(){
var lists=Array.prototype.slice.call(document.querySelectorAll("[data-list]"));
lists.forEach(function(listEl){
var base=listEl.getAttribute("data-list"), arr=get(base); if(!Array.isArray(arr)) return;
var kind=kindOf(base), protos=[];
lists.forEach(function(other){ if(kindOf(other.getAttribute("data-list"))===kind) protos=protos.concat(protosOf(other)); });
rows(listEl).forEach(function(row,i){
var item=arr[i]; if(item===null||typeof item!=="object"||Array.isArray(item)) return;
if(row.querySelector("[data-list]")) return;
var best=row, score=fitOf(item,row);
protos.forEach(function(p){ var n=fitOf(item,p); if(n>score){ score=n; best=p; } });
if(best===row) return;
var copy=best.cloneNode(true);
Array.prototype.forEach.call(copy.querySelectorAll(".row-del,.row-add"),function(x){ x.parentNode.removeChild(x); });
copy.setAttribute("data-row",row.getAttribute("data-row"));
var from=best.getAttribute("data-row");
if(from) Array.prototype.forEach.call(copy.querySelectorAll("[data-edit],[data-row],[data-list]"),function(n){
["data-edit","data-row","data-list"].forEach(function(at){ var v=n.getAttribute(at); if(v&&v.indexOf(from)===0) n.setAttribute(at,row.getAttribute("data-row")+v.slice(from.length)); });
});
listEl.replaceChild(copy,row); reindex(listEl);
editSlots(copy).forEach(function(n){ if(!n.querySelector("[data-edit]")) fillSlot(n); });
});
});
}
/* A list can ship rows of different shapes - a metric with a before and an after, one with a single
 * value - so each item is drawn from the row whose slots fit the most of what it holds. */
function bestFor(item,protos){
if(item===null||typeof item!=="object") return protos[0];
var best=protos[0], score=-1;
protos.forEach(function(p){
var keys={}, k, n=0;
editSlots(p).forEach(function(el){ keys[String(el.getAttribute("data-edit")).split(".").pop()]=1; });
for(k in item) if(keys[k]&&item[k]!==null&&item[k]!==""&&typeof item[k]!=="object") n++;
if(n>score){ score=n; best=p; }
});
return best;
}
function protosOf(listEl){
var out=rows(listEl).slice(), holder=listEl.querySelector(":scope > template[data-row-template]");
if(holder&&holder.content.firstElementChild) out.push(holder.content.firstElementChild);
return out;
}
function drawRow(listEl,proto){
var copy=proto.cloneNode(true);
Array.prototype.forEach.call(copy.querySelectorAll(".row-del,.row-add"),function(b){ b.parentNode.removeChild(b); });
listEl.insertBefore(copy,listEl.querySelector(":scope > template[data-row-template]"));
return copy;
}
function growLists(){
for(var pass=0;pass<20;pass++){
captureTemplates(); var grew=false;
Array.prototype.forEach.call(document.querySelectorAll("[data-list]"),function(listEl){
var base=listEl.getAttribute("data-list"), arr=get(base), have=rows(listEl);
if(!Array.isArray(arr)||arr.length<=have.length) return;
var protos=protosOf(listEl); if(!protos.length) return;
var made=[], i;
for(i=have.length;i<arr.length;i++) made.push(drawRow(listEl,bestFor(arr[i],protos)));
reindex(listEl);
made.forEach(function(row){
/* a drawn card's own lists are its data's, not the copied card's */
Array.prototype.forEach.call(row.querySelectorAll("[data-list]"),function(inner){
var want=get(inner.getAttribute("data-list")), inProtos=protosOf(inner);
if(!inProtos.length) return;
rows(inner).forEach(function(r){ inner.removeChild(r); });
if(Array.isArray(want)&&want.length) want.forEach(function(item){ drawRow(inner,bestFor(item,inProtos)); });
else drawRow(inner,inProtos[0]);
reindex(inner);
});
editSlots(row).forEach(function(n){ if(!n.querySelector("[data-edit]")) fillSlot(n); });
}); grew=true;
});
if(!grew) return;
}
}
/* THE ICON IS THE VALUE. When the config names a list of steps, which step a card is lives in its
 * data, and the icon is drawn from it: a card the page adds, or one written for a step the markup
 * never showed, wears the right icon, and a reader changes the step by clicking the icon, the way
 * a status chip is changed. A new card takes the first step nobody has used yet, not a copy of the
 * one above it. */
function stepType(id){
var types=(STEP&&STEP.types)||[];
for(var i=0;i<types.length;i++) if(types[i][0]===id) return types[i];
return null;
}
function paintStep(row){
var at=row.getAttribute("data-row"), icon=row.querySelector(".step-icon"), t=stepType(get(at+"."+STEP.field));
if(!icon||!t) return;
icon.innerHTML='<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[t[2]]||"")+'</svg>';
icon.setAttribute("aria-label",t[1]);
var title=row.querySelector('[data-edit="'+at+'.'+STEP.title+'"]');
if(title&&textOf(title).trim()===""&&!get(at+"."+STEP.title)) title.textContent=t[1];
}
function armSteps(){
if(!STEP) return;
var list=document.querySelector('[data-list="'+STEP.list+'"]'); if(!list) return;
rows(list).forEach(function(row){
var icon=row.querySelector(".step-icon"); if(!icon) return;
icon.setAttribute("data-edit",row.getAttribute("data-row")+"."+STEP.field); icon.setAttribute("data-enum","step");
paintStep(row);
});
}
function turnStep(el,step){
var row=el.closest("[data-row]"); if(!row||!STEP) return;
var types=STEP.types||[], len=types.length; if(!len) return;
var at=row.getAttribute("data-row"), was=stepType(get(at+"."+STEP.field)), n=-1, i;
for(i=0;i<len;i++) if(was&&types[i][0]===was[0]) n=i;
var next=n<0?types[step>0?0:len-1]:types[(n+step+len)%len];
var title=row.querySelector('[data-edit="'+at+'.'+STEP.title+'"]');
if(title){
var text=textOf(title).trim();
if(text===""||(was&&text===was[1])){
title.textContent=next[1]; title.removeAttribute("data-ph");
if(get(at+"."+STEP.title)) set(at+"."+STEP.title,next[1]);
}
}
set(at+"."+STEP.field,next[0]); paintStep(row); dirty=true; sync();
}
function freshStep(row){
var at=row.getAttribute("data-row"), idx=Number((at.match(/\[(\d+)\]$/)||[])[1]), used={}, pick=null, i, types=STEP.types||[];
(get(STEP.list)||[]).forEach(function(s,k){ if(k!==idx&&s&&s[STEP.field]) used[s[STEP.field]]=1; });
for(i=0;i<types.length&&!pick;i++) if(!used[types[i][0]]) pick=types[i];
if(pick) set(at+"."+STEP.field,pick[0]);
var title=row.querySelector('[data-edit="'+at+'.'+STEP.title+'"]'); if(title) title.textContent="";
paintStep(row);
}
function written(row){
return editSlots(row).some(function(el){
return !el.hasAttribute("data-enum") && answered(el);
});
}
function armRow(row){
if(row.querySelector(":scope > .row-del")) return;
var b=document.createElement("button"); b.type="button"; b.className="row-del";
b.setAttribute("contenteditable","false"); b.setAttribute("aria-label","Remove this one");
b.addEventListener("mousedown",function(ev){ ev.preventDefault(); });
b.addEventListener("click",function(ev){
ev.preventDefault();
if(written(row)&&!ask("Delete this one? What is written in it goes with it.")) return;
delRow(row);
}); row.appendChild(b);
}
var ADDS=CFG.adds||{};
function armLists(){
captureTemplates();
Array.prototype.forEach.call(document.querySelectorAll("[data-list]"),function(listEl){
rows(listEl).forEach(armRow);
if(listEl.nextElementSibling && listEl.nextElementSibling.classList.contains("row-add")) return;
var b=document.createElement("button"); b.type="button"; b.className="row-add";
var noun=ADDS[String(listEl.getAttribute("data-list")).replace(/\[\d+\]/g,"")];
b.textContent=noun?"+ Add "+noun:"+ Add";
b.addEventListener("click",function(ev){ ev.preventDefault(); addRow(listEl); });
listEl.parentNode.insertBefore(b,listEl.nextSibling);
});
}
function armEditing(scope){
var on=ROOT.hasAttribute("data-editing"), root=scope||document;
var list=Array.prototype.slice.call(root.querySelectorAll("[data-edit]"));
if(root.nodeType===1&&root.hasAttribute("data-edit")) list.unshift(root);
list.forEach(function(el){
if(!on){ el.removeAttribute("contenteditable"); el.removeAttribute("data-tip"); return; }
var q=askedAt(el.getAttribute("data-edit"));
if(q) el.setAttribute("data-tip",q);
if(STEP&&STEP.tip&&el.getAttribute("data-enum")==="step") el.setAttribute("data-tip",STEP.tip);
if(el.hasAttribute("data-enum")){ el.setAttribute("tabindex","0"); return; }
el.setAttribute("contenteditable","plaintext-only");
if(el.contentEditable!=="plaintext-only") el.setAttribute("contenteditable","true");
});
if(!on) hideTip();
}
/* The hint is drawn by the page, not the browser's grey title box: at once on focus, after a short
 * pause on hover, under the slot (above it near the bottom of the window), gone as soon as typing starts. */
var tipEl=null, tipFor=null, tipTimer=0;
function showTip(el){
if(!el||!el.getAttribute("data-tip")) return;
if(!tipEl){
tipEl=document.createElement("div"); tipEl.id="tip"; tipEl.className="tip";
tipEl.setAttribute("role","tooltip"); tipEl.hidden=true; document.body.appendChild(tipEl);
}
if(tipFor&&tipFor!==el) tipFor.removeAttribute("aria-describedby");
tipFor=el; el.setAttribute("aria-describedby","tip");
tipEl.textContent=el.getAttribute("data-tip"); tipEl.hidden=false;
var x=0, y=0, n=el; while(n){ x+=n.offsetLeft; y+=n.offsetTop; n=n.offsetParent; }
x-=parseFloat(getComputedStyle(ROOT).getPropertyValue("--qshift"))||0;
var gap=8, w=tipEl.offsetWidth, h=tipEl.offsetHeight, sx=window.scrollX, sy=window.scrollY;
var top=y+el.offsetHeight+gap; if(top+h>sy+window.innerHeight-gap&&y-gap-h>sy+gap) top=y-gap-h;
tipEl.style.top=top+"px";
tipEl.style.left=Math.max(sx+gap,Math.min(x,sx+window.innerWidth-w-3*gap))+"px";
}
function hideTip(){
clearTimeout(tipTimer); if(tipFor) tipFor.removeAttribute("aria-describedby");
tipFor=null; if(tipEl) tipEl.hidden=true;
}
document.addEventListener("mouseover",function(e){
var el=e.target.closest&&e.target.closest("[data-tip]"); if(el&&el===tipFor) return;
clearTimeout(tipTimer);
if(!el){ if(tipFor&&tipFor!==document.activeElement) hideTip(); return; }
tipTimer=setTimeout(function(){ showTip(el); },300);
});
document.addEventListener("focusin",function(e){
var el=e.target.closest&&e.target.closest("[data-tip]"); if(el) showTip(el); else hideTip();
});
document.addEventListener("focusout",hideTip);
document.addEventListener("input",hideTip,true);
document.addEventListener("keydown",function(e){ if(e.key==="Escape") hideTip(); });
function setEditing(on){
if(on) ROOT.setAttribute("data-editing",""); else ROOT.removeAttribute("data-editing");
if(on) ROOT.removeAttribute("data-filed");
var b=document.getElementById("tool-edit"); b.setAttribute("aria-pressed",on?"true":"false");
b.lastElementChild.textContent=on?"Done":"Edit"; armEditing();
if(on) armLists();
else Array.prototype.forEach.call(document.querySelectorAll(".row-del,.row-add"),function(b){ b.parentNode.removeChild(b); });
}
function buildQuestions(){
var body=document.getElementById("qpanel-body"); if(!body) return;
body.innerHTML=""; var groups=[], byName={};
function headOf(el){
for(var n=el.parentNode;n&&n.nodeType===1;n=n.parentNode){
var t=n.querySelector(":scope > .section-title");
if(t) return t;
if(n.classList&&n.classList.contains("page")) break;
}
return null;
}
slots().forEach(function(el){
var path=el.getAttribute("data-edit"), q=askedAt(path); if(!q) return; var t=headOf(el);
var h=t&&t.querySelector(".section-name"), head=t&&t.querySelector(".section-no");
var loose=el.closest(".foot")?(GROUPS.foot||""):(GROUPS.other||"");
var name=(head?head.textContent+" ":"")+(h?h.textContent:loose);
if(!byName[name]){ byName[name]={name:name,items:[],byKey:{}}; groups.push(byName[name]); }
var g=byName[name];
if(g.byKey[q]){ g.byKey[q].els.push(el); return; }
g.byKey[q]={els:[el],q:q}; g.items.push(g.byKey[q]);
});
groups.forEach(function(g){
var wrap=document.createElement("div"); wrap.className="qgroup";
var head=document.createElement("p"); head.className="qgroup-name";
var label=document.createElement("span"); label.textContent=g.name;
var count=document.createElement("span"); count.className="qgroup-count";
head.appendChild(label); head.appendChild(count); wrap.appendChild(head);
g.items.forEach(function(item){
var b=document.createElement("button"); b.type="button"; b.className="qitem"; b.textContent=item.q;
b.addEventListener("click",function(){
if(!ROOT.hasAttribute("data-editing")) setEditing(true);
var go=item.els.filter(function(el){ return !answered(el); })[0]||item.els[0];
go.scrollIntoView({block:"center",behavior:"smooth"});
if(go.focus) go.focus();
}); item.button=b; wrap.appendChild(b);
}); g.count=count; wrap.appendChild(document.createElement("div")); body.appendChild(wrap);
}); window.__questions=groups;
}
function paintQuestions(){
var groups=window.__questions; if(!groups) return;
groups.forEach(function(g){
var done=0;
g.items.forEach(function(item){
var ok=item.els.every(answered);
if(ok){ done++; item.button.setAttribute("data-done",""); } else item.button.removeAttribute("data-done");
}); g.count.textContent=done+"/"+g.items.length;
});
}
function serialize(){
var clone=ROOT.cloneNode(true);
clone.removeAttribute("data-editing"); clone.removeAttribute("data-questions");
clone.removeAttribute("data-js"); clone.removeAttribute("data-deck"); clone.setAttribute("data-filed","");
Array.prototype.forEach.call(clone.querySelectorAll("[contenteditable]"),function(e){ e.removeAttribute("contenteditable"); });
Array.prototype.forEach.call(clone.querySelectorAll("[data-tip],[aria-describedby]"),function(e){ e.removeAttribute("data-tip"); e.removeAttribute("aria-describedby"); });
Array.prototype.forEach.call(clone.querySelectorAll("[tabindex]"),function(e){ e.removeAttribute("tabindex"); });
Array.prototype.forEach.call(clone.querySelectorAll(".row-del,.row-add,#tool-draft,#notice,#tip,#deck"),
function(e){ if(e.parentNode) e.parentNode.removeChild(e); });
var qp=clone.querySelector("#qpanel"); if(qp) qp.setAttribute("hidden","");
var qb=clone.querySelector("#qpanel-body"); if(qb) qb.innerHTML=""; var te=clone.querySelector("#tool-edit");
if(te){ te.setAttribute("aria-pressed","false"); if(te.lastElementChild) te.lastElementChild.textContent="Edit"; }
var tq=clone.querySelector("#tool-questions"); if(tq) tq.setAttribute("aria-pressed","false");
var tsl=clone.querySelector("#tool-slides"); if(tsl) tsl.setAttribute("aria-pressed","false");
var json=JSON.stringify(DATA,null,2).replace(/<\/script/gi,"<\\/script");
return ("<!doctype html>\n"+clone.outerHTML)
    .replace(/(<script[^>]+id="page-data"[^>]*>)[\s\S]*?(<\/script>)/i,function(all,open,close){ return open+json+close; });
}
var draftTimer=0;
function keepDraft(){
  try{ localStorage.setItem(DRAFT,JSON.stringify({at:Date.now(),doc:serialize()})); }catch(e){}
}
function scheduleDraft(){
  if(draftTimer) clearTimeout(draftTimer);
  draftTimer=setTimeout(function(){ draftTimer=0; keepDraft(); },600);
}
function save(){
  var doc=serialize();
  if(window.__bake) doc=window.__bake(doc);
  var untouched=function(path){
    var el=document.querySelector('[data-edit="'+path+'"]'); return !el || el.hasAttribute("data-ph");
  };
  var label=(FILE.name||[]).map(function(p){ return !untouched(p)&&get(p); }).filter(Boolean)[0]||"";
  var name=String(label).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  var no=(FILE.number&&get(FILE.number))||1;
  try{
    var blob=new Blob([doc],{type:"text/html;charset=utf-8"});
    var url=URL.createObjectURL(blob), a=document.createElement("a");
    a.href=url; a.download=fmt(name?(FILE.named||"{name}.html"):(FILE.unnamed||"page.html"),{name:name,no:no});
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ try{ URL.revokeObjectURL(url); }catch(e){} },1000);
  }catch(e){
    tellFramed(true,"This browser refused to write the file ("+(e.name||"error")+")."); return;
  }
  if(FRAMED){ tellFramed(true); return; }
  dirty=false;
}
function showQuestions(on){
  var p=document.getElementById("qpanel"); p.hidden=!on;
  if(on) ROOT.setAttribute("data-questions",""); else ROOT.removeAttribute("data-questions");
  document.getElementById("tool-questions").setAttribute("aria-pressed",on?"true":"false");
}
var tools=document.getElementById("tools"); tools.hidden=false;
document.body.style.paddingBottom=(tools.offsetHeight+32)+"px";
document.getElementById("tool-edit").addEventListener("click",function(){ setEditing(!ROOT.hasAttribute("data-editing")); });
/* Slides: the same page, one block to a screen. Blocks are cloned, never moved, so the page and its
 * data stay as they are, and nothing of the deck is written into the saved file. A block too dense to
 * read at DECK_READ is laid over as many slides as it needs, each carrying the block's title again. */
var SLIDES=CFG.slides||null, deck=null, deckAt=0, deckList=[], deckView=[], deckNos={}, deckTouch=null, deckIdle=0, deckOwnExit=false;
/* Every slide has one frame: the title in the head at one size, the brand and the count in the foot, and
 * the content between them at DECK_ZOOM. A slide may give up a little of that size rather than add a
 * slide: content is packed as if at DECK_PACK, or at DECK_TIGHT when that saves a slide holding only a
 * few lines, and a block spread over several slides is shared out evenly between them. Only a piece that
 * cannot be divided is shrunk further, never below DECK_MIN. The cover and the closing slide are drawn
 * apart from that frame, always dark. */
var DECK_W=1280, DECK_H=720, DECK_ZOOM=1.0, DECK_UP=1.3, DECK_FULL=0.88, DECK_PACK=0.9, DECK_TIGHT=0.82, DECK_THIN=0.4, DECK_MIN=0.6, HERO_MIN=0.62, HERO_PEOPLE=84, PEOPLE_MIN=0.72;
function slideFilled(node){
  return Array.prototype.some.call(node.querySelectorAll("[data-edit]"),function(el){
    if(el.closest("template")||el.hasAttribute("data-enum")) return false;
    return !el.hasAttribute("data-ph") && textOf(el).trim()!=="";
  });
}
/* A wrapper that held fields and has none left once the empty ones are gone - a label over an empty
 * answer - goes as well. */
function slideClean(node, also){
  var c=node.cloneNode(true), drop=function(e){ if(e.parentNode) e.parentNode.removeChild(e); };
  Array.prototype.forEach.call(c.querySelectorAll("*"),function(e){
    if(!e.hasAttribute("data-edit")&&e.querySelector("[data-edit]")) e.setAttribute("data-deck-holds","");
  });
  Array.prototype.forEach.call(c.querySelectorAll("template,.row-del,.row-add,[data-ph]"+(SLIDES.hide?","+SLIDES.hide:"")+(also?","+also:"")),drop);
  Array.prototype.forEach.call(Object.keys(SLIDES.needs||{}),function(row){
    Array.prototype.forEach.call(c.querySelectorAll(row),function(e){ if(!e.querySelector(SLIDES.needs[row])) drop(e); });
  });
  Array.prototype.forEach.call(c.querySelectorAll("[data-deck-holds]"),function(e){
    if(!e.querySelector("[data-edit]")) drop(e); else e.removeAttribute("data-deck-holds");
  });
  Array.prototype.forEach.call(c.querySelectorAll("[id],[contenteditable],[tabindex],[data-tip]"),function(e){
    e.removeAttribute("id"); e.removeAttribute("contenteditable"); e.removeAttribute("tabindex"); e.removeAttribute("data-tip"); });
  return c;
}
/* The title of a block goes into the head; the block keeps the rest. */
function slideHead(el){
  if(!el||el.hasAttribute("data-ph")||textOf(el).trim()==="") return null;
  var c=slideClean(el); c.removeAttribute("id"); c.removeAttribute("contenteditable"); c.removeAttribute("data-edit");
  return c;
}
function slideBare(el, sel){ return slideClean(el, sel); }
function slideKids(el){ return Array.prototype.filter.call(el.children,function(k){ return k.tagName!=="TEMPLATE"; }); }
function ownText(el){
  return Array.prototype.some.call(el.childNodes,function(n){ return n.nodeType===3 && n.nodeValue.trim()!==""; });
}
/* The pieces a block can be laid out from: cards and single-child wrappers are opened up, the rest are
 * kept whole until they turn out not to fit. Text is never pulled apart from its own element. */
function slideUnits(root){
  var units=[];
  (function walk(el, shells){
    slideKids(el).forEach(function(ch){
      var kids=slideKids(ch);
      if(!ownText(ch) && (kids.length===1 || (ch.classList.contains("card")&&kids.length>1))){
        walk(ch, shells.concat([ch])); return;
      }
      units.push({node:ch, shells:shells});
    });
  })(root, []);
  return units;
}
function slideBuild(root, group){
  var top=root.cloneNode(false), origs=[], clones=[];
  function into(chain){
    var parent=top;
    chain.forEach(function(orig){
      var i=origs.lastIndexOf(orig);
      if(i>=0 && clones[i]===parent.lastElementChild){ parent=clones[i]; return; }
      var c=orig.cloneNode(false); parent.appendChild(c); origs.push(orig); clones.push(c); parent=c;
    });
    return parent;
  }
  group.forEach(function(u){ into(u.shells).appendChild(u.node.cloneNode(true)); });
  return top;
}
/* Plain text too long for one slide is cut at its blank lines, then at its lines, then between two
 * sentences near its middle; a cut inside a paragraph carries on without a gap. */
function slideText(u){
  var el=u.node; if(el.children.length) return null;
  var text=el.textContent.replace(/^\s+|\s+$/g,""), parts=text.split(/\n\s*\n/), flow=false;
  if(parts.length<2) parts=text.split(/\n/);
  if(parts.length<2){
    var said=text.match(/[^.!?]+[.!?]+\S*\s*|[^.!?]+$/g)||[];
    if(said.length<2) return null;
    var half=Math.ceil(said.length/2);
    parts=[said.slice(0,half).join("").replace(/\s+$/,""), said.slice(half).join("")]; flow=true;
  }
  return parts.map(function(p, i){
    var c=el.cloneNode(false); c.textContent=p;
    if(i) c.classList.add(flow?"deck-flow":"deck-cont");
    return {node:c, shells:u.shells};
  });
}
function deckPart(){ return deck.querySelector(".deck-body"); }
function deckLay(z){
  var body=deckPart(), main=body.parentNode;
  body.style.width=(main.clientWidth/z)+"px"; body.style.transform="scale("+z+")";
  return body.offsetHeight*z;
}
/* A block laid over several slides says which of them this is, as 2 / 3 beside its title. */
function deckFrame(head, part, parts, sub){
  var box=deck.querySelector(".deck-head"); box.innerHTML="";
  box.hidden=!head;
  if(!head) return;
  var h=head.cloneNode(true);
  if(sub){ var s=document.createElement("span"); s.className="deck-part"; s.textContent=sub; h.appendChild(s); }
  if(parts>1){ var p=document.createElement("span"); p.className="deck-step"; p.textContent=(part+1)+" / "+parts; h.appendChild(p); }
  box.appendChild(h);
}
function deckFill(node, z){
  var body=deckPart(); body.innerHTML=""; body.appendChild(node);
  return deckLay(z)/body.parentNode.clientHeight;
}
/* A label - a piece with no field in it - is never the last thing on a slide; it goes on with what it names. */
function slideLabel(u){ return !u.node.hasAttribute("data-edit") && !u.node.querySelector("[data-edit]"); }
function slideRun(root, z, cap){
  var queue=slideUnits(root), out=[], cur=[];
  var fits=function(group){ return deckFill(slideBuild(root, group), z)<=cap+0.002; };
  while(queue.length){
    var u=queue.shift();
    if(fits(cur.concat([u]))){ cur.push(u); continue; }
    if(cur.length){
      queue.unshift(u);
      while(cur.length>1&&slideLabel(cur[cur.length-1])) queue.unshift(cur.pop());
      out.push(slideBuild(root, cur)); cur=[]; continue;
    }
    var kids=slideKids(u.node), bits=slideText(u);
    if(bits){ queue=bits.concat(queue); continue; }
    if(kids.length>1&&!ownText(u.node)){
      queue=kids.map(function(k){ return {node:k, shells:u.shells.concat([u.node])}; }).concat(queue);
      continue;
    }
    out.push(slideBuild(root, [u]));
  }
  if(cur.length) out.push(slideBuild(root, cur));
  return out;
}
function slidePack(root, head, sub){
  deckFrame(head, 1, 2, sub);
  var z=DECK_PACK, out=slideRun(root, z, 1);
  if(out.length>1 && deckFill(out[out.length-1], z)<DECK_THIN){
    var tight=slideRun(root, DECK_TIGHT, 1);
    if(tight.length<out.length){ out=tight; z=DECK_TIGHT; }
  }
  /* The fullest slide is made as empty as it can be without adding a slide. */
  if(out.length>1){
    var lo=0.4, hi=1;
    for(var k=0;k<6;k++){
      var mid=(lo+hi)/2, even=slideRun(root, z, mid);
      if(even.length<=out.length){ out=even; hi=mid; } else lo=mid;
    }
  }
  return out.map(function(body, i){ return {head:head, body:body, part:i, parts:out.length, sub:sub||""}; });
}
function slideSlug(t){ return String(t||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }
function slideValue(el){ return el&&!el.hasAttribute("data-ph")?textOf(el).trim():""; }
function heroEl(tag, cls, text){ var e=document.createElement(tag); e.className=cls; if(text!=null) e.textContent=text; return e; }
/* The cover and the closing slide: a name, a line under it and the facts along the bottom. The type
 * steps down together until the copy fits; a lead that still does not fit is cut at a whole line, and
 * the caller learns so. */
function heroBuild(o){
  var hero=heroEl("div","hero"), top=heroEl("div","hero-top"), runner=heroEl("div","hero-runner"), mid=heroEl("div","hero-mid"), copy=heroEl("div","hero-copy");
  var brand=SLIDES.brand&&document.querySelector(SLIDES.brand);
  if(brand) top.appendChild(brand.cloneNode(true));
  if(SLIDES.eyebrow) top.appendChild(heroEl("span","hero-eyebrow",SLIDES.eyebrow));
  if(o.code) copy.appendChild(heroEl("p","hero-code",o.code));
  copy.appendChild(heroEl("h1","hero-name",o.name));
  if(o.lead){ copy.appendChild(heroEl("div","hero-rule")); copy.appendChild(heroEl("p","hero-lead",o.lead)); }
  runner.setAttribute("aria-hidden","true");
  mid.appendChild(copy); hero.appendChild(runner); hero.appendChild(top); hero.appendChild(mid);
  var band=heroEl("div","hero-band");
  if(o.facts&&o.facts.length){
    var dl=heroEl("dl","hero-facts");
    o.facts.forEach(function(f){ var d=heroEl("div",""); d.appendChild(heroEl("dt","",f[0])); d.appendChild(heroEl("dd","",f[1])); dl.appendChild(d); });
    band.appendChild(dl);
  }
  if(o.people&&o.people.length){
    var pb=heroEl("div","hero-people-box"), ul=heroEl("ul","hero-people");
    pb.appendChild(heroEl("span","hero-people-label",SLIDES.peopleLabel||"People"));
    o.people.forEach(function(p){
      var li=heroEl("li",""); li.appendChild(heroEl("b","",p[0]));
      if(o.roles&&p[1]) li.appendChild(heroEl("span","",p[1]));
      ul.appendChild(li);
    });
    pb.appendChild(ul); band.appendChild(pb);
  }
  if(band.firstChild) hero.appendChild(band);
  var box=deck.querySelector(".deck-hero"), slide=deck.querySelector(".deck-slide");
  box.innerHTML=""; box.appendChild(hero); slide.setAttribute("data-kind","hero");
  var whole=true, fits=function(){ return copy.offsetHeight<=mid.clientHeight+1; };
  for(var k=1;k>=HERO_MIN&&(box.style.setProperty("--hero-k",String(k)),!fits());k=Math.round((k-0.04)*100)/100){}
  if(!fits()){
    box.style.setProperty("--hero-k",String(HERO_MIN));
    var lead=copy.querySelector(".hero-lead");
    if(lead){
      var lh=parseFloat(getComputedStyle(lead).lineHeight)||30, over=copy.offsetHeight-mid.clientHeight;
      var lines=Math.max(2,Math.floor((lead.offsetHeight-over)/lh));
      lead.setAttribute("data-clamp",""); lead.style.webkitLineClamp=String(lines); lead.style.maxHeight=(lines*lh)+"px";
      whole=false;
    }
  }
  /* The people row gives up size before it gives up anything else. */
  var row=hero.querySelector(".hero-people"), rowH=row?row.offsetHeight:0;
  for(var pk=1;row&&rowH>HERO_PEOPLE&&pk>PEOPLE_MIN;){
    pk=Math.round((pk-0.04)*100)/100; row.style.setProperty("--people-k",String(pk)); rowH=row.offsetHeight;
  }
  hero.setAttribute("style","--hero-k:"+box.style.getPropertyValue("--hero-k"));
  box.style.removeProperty("--hero-k"); box.innerHTML=""; slide.removeAttribute("data-kind");
  return {node:hero, whole:whole, peopleH:rowH};
}
function slideFacts(cover){
  return Array.prototype.map.call(cover.querySelectorAll(SLIDES.coverFacts||"none"),function(f){
    return [textOf(f.querySelector("dt")||f).trim(), slideValue(f.querySelector("[data-edit]")||f.querySelector("dd"))];
  }).filter(function(f){ return f[0]&&f[1]; });
}
function slideSources(){
  var out=[], add=function(list, key, label, sec, parent){
    list.forEach(function(it){ it.key=key; it.label=label; it.sec=sec||""; it.parent=parent||""; out.push(it); });
  };
  var cover=SLIDES.cover&&document.querySelector(SLIDES.cover), name="", code="";
  if(cover){
    var title=SLIDES.coverTitle&&cover.querySelector(SLIDES.coverTitle);
    name=slideValue(title); code=slideValue(SLIDES.coverSub&&cover.querySelector(SLIDES.coverSub));
    var tag=slideValue(SLIDES.coverLead&&cover.querySelector(SLIDES.coverLead)), paras=tag?tag.split(/\n\s*\n/):[];
    var people=Array.prototype.map.call(cover.querySelectorAll(SLIDES.coverPeople||"none"),function(p){
      return [slideValue(p.querySelector(SLIDES.personName||"none")), slideValue(p.querySelector(SLIDES.personRole||"none"))];
    }).filter(function(p){ return p[0]; });
    /* The people go on the cover while they fit in a few rows: with their roles, else by name alone,
     * else on a slide of their own. */
    var base={name:name||"Untitled", code:code, lead:paras[0]||"", facts:slideFacts(cover)}, hero=null, onCover=false;
    [true,false].some(function(roles){
      if(!people.length) return true;
      var h=heroBuild({name:base.name, code:base.code, lead:base.lead, facts:base.facts, people:people, roles:roles});
      if(h.peopleH<=HERO_PEOPLE&&h.whole===heroBuild(base).whole){ hero=h; onCover=true; return true; }
      return false;
    });
    if(!hero) hero=heroBuild(base);
    out.push({kind:"hero", hero:hero.node, key:"cover", label:"Cover", fixed:true});
    /* The rest of the header - the people, and the lead when the cover could not hold all of it - follows. */
    var drop=[SLIDES.coverTitle, SLIDES.coverSub, SLIDES.coverFactsBox, onCover&&SLIDES.coverPeopleBox].filter(Boolean);
    if(hero.whole&&paras.length<2&&SLIDES.coverLead) drop.push(SLIDES.coverLead);
    var rest=slideClean(cover, drop.join(",")), more=hero.whole&&SLIDES.coverLead&&rest.querySelector(SLIDES.coverLead);
    if(more) more.textContent=paras.slice(1).join("\n\n");
    if(rest.querySelector("[data-edit]")) add(slidePack(rest, slideHead(title), code), "team", SLIDES.teamLabel||"The team");
  }
  Array.prototype.forEach.call(document.querySelectorAll(SLIDES.parts||"none"),function(part){
    var t=SLIDES.title&&part.querySelector(SLIDES.title), head=slideHead(t);
    var label=slideValue(t&&t.querySelector(".section-name"))||(t?textOf(t).trim():"Section"), sec="sec:"+slideSlug(label);
    var list=SLIDES.split&&part.querySelector('[data-list="'+SLIDES.split+'"]');
    if(!list){ if(slideFilled(part)) add(slidePack(slideBare(part, SLIDES.title), head), sec, label, sec); return; }
    rows(list).forEach(function(row, i){
      if(!slideFilled(row)) return;
      var wrap=document.createElement("div");
      var holder=list.cloneNode(false); holder.removeAttribute("data-list"); holder.removeAttribute("id"); holder.classList.add("deck-one");
      holder.appendChild(slideClean(row)); wrap.appendChild(holder);
      var st=row.querySelector(SLIDES.splitTitle||"h3");
      add(slidePack(wrap, head), SLIDES.split+":"+i, (st&&textOf(st).trim())||(label+" "+(i+1)), sec, sec);
    });
  });
  if(SLIDES.thanks){
    var bye=heroBuild({name:SLIDES.thanks.title||"Thank you", code:"", lead:SLIDES.thanks.text||"", facts:[[SLIDES.thanks.team||"Team", name+(code?" · "+code:"")]].filter(function(f){ return name; })});
    out.push({kind:"hero", hero:bye.node, key:"thanks", label:SLIDES.thanks.title||"Thank you"});
  }
  return out;
}
/* Which slides are left out lives in the page data, so a copy made for one audience keeps its choice. */
function deckHidden(){ var v=SLIDES.store&&get(SLIDES.store); return Array.isArray(v)?v.slice():[]; }
function deckSetHidden(list){
  if(!SLIDES.store) return;
  set(SLIDES.store, list.length?list:null);
  dirty=true; scheduleDraft();
}
function deckRebuild(keepItem){
  var hid=deckHidden();
  deckView=deckList.filter(function(it){ return it.fixed || (hid.indexOf(it.key)<0 && (!it.parent||hid.indexOf(it.parent)<0)); });
  deckNos={}; var n=0;
  deckView.forEach(function(it){ if(it.sec&&!(it.sec in deckNos)) deckNos[it.sec]=++n; });
  var at=keepItem?deckView.indexOf(keepItem):-1;
  if(at<0&&keepItem){
    var from=deckList.indexOf(keepItem);
    at=deckView.length-1;
    for(var i=0;i<deckView.length;i++){ if(deckList.indexOf(deckView[i])>=from){ at=i; break; } }
  }
  return Math.max(0,at);
}
function deckFit(){
  if(!deck) return;
  var slide=deck.querySelector(".deck-slide"), main=deck.querySelector(".deck-main");
  slide.style.transform="scale("+Math.min(deck.clientWidth/DECK_W, deck.clientHeight/DECK_H)+")";
  if(slide.getAttribute("data-kind")==="hero"){ deck.setAttribute("data-zoom","1"); deck.setAttribute("data-fits","true"); return; }
  var room=main.clientHeight+1, z=DECK_ZOOM, h=deckLay(z);
  /* A slide with room to spare is set larger, up to DECK_UP, never past DECK_FULL of its height. */
  if(h<room*DECK_FULL){
    var up=DECK_ZOOM, top=DECK_UP;
    if(deckLay(top)<=room*DECK_FULL) up=top;
    else for(var j=0;j<10;j++){ var m=(up+top)/2; if(deckLay(m)<=room*DECK_FULL) up=m; else top=m; }
    z=up; h=deckLay(z);
  }
  if(h>room){
    var lo=DECK_MIN, hi=DECK_ZOOM;
    if(deckLay(lo)<=room){
      for(var i=0;i<12;i++){ var mid=(lo+hi)/2; if(deckLay(mid)<=room) lo=mid; else hi=mid; }
    }
    z=lo; h=deckLay(z);
  }
  if(h>room) main.setAttribute("data-scroll",""); else main.removeAttribute("data-scroll");
  main.scrollTop=0;
  deck.setAttribute("data-zoom",String(z));
  deck.setAttribute("data-fits",String(h<=room));
}
function deckShow(i){
  if(!deck||!deckView.length) return;
  deckAt=Math.max(0,Math.min(deckView.length-1,i));
  var it=deckView[deckAt], body=deckPart(), slide=deck.querySelector(".deck-slide"), box=deck.querySelector(".deck-hero");
  box.innerHTML=""; body.innerHTML="";
  if(it.kind==="hero") deck.setAttribute("data-hero",""); else deck.removeAttribute("data-hero");
  if(it.kind==="hero"){
    slide.setAttribute("data-kind","hero"); box.appendChild(it.hero.cloneNode(true)); deckFrame(null);
  }else{
    slide.removeAttribute("data-kind");
    var head=it.head&&it.head.cloneNode(true), no=head&&head.querySelector(".section-no");
    if(no&&deckNos[it.sec]) no.textContent=(deckNos[it.sec]<10?"0":"")+deckNos[it.sec];
    deckFrame(head, it.part, it.parts, it.sub);
    body.appendChild(it.body.cloneNode(true));
  }
  var count=(deckAt+1)+" / "+deckView.length;
  deck.querySelector(".deck-count").textContent=count;
  deck.querySelector(".deck-no").textContent=count;
  deck.querySelector('[data-go="-1"]').disabled=deckAt===0;
  deck.querySelector('[data-go="1"]').disabled=deckAt===deckView.length-1;
  deckFit();
}
function deckWake(){
  if(!deck) return;
  deck.removeAttribute("data-idle"); clearTimeout(deckIdle);
  deckIdle=setTimeout(function(){ if(deck) deck.setAttribute("data-idle",""); },2500);
}
function deckFullscreen(on){
  try{
    if(!on){ if(document.fullscreenElement){ deckOwnExit=true; document.exitFullscreen(); } return; }
    var go=deck.requestFullscreen||deck.webkitRequestFullscreen;
    var p=go&&go.call(deck); if(p&&p.catch) p.catch(function(){});
  }catch(e){}
}
/* Esc in full screen is taken by the browser; leaving full screen that way closes the slides as well. */
document.addEventListener("fullscreenchange",function(){
  if(!deck) return;
  if(!document.fullscreenElement&&!deckOwnExit) deckClose();
  deckOwnExit=false; setTimeout(deckFit,50);
});
/* The list of slides to show: a line per section, a line per stage under its section, the slides each takes. */
function deckPickDraw(){
  var ul=deck.querySelector(".deck-pick-list"), hid=deckHidden(), seen={}, groups=[];
  deckList.forEach(function(it){
    if(!seen[it.key]){ seen[it.key]={key:it.key, label:it.label, parent:it.parent, fixed:it.fixed, n:0}; groups.push(seen[it.key]); }
    seen[it.key].n++;
    if(it.parent&&!seen[it.parent]){
      seen[it.parent]={key:it.parent, label:it.parent===it.sec?(slideValue(it.head&&it.head.querySelector(".section-name"))||it.parent):it.parent, n:0, group:true};
      groups.splice(groups.length-1,0,seen[it.parent]);
    }
    if(it.parent) seen[it.parent].n++;
  });
  ul.innerHTML="";
  groups.forEach(function(g){
    var li=document.createElement("li"), lab=document.createElement("label"), box=document.createElement("input");
    var off=hid.indexOf(g.key)>=0, under=g.parent&&hid.indexOf(g.parent)>=0;
    box.type="checkbox"; box.checked=!off&&!under; box.disabled=!!g.fixed||under; box.setAttribute("data-key",g.key);
    if(g.parent) li.className="deck-pick-sub";
    if(off||under) li.setAttribute("data-off","");
    lab.appendChild(box);
    lab.appendChild(heroEl("span","deck-pick-name",g.label));
    lab.appendChild(heroEl("span","deck-pick-n",g.n===1?"1 slide":g.n+" slides"));
    li.appendChild(lab); ul.appendChild(li);
  });
  var left=deckList.length-deckView.length;
  deck.querySelector(".deck-pick-count").textContent=deckView.length+" of "+deckList.length+" shown"+(left?"":"");
  deck.querySelector("[data-pick-all]").disabled=!left;
}
function deckPick(on){
  var p=deck.querySelector(".deck-pick"), b=deck.querySelector("[data-pick]");
  p.hidden=!on; b.setAttribute("aria-pressed",on?"true":"false");
  if(on){ deck.setAttribute("data-picking",""); deckPickDraw(); var f=p.querySelector("input:not(:disabled)"); if(f) f.focus(); }
  else { deck.removeAttribute("data-picking"); b.focus(); }
}
function deckToggle(key, show){
  var hid=deckHidden().filter(function(k){ return k!==key; });
  if(!show) hid.push(key);
  var cur=deckView[deckAt];
  deckSetHidden(hid);
  deckShow(deckRebuild(cur));
  deckPickDraw();
}
function deckIcon(paths){
  return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths+'</svg>';
}
var DECK_ICONS={
  prev:'<path d="m15 18-6-6 6-6"/>', next:'<path d="m9 18 6-6-6-6"/>',
  pick:'<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
  full:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  close:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
};
function deckClose(){
  if(!deck) return;
  var d=deck; deck=null; clearTimeout(deckIdle);
  try{ if(document.fullscreenElement){ deckOwnExit=true; document.exitFullscreen(); } }catch(e){}
  d.parentNode.removeChild(d); ROOT.removeAttribute("data-deck");
  var b=document.getElementById("tool-slides"); if(b){ b.setAttribute("aria-pressed","false"); b.focus(); }
}
function deckOpen(){
  if(!SLIDES||deck) return;
  if(ROOT.hasAttribute("data-editing")) setEditing(false);
  hideTip();
  deck=document.createElement("div"); deck.id="deck"; deck.className="deck";
  deck.setAttribute("role","dialog"); deck.setAttribute("aria-modal","true"); deck.setAttribute("aria-label","Slides");
  deck.innerHTML='<div class="deck-slide"><div class="deck-head"></div><div class="deck-main"><div class="deck-body"></div></div>'+
    '<div class="deck-foot"><span class="deck-brand"></span><span class="deck-team"></span><span class="deck-no"></span></div>'+
    '<div class="deck-hero"></div></div>'+
    '<div class="deck-pick" hidden role="group" aria-label="Slides to show"><div class="deck-pick-head"><strong>Slides to show</strong>'+
    '<button type="button" class="deck-btn" data-pick-close aria-label="Close the list">'+deckIcon(DECK_ICONS.close)+'</button></div>'+
    '<p class="deck-pick-note">A slide switched off is skipped in the show, and stays off in the file you save.</p>'+
    '<ul class="deck-pick-list"></ul><div class="deck-pick-foot"><span class="deck-pick-count"></span>'+
    '<button type="button" data-pick-all>Show all</button></div></div>'+
    '<div class="deck-bar"><button type="button" class="deck-btn" data-go="-1" aria-label="Previous slide">'+deckIcon(DECK_ICONS.prev)+'</button>'+
    '<span class="deck-count" aria-live="polite"></span>'+
    '<button type="button" class="deck-btn" data-go="1" aria-label="Next slide">'+deckIcon(DECK_ICONS.next)+'</button>'+
    '<button type="button" class="deck-btn" data-pick aria-pressed="false" aria-label="Choose the slides to show" title="Slides to show">'+deckIcon(DECK_ICONS.pick)+'</button>'+
    '<button type="button" class="deck-btn" data-full aria-label="Full screen" title="Full screen (F)">'+deckIcon(DECK_ICONS.full)+'</button>'+
    '<button type="button" class="deck-btn" data-close aria-label="Close slides" title="Close (Esc)">'+deckIcon(DECK_ICONS.close)+'</button></div>';
  var brand=SLIDES.brand&&document.querySelector(SLIDES.brand);
  if(brand) deck.querySelector(".deck-brand").appendChild(brand.cloneNode(true));
  /* The foot stands as tall as the brand mark: the team on one line, the programme under it. */
  var cov=SLIDES.cover&&document.querySelector(SLIDES.cover), who=slideValue(cov&&SLIDES.coverTitle&&cov.querySelector(SLIDES.coverTitle));
  var team=deck.querySelector(".deck-team");
  if(who||SLIDES.eyebrow){
    team.appendChild(heroEl("span","deck-team-name",who||SLIDES.eyebrow));
    if(who&&SLIDES.eyebrow) team.appendChild(heroEl("span","deck-team-sub",SLIDES.eyebrow));
  } else team.textContent=document.title||"";
  if(!SLIDES.store) deck.querySelector("[data-pick]").hidden=true;
  document.body.appendChild(deck); ROOT.setAttribute("data-deck","");
  deckFullscreen(true);
  deckList=slideSources();
  if(!deckList.length){ deckClose(); return; }
  deckRebuild(null);
  var b=document.getElementById("tool-slides"); if(b) b.setAttribute("aria-pressed","true");
  deck.addEventListener("click",function(e){
    var t=e.target.closest&&e.target.closest("button"); if(!t) return;
    if(t.hasAttribute("data-go")) deckShow(deckAt+Number(t.getAttribute("data-go")));
    else if(t.hasAttribute("data-pick")) deckPick(deck.querySelector(".deck-pick").hidden);
    else if(t.hasAttribute("data-pick-close")) deckPick(false);
    else if(t.hasAttribute("data-pick-all")){ var cur=deckView[deckAt]; deckSetHidden([]); deckShow(deckRebuild(cur)); deckPickDraw(); }
    else if(t.hasAttribute("data-full")) deckFullscreen(!document.fullscreenElement);
    else if(t.hasAttribute("data-close")) deckClose();
  });
  deck.addEventListener("change",function(e){
    var t=e.target; if(t&&t.hasAttribute&&t.hasAttribute("data-key")) deckToggle(t.getAttribute("data-key"), t.checked);
  });
  deck.addEventListener("mousemove",deckWake);
  deck.addEventListener("touchstart",function(e){ deckWake(); deckTouch=e.touches[0].pageX; },{passive:true});
  deck.addEventListener("touchend",function(e){
    if(deckTouch===null||deck.hasAttribute("data-picking")) return; var dx=e.changedTouches[0].pageX-deckTouch; deckTouch=null;
    if(Math.abs(dx)>50) deckShow(deckAt+(dx<0?1:-1));
  });
  deckShow(0); deckWake(); deck.querySelector('[data-go="1"]').focus();
}
document.addEventListener("keydown",function(e){
  if(!deck) return;
  var k=e.key;
  if(deck.hasAttribute("data-picking")){
    if(k==="Escape"){ e.preventDefault(); deckPick(false); }
    return;
  }
  if(k==="ArrowRight"||k==="PageDown"||k===" "){ e.preventDefault(); deckShow(deckAt+1); }
  else if(k==="ArrowLeft"||k==="PageUp"){ e.preventDefault(); deckShow(deckAt-1); }
  else if(k==="Home"){ e.preventDefault(); deckShow(0); }
  else if(k==="End"){ e.preventDefault(); deckShow(deckView.length-1); }
  else if(k==="Escape"){ e.preventDefault(); deckClose(); }
  else if(k==="f"||k==="F"){ deckFullscreen(!document.fullscreenElement); }
});
window.addEventListener("resize",deckFit);
var slidesBtn=document.getElementById("tool-slides");
if(slidesBtn){ if(!SLIDES) slidesBtn.hidden=true; slidesBtn.addEventListener("click",function(){ if(deck) deckClose(); else deckOpen(); }); }

document.getElementById("tool-questions").addEventListener("click",function(){ showQuestions(document.getElementById("qpanel").hidden); });
document.getElementById("qpanel-close").addEventListener("click",function(){ showQuestions(false); });
document.getElementById("tool-save").addEventListener("click",save);
var FRAMED=false; try{ FRAMED=window.self!==window.top; }catch(e){ FRAMED=true; }
var KEPT=true; try{ localStorage.setItem("__probe","1"); localStorage.removeItem("__probe"); }catch(e){ KEPT=false; }
var notice=null;
function ask(question){
  try{ return window.confirm(question); }
  catch(e){ return true; }
}
function copyFile(btn){
  var ta=document.createElement("textarea"); ta.value=serialize(); ta.setAttribute("readonly","");
  ta.style.position="fixed"; ta.style.top="-1000px"; ta.style.opacity="0";
  document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0,ta.value.length);
  var ok=false; try{ ok=document.execCommand("copy"); }catch(e){}
  document.body.removeChild(ta);
  btn.textContent = ok ? "Copied - paste into a text editor and save as .html"
                       : "This preview blocks copying too - download the file instead"; btn.disabled=ok;
}
function tellFramed(flash,reason){
  if(!FRAMED && !reason) return;
  if(!notice){
    notice=document.createElement("div"); notice.className="notice"; notice.id="notice";
    var text=document.createElement("div"); text.className="notice-text"; var head=document.createElement("p");
    var b=document.createElement("b"); b.textContent=reason||"This page cannot write the file from here.";
    head.appendChild(b);
    head.appendChild(document.createTextNode(FRAMED
      ? (TEXT.framed||" This copy is open inside a preview, and a browser refuses downloads from one.")
        +(KEPT?"":" Nothing you type here is being kept either.")
      : " Nothing has been lost - the page still holds everything you have typed."));
    var how=document.createElement("p"); how.style.marginTop="var(--space-2)";
    how.textContent=TEXT.framedHow||"Download the file itself, open it from your machine, and everything works.";
    text.appendChild(head); text.appendChild(how);
    var row=document.createElement("div"); row.className="notice-do"; var copy=document.createElement("button");
    copy.type="button"; copy.className="notice-b"; copy.textContent="Copy the file to the clipboard instead";
    copy.addEventListener("click",function(){ copyFile(copy); }); row.appendChild(copy); text.appendChild(row);
    var x=document.createElement("button");
    x.type="button"; x.className="notice-x"; x.setAttribute("aria-label","Dismiss"); x.textContent="\u00d7";
    x.addEventListener("click",function(){ notice.remove(); }); notice.appendChild(text); notice.appendChild(x);
    document.body.appendChild(notice);
  }
  if(!notice.isConnected) document.body.appendChild(notice);
  if(flash){
    notice.removeAttribute("data-flash"); void notice.offsetWidth; notice.setAttribute("data-flash","");
  }
}
if(FRAMED) tellFramed(false);
if(restoredAt){
  var mark=document.createElement("button");
  mark.type="button"; mark.className="tool tool--draft"; mark.id="tool-draft";
  mark.title="Restored from the draft this browser saved at "+new Date(restoredAt).toLocaleString()+
             ". Click to discard it and reload the file as it was saved.";
  var markText=document.createElement("span"); markText.textContent="Draft restored";
  mark.appendChild(markText);
  mark.addEventListener("click",function(){
    if(!ask("Discard the draft saved in this browser and reload the file as it was last saved to disk?")) return;
    try{ localStorage.removeItem(DRAFT); }catch(e){}
    if(draftTimer) clearTimeout(draftTimer);
    dirty=false; location.reload();
  }); tools.insertBefore(mark,document.getElementById("tool-questions"));
}
document.addEventListener("focusin",onFocus); document.addEventListener("input",onInput);
document.addEventListener("focusout",onBlur); document.addEventListener("click",onEnum);
document.addEventListener("keydown",function(e){
  if(e.key==="Enter"&&e.target.closest&&e.target.closest("[data-enum]")) onEnum(e);
  if((e.metaKey||e.ctrlKey)&&e.key==="s"){ e.preventDefault(); save(); }
});
document.addEventListener("paste",function(e){
  var el=e.target.closest&&e.target.closest("[data-edit]"); if(!el) return;
  if(el.contentEditable==="plaintext-only") return;
  e.preventDefault();
  document.execCommand("insertText",false,(e.clipboardData||window.clipboardData).getData("text"));
}); window.addEventListener("beforeunload",function(e){ if(dirty){ e.preventDefault(); e.returnValue=""; } });
/* A page with no date in the path its config names for the stamp takes the day it is first opened:
 * that is the day it was made. The reader can type another one, and the saved file keeps it. */
function stampDate(){
var path=CFG.stamp; if(!path) return;
var v=get(path); if(v!==null&&v!==undefined&&String(v).trim()!=="") return;
var d=new Date(), two=function(n){ return (n<10?"0":"")+n; };
set(path, d.getFullYear()+"-"+two(d.getMonth()+1)+"-"+two(d.getDate()));
}
armSteps(); captureTemplates(); capturePrompts(); stampDate(); refitRows(); adoptAnswers(); growLists(); settleNumbers(); armSteps(); buildQuestions(); redrawScale(); sync();
}

var style=document.createElement("style"); style.id="kit-style"; style.textContent=__css;
document.head.appendChild(style);
var fallback=document.getElementById("kit-fallback"); if(fallback) fallback.parentNode.removeChild(fallback);
var offline=document.getElementById("kit-offline"); if(offline) offline.parentNode.removeChild(offline);

/* The page goes in before the data block, so the editor finds both where it always did. */
if(!document.querySelector("[data-edit]")){
  var host=document.createElement("div"); host.id="kit-page"; host.innerHTML=__markup;
  var first=document.body.firstChild;
  while(host.firstChild) document.body.insertBefore(host.firstChild,first);
}
if(!document.getElementById("page-config")){
  var cfg=document.createElement("script"); cfg.type="application/json"; cfg.id="page-config";
  cfg.textContent=__config; document.body.appendChild(cfg);
}

window.__bake=function(doc){
  if(doc.indexOf("data-kit")<0) return doc;
  var inline=function(fn){ return "<script>("+String(fn).replace(/<\/script/gi,"<\\/script")+")();</script>"; };
  return doc
    .replace(/<script[^>]+data-kit[^>]*><\/script>/,function(){return "";})
    .replace(/<style id="kit-style">[\s\S]*?<\/style>/,function(){return "";})
    .replace(/<style id="kit-fallback">[\s\S]*?<\/style>/,function(){return "";})
    .replace(/<p id="kit-offline">[\s\S]*?<\/p>/,function(){return "";})
    .replace("</head>",function(){return "<style>"+__css+"</style></head>";})
    .replace("</body>",function(){return inline(__theme)+inline(__editor)+"</body>";});
};

__theme();
__editor();
})();
