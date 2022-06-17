function _1(md){return(
md`# Embeddings: 3D (Plotly)`
)}

function _chart(DOM,plotly,trace1,trace2,trace3,trace4,trace5,layout,config)
{
  const div = DOM.element('div');
  plotly.newPlot(div, [trace1, trace2, trace3, trace4, trace5], layout, config);
  return div;
}


function _layout(width,bp){return(
{
  width: width,
  height: (width > bp) ? width * 3/4 : width,
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0
  },
  paper_bgcolor: "#fff",
  showlegend: false,
  // xaxis: {
  //   showgrid: false,
  //   zeroline: false,
  //   visible: false,
  // },
  xaxis: {tickfont: {
    size: 1,
    color: 'rgb(107, 107, 107)'
  }},
  // xaxis: {
  //   range: [0, 1],  // to set the xaxis range to 0 to 1
  //   visible: false,
  //   showdividers: false,
  //   showgrid: false,
  //   tickcolor: "#f00",
  // },
  // xaxis: {
  //   showgrid: false,
  //   zeroline: false,
  //   visible: false,
  // },
}
)}

function _config(width){return(
{
  modeBarButtonsToRemove: ['pan3d', 'resetCameraLastSave3d', 'toImage', 'tableRotation'],
  displaylogo: false,
  width: width,
  // scrollZoom: false,
  displayModeBar: false
}
)}

function _legend(colorsCategories,colors,html)
{
  const labels = [];
  colorsCategories.forEach(colorCat => {
    const swatch = `<span class="mr-1/6 rounded-circle d-inline-block" style="width:0.5rem;height:0.5rem;background-color:${colors[colorCat[1]].dark}"></span>`;
    const label = `<span class="mr-0.5">${colorCat[0]}</span>`;
    labels.push(swatch + label)
  });
  return html`<div class="small-copy">${labels}</div>`;
}


function _bp(){return(
580
)}

function _colorsCategories(){return(
[
  ["animal", "orange"],
  ["athlete", "bright-green"],
  ["film", "bright-blue"],
  ["transportation", "violet"],
  ["village", "pink"],
]
)}

function _file(){return(
"https://gist.githubusercontent.com/justinjaywang/5da076860cf21f9a718043ef51ea1a2f/raw/e49cc295c4b54544ade94c21abeb2ae46caded1d/embeddings-3d.csv"
)}

async function _data(d3,file){return(
Object.assign(await d3.csv(file, d3.autoType))
)}

function _trace1(getTrace,colors,data){return(
getTrace({
  number: 1,
  color: colors['orange'].dark,
  name: "Animal"
}, data)
)}

function _trace2(getTrace,colors,data){return(
getTrace({
  number: 2,
  color: colors['bright-green'].dark,
  name: "Athlete"
}, data)
)}

function _trace3(getTrace,colors,data){return(
getTrace({
  number: 3,
  color: colors['bright-blue'].dark,
  name: "Film"
}, data)
)}

function _trace4(getTrace,colors,data){return(
getTrace({
  number: 4,
  color: colors['violet'].dark,
  name: "transportation"
}, data)
)}

function _trace5(getTrace,colors,data){return(
getTrace({
  number: 5,
  color: colors['pink'].dark,
  name: "village"
}, data)
)}

function _markerSize(width,bp){return(
(width > bp) ? 8 : 6
)}

function _getTrace(unpack,markerSize,map,addBr){return(
function getTrace({
  number,
  color,
  name
}, data) {
  return {
    x: unpack(data, `x${number}`),
    y: unpack(data, `y${number}`),
    z: unpack(data, `z${number}`),
    mode: 'markers',
    marker: {
      color,
      size: markerSize,
      opacity: 0.8,
      line: {
        color: 'rgba(255, 255, 255, 0.2)',
        width: 0.5,
      }
    },
    name,
    text: map(addBr, unpack(data, `text${number}`)),
    meta: "bottom right",
    hoverinfo: "text",
    hoverlabel: {
      bgcolor: "#fff",
      bordercolor: "#fff",
      font: {
        color: "#050505",
      },
    },
    type: 'scatter3d'
  };
}
)}

function _unpack(){return(
function unpack(rows, key) {
  return rows.map(function (row) {
    return row[key];
  });
}
)}

function _addBr(){return(
function addBr(text) {
  let result = "";
  let charIndex = 0;
  text.trim().split("").forEach(function (item, index) {
    result = result + item;

    if (index !== 0 && index % 30 === 0) {
      result = result + "<br>";
    }
  });
  return result;
}
)}

function _map(){return(
function map(fn, data) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const current = data[i];
    result.push(fn(current, i, data));
  }

  return result;
}
)}

function _colors(){return(
{
"light-warm-gray": {light:"#EEEDEE", dark: "#EEEDEE"},
"dark-warm-gray": {light:"#A3ACB0", dark: "#A3ACB0"},
"cool-gray-0\.5": {light:"#EDEEF1", dark: "#EDEEF1"},
"cool-gray-1": {light:"#C5C5D2", dark: "#AEAEBB"},
"cool-gray-1\.5": {light:"#AEAEBB", dark: "#8E8EA0"},
"cool-gray-2": {light:"#8E8EA0", dark: "#6E6E80"},
"cool-gray-3": {light:"#6E6E80", dark: "#404452"},
"cool-gray-4": {light:"#404452", dark: "#404452"},
"light-black": {light:"#191927", dark: "#191927"},
"medium-black": {light:"#0E0E1A", dark: "#0E0E1A"},
"black": {light:"#050505", dark: "#050505"},
"dark-red": {light: "#BD1C5F", dark: "#BD1C5F"},
"red": {light: "#F22C3D", dark: "#F22C3D"},
"green": {light: "#00A67D", dark: "#099A77"},
"blue": {light: "#0082D0", dark: "#0082D0"},
"orange": {light: "#FF5828", dark: "#FF5828"},
"teal": {light: "#21B5C2", dark: "#21B5C2"},
"mustard": {light: "#EA9100", dark: "#EA9100"},
"yellow": {light: "#EBE93D", dark: "#DDDB11"},
"violet": {light: "#5436DA", dark: "#5436DA"},
"bright-green": {light: "#54F16C", dark: "#00DE22"},
"bright-yellow": {light: "#EAFF00", dark: "#EAFF00"},
"bright-blue": {light: "#00B7FF", dark: "#00B7FF"},
"light-violet": {light: "#9388F7", dark: "#9388F7"},
"pink": {light: "#F2BAFF", dark: "#F2BAFF"},
"light-blue": {light: "#CAE5F2", dark: "#A5CFE4"},
"gold": {light: "#B2943A", dark: "#B2943A"},
"olive": {light: "#7E813C", dark: "#7E813C"},
"navy": {light: "#1D0D4C", dark: "#1D0D4C"},
}
)}

function _plotly(require){return(
require("plotly.js-dist@2.8.3")
)}

function _d3(require){return(
require("d3@5")
)}

function _openaicss(html)
{
  return html`<link rel="stylesheet" type="text/css" href="cdn_subdomain/css/2.6.0/styles/openai-css.css">`
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("chart")).define("chart", ["DOM","plotly","trace1","trace2","trace3","trace4","trace5","layout","config"], _chart);
  main.variable(observer("layout")).define("layout", ["width","bp"], _layout);
  main.variable(observer("config")).define("config", ["width"], _config);
  main.variable(observer("legend")).define("legend", ["colorsCategories","colors","html"], _legend);
  main.variable(observer("bp")).define("bp", _bp);
  main.variable(observer("colorsCategories")).define("colorsCategories", _colorsCategories);
  main.variable(observer("file")).define("file", _file);
  main.variable(observer("data")).define("data", ["d3","file"], _data);
  main.variable(observer("trace1")).define("trace1", ["getTrace","colors","data"], _trace1);
  main.variable(observer("trace2")).define("trace2", ["getTrace","colors","data"], _trace2);
  main.variable(observer("trace3")).define("trace3", ["getTrace","colors","data"], _trace3);
  main.variable(observer("trace4")).define("trace4", ["getTrace","colors","data"], _trace4);
  main.variable(observer("trace5")).define("trace5", ["getTrace","colors","data"], _trace5);
  main.variable(observer("markerSize")).define("markerSize", ["width","bp"], _markerSize);
  main.variable(observer("getTrace")).define("getTrace", ["unpack","markerSize","map","addBr"], _getTrace);
  main.variable(observer("unpack")).define("unpack", _unpack);
  main.variable(observer("addBr")).define("addBr", _addBr);
  main.variable(observer("map")).define("map", _map);
  main.variable(observer("colors")).define("colors", _colors);
  main.variable(observer("plotly")).define("plotly", ["require"], _plotly);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("openaicss")).define("openaicss", ["html"], _openaicss);
  return main;
}
