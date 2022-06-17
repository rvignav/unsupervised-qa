function _1(md){return(
md`# Embeddings: Top-K Accuracy`
)}

function* _chart(d3,width,height,chartClip,chartBackground,xAxis,yAxis,lines,lineLabels)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("class", "color-fg font-tnum")
      .style("overflow", "visible")
  yield svg.node(); // different syntax so wrap works
  
  svg.append("g").call(chartClip)
  svg.append("g").call(chartBackground)
  svg.append("g").call(xAxis)
  svg.append("g").call(yAxis)
  svg.append("g").call(lines)
  svg.append("g").call(lineLabels)
  
  return svg.node()
}


function _bp(){return(
580
)}

function _margin(){return(
{top: 45, right: 0, bottom: 45, left: 0}
)}

function _height(width,bp,margin){return(
(width > bp) ? 
  width * 12/24 + margin.top + margin.bottom : 
  width * 16/24 + margin.top + margin.bottom
)}

function _fontSizeClass(){return(
"xsmall-copy"
)}

function _xAxisOffset(width,bp){return(
{left: (width > bp) ? 40 : 30, right: 0}
)}

function _yAxisOffset(){return(
{top: 0, bottom: 0}
)}

function _chartBackgroundColor(){return(
"#fff"
)}

function _gridlineOpacity(){return(
0.2
)}

function _gridlineColor(colors){return(
colors["cool-gray-1"].light
)}

function _axisColor(colors){return(
colors["cool-gray-3"].light
)}

function _lineThickness(width,bp){return(
(width > bp) ? 2 : 1.5
)}

function _areaOpacity(){return(
0.06
)}

function _mixBlendMode(){return(
"normal"
)}

function _xLabel(){return(
"k (number of documents considered)"
)}

function _yLabel(){return(
"Top-k accuracy"
)}

function _wrapWidth(width,bp){return(
(width > bp) ? 100 : 80
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

function _chartClip(margin,width,height){return(
g => g
  .append("clipPath")
  .attr("id", "clip")
  .append("rect")
  .attr("x", margin.left)
  .attr("y", margin.top)
  .attr("width", width - margin.left - margin.right)
  .attr("height", height - margin.top - margin.bottom)
)}

function _chartBackground(chartBackgroundColor,margin,width,height){return(
g => g
  .append("rect")
  .attr("fill", chartBackgroundColor)
  .attr("x", margin.left)
  .attr("y", margin.top)
  .attr("width", width - margin.left - margin.right)
  .attr("height", height - margin.top - margin.bottom)
)}

function _lines(dataSeries,line,colors,lineThickness,mixBlendMode){return(
g => g
  .selectAll("path")
  .data(dataSeries)
    .join("path")
      .attr("d", d => line(d.xy))
      .attr("fill", "none")
      .attr("stroke", d => colors[d.color].light)
      .attr("stroke-width", lineThickness)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-dasharray", d => (d.dasharray) ? d.dasharray : null)
      .style("mix-blend-mode", mixBlendMode)
)}

function _line(d3,x,y){return(
d3.line()
  .x((d, i) => x(d[0]))
  .y((d, i) => y(d[1]))
  .defined(d => d[1] !== null)
)}

function _lineLabels(dataSeries,chartBackgroundColor,colors,x,y,fontSizeClass,d3,orient,wrap,wrapWidth){return(
g => {
  g.selectAll("text")
    .data(dataSeries)
    .join("text")
      .text(d => d.name)
      .attr("paint-order", "stroke")
      .attr("stroke", chartBackgroundColor)
      .attr("stroke-width", 1.5)
      .attr("fill", d => colors[d.color].dark)
      .attr("x", d => x(d.xy[d.label.i][0]))
      .attr("y", d => y(d.xy[d.label.i][1]))
      .attr("alignment-baseline", "middle")
      .attr("class", fontSizeClass)
      .each(function (d) {
        d3.select(this).call(
          orient[d.label.orient]
        )
      })
    .call(wrap, wrapWidth)
  
  return g;
}
)}

function _xAxis(axisColor,height,margin,d3,x,width,fontSizeClass,xLabel){return(
g => {
  g
    .attr("class", "font-base")
    .attr("color", axisColor)
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x)
          .ticks(width / 200)
          // .ticks(3)
          // .tickFormat(formatTickX)
          )
    .call(g => g.selectAll(".tick text")
          .attr("class", fontSizeClass)
          )
    .call(g => g.select(".domain")
          .remove()
          )
    .call(g => g.selectAll(".tick:first-of-type text")
          .attr("text-anchor", "start")
          )
    .call(g => g.selectAll(".tick:last-of-type text")
          .attr("text-anchor", "end")
          )
    .append("text")
      .attr("x", (width - margin.right) / 2)
      .attr("dy", "2.6em")
      .attr("class", fontSizeClass)
      .attr("fill", "currentColor")
      .attr("text-anchor", "middle")
      .text(xLabel)
  return g
}
)}

function _yAxis(axisColor,margin,d3,y,width,gridlineColor,gridlineOpacity,fontSizeClass,yLabel){return(
g => {
  g
    .attr("class", "font-base")
    .attr("color", axisColor)
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisRight(y)
          .ticks(3)
          .tickSize(width - margin.left - margin.right)
          // .tickFormat(formatTickY)
          )
    .call(g => g.select(".domain")
          .remove()
          )
    // .call(g => g.selectAll(".tick:not(:first-of-type) line")
    .call(g => g.selectAll(".tick line")
          .attr("stroke", gridlineColor)
          .attr("stroke-opacity", gridlineOpacity)
          )
    .call(g => g.selectAll(".tick text")
          .attr("x", 0)
          .attr("dy", "-0.3em")
          .attr("class", fontSizeClass)
          )
    .call(g => g.selectAll(".tick:last-of-type text").clone()
          .attr("class", fontSizeClass)
          .attr("dy", "-1.8em")
          .text(yLabel)
          )
  return g
}
)}

function _xRange(margin,xAxisOffset,width){return(
[margin.left + xAxisOffset.left, width - margin.right - xAxisOffset.right]
)}

function _yRange(height,margin,yAxisOffset){return(
[height - margin.bottom - yAxisOffset.bottom, margin.top + yAxisOffset.top]
)}

function _xExtent(d3,data){return(
d3.extent(
  [].concat(
    data.map(d => d.k),
  )
)
)}

function _yExtent(){return(
[0.2, 1]
)}

function _x(d3,xExtent,xRange){return(
d3.scaleLinear()
    .domain(xExtent)
    .range(xRange)
)}

function _y(d3,yExtent,yRange){return(
d3.scaleLinear()
    .domain(yExtent)//.nice()
    .range(yRange)
)}

function _file(){return(
"https://gist.githubusercontent.com/justinjaywang/ef88b83bdc38cdabaed6bdb801fc57ce/raw/19f79e45be8b5f6538cc0634afcd8a54eb705d0a/top-k-trimmed.csv"
)}

async function _data(d3,file){return(
Object.assign(await d3.csv(file, d3.autoType))
)}

function _dataSeries(d3,data){return(
[
  {
    name: "Embeddings Endpoint",
    color: "green",
    xy: d3.transpose([
        data.map(o => o.k),
        data.map(o => o.ee),
      ]),
    label: {
      i: 6,
      orient: "t",
    },
  },
  {
    name: "GPT-3 Search",
    color: "black",
    xy: d3.transpose([
        data.map(o => o.k),
        data.map(o => o.gpt3),
      ]),
    label: {
      i: 5,
      orient: "tl",
    },
  },
  {
    name: "Sentence-BERT",
    color: "black",
    xy: d3.transpose([
        data.map(o => o.k),
        data.map(o => o.sbert),
      ]),
    label: {
      i: 5,
      orient: "br",
    },
  },
  {
    name: "Human Experts",
    color: "black",
    xy: d3.transpose([
        data.map(o => o.k),
        data.map(o => o.sme),
      ]),
    label: {
      i: 1,
      orient: "t",
    },
  },
]
)}

function _38(md){return(
md`---
## Helpers`
)}

function _orient(){return(
{
  t: text => text
    .attr("data-orient", "t")
    .attr("text-anchor", "middle")
    .attr("dx", 0)
    .attr("dy", "-1em"),
  tr: text => text
    .attr("data-orient", "tr")
    .attr("text-anchor", "start")
    .attr("dx", "0.5em")
    .attr("dy", "-0.8em"),
  tl: text => text
    .attr("data-orient", "tl")
    .attr("text-anchor", "end")
    .attr("dx", "-0.5em")
    .attr("dy", "-0.8em"),
  b: text => text
    .attr("data-orient", "b")
    .attr("text-anchor", "middle")
    .attr("dx", 0)
    .attr("dy", "1em"),
  br: text => text
    .attr("data-orient", "br")
    .attr("text-anchor", "start")
    .attr("dx", "0.5em")
    .attr("dy", "1em"),
  bl: text => text
    .attr("data-orient", "bl")
    .attr("text-anchor", "end")
    .attr("dx", "-0.5em")
    .attr("dy", "1em"),
  r: text => text
    .attr("data-orient", "r")
    .attr("text-anchor", "start")
    .attr("dx", "0.6em")
    .attr("dy", 0),
  l: text => text
    .attr("data-orient", "l")
    .attr("text-anchor", "end")
    .attr("dx", "-0.6em")
    .attr("dy", 0),
}
)}

function _wrap(d3){return(
function (text, w) {
  text.each(function () {
    var text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      ta = text.attr('text-anchor'),
      ab = text.attr('alignment-baseline'),
      orient = text.attr('data-orient'),
      y = text.attr('y'),
      x = text.attr('x'),
      dx = text.attr('dx'),
      dy = parseFloat(text.attr('dy').replace(/[a-zA-Z]+/g,'')),
      tspans = [], // collect tspans and their dys to populate later
      tspan = text.text(null).append('tspan').attr('class', 'dlabel-span').attr('text-anchor', ta).attr('alignment-baseline', ab).attr('x', x).attr('y', y).attr('dx', dx).attr('dy', dy + 'em');
    
    tspans[lineNumber] = {
      tspan: tspan,
      dy: dy,
    };
    
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(' '));
      if (tspan.node().getComputedTextLength() > w) {
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        lineNumber += 1;
        tspan = text.append('tspan').attr('class', 'dlabel-span').attr('text-anchor', ta).attr('alignment-baseline', ab).attr('x', x).attr('y', y).attr('dx', dx).attr('dy', `${lineNumber * lineHeight + dy}em`).text(word);
        tspans[lineNumber] = {
          tspan: tspan,
          dy: lineNumber * lineHeight + dy,
        };
      }
    } // end while
    
    // reorient dy if lineNumber > 0
    if (lineNumber == 0) return;
    if (orient.startsWith('t')) {
      var shift = lineNumber * lineHeight;
      tspans.forEach(function (t) {
        t.tspan.attr('dy', t.dy - shift + 'em');
      })
    } else if (orient == 'l' || orient == 'r') {
      var shift = lineNumber * lineHeight / 2;
      tspans.forEach(function (t) {
        t.tspan.attr('dy', t.dy - shift + 'em');
      })
    }
  });

  return text;

}
)}

function _generateArrowPath(){return(
function (x1, y1, x2, y2, isZPositive) {
  // calculate control point coordinates
  const dx = x2 - x1;
  const dy = y1 - y2;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const l = dist / Math.sqrt(2);
  const alpha = Math.atan2(dy, dx) * 180 / Math.PI;
  const beta = (isZPositive) ? alpha + 45 : alpha + 315 % 180;
  
  const x3 = l * Math.sin(beta * Math.PI / 180) + x1;
  const y3 = l * Math.cos(beta * Math.PI / 180) + y1;
  
  // return a quadratic bezier curve
  return `M${x1}, ${y1}
    Q${x3}, ${y3}
    ${x2}, ${y2}`
}
)}

function _42(md){return(
md`---
## Requires`
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
  main.variable(observer("chart")).define("chart", ["d3","width","height","chartClip","chartBackground","xAxis","yAxis","lines","lineLabels"], _chart);
  main.variable(observer("bp")).define("bp", _bp);
  main.variable(observer("margin")).define("margin", _margin);
  main.variable(observer("height")).define("height", ["width","bp","margin"], _height);
  main.variable(observer("fontSizeClass")).define("fontSizeClass", _fontSizeClass);
  main.variable(observer("xAxisOffset")).define("xAxisOffset", ["width","bp"], _xAxisOffset);
  main.variable(observer("yAxisOffset")).define("yAxisOffset", _yAxisOffset);
  main.variable(observer("chartBackgroundColor")).define("chartBackgroundColor", _chartBackgroundColor);
  main.variable(observer("gridlineOpacity")).define("gridlineOpacity", _gridlineOpacity);
  main.variable(observer("gridlineColor")).define("gridlineColor", ["colors"], _gridlineColor);
  main.variable(observer("axisColor")).define("axisColor", ["colors"], _axisColor);
  main.variable(observer("lineThickness")).define("lineThickness", ["width","bp"], _lineThickness);
  main.variable(observer("areaOpacity")).define("areaOpacity", _areaOpacity);
  main.variable(observer("mixBlendMode")).define("mixBlendMode", _mixBlendMode);
  main.variable(observer("xLabel")).define("xLabel", _xLabel);
  main.variable(observer("yLabel")).define("yLabel", _yLabel);
  main.variable(observer("wrapWidth")).define("wrapWidth", ["width","bp"], _wrapWidth);
  main.variable(observer("colors")).define("colors", _colors);
  main.variable(observer("chartClip")).define("chartClip", ["margin","width","height"], _chartClip);
  main.variable(observer("chartBackground")).define("chartBackground", ["chartBackgroundColor","margin","width","height"], _chartBackground);
  main.variable(observer("lines")).define("lines", ["dataSeries","line","colors","lineThickness","mixBlendMode"], _lines);
  main.variable(observer("line")).define("line", ["d3","x","y"], _line);
  main.variable(observer("lineLabels")).define("lineLabels", ["dataSeries","chartBackgroundColor","colors","x","y","fontSizeClass","d3","orient","wrap","wrapWidth"], _lineLabels);
  main.variable(observer("xAxis")).define("xAxis", ["axisColor","height","margin","d3","x","width","fontSizeClass","xLabel"], _xAxis);
  main.variable(observer("yAxis")).define("yAxis", ["axisColor","margin","d3","y","width","gridlineColor","gridlineOpacity","fontSizeClass","yLabel"], _yAxis);
  main.variable(observer("xRange")).define("xRange", ["margin","xAxisOffset","width"], _xRange);
  main.variable(observer("yRange")).define("yRange", ["height","margin","yAxisOffset"], _yRange);
  main.variable(observer("xExtent")).define("xExtent", ["d3","data"], _xExtent);
  main.variable(observer("yExtent")).define("yExtent", _yExtent);
  main.variable(observer("x")).define("x", ["d3","xExtent","xRange"], _x);
  main.variable(observer("y")).define("y", ["d3","yExtent","yRange"], _y);
  main.variable(observer("file")).define("file", _file);
  main.variable(observer("data")).define("data", ["d3","file"], _data);
  main.variable(observer("dataSeries")).define("dataSeries", ["d3","data"], _dataSeries);
  main.variable(observer()).define(["md"], _38);
  main.variable(observer("orient")).define("orient", _orient);
  main.variable(observer("wrap")).define("wrap", ["d3"], _wrap);
  main.variable(observer("generateArrowPath")).define("generateArrowPath", _generateArrowPath);
  main.variable(observer()).define(["md"], _42);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("openaicss")).define("openaicss", ["html"], _openaicss);
  return main;
}
