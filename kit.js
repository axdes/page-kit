/* Page kit: the stylesheet and the editor for a self-contained HTML page.
 * The page carries its own data and config; this file carries the machinery, and bakes itself
 * back into the page when the reader downloads it, so the saved file needs nothing from here. */
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
.field-text{font-size:var(--font-sm);line-height:var(--leading-relaxed)}
.field-text--empty{color:var(--muted-foreground)} .chip-row{display:flex;flex-wrap:wrap;gap:var(--space-2)}
.tag{font-size:var(--font-xs);color:var(--muted-foreground);background:var(--muted);
border-radius:var(--radius-full);padding:var(--space-1) var(--space-3)}
.tag--empty{background:transparent;padding-inline:0} .card--hero{padding:var(--space-6)}
.hero-text{font-size:var(--font-md);line-height:var(--leading-relaxed);max-width:60rem}
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
font-size:var(--font-sm);color:var(--muted-foreground)}
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
.step-text{font-size:var(--font-sm);color:var(--muted-foreground);line-height:var(--leading-relaxed)}
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
.tile-value{font-size:var(--font-2xl);font-weight:700;line-height:var(--leading-none);
color:var(--primary-accent);font-variant-numeric:tabular-nums}
.tiles--long .tile-value:not(.tile-value--prose):not(.tile-value--empty){
font-size:var(--font-lg);line-height:var(--leading-snug)}
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
.line-what{font-size:var(--font-sm);line-height:var(--leading-relaxed)}
.line-foot{margin-top:var(--space-2);display:flex;align-items:center;gap:var(--space-2);flex-wrap:wrap}
.line-amount{font-size:var(--font-sm);font-weight:var(--font-weight-semibold);
font-variant-numeric:tabular-nums}
.line-amount:empty{font-weight:var(--font-weight-regular)}
.line .chip--muted,.line .chip--info{background:var(--muted)}
.lines:not(:has(> [data-row]))::before{content:attr(data-none);font-size:var(--font-sm);
color:var(--muted-foreground)}

.issues{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--space-4)}
.issue-what{font-size:var(--font-sm);line-height:var(--leading-relaxed)}
.issue-fix{margin-top:var(--space-2);display:flex;gap:var(--space-2);align-items:flex-start;
font-size:var(--font-sm);color:var(--primary-soft-foreground)}
.issue-fix--none{color:var(--muted-foreground)} .issue-fix .icon{margin-top:.25em;flex:none}
.issue-needs{margin-top:var(--space-2);font-size:var(--font-xs);color:var(--muted-foreground)}
.qa-q{font-size:var(--font-xs);text-transform:uppercase;letter-spacing:.06em;
color:var(--muted-foreground);margin-bottom:var(--space-2)}
.qa-a{font-size:var(--font-sm);line-height:var(--leading-relaxed)}
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
[data-filed] #tool-edit{background:var(--card);color:var(--muted-foreground);
box-shadow:0 1px 2px rgb(0 0 0 / .14),0 6px 18px rgb(0 0 0 / .12)}
[data-filed] #tool-edit:hover{background:var(--card);color:var(--primary-accent)}
.tool-count{font-size:var(--font-xs);color:var(--neutral-400);
font-variant-numeric:tabular-nums;padding-inline:var(--space-2);white-space:nowrap}
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
.tools,.qpanel,.row-add,.row-del,.nojs,.notice{display:none!important}
}
@media print{
@page{size:A4;margin:12mm}
:root{color-scheme:light} body{background:var(--card);font-size:12px}
.page{max-width:none;padding:0;transform:none} .theme{display:none}
.section{margin-top:18px;break-inside:avoid-page} .tiles{grid-template-columns:repeat(5,1fr)}
a{color:inherit} *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}`;

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
    if(el.hasAttribute("data-num")){ if(textOf(el).trim()!==String(v)) el.textContent=String(v); return; }
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
var max=Number(SCALE.max)||1, now=Number(get(SCALE.now))||0, target=Number(get(SCALE.target))||0;
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
var text=textOf(el).replace(/,/g,".").replace(/[^0-9.]/g,""); var n=parseFloat(text);
if(isNaN(n)) return null;
var range=(el.getAttribute("data-num")||"").split("-"), lo=Number(range[0]), hi=Number(range[1]);
n=Math.min(hi,Math.max(lo,n)); return Math.round(n*10)/10;
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
Array.prototype.forEach.call(dom.querySelectorAll("[contenteditable],[title]"),function(e){ e.removeAttribute("contenteditable"); e.removeAttribute("title"); });
dom.removeAttribute("contenteditable"); dom.removeAttribute("title");
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
if(!on){ el.removeAttribute("contenteditable"); el.removeAttribute("title"); return; }
var q=askedAt(el.getAttribute("data-edit"));
if(q) el.setAttribute("title",q);
if(STEP&&STEP.tip&&el.getAttribute("data-enum")==="step") el.setAttribute("title",STEP.tip);
if(el.hasAttribute("data-enum")){ el.setAttribute("tabindex","0"); return; }
el.setAttribute("contenteditable","plaintext-only");
if(el.contentEditable!=="plaintext-only") el.setAttribute("contenteditable","true");
});
}
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
Array.prototype.forEach.call(clone.querySelectorAll("[data-edit][title]"),function(e){ e.removeAttribute("title"); });
Array.prototype.forEach.call(clone.querySelectorAll("[tabindex]"),function(e){ e.removeAttribute("tabindex"); });
Array.prototype.forEach.call(clone.querySelectorAll(".row-del,.row-add,#tool-draft,#notice"),
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
armSteps(); captureTemplates(); capturePrompts(); stampDate(); adoptAnswers(); growLists(); armSteps(); buildQuestions(); redrawScale(); sync();
}

var style=document.createElement("style"); style.id="kit-style"; style.textContent=__css;
document.head.appendChild(style);
var fallback=document.getElementById("kit-fallback"); if(fallback) fallback.parentNode.removeChild(fallback);
var offline=document.getElementById("kit-offline"); if(offline) offline.parentNode.removeChild(offline);

/* Everything the saved file needs is already in this script, so Download works whatever the host
 * allows: no request, no CORS, no second chance to fail. */
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
