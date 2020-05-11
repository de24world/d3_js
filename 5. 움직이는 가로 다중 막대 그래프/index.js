var data = [20, 70, 10];
var name = ['찬성', '반대'];
var color = ['blue', 'red'];
var width = 500;
var svg = d3.select('.target');

svg.selectAll('g').data(data).enter()
.append('g').attr('class', (d,i)=>color[i])
.each(function(d,i){
    var g = d3.select(this);
    g.append('rect').attr('width, 0)').attr('height', 36)
    transition().duration(1500).delay(i*1000)
    .attr('width', width*d/100);
    g.append('text').text(name[i]).attr('x', width*d/100/2)
    .attr('y',-10).style('text-anchor', 'middle')
    .transition().duration(1500).delay(i*1000)
    .attr('y',23);
})
.attr('transform', (d,i)=>"translate("+(width/2/i)+",0)")
.transition().duration(1500)
.attr('transform', function(d,i){
    var tmp = 0;
    for(r=0; r<i; r++){
        tmp = tmp + (width *data[r]/100);
    }
    return "translate("+tmp+",0)";
})