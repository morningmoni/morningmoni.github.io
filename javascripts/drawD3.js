
    var time_scale;
    var percent_scale;
    
    function get_timeseries_data(d,i){
        // get the id of the current element
        var word= d.word
        // see if we have an associated time series
        var ts = d3.select('#'+word)
        // toggle
        if (ts.empty()){
            d3.json('data/keyword_trend_detail.json', function(data){
                filtered_data = data.filter(function(d){return d.word === word})
                draw_timeseries(filtered_data, word)
            })
        } else {
            ts.remove()
        }
    }
    
    function add_label(circle, d, i){
        d3.select(circle)
            .transition()
            .attr('r', 9)
        
        d3.select('#' + d.word).append('text')
            .text(d.word[0])
            .attr('text-anchor','middle')
            .style("dominant-baseline","central")
            .attr('x', time_scale(d.year))
            .attr('y', percent_scale(d.count))
            .attr('class','linelabel')
            .style('opacity',0)
            .style('fill','white')
            .transition()
                .style('opacity',1)        
    }
    
    function draw_timeseries(data, id){
       
        var line = d3.svg.line()
            .x(function(d){return time_scale(d.year)})
            .y(function(d){return percent_scale(d.count)})
            .interpolate("linear")
        
        var g = d3.select('#chart')
            .append('g')
            .attr('id', id)
            .attr('class', 'timeseries ' + id)
        
        g.append('path')
            .attr('d', line(data))
        
        g.selectAll('circle')
            .data(data)
            .enter()
            .append("circle")
            .attr('cx', function(d) {return time_scale(d.year)})
            .attr('cy', function(d) {return percent_scale(d.count)})
            .attr('r',0)
                
        var enter_duration = 1000;
        
        g.selectAll('circle')
            .transition()
            .delay(function(d, i) { return i / data.length * enter_duration; })
            .attr('r', 5)
            .each('end',function(d,i){
                if (i === data.length-1){
                    add_label(this,d)
                }
            })
            
        
        g.selectAll('circle')
            .on('mouseover', function(d,i){
                if (i !== data.length-1) {
                d3.select(this)
                    .transition().attr('r', 9)
                }
            })
            .on('mouseout', function(d,i){
                if (i !== data.length-1) {
                    d3.select(this).transition().attr('r', 5)
                }
            })
        
        g.selectAll('circle')
            .on('mouseover.tooltip', function(d){
                d3.select("text." + d.word).remove()
                d3.select('#chart')
                    .append('text')
                    .text(d.count)
                    .attr('x', time_scale(d.year) + 10)
                    .attr('y', percent_scale(d.count) - 10)
                    .attr('class', d.word)
            })
            .on('mouseout.tooltip', function(d){
                d3.select("text." + d.word)
                    .transition()
                    .duration(500)
                    .style('opacity',0)
                    .attr('transform','translate(10, -10)')
                    .remove()
            })
    }
    
    
    
    function draw(data) {
        "use strict";
        
        // set up the viewport, the scales, and axis generators
        
        var container_dimensions = {width: 600, height: 250},
            margins = {top: 10, right: 40, bottom: 30, left: 60},
            chart_dimensions = {
                width: container_dimensions.width - margins.left - margins.right,
                height: container_dimensions.height - margins.top - margins.bottom
            };
        var startYear=2003,
            endYear=2014;
        time_scale = d3.scale.linear()
            .range([0, chart_dimensions.width])
            .domain([startYear, endYear]);
        
        percent_scale = d3.scale.linear()
            .range([chart_dimensions.height, 0])
            .domain([0, 160]);
        
        var time_axis = d3.svg.axis()
            .scale(time_scale).ticks(endYear-startYear).tickFormat(d3.format("d"))

        var count_axis = d3.svg.axis()
            .scale(percent_scale)
            .orient("left");

        // draw axes
        
        var g = d3.select('#timeseries')
          .append('svg')
            .attr("width", container_dimensions.width)
            .attr("height", container_dimensions.height)
          .append("g")
            .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
            .attr("id","chart");
        
        g.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + chart_dimensions.height + ")")
          .call(time_axis);
         
        g.append("g")
          .attr("class", "y axis")
          .call(count_axis);
        
      // draw the y-axis label
        
        d3.select('.y.axis')
            .append('text')
            .text('Count of Terms')
            .attr('transform', "rotate (-270, 0, 0)")
            .attr('x', 100)
            .attr('y', 50);
        
        // draw the key
        
        var key_items = d3.select('#key')
          .selectAll('div')
          .data(data)
          .enter()
          .append('div')
            .attr('class','key_line')
            .attr('id',function(d){return d.word+"_key"})
            
        key_items.append('div')
            .attr('id', function(d){return 'key_square_' + d.word})
            .attr('class', function(d){return 'key_square ' + d.word})
        
        key_items.append('div')
            .attr('class','key_label')
            .text(function(d){return d.name})
        
        d3.selectAll('.key_line')
            .on('click', get_timeseries_data)
        
    }