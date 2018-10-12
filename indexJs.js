var colorMap = d3.interpolateRgb(
    d3.rgb('#f8baff'),
    d3.rgb('#000000')
);

d3.select('#chart')
    .selectAll("div")
    .data([.72,.38,.3,.46,.43,.6,.57,.2,.29,.18,.41,.37,.23,.22,.69])
    .enter()
    .append("div")
    .style("background-color", (d)=> {
        return d == 0 ? '#eee' : colorMap(d);
    });

d3.select('#chart2')
    .selectAll("div")
    .data([.18,.72])
    .enter()
    .append("div")
    .style("background-color", (d)=> {
        return d == 0 ? '#eee' : colorMap(d);
    });