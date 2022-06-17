function _1(md){return(
md`# Instruction Following: Outputs`
)}

function _dataSeries(d3,data){return(
[
  {
    name: "GPT",
    color: "cool-gray-3",
    xy: d3.transpose([
        data.map(o => o.size),
        data.map(o => o.gpt),
        data.map(o => o.gpt + o.gpt_error),
        data.map(o => o.gpt - o.gpt_error),
      ]),
    label: {
      i: 1,
      orient: "t",
    },
  },
  {
    name: "GPT (prompted)",
    color: "cool-gray-3",
    xy: d3.transpose([
        data.map(o => o.size),
        data.map(o => o.gpt_prompted),
        data.map(o => o.gpt_prompted + o.gpt_prompted_error),
        data.map(o => o.gpt_prompted - o.gpt_prompted_error),
      ]),
    label: {
      i: 1,
      orient: "tl",
    },
  },
  {
    name: "Supervised Fine-Tuning",
    color: "cool-gray-3",
    xy: d3.transpose([
        data.map(o => o.size),
        data.map(o => o.sft),
        data.map(o => o.sft + o.sft_error),
        data.map(o => o.sft - o.sft_error),
      ]),
    label: {
      i: 1,
      orient: "t",
    },
  },
  {
    name: "InstructGPT",
    color: "bright-blue",
    xy: d3.transpose([
        data.map(o => o.size),
        data.map(o => o.instructgpt),
        data.map(o => o.instructgpt + o.instructgpt_error),
        data.map(o => o.instructgpt - o.instructgpt_error),
      ]),
    label: {
      i: 1,
      orient: "t",
    },
  },
]
)}

function* _chart(d3,width,height,chartClip,chartBackground,xAxis,yAxis,lines,areas,points,lineLabels)
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
  svg.append("g").call(areas)
  svg.append("g").call(points)
  svg.append("g").call(lineLabels)

  // svg.call(annotations)
  
  return svg.node()
}


function _bp(){return(
580
)}

function _margin(pointSize){return(
{top: 45, right: pointSize, bottom: 45, left: 0}
)}

function _height(width,bp,margin){return(
(width > bp) ? 
  width * 10/24 + margin.top + margin.bottom : 
  width * 12/24 + margin.top + margin.bottom
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

function _pointSize(width,bp){return(
(width > bp) ? 3.5 : 3
)}

function _areaOpacity(){return(
0.06
)}

function _mixBlendMode(){return(
"normal"
)}

function _xLabel(){return(
"Model size"
)}

function _yLabel(){return(
"Likert score"
)}

function _wrapWidth(width,bp){return(
(width > bp) ? 120 : 100
)}

function _annotationColor(colors){return(
colors["cool-gray-1.5"].light
)}

function _arrowStroke(){return(
1
)}

function _arrowScale(){return(
1
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
"green": {light: "#00A67D", dark: "#00A67D"},
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
)}

function _areas(dataSeries,area,colors,areaOpacity,mixBlendMode){return(
g => g
  .selectAll("path")
  .data(dataSeries)
    .join("path")
      .attr("d", d => area(d.xy))
      .attr("fill", d => colors[d.color].light)
      .style("opacity", areaOpacity)
      .style("mix-blend-mode", mixBlendMode)
)}

function _area(d3,x,y){return(
d3.area()
    .x(d => x(d[0]))
    .y0(d => y(d[2]))
    .y1(d => y(d[3]))
)}

function _points(dataSeries,colors,chartBackgroundColor,pointSize,x,y){return(
g => {
  const points = g
    .selectAll("g")
      .data(dataSeries)
        .join("g")
        .attr("fill", d => colors[d.color].light)
        .attr("paint-order", "stroke")
        .attr("stroke", chartBackgroundColor)
        .attr("stroke-width", 1.5)
        .selectAll("circle")
          .data(d => d.xy)
            .join("circle")
            .attr("r", pointSize)
            .attr("cx", (d, i) => x(d[0]))
            .attr("cy", (d, i) => y(d[1]))
  
  return points;
}
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

function _annotations(arrowScale,arrowStroke,annotationColor,dataAnnotations,colors,d3,orient,wrap,wrapWidth,generateArrowPath){return(
svg => {
  const defs = svg.append('defs')
    .append('marker')
      .attr('id', 'arrowhead')
      .attr('markerWidth', 8 * arrowScale)
      .attr('markerHeight', 5 * arrowScale)
      .attr('refX', 8 * arrowScale - arrowStroke)
      .attr('refY', 2.5 * arrowScale)
      .attr('orient', 'auto')
      .append('polygon')
        .attr('points', `0 0, ${8 * arrowScale} ${2.5 * arrowScale}, 0 ${5 * arrowScale}`)
        .attr('fill', annotationColor)
  
  const g = svg.append("g").attr("class", "font-base")
  
  const texts = g.selectAll("text")
    .data(dataAnnotations)
    .join("text")
      .attr("class", `atext xsmall-copy`)
      .attr("fill", d => (d.color) ? colors[d.color].dark : annotationColor)
      .style("cursor", "default")
      .attr("x", d => d.x1)
      .attr("y", d => d.y1)
      .attr("alignment-baseline", "middle")
      .each(function (d) {
        d3.select(this).call(
          orient[d.orient]
        )
      })
      .text(d => d.text)
  
  setTimeout(() => {
    svg.selectAll(".atext")
      .call(wrap, wrapWidth)
  }, 0);
  
  const arrows = g.selectAll('path')
    .data(dataAnnotations)
    .join("path")
  		.attr('d', d => generateArrowPath(d.x1, d.y1, d.x2, d.y2, d.isZPositive))
  		.attr('fill', 'none')
  		.attr('stroke', annotationColor)
      .attr('stroke-width', arrowStroke)
      .attr("stroke-linecap", "round")
      .attr('marker-end', 'url(#arrowhead)');
  
  return svg;
}
)}

function _xAxis(axisColor,height,margin,d3,x,data,formatTickX,fontSizeClass,width,xLabel){return(
g => {
  g
    .attr("class", "font-base")
    .attr("color", axisColor)
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x)
          .tickValues(data.map(d => d.size))
          // .ticks(3)
          .tickFormat(formatTickX)
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
          // .ticks(height / 120)
          .ticks(4)
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

function _formatTickX(){return(
function formatTickX(d) {
  var dUnbillioned = d / 1e9;
  return (this.parentNode.previousSibling.tagName == "g") ? `${dUnbillioned}B` : `${dUnbillioned}B parameters`;
}
)}

function _formatTickY(){return(
function formatTickY(d) {
  return (this.parentNode.nextSibling) ? `${d}` : `${d} score`;
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
    data.map(d => d.size),
  )
)
)}

function _yExtent(){return(
[2, 5]
)}

function _x(d3,xExtent,xRange){return(
d3.scaleLog()
    .domain(xExtent)
    .range(xRange)
)}

function _y(d3,yExtent,yRange){return(
d3.scaleLinear()
    .domain(yExtent)//.nice()
    .range(yRange)
)}

function _file(){return(
"https://gist.githubusercontent.com/justinjaywang/d9fd14d98166bf294a0d06e39dae576a/raw/afca44bf9ea1574ae242828524d132afcef487e8/likert.csv"
)}

async function _data(d3,file){return(
Object.assign(await d3.csv(file, d3.autoType))
)}

function _dataAnnotations(x,data,y,width,bp){return(
[
  {
    text: "This is my annotation text",
    x2: x(data.map(o => o.model_size)[5]),
    y2: y(data.map(o => o.sensitive_mean)[5]) - 5,
    x1: (width > bp) ? x(data.map(o => o.model_size)[5]) + 40 : x(data.map(o => o.model_size)[5]) + 30,
    y1: (width > bp) ? y(data.map(o => o.sensitive_mean)[5]) - 45 : y(data.map(o => o.sensitive_mean)[5]) - 35,
    orient: "r",
    isZPositive: 1,
  },
]
)}

function _47(md){return(
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

function _51(md){return(
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
  main.variable(observer("dataSeries")).define("dataSeries", ["d3","data"], _dataSeries);
  main.variable(observer("chart")).define("chart", ["d3","width","height","chartClip","chartBackground","xAxis","yAxis","lines","areas","points","lineLabels"], _chart);
  main.variable(observer("bp")).define("bp", _bp);
  main.variable(observer("margin")).define("margin", ["pointSize"], _margin);
  main.variable(observer("height")).define("height", ["width","bp","margin"], _height);
  main.variable(observer("fontSizeClass")).define("fontSizeClass", _fontSizeClass);
  main.variable(observer("xAxisOffset")).define("xAxisOffset", ["width","bp"], _xAxisOffset);
  main.variable(observer("yAxisOffset")).define("yAxisOffset", _yAxisOffset);
  main.variable(observer("chartBackgroundColor")).define("chartBackgroundColor", _chartBackgroundColor);
  main.variable(observer("gridlineOpacity")).define("gridlineOpacity", _gridlineOpacity);
  main.variable(observer("gridlineColor")).define("gridlineColor", ["colors"], _gridlineColor);
  main.variable(observer("axisColor")).define("axisColor", ["colors"], _axisColor);
  main.variable(observer("lineThickness")).define("lineThickness", ["width","bp"], _lineThickness);
  main.variable(observer("pointSize")).define("pointSize", ["width","bp"], _pointSize);
  main.variable(observer("areaOpacity")).define("areaOpacity", _areaOpacity);
  main.variable(observer("mixBlendMode")).define("mixBlendMode", _mixBlendMode);
  main.variable(observer("xLabel")).define("xLabel", _xLabel);
  main.variable(observer("yLabel")).define("yLabel", _yLabel);
  main.variable(observer("wrapWidth")).define("wrapWidth", ["width","bp"], _wrapWidth);
  main.variable(observer("annotationColor")).define("annotationColor", ["colors"], _annotationColor);
  main.variable(observer("arrowStroke")).define("arrowStroke", _arrowStroke);
  main.variable(observer("arrowScale")).define("arrowScale", _arrowScale);
  main.variable(observer("colors")).define("colors", _colors);
  main.variable(observer("chartClip")).define("chartClip", ["margin","width","height"], _chartClip);
  main.variable(observer("chartBackground")).define("chartBackground", ["chartBackgroundColor","margin","width","height"], _chartBackground);
  main.variable(observer("lines")).define("lines", ["dataSeries","line","colors","lineThickness","mixBlendMode"], _lines);
  main.variable(observer("line")).define("line", ["d3","x","y"], _line);
  main.variable(observer("areas")).define("areas", ["dataSeries","area","colors","areaOpacity","mixBlendMode"], _areas);
  main.variable(observer("area")).define("area", ["d3","x","y"], _area);
  main.variable(observer("points")).define("points", ["dataSeries","colors","chartBackgroundColor","pointSize","x","y"], _points);
  main.variable(observer("lineLabels")).define("lineLabels", ["dataSeries","chartBackgroundColor","colors","x","y","fontSizeClass","d3","orient","wrap","wrapWidth"], _lineLabels);
  main.variable(observer("annotations")).define("annotations", ["arrowScale","arrowStroke","annotationColor","dataAnnotations","colors","d3","orient","wrap","wrapWidth","generateArrowPath"], _annotations);
  main.variable(observer("xAxis")).define("xAxis", ["axisColor","height","margin","d3","x","data","formatTickX","fontSizeClass","width","xLabel"], _xAxis);
  main.variable(observer("yAxis")).define("yAxis", ["axisColor","margin","d3","y","width","gridlineColor","gridlineOpacity","fontSizeClass","yLabel"], _yAxis);
  main.variable(observer("formatTickX")).define("formatTickX", _formatTickX);
  main.variable(observer("formatTickY")).define("formatTickY", _formatTickY);
  main.variable(observer("xRange")).define("xRange", ["margin","xAxisOffset","width"], _xRange);
  main.variable(observer("yRange")).define("yRange", ["height","margin","yAxisOffset"], _yRange);
  main.variable(observer("xExtent")).define("xExtent", ["d3","data"], _xExtent);
  main.variable(observer("yExtent")).define("yExtent", _yExtent);
  main.variable(observer("x")).define("x", ["d3","xExtent","xRange"], _x);
  main.variable(observer("y")).define("y", ["d3","yExtent","yRange"], _y);
  main.variable(observer("file")).define("file", _file);
  main.variable(observer("data")).define("data", ["d3","file"], _data);
  main.variable(observer("dataAnnotations")).define("dataAnnotations", ["x","data","y","width","bp"], _dataAnnotations);
  main.variable(observer()).define(["md"], _47);
  main.variable(observer("orient")).define("orient", _orient);
  main.variable(observer("wrap")).define("wrap", ["d3"], _wrap);
  main.variable(observer("generateArrowPath")).define("generateArrowPath", _generateArrowPath);
  main.variable(observer()).define(["md"], _51);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("openaicss")).define("openaicss", ["html"], _openaicss);
  return main;
}
