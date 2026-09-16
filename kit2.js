/* Page kit, second shape: the stylesheet, the page itself, its configuration and the editor.
 * The page the assistant returns carries only its data and one script tag; this file puts the rest
 * in, and bakes everything back into the file when the reader downloads it. */
(function(){
var __css=String.raw`:root{
--grid-unit: 4px; --font-xs: 0.75rem; --font-sm: 0.8125rem; --font-base: 0.9375rem; --font-md: 1.0625rem; --font-lg: 1.25rem; --font-2xl: 1.875rem; --font-family: 'museo-sans', 'Inter', ui-sans-serif, system-ui, sans-serif; --font-weight-regular: 400; --font-weight-semibold: 600; --leading-none: 1; --leading-tight: 1.15; --leading-snug: 1.3; --leading-normal: 1.5; --leading-relaxed: 1.65; --radius: 8px; --space-1: calc(var(--grid-unit) * 1); --space-2: calc(var(--grid-unit) * 2); --space-3: calc(var(--grid-unit) * 3); --space-4: calc(var(--grid-unit) * 4); --space-5: calc(var(--grid-unit) * 5); --space-6: calc(var(--grid-unit) * 6); --space-8: calc(var(--grid-unit) * 8); --space-12: calc(var(--grid-unit) * 12); --space-16: calc(var(--grid-unit) * 16); --qpanel-w: 24rem; --page-w: 68rem; --qshift: 0px; --qshift-bar: 0px; --brand-200: #ffb13b; --brand-400: #ff6b1a; --brand-700: #a94712; --neutral-0: #ffffff; --neutral-100: #f1f6fd; --neutral-200: #ebf0f7; --neutral-400: #bbbfc6; --neutral-700: #5f6369; --neutral-800: #3b3f45; --neutral-820: #2c3036; --neutral-900: #1f2328; --success-50: #e6f6eb; --success-200: #9ddbaf; --success-900: #006529; --warning-100: #fffac8; --warning-200: #fff6a3; --warning-930: #6b4915; --shadow-md: 0 4px 12px rgb(0 0 0 / 0.10); --radius-lg: calc(var(--radius) + var(--grid-unit)); --radius-full: 9999px; --foreground: var(--neutral-900); --card: var(--neutral-0); --muted: var(--neutral-100); --muted-foreground: var(--neutral-700); --primary: var(--brand-400); --primary-foreground: var(--neutral-0); --link: var(--primary-accent); --primary-accent: var(--brand-400); --primary-soft-foreground: var(--brand-700); --accent: var(--neutral-200); --success-soft: var(--success-50); --success-soft-foreground: var(--success-900); --warning-soft: var(--warning-100); --warning-soft-foreground: var(--neutral-900); --border: var(--neutral-200);
--brand-mark: var(--brand-400); --edit-wash: rgb(255 107 26 / .07); --edit-wash-hover: rgb(255 107 26 / .15);
}
:root[data-theme="dark"]{
--shadow-md: 0 4px 12px rgb(0 0 0 / 0.40); --foreground: var(--neutral-100); --card: var(--neutral-900); --muted: var(--neutral-820); --muted-foreground: var(--neutral-400); --primary: var(--brand-400); --primary-foreground: var(--neutral-0); --primary-accent: var(--brand-400); --primary-soft-foreground: var(--brand-200); --accent: var(--neutral-800); --success-soft: var(--success-900); --success-soft-foreground: var(--success-200); --warning-soft: var(--warning-930); --warning-soft-foreground: var(--warning-200); --border: var(--neutral-800); --edit-wash: rgb(255 107 26 / .13); --edit-wash-hover: rgb(255 107 26 / .24);
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
.chip--info{background:var(--card);color:var(--primary-accent)}
.chip--muted{background:var(--card);color:var(--muted-foreground)}
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
.card--tip{background:var(--card)} .links{display:flex;flex-wrap:wrap;gap:var(--space-3)}
.link{display:inline-flex;align-items:center;gap:var(--space-2);font-size:var(--font-sm);
border-radius:var(--radius);padding:var(--space-2) var(--space-3);
color:var(--link);text-decoration:none;background:var(--card)}
.link:hover{color:var(--primary-accent)}
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
.link-url{color:var(--primary-accent);overflow-wrap:anywhere;word-break:break-word}
.lines{list-style:none;margin:var(--space-3) 0 0;padding:0;display:flex;flex-direction:column;gap:var(--space-4)}
.line{border-left:2px solid var(--border);padding-left:var(--space-4)}
.line-what{font-size:var(--font-base);line-height:var(--leading-relaxed)}
.line-foot{margin-top:var(--space-2);display:flex;align-items:center;gap:var(--space-2);flex-wrap:wrap}
.line-amount{font-size:var(--font-sm);font-weight:var(--font-weight-semibold);
font-variant-numeric:tabular-nums}
.line-amount:empty{font-weight:var(--font-weight-regular)}
.line .chip--muted,.line .chip--info{background:var(--muted)}
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
[data-filed] #tools{background:none;box-shadow:none;padding:0;gap:0}
[data-filed] #tool-count,[data-filed] #tool-questions,[data-filed] #tool-save,
[data-filed] #tool-draft{display:none}
[data-filed] #tool-edit{background:var(--card);color:var(--foreground);
font-size:var(--font-md);padding:var(--space-3) var(--space-6);gap:var(--space-3);
box-shadow:0 1px 2px rgb(0 0 0 / .14),0 6px 18px rgb(0 0 0 / .12)}
[data-filed] #tool-edit:hover{background:var(--card);color:var(--primary-accent)}
.tool-count{font-size:var(--font-xs);color:var(--neutral-400);
font-variant-numeric:tabular-nums;padding-inline:var(--space-2);white-space:nowrap}
.tip{position:absolute;z-index:70;max-width:22rem;padding:var(--space-2) var(--space-3);
background:var(--neutral-900);color:var(--neutral-0);border:1px solid rgb(255 255 255 / .12);
border-radius:var(--radius);box-shadow:var(--shadow-md);pointer-events:none;
font-size:var(--font-sm);font-weight:var(--font-weight-regular);line-height:var(--leading-snug);
text-transform:none;letter-spacing:0;text-align:left;animation:tip-in .12s ease}
@keyframes tip-in{from{opacity:0;transform:translateY(-2px)}}
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
.tools,.qpanel,.row-add,.row-del,.nojs,.notice,.tip{display:none!important}
}
@media print{
@page{size:A4;margin:12mm}
:root{color-scheme:light} body{background:var(--card);font-size:12px}
.page{max-width:none;padding:0;transform:none} .theme{display:none}
.section{margin-top:18px;break-inside:avoid-page} .tiles{grid-template-columns:repeat(5,1fr)}
a{color:inherit} *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}`;
var __markup="<main class=\"page\">\n<header class=\"head\">\n<div class=\"head-top\">\n<p class=\"brand\"><svg class=\"brand-word\" viewBox=\"78.7 124.6 227.1 130.2\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"AI/RUN\"><defs><clipPath id=\"airun-word\"><rect x=\"0\" y=\"0\" width=\"225.977\" height=\"64.7462\" fill=\"currentColor\" transform=\"translate(79 194.824)\"/></clipPath></defs><g clip-path=\"url(#airun-word)\"><path d=\"M78.6743 199.076 108.955 199.076C114.915 199.076 119.253 199.381 121.969 199.99 124.685 200.599 127.013 202.012 128.967 204.214 130.921 206.43 131.919 209.2 131.975 212.524L131.975 212.842C131.975 218.271 130.478 221.983 127.471 223.991 125.835 225.099 123.327 225.916 119.959 226.442L119.959 226.844C120.486 226.789 121.013 226.761 121.539 226.761 122.274 226.761 122.994 226.816 123.673 226.913 126.792 227.329 128.995 228.423 130.326 230.196 131.642 231.968 132.307 234.267 132.307 237.12L132.307 249.571C132.307 251.385 130.838 252.853 129.023 252.853L127.124 252.853C125.309 252.853 123.84 251.385 123.84 249.571L123.84 238.062C123.84 236.165 123.452 234.614 122.689 233.395 121.927 232.176 120.569 231.484 118.615 231.304 116.661 231.124 114.18 231.027 111.173 231.027L90.8007 231.027C88.9852 231.027 87.5161 232.495 87.5161 234.309L87.5161 249.571C87.5161 251.385 86.0471 252.853 84.2316 252.853L81.9588 252.853C80.1433 252.853 78.6743 251.385 78.6743 249.571L78.6743 227.578C78.6743 225.778 80.1156 224.323 81.9172 224.296L87.5023 224.227 109.981 224.227C113.667 224.227 116.8 223.686 119.363 222.606 121.927 221.526 123.23 218.95 123.285 214.892L123.285 214.657C123.285 212.441 122.454 210.419 120.791 208.563 119.128 206.721 115.261 205.793 109.205 205.793L78.6881 205.793\" fill=\"currentColor\"/><path d=\"M203.429 229.919C203.429 235.722 202.459 240.403 200.546 243.948 198.62 247.507 195.862 250.125 192.273 251.815 188.683 253.504 183.195 254.349 175.809 254.349 168.422 254.349 162.809 253.352 159.109 251.344 155.422 249.336 152.664 246.732 150.835 243.519 149.02 240.306 148.105 235.763 148.105 229.919L148.105 202.358C148.105 200.544 149.574 199.076 151.389 199.076L153.371 199.076C155.187 199.076 156.656 200.544 156.656 202.358L156.656 229.919C156.656 235.722 158.139 240.084 161.091 243.006 164.042 245.929 168.976 247.397 175.892 247.397 183.694 247.397 188.836 245.845 191.289 242.729 193.742 239.613 194.975 235.348 194.975 229.919L194.975 202.358C194.975 200.544 196.444 199.076 198.26 199.076L200.158 199.076C201.974 199.076 203.443 200.544 203.443 202.358L203.443 229.919 203.429 229.919Z\" fill=\"currentColor\"/><path d=\"M219.254 249.571 219.254 202.358C219.254 200.544 220.723 199.076 222.538 199.076L226.904 199.076C227.874 199.076 228.803 199.505 229.426 200.253L259.278 235.819C261.246 238.173 265.085 236.774 265.085 233.713L265.085 202.358C265.085 200.544 266.554 199.076 268.369 199.076L270.268 199.076C272.083 199.076 273.552 200.544 273.552 202.358L273.552 249.571C273.552 251.385 272.083 252.853 270.268 252.853L265.902 252.853C264.932 252.853 264.004 252.424 263.38 251.676L233.612 216.125C231.644 213.77 227.805 215.169 227.805 218.23L227.805 249.571C227.805 251.385 226.336 252.853 224.52 252.853L222.538 252.853C220.723 252.853 219.254 251.385 219.254 249.571Z\" fill=\"currentColor\"/><path d=\"M287.122 207.87 287.122 201.444C287.122 201.139 286.872 200.876 286.554 200.876L283.726 200.876C283.422 200.876 283.158 200.627 283.158 200.308 283.158 200.004 283.408 199.741 283.726 199.741L291.875 199.741C292.18 199.741 292.444 199.99 292.444 200.308 292.444 200.613 292.194 200.876 291.875 200.876L289.048 200.876C288.743 200.876 288.48 201.126 288.48 201.444L288.48 207.87C288.48 208.175 288.23 208.438 287.912 208.438L287.662 208.438C287.357 208.438 287.094 208.189 287.094 207.87L287.122 207.87Z\" fill=\"currentColor\"/><path d=\"M293.719 207.87 293.719 200.308C293.719 200.004 293.968 199.741 294.287 199.741L295.41 199.741C295.617 199.741 295.798 199.851 295.895 200.031L299.193 205.848C299.415 206.236 299.969 206.222 300.177 205.848L303.378 200.045C303.475 199.865 303.669 199.754 303.877 199.754L304.861 199.754C305.166 199.754 305.429 200.004 305.429 200.322L305.429 207.87C305.429 208.175 305.18 208.438 304.861 208.438L304.626 208.438C304.321 208.438 304.057 208.189 304.057 207.87L304.057 203.66C304.057 203.078 303.267 202.884 303.004 203.397L300.523 208.133C300.426 208.313 300.232 208.438 300.024 208.438L299.359 208.438C299.151 208.438 298.957 208.327 298.86 208.147L296.172 203.134C295.895 202.621 295.118 202.815 295.118 203.397L295.118 207.87C295.118 208.175 294.869 208.438 294.55 208.438L294.301 208.438C293.996 208.438 293.733 208.189 293.733 207.87L293.719 207.87Z\" fill=\"currentColor\"/></g><path d=\"M124.998 156.563 111.86 131.966 110.835 131.966 97.8629 156.563 94.218 163.515 87.067 177.032C86.4988 178.113 85.3762 178.777 84.1705 178.777L82.2857 178.777C79.8189 178.777 78.239 176.174 79.3754 173.985L103.836 126.773C104.404 125.679 105.527 125 106.746 125L115.907 125C117.126 125 118.249 125.679 118.817 126.759L143.694 173.972C144.844 176.16 143.264 178.777 140.783 178.777L138.926 178.777C137.72 178.777 136.612 178.113 136.03 177.046L128.726 163.515 125.012 156.563 124.998 156.563Z\" fill=\"currentColor\"/><path d=\"M160.253 175.495 160.253 128.282C160.253 126.468 161.722 125 163.537 125L165.436 125C167.252 125 168.721 126.468 168.721 128.282L168.721 175.495C168.721 177.309 167.252 178.777 165.436 178.777L163.537 178.777C161.722 178.777 160.253 177.309 160.253 175.495Z\" fill=\"currentColor\"/></svg></p>\n<button type=\"button\" class=\"theme\" id=\"theme-toggle\" aria-label=\"Switch between light and dark\">\n<svg class=\"icon theme-sun\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/></svg><svg class=\"icon theme-moon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\"/></svg>\n</button>\n</div>\n<h1 class=\"ident\" data-edit=\"team.name\" data-ph>Team name</h1>\n<p class=\"ident-code\" data-edit=\"team.code\" data-ph>TEAM-CODE</p>\n<p class=\"tagline\" data-edit=\"team.tagline\" data-ph>One sentence: what this team delivers for the client.</p>\n\n<div class=\"card identity\">\n<dl class=\"facts\"><div class=\"fact\"><dt>Account</dt><dd data-edit=\"team.account\" data-ph>Account</dd></div><div class=\"fact\"><dt>Coach</dt><dd data-edit=\"team.coach\" data-ph>Coach name</dd></div><div class=\"fact\"><dt>Team</dt><dd data-edit=\"team.size\" data-ph>N people</dd></div><div class=\"fact\"><dt>Deadline</dt><dd>30 September 2026</dd></div></dl>\n    \n<div class=\"people-strip\" data-list=\"team.people\"><span class=\"person\" data-row=\"team.people[0]\">\n<span class=\"person-name\" data-edit=\"team.people[0].name\" data-ph>Team member</span><span class=\"person-role\" data-edit=\"team.people[0].role\" data-ph>Their role, for example: Business analyst</span>\n</span><span class=\"person\" data-row=\"team.people[1]\">\n<span class=\"person-name\" data-edit=\"team.people[1].name\" data-ph>Another member</span><span class=\"person-role\" data-edit=\"team.people[1].role\" data-ph>Their role, for example: QA engineer</span>\n</span></div>\n<div class=\"progress\" aria-label=\"Evidence completeness\">\n<div class=\"progress-bar\"><span style=\"width:28%\"></span></div>\n<p class=\"progress-text\"><strong>9 of 32</strong> facts in this template are backed by a number or a source.\nStill open: what the team delivers for the client, the delivery pain you started from, the baseline period to compare against, the target state of the factory, the client business outcome, at least two sdlc stages described, and 17 more.</p>\n</div>\n</div>\n</header>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">01</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/><path d=\"M12 7v5l4 2\"/></svg><span class=\"section-name\">Where we started</span></h2>\n<div class=\"card grid-2\">\n<div class=\"field\">\n<p class=\"field-label\">The pain we started from</p>\n<p class=\"field-text\" data-edit=\"context.painPoint\" data-ph>The biggest delivery pain before this programme, in one or two sentences. Concrete: what took too long, what kept breaking, what the client complained about.</p>\n</div>\n<div class=\"field-stack\">\n<div class=\"field\">\n<p class=\"field-label\">AI tooling on this project</p>\n<p class=\"chip-row\" data-list=\"context.aiTools\"><span class=\"tag\" data-row=\"context.aiTools[0]\" data-edit=\"context.aiTools[0]\" data-empty=\"Not stated\" data-ph>The AI tooling this project actually has</span></p>\n</div>\n<div class=\"field\">\n<p class=\"field-label\">Baseline period</p>\n<p class=\"field-text\" data-edit=\"context.baseline\" data-ph>The period the after-numbers are compared against, for example: sprints 36 to 40</p>\n</div>\n</div>\n</div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">02</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/></svg><span class=\"section-name\">North star</span></h2>\n<div class=\"card card--hero\">\n<p class=\"hero-text\" data-edit=\"northStar.goal\" data-ph>The target state in three or four sentences: which SDLC stages become agentic, in what order, and what humans keep governing.</p>\n<div class=\"scales\">\n<p class=\"field-label\">AI maturity</p>\n<p class=\"scale-score\">1<span class=\"scale-of\"> \u2192 3</span></p>\n<p class=\"scale-legend\">Level <span data-edit=\"northStar.currentLevel\" data-num=\"1-3\">1</span> \u00b7 target 3</p>\n<div class=\"meter\" role=\"meter\" aria-valuenow=\"1\" aria-valuemin=\"0\" aria-valuemax=\"3\" aria-label=\"AI maturity 1 of 3, target 3\">\n<div class=\"meter-track\"><div class=\"meter-fill\" style=\"width:33.33333333333333%\"></div><div class=\"meter-target\" style=\"left:100%\"></div></div>\n<div class=\"meter-ticks\"><span>0</span><span>1</span><span>2</span><span>3</span></div>\n</div>\n</div>\n<div class=\"shift\">\n<div class=\"shift-side\"><p class=\"field-label\">Today</p><p data-edit=\"northStar.shiftFrom\" data-ph>How the work is done today, in one sentence.</p></div>\n<div class=\"shift-arrow\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg></div>\n<div class=\"shift-side shift-side--to\"><p class=\"field-label\">The factory</p><p data-edit=\"northStar.shiftTo\" data-ph>How it is done once the factory is in place, in one sentence.</p></div>\n</div>\n<div class=\"hero-foot\">\n<div class=\"field\"><p class=\"field-label\">What the client gets</p><p class=\"field-text\" data-edit=\"northStar.clientOutcome\" data-ph>The client business outcome this is connected to. Money, risk or speed, not adoption.</p></div>\n      \n</div>\n</div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">03</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2\"/><rect x=\"14\" y=\"2\" width=\"8\" height=\"8\" rx=\"1\"/></svg><span class=\"section-name\">How it is built</span></h2>\n<div class=\"card\">\n<p class=\"hero-text\" data-edit=\"architecture.summary\" data-ph>How it is built, in one paragraph: what the pieces are, what triggers what, where the AI sits and where a human does. Name the platform each piece runs on.</p>\n<ul class=\"pieces\" data-list=\"architecture.pieces\"><li class=\"piece\" data-row=\"architecture.pieces[0]\">\n<p class=\"piece-name\"><span data-edit=\"architecture.pieces[0].name\" data-ph>A piece of the solution</span><span class=\"piece-tool\" data-edit=\"architecture.pieces[0].tool\" data-ph data-empty=\"what it runs on\">What it runs on</span></p>\n<p class=\"piece-role\" data-edit=\"architecture.pieces[0].role\" data-ph data-empty=\"what it does\">What it does, in a few words</p>\n</li></ul>\n<div class=\"field field--block\">\n<p class=\"field-label\">From the EPAM AI Assets marketplace</p>\n<ul class=\"pieces\" data-list=\"architecture.assets\"><li class=\"piece\" data-row=\"architecture.assets[0]\">\n<p class=\"piece-name\" data-edit=\"architecture.assets[0].name\" data-ph>An EPAM AI Assets marketplace asset you reused</p>\n<p class=\"piece-role\" data-edit=\"architecture.assets[0].use\" data-ph data-empty=\"what you used it for\">What you used it for, and whether it survived contact with the project</p>\n</li></ul>\n</div>\n<div class=\"field field--block\">\n<p class=\"field-label\">What the demo showed</p>\n<p class=\"field-text\" data-edit=\"architecture.demo\" data-ph>What the demo showed, step by step, in the order it was shown. The run, not the feature list \u2014 this is what a reviewer reads when they cannot open the recording.</p>\n</div>\n</div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">04</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"/><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"/><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"/></svg><span class=\"section-name\">What changed, stage by stage</span></h2>\n<div class=\"steps\" data-list=\"stages\"><article class=\"card step\" data-row=\"stages[0]\">\n<div class=\"step-head\">\n<span class=\"step-icon\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m16 18 6-6-6-6\"/><path d=\"m8 6-6 6 6 6\"/></svg></span>\n<h3 class=\"step-name\" data-edit=\"stages[0].title\" data-empty=\"Name this stage\">Engineering &amp; Coding</h3>\n<span class=\"step-level\">Level <span data-edit=\"stages[0].level\" data-num=\"1-3\" data-empty=\"1-3\">2</span></span>\n    \n</div>\n<p class=\"chip-row\" data-list=\"stages[0].tools\"><span class=\"tag\" data-row=\"stages[0].tools[0]\" data-edit=\"stages[0].tools[0]\" data-empty=\"Tool not chosen yet\" data-ph>The tool doing the work</span></p>\n<p class=\"step-text\" data-edit=\"stages[0].description\" data-ph>One paragraph: what triggers the agent, what it produces, and what a human reviews or decides. The workflow, not the tool's marketing.</p>\n<div class=\"metrics\" data-list=\"stages[0].metrics\"><div class=\"metric\" data-row=\"stages[0].metrics[0]\">\n<p class=\"metric-label\" data-edit=\"stages[0].metrics[0].label\" data-ph>What you measured</p>\n<p class=\"metric-value\"><span class=\"was\" data-edit=\"stages[0].metrics[0].before\" data-ph>3 h</span><svg class=\"icon icon--xs metric-arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg><strong data-edit=\"stages[0].metrics[0].after\" data-ph>30 min</strong></p>\n<p class=\"metric-foot\"><span class=\"chip chip--success\" data-edit=\"stages[0].metrics[0].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/></svg><span class=\"chip-text\">Measured</span></span></p>\n<p class=\"metric-note\"><span class=\"metric-method\" data-edit=\"stages[0].metrics[0].method\" data-ph>How it was counted: Jira label, telemetry, manual count, survey</span><span class=\"metric-method\" data-edit=\"stages[0].metrics[0].period\" data-ph>Sprints 41 to 44</span></p>\n</div><div class=\"metric\" data-row=\"stages[0].metrics[1]\">\n<p class=\"metric-label\" data-edit=\"stages[0].metrics[1].label\" data-ph>A second number</p>\n<p class=\"metric-value\"><strong data-edit=\"stages[0].metrics[1].value\" data-ph>~40%</strong></p>\n<p class=\"metric-foot\"><span class=\"chip chip--warning\" data-edit=\"stages[0].metrics[1].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n<p class=\"metric-note\"><span class=\"metric-method\" data-edit=\"stages[0].metrics[1].method\" data-ph>How you arrived at it</span><span data-edit=\"stages[0].metrics[1].note\" data-ph>One line of context.</span></p>\n</div></div>\n</article><article class=\"card step\" data-row=\"stages[1]\">\n<div class=\"step-head\">\n<span class=\"step-icon\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2\"/><path d=\"M6.453 15h11.094\"/><path d=\"M8.5 2h7\"/></svg></span>\n<h3 class=\"step-name\" data-edit=\"stages[1].title\" data-empty=\"Name this stage\">Quality &amp; Testing</h3>\n<span class=\"step-level\">Level <span data-edit=\"stages[1].level\" data-num=\"1-3\" data-empty=\"1-3\">1</span></span>\n</div>\n<p class=\"chip-row\" data-list=\"stages[1].tools\"><span class=\"tag tag--empty\" data-row=\"stages[1].tools[0]\" data-edit=\"stages[1].tools[0]\" data-empty=\"Tool not chosen yet\"></span></p>\n<p class=\"step-text\" data-edit=\"stages[1].description\" data-ph>The second stage, in the same four parts: what the agent does, what triggers it, what a human still decides, and where the evidence lives.</p>\n<div class=\"metrics\" data-list=\"stages[1].metrics\"><div class=\"metric\" data-row=\"stages[1].metrics[0]\">\n<p class=\"metric-label\" data-edit=\"stages[1].metrics[0].label\" data-ph>The metric you will move</p>\n<p class=\"metric-value metric-value--empty\"><strong data-edit=\"stages[1].metrics[0].value\" data-empty=\"Baseline open\"></strong></p>\n<p class=\"metric-foot\"></p>\n<p class=\"metric-note\"><span data-edit=\"stages[1].metrics[0].note\" data-ph>Why there is no number yet, and what will produce one.</span></p>\n</div><div class=\"metric\" data-row=\"stages[1].metrics[1]\">\n<p class=\"metric-label\" data-edit=\"stages[1].metrics[1].label\" data-ph>Target</p>\n<p class=\"metric-value metric-value--empty\"><strong data-edit=\"stages[1].metrics[1].value\" data-empty=\"Planned\"></strong></p>\n<p class=\"metric-foot\"></p>\n<p class=\"metric-note\"><span data-edit=\"stages[1].metrics[1].note\" data-ph>Set once the baseline exists.</span></p>\n</div><template data-row-template data-row-shape='{\"label\":null,\"before\":null,\"after\":null,\"status\":\"estimated\",\"method\":null,\"period\":null,\"note\":null}'><div class=\"metric\" data-row=\"stages[1].metrics[0]\">\n<p class=\"metric-label\" data-edit=\"stages[1].metrics[0].label\" data-ph>What you measured</p>\n<p class=\"metric-value\"><span class=\"was\" data-edit=\"stages[1].metrics[0].before\" data-ph data-empty=\"before\">Before</span><svg class=\"icon icon--xs metric-arrow\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg><strong data-edit=\"stages[1].metrics[0].after\" data-ph data-empty=\"after\">After</strong></p>\n<p class=\"metric-foot\"><span class=\"chip chip--warning\" data-edit=\"stages[1].metrics[0].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n<p class=\"metric-note\"><span class=\"metric-method\" data-edit=\"stages[1].metrics[0].method\" data-ph>How it was counted: Jira label, telemetry, manual count, survey</span><span data-edit=\"stages[1].metrics[0].period\" data-ph data-empty=\"over what stretch\">Over what stretch</span></p>\n</div></template></div>\n</article></div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">05</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m12 14 4-4\"/><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"/></svg><span class=\"section-name\">The five programme numbers</span></h2>\n<div class=\"tiles\"><div class=\"tile\">\n<p class=\"tile-label\">Daily active AI users</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#daily-active.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#daily-active.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#daily-active.note\" data-empty=\"How it was counted\" data-ph>Give a value and the method behind it, or say why it is not tracked.</p>\n</div><div class=\"tile\">\n<p class=\"tile-label\">AI-assisted deliverables</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#ai-assisted.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#ai-assisted.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#ai-assisted.note\" data-empty=\"How it was counted\" data-ph>Give a value and the method behind it, or say why it is not tracked.</p>\n</div><div class=\"tile\">\n<p class=\"tile-label\">Cycle / lead time</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#cycle-time.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#cycle-time.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#cycle-time.note\" data-empty=\"How it was counted\" data-ph>Give a value and the method behind it, or say why it is not tracked.</p>\n</div><div class=\"tile\">\n<p class=\"tile-label\">Hours saved per person</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#hours-saved.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#hours-saved.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#hours-saved.note\" data-empty=\"How it was counted\" data-ph>Give a value and the method behind it, or say why it is not tracked.</p>\n</div><div class=\"tile\">\n<p class=\"tile-label\">AI cost</p>\n<p class=\"tile-value tile-value--empty\" data-edit=\"keyNumbers#token-cost.value\" data-empty=\"Not tracked\"></p>\n<p class=\"tile-foot\"><span class=\"chip chip--muted\" data-edit=\"keyNumbers#token-cost.status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Not tracked</span></span></p>\n<p class=\"tile-foot\" data-edit=\"keyNumbers#token-cost.note\" data-empty=\"How it was counted\" data-ph>Required for a Level 3 claim.</p>\n</div></div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">06</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M13.744 17.736a6 6 0 1 1-7.48-7.48\"/><path d=\"M15 6h1v4\"/><path d=\"m6.134 14.768.866-.5 2 3.464\"/><circle cx=\"16\" cy=\"8\" r=\"6\"/></svg><span class=\"section-name\">What it cost</span></h2>\n<div class=\"card grid-2\">\n<div class=\"field\">\n<p class=\"field-label\">To build \u00b7 one-off</p>\n<ul class=\"lines\" data-list=\"costs.build\" data-none=\"Not stated\"><li class=\"line\" data-row=\"costs.build[0]\">\n<p class=\"line-what\" data-edit=\"costs.build[0].what\" data-ph data-empty=\"Not stated\">Who built it, and for how long.</p>\n<p class=\"line-foot\"><span class=\"line-amount\" data-edit=\"costs.build[0].amount\" data-ph data-empty=\"no figure\">6 people-weeks</span><span class=\"chip chip--warning\" data-edit=\"costs.build[0].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n</li><li class=\"line\" data-row=\"costs.build[1]\">\n<p class=\"line-what\" data-edit=\"costs.build[1].what\" data-ph data-empty=\"Not stated\">Licences, platform or money bought for this - or nothing extra.</p>\n<p class=\"line-foot\"><span class=\"line-amount\" data-edit=\"costs.build[1].amount\" data-ph data-empty=\"no figure\">\u00a30 extra</span><span class=\"chip chip--warning\" data-edit=\"costs.build[1].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n</li></ul>\n</div>\n<div class=\"field\">\n<p class=\"field-label\">To run \u00b7 per month or per sprint</p>\n<ul class=\"lines\" data-list=\"costs.run\" data-none=\"The AI cost tile above is the whole answer\"><li class=\"line\" data-row=\"costs.run[0]\">\n<p class=\"line-what\" data-edit=\"costs.run[0].what\" data-ph data-empty=\"Not stated\">AI spend, when it needs more than the tile above: what moves it, what it becomes at full adoption.</p>\n<p class=\"line-foot\"><span class=\"line-amount\" data-edit=\"costs.run[0].amount\" data-ph data-empty=\"no figure\">~$180 a month</span><span class=\"chip chip--warning\" data-edit=\"costs.run[0].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n</li><li class=\"line\" data-row=\"costs.run[1]\">\n<p class=\"line-what\" data-edit=\"costs.run[1].what\" data-ph data-empty=\"Not stated\">What else it takes to keep it running: infrastructure, the human review nobody budgets for.</p>\n<p class=\"line-foot\"><span class=\"line-amount\" data-edit=\"costs.run[1].amount\" data-ph data-empty=\"no figure\">2 h a sprint</span><span class=\"chip chip--warning\" data-edit=\"costs.run[1].status\" data-enum=\"metric-status\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg><span class=\"chip-text\">Estimated</span></span></p>\n</li></ul>\n</div>\n</div>\n</section>\n<section class=\"section two-col\">\n<div>\n<h2 class=\"section-title\"><span class=\"section-no\">07</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m11 17 2 2a1 1 0 1 0 3-3\"/><path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"/><path d=\"m21 3 1 11h-2\"/><path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"/><path d=\"M3 4h8\"/></svg><span class=\"section-name\">The client</span></h2>\n<div class=\"card field-stack\">\n<p class=\"chip-row\"><span class=\"chip chip--warning\" data-edit=\"customer.shown\" data-enum=\"shown\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/></svg><span class=\"chip-text\">Shown in part</span></span></p>\n<div class=\"field\"><p class=\"field-label\">What they said</p><p class=\"field-text\" data-edit=\"customer.reaction\" data-ph>What the client said. Their words where you have them, not your reading of them.</p></div>\n<div class=\"field\"><p class=\"field-label\">Support to deploy and scale</p><p class=\"field-text\" data-edit=\"customer.support\" data-ph>Whether you have the support you need to deploy, use or scale it, and from whom. Say so plainly when you do not.</p></div>\n</div>\n</div>\n<div>\n<h2 class=\"section-title\"><span class=\"section-no\">08</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"M8 14h.01\"/><path d=\"M12 14h.01\"/><path d=\"M16 14h.01\"/><path d=\"M8 18h.01\"/><path d=\"M12 18h.01\"/><path d=\"M16 18h.01\"/></svg><span class=\"section-name\">The next two months</span></h2>\n<div class=\"card field-stack\">\n<div class=\"field\"><p class=\"field-label\">Scaling</p><p class=\"field-text\" data-edit=\"plan.scaling\" data-ph>What gets scaled in the next two months, and along which axis: more of the same work, more of the pipeline, more environments.</p></div>\n<div class=\"field\"><p class=\"field-label\">Adoption by other teams</p><p class=\"field-text\" data-edit=\"plan.adoption\" data-ph>Which other teams take this up, and what has to be true before they can. Name them if you know them.</p></div>\n<div class=\"field\"><p class=\"field-label\">New functionality</p><p class=\"field-text\" data-edit=\"plan.newFunction\" data-ph>What the factory will do in two months that it cannot do today.</p></div>\n</div>\n</div>\n</section>\n<section class=\"section two-col\">\n<div>\n<h2 class=\"section-title\"><span class=\"section-no\">09</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/></svg><span class=\"section-name\">Evidence and measurement</span></h2>\n<div class=\"card\"><ul class=\"ref\" data-list=\"evidence\"><li data-row=\"evidence[0]\">\n<p class=\"ref-what\" data-edit=\"evidence[0].what\" data-ph>The claim this backs</p>\n<p class=\"ref-where\" data-edit=\"evidence[0].where\" data-ph>The system it lives in</p>\n<p class=\"ref-caveat\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/></svg><span data-edit=\"evidence[0].caveat\" data-ph data-empty=\"nothing weakens it\">What weakens it. Say it here rather than let a reviewer find it.</span></p>\n</li></ul>\n<div class=\"field field--block\">\n<p class=\"field-label\">Where it lives</p>\n<ul class=\"links\" data-list=\"links\"><li class=\"link\" data-row=\"links[0]\">\n<span class=\"link-kind\" data-edit=\"links[0].kind\" data-empty=\"What this link is\">Demo recording</span>\n<span class=\"link-url\" data-edit=\"links[0].url\" data-ph data-empty=\"not linked yet\">The recording a reviewer can watch</span>\n</li><li class=\"link\" data-row=\"links[1]\">\n<span class=\"link-kind\" data-edit=\"links[1].kind\" data-empty=\"What this link is\">Repository</span>\n<span class=\"link-url\" data-edit=\"links[1].url\" data-ph data-empty=\"not linked yet\">github.com/...</span>\n</li><li class=\"link\" data-row=\"links[2]\">\n<span class=\"link-kind\" data-edit=\"links[2].kind\" data-empty=\"What this link is\">Dashboard</span>\n<span class=\"link-url\" data-edit=\"links[2].url\" data-ph data-empty=\"not linked yet\">The board or dashboard with the numbers on it</span>\n</li><li class=\"link\" data-row=\"links[3]\">\n<span class=\"link-kind\" data-edit=\"links[3].kind\" data-empty=\"What this link is\">Evidence pack</span>\n<span class=\"link-url\" data-edit=\"links[3].url\" data-ph data-empty=\"not linked yet\">Where the evidence in this section lives</span>\n</li><li class=\"link\" data-row=\"links[4]\">\n<span class=\"link-kind\" data-edit=\"links[4].kind\" data-empty=\"What this link is\">LEAP record</span>\n<span class=\"link-url\" data-edit=\"links[4].url\" data-ph data-empty=\"not linked yet\">The programme's own record of this team</span>\n</li></ul>\n</div>\n</div>\n</div>\n<div>\n<h2 class=\"section-title\"><span class=\"section-no\">10</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5\"/><path d=\"M9 18h6\"/><path d=\"M10 22h4\"/></svg><span class=\"section-name\">What we learned</span></h2>\n<div class=\"card\"><ol class=\"notes\" data-list=\"learnings\"><li data-row=\"learnings[0]\">\n<p class=\"note-title\"><span data-edit=\"learnings[0].title\" data-ph>What you know now that you did not before</span></p>\n<p class=\"note-text\" data-edit=\"learnings[0].text\" data-ph>One short paragraph. The surprising and the failed both count, and a failure with a reason reads stronger than a success with none.</p>\n</li></ol></div>\n</div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">11</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"/></svg><span class=\"section-name\">What is stuck</span></h2>\n<div class=\"card\"><ul class=\"issues\" data-list=\"issues\"><li class=\"issue\" data-row=\"issues[0]\">\n<p class=\"issue-what\" data-edit=\"issues[0].what\" data-ph>What is stuck, in one or two sentences.</p>\n<p class=\"issue-fix\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg><span data-edit=\"issues[0].fix\" data-ph data-empty=\"No way out of it yet.\">How it gets unblocked, if you know. Leave it out rather than invent one.</span></p>\n<p class=\"issue-needs\">Needs: <span data-edit=\"issues[0].needs\" data-ph data-empty=\"nothing from the programme\">What you need from the programme or the account</span></p>\n</li></ul></div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">12</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/></svg><span class=\"section-name\">If you are building the same factory</span></h2>\n<div class=\"card card--tip\"><p class=\"field-text\" data-edit=\"advice\" data-ph>What you would tell another team building the same factory to do differently. One paragraph, and the more specific the better.</p></div>\n</section>\n<section class=\"section\">\n<h2 class=\"section-title\"><span class=\"section-no\">13</span><svg class=\"icon section-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/></svg><span class=\"section-name\">Two questions from the programme</span></h2>\n<div class=\"card grid-2\">\n<div class=\"qa\"><p class=\"qa-q\">Would you call this an AI Factory?</p><p class=\"qa-a\" data-edit=\"programme.factory\" data-ph>Would you call what you have built an AI Factory? One line.</p></div>\n<div class=\"qa\"><p class=\"qa-q\">How is the programme working for you?</p><p class=\"qa-a\" data-edit=\"programme.feedback\" data-ph>How is the programme working for you? One line, including the part that is not working.</p></div>\n</div>\n</section>\n<footer class=\"foot\">\n<p class=\"caveat\"><svg class=\"icon icon--xs\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/></svg><span data-edit=\"source.caveat\" data-ph>The honest limit of this submission, for example: tested across four sprints on one sub-stream.</span></p>\n<div class=\"foot-lines\">\n<p>AI/Run Mission 2026 \u00b7 Build your AI factory</p>\n<p>Written from one qualification meeting \u00b7 <span data-edit=\"source.date\" data-ph>date</span></p>\n</div>\n</footer>\n</main>\n<div class=\"nojs\" id=\"nojs\">\n<p><b>This is the document, not the editor.</b> Scripts are not running here, which is what a\nSharePoint or Teams preview does to a file. Download it and open it from your own machine to\nfill it in.</p>\n</div>\n<div class=\"tools\" id=\"tools\" hidden>\n<span class=\"tool-count\" id=\"tool-count\"></span>\n<button type=\"button\" class=\"tool\" id=\"tool-questions\" aria-pressed=\"false\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/></svg><span>Questions</span></button>\n<button type=\"button\" class=\"tool tool--white\" id=\"tool-edit\" aria-pressed=\"false\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/><path d=\"m15 5 4 4\"/></svg><span>Edit</span></button>\n<button type=\"button\" class=\"tool tool--go\" id=\"tool-save\" title=\"Saves the submission to your computer, ready to upload to your team page on Leap.\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 15V3\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><path d=\"m7 10 5 5 5-5\"/></svg><span>Download for Leap</span></button>\n</div>\n<aside class=\"qpanel\" id=\"qpanel\" aria-label=\"The questions this template asks\" hidden>\n<div class=\"qpanel-head\">\n<p class=\"qpanel-title\">What this template asks</p>\n<button type=\"button\" class=\"tool\" id=\"qpanel-close\" aria-label=\"Close the questions\"><svg class=\"icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></button>\n</div>\n<div class=\"qpanel-body\" id=\"qpanel-body\"></div>\n</aside>";
var __config="{\"stamp\":\"source.date\",\"title\":\"{team.name} \u00b7 AI/RUN Mission 2026 \u00b7 Milestone 1\",\n\"storage\":\"milestone\",\n\"file\":{\"name\":[\"team.code\",\"team.name\"],\"number\":\"team.milestone\",\"named\":\"{name}-milestone-{no}.html\",\"unnamed\":\"milestone-{no}-submission.html\"},\n\"groups\":{\"foot\":\"Before you send\",\"other\":\"About the team\"},\n\"text\":{\"progress\":\" facts in this template are backed by a number or a source. \",\"framed\":\" This copy is open inside a SharePoint or Teams preview, and a browser refuses downloads from one.\",\"framedHow\":\"Download the file itself - in SharePoint, the Download on the file, not this page - open it from your machine, and everything works.\"},\n\"scale\":{\"now\":\"northStar.currentLevel\",\"target\":\"northStar.targetLevel\",\"max\":3,\"pin\":true,\"label\":\"AI maturity {now} of {max}, target {target}\"},\n\"steps\":{\"list\":\"stages\",\"field\":\"stage\",\"title\":\"title\",\"tip\":\"Click to change which SDLC stage this is. Shift-click goes back.\",\"types\":[[\"requirements\",\"Requirements & Analysis\",\"clipboard\"],[\"architecture\",\"Architecture & Design\",\"blocks\"],[\"engineering\",\"Engineering & Coding\",\"code\"],[\"quality\",\"Quality & Testing\",\"flask\"],[\"review\",\"Code Review\",\"branch\"],[\"documentation\",\"Documentation\",\"file\"]]},\n\"keep\":[\"stage\",\"status\",\"kind\",\"id\"],\n\"adds\":{\"team.people\":\"person\",\"context.aiTools\":\"tool\",\"architecture.pieces\":\"piece\",\"architecture.assets\":\"asset\",\"stages\":\"stage\",\"stages.tools\":\"tool\",\"stages.metrics\":\"metric\",\"costs.build\":\"cost line\",\"costs.run\":\"cost line\",\"evidence\":\"source\",\"learnings\":\"learning\",\"issues\":\"blocker\",\"links\":\"link\"},\n\"enums\":{\"metric-status\":[[\"measured\",\"Measured\",\"success\"],[\"estimated\",\"Estimated\",\"warning\"],[\"qualitative\",\"In place\",\"info\"],[\"baseline\",\"Baseline open\",\"muted\"],[\"untracked\",\"Not tracked\",\"muted\"],[\"planned\",\"Planned\",\"muted\"]],\"shown\":[[\"yes\",\"Shown to the client\",\"success\"],[\"partly\",\"Shown in part\",\"warning\"],[\"no\",\"Not shown yet\",\"muted\"]]},\n\"checks\":[[\"text\",\"team.tagline\",\"What the team delivers for the client\"],[\"text\",\"context.painPoint\",\"The delivery pain you started from\"],[\"anyText\",\"context.aiTools\",\"The AI tooling the project has\"],[\"text\",\"context.baseline\",\"The baseline period to compare against\"],[\"text\",\"northStar.goal\",\"The target state of the factory\"],[\"text\",\"northStar.clientOutcome\",\"The client business outcome\"],[\"set\",\"northStar.currentLevel\",\"The maturity level today\"],[\"minText\",\"stages\",\"At least two SDLC stages described\",[\"description\",2]],[\"inner\",\"stages\",\"At least one measured before and after\",{\"list\":\"metrics\",\"where\":{\"status\":\"measured\"},\"text\":[\"before\",\"after\"]}],[\"every\",\"stages\",\"A maturity level on every stage\",\"level\"],[\"number\",\"keyNumbers#daily-active.value\",\"Daily active AI users\",{\"status\":\"keyNumbers#daily-active.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"number\",\"keyNumbers#ai-assisted.value\",\"AI-assisted deliverables\",{\"status\":\"keyNumbers#ai-assisted.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"number\",\"keyNumbers#cycle-time.value\",\"Cycle / lead time\",{\"status\":\"keyNumbers#cycle-time.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"number\",\"keyNumbers#hours-saved.value\",\"Hours saved per person\",{\"status\":\"keyNumbers#hours-saved.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"number\",\"keyNumbers#token-cost.value\",\"AI cost\",{\"status\":\"keyNumbers#token-cost.status\",\"open\":[\"baseline\",\"untracked\",\"planned\"]}],[\"text\",\"architecture.summary\",\"How the solution is built\"],[\"text\",\"architecture.demo\",\"What the demo showed\"],[\"list\",\"architecture.assets\",\"Reuse from the EPAM AI Assets marketplace\"],[\"rowText\",\"costs.build\",\"What building it cost\",[\"what\",\"amount\"]],[\"allText\",\"plan\",\"Scaling, adoption and new functionality for the next two months\",[\"scaling\",\"adoption\",\"newFunction\"]],[\"list\",\"issues\",\"What is stuck\"],[\"set\",\"customer.shown\",\"Whether the client has seen it\"],[\"text\",\"customer.support\",\"Support to deploy and scale\"],[\"text\",\"programme.factory\",\"Whether the team calls this an AI Factory\"],[\"text\",\"programme.feedback\",\"How the programme is working for the team\"],[\"min\",\"evidence\",\"Where the evidence lives\",1],[\"min\",\"learnings\",\"Three learnings or more\",3],[\"someText\",\"links\",\"At least one artifact linked\",\"url\"],[\"text\",\"advice\",\"What you would tell another team\"],[\"text\",\"source.caveat\",\"The honest limit of the claim\"]],\n\"questions\":{\"team.name\":\"Team name as the client and the programme know it.\",\"team.code\":\"Programme team code, e.g. 0042-ACME-K9TR. Null when the team does not know it, and then it is not printed.\",\"team.tagline\":\"One sentence: what this team delivers for the client.\",\"team.account\":\"Account or client name, if it may be named.\",\"team.coach\":\"The AI coach working with this team.\",\"team.size\":\"Team size as a phrase.\",\"team.people.name\":\"The person's name, as the project writes it.\",\"team.people.role\":\"Their role, as the project names it: Business analyst, Backend engineer, QA. The role, not what they worked on. Leave it out rather than guess.\",\"context.painPoint\":\"The biggest delivery pain before this programme, in one or two sentences. Concrete: what took too long, what kept breaking, what the client complained about.\",\"context.aiTools\":\"What AI tooling the project actually has access to, licences and platforms.\",\"context.baseline\":\"The period the after-numbers are compared against.\",\"northStar.goal\":\"The target state in three or four sentences: which SDLC stages become agentic, what humans keep governing.\",\"northStar.currentLevel\":\"The team's AI maturity TODAY, on the programme's AI maturity scale: how far AI runs the team's delivery as a whole, not how much one person uses a tool. From 1 to 3, one decimal allowed: 2.9 is a real answer. The target is 3 for every team.\",\"northStar.shiftFrom\":\"How the work is done today, in one sentence.\",\"northStar.shiftTo\":\"How it is done once the factory is in place, in one sentence.\",\"northStar.clientOutcome\":\"The client business outcome this is connected to. Money, risk or speed, not adoption.\",\"architecture.summary\":\"How it is built, in one paragraph: what the pieces are, what triggers what, where the AI sits and where a human does. Name the platform each piece runs on.\",\"architecture.pieces.name\":\"What the piece is called.\",\"architecture.pieces.tool\":\"What it runs on.\",\"architecture.pieces.role\":\"What it does, in a few words.\",\"architecture.assets.name\":\"The asset as the marketplace names it.\",\"architecture.assets.use\":\"What you used it for, and whether it survived contact with the project.\",\"architecture.demo\":\"What the demo showed, step by step, in the order it was shown. This is the sentence a reviewer reads when they cannot open the recording, so write the RUN, not the feature list.\",\"stages.title\":\"Overrides the stage label when the team calls it something of its own.\",\"stages.level\":\"The AI maturity of this one stage, on the same scale as the team's: how far AI runs this stage's work today, not what is planned. Stages can sit at different levels. From 1 to 3, one decimal allowed: 2.5 is a real answer. Leave it out rather than claim one.\",\"stages.tools\":\"The tools doing the work.\",\"stages.description\":\"One paragraph: what triggers the agent, what it does, what a human reviews or decides. Write the workflow, not the tool's marketing.\",\"stages.metrics.label\":\"What is being measured.\",\"stages.metrics.before\":\"The baseline value with its unit.\",\"stages.metrics.after\":\"The current value with its unit.\",\"stages.metrics.status\":\"How true this number is. `measured` needs before, after, period and method. Never dress an estimate as a measurement.\",\"stages.metrics.method\":\"How it was counted: Jira label, telemetry, manual count, survey. A reviewer will ask.\",\"stages.metrics.period\":\"Over what stretch it was measured.\",\"stages.metrics.value\":\"A single value, when there is no before and after.\",\"stages.metrics.note\":\"One line of context, including why a number is missing.\",\"keyNumbers#daily-active.status\":\"How true this number is. A `measured` one needs a method and a period behind it, and `untracked` is an answer - a better one than a figure nobody can defend.\",\"keyNumbers#ai-assisted.status\":\"How true this number is.\",\"keyNumbers#cycle-time.status\":\"How true this number is.\",\"keyNumbers#hours-saved.status\":\"How true this number is.\",\"keyNumbers#token-cost.status\":\"How true this number is.\",\"keyNumbers#daily-active.value\":\"Share of team members using AI tools daily, and how that was measured.\",\"keyNumbers#daily-active.note\":\"How the daily-active share was counted: a licence report, a telemetry query, a show of hands. Or why it is not tracked.\",\"keyNumbers#ai-assisted.value\":\"Share of core deliverables (stories, PRs, test cases) meaningfully AI-assisted this sprint.\",\"keyNumbers#ai-assisted.note\":\"How the AI-assisted share was counted: a Jira label, a PR tag, a manual count. Or why it is not tracked.\",\"keyNumbers#cycle-time.value\":\"Change in cycle or lead time against the baseline period. Negative is faster.\",\"keyNumbers#cycle-time.note\":\"How cycle or lead time was counted, and over which period. Or why it is not tracked.\",\"keyNumbers#hours-saved.value\":\"Engineering hours saved per person per week, and how that was arrived at.\",\"keyNumbers#hours-saved.note\":\"How the hours saved were arrived at: a survey, a timing exercise, an estimate said to be one. Or why it is not tracked.\",\"keyNumbers#token-cost.value\":\"AI token or tool cost per sprint or per month. Required for a Level 3 claim.\",\"keyNumbers#token-cost.note\":\"Where the AI cost figure comes from: the platform's own billing, an account estimate. Required for a Level 3 claim.\",\"costs.build.what\":\"One kind of cost that went into building it: people, licences, money. One line each \u2014 add a line for every kind you have, delete the ones you do not.\",\"costs.build.amount\":\"The figure, in whatever unit you hold it: 6 people-weeks, \u00a34k, nothing extra. Leave it empty rather than invent one \u2014 the line still counts.\",\"costs.build.status\":\"How true this figure is. An estimate said to be an estimate is worth more than a number nobody can defend.\",\"costs.run.what\":\"What it takes to keep it running, per month or per sprint \u2014 the part the AI cost tile cannot hold: a cost that moves with volume, a raise requested, review time somebody pays for. Delete every line here if the tile above is the whole answer.\",\"costs.run.amount\":\"The figure, per month or per sprint. Empty is an answer too.\",\"costs.run.status\":\"How true this figure is.\",\"customer.shown\":\"Have you shown the solution to the client. `partly` for a demo to one person or one part of it.\",\"customer.reaction\":\"What they said. Their words where you have them, not your reading of them.\",\"customer.support\":\"Whether you have the support you need to deploy, use or scale it \u2014 and from whom. Say so plainly when you do not.\",\"plan.scaling\":\"What gets scaled, and along which axis: more of the same work, more of the pipeline, more environments.\",\"plan.adoption\":\"Which other teams take this up, and what has to be true before they can. Name them if you know them.\",\"plan.newFunction\":\"What the factory will do in two months that it cannot do today.\",\"evidence.what\":\"The claim this backs.\",\"evidence.where\":\"The system it lives in.\",\"evidence.caveat\":\"What weakens it. Say it here rather than let a reviewer find it.\",\"links.kind\":\"What this link is: the demo recording, the repository, the dashboard a reviewer opens.\",\"links.url\":\"The address itself. A reviewer will click it, so it has to be one they can reach - and a page nobody outside the team can open is worth saying so about.\",\"learnings.title\":\"The learning in one line, as a finding rather than a topic.\",\"learnings.text\":\"One short paragraph: what happened, and what you concluded from it.\",\"issues.what\":\"What is stuck, in one or two sentences.\",\"issues.fix\":\"How it gets unblocked, if the team knows. Leave it out rather than invent one: \\\"we do not know yet\\\" is the answer the programme is asking for.\",\"issues.needs\":\"What you need from the programme or the account to move it.\",\"advice\":\"What you would tell another team building the same factory to do differently. One paragraph.\",\"programme.factory\":\"Would you call what you have built an AI Factory? One line. A straight \\\"not yet, because...\\\" is a better answer than a yes, and the programme reads it that way.\",\"programme.feedback\":\"How is the programme working for you? One line. Say the part that is not working: this is the only channel the programme has for it.\",\"source.caveat\":\"The honest limit of this submission, e.g. tested across 4 sprints on one sub-stream.\"}\n}";

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
clone.removeAttribute("data-js"); clone.setAttribute("data-filed","");
Array.prototype.forEach.call(clone.querySelectorAll("[contenteditable]"),function(e){ e.removeAttribute("contenteditable"); });
Array.prototype.forEach.call(clone.querySelectorAll("[data-tip],[aria-describedby]"),function(e){ e.removeAttribute("data-tip"); e.removeAttribute("aria-describedby"); });
Array.prototype.forEach.call(clone.querySelectorAll("[tabindex]"),function(e){ e.removeAttribute("tabindex"); });
Array.prototype.forEach.call(clone.querySelectorAll(".row-del,.row-add,#tool-draft,#notice,#tip"),
function(e){ if(e.parentNode) e.parentNode.removeChild(e); });
var qp=clone.querySelector("#qpanel"); if(qp) qp.setAttribute("hidden","");
var qb=clone.querySelector("#qpanel-body"); if(qb) qb.innerHTML=""; var te=clone.querySelector("#tool-edit");
if(te){ te.setAttribute("aria-pressed","false"); if(te.lastElementChild) te.lastElementChild.textContent="Edit"; }
var tq=clone.querySelector("#tool-questions"); if(tq) tq.setAttribute("aria-pressed","false");
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
