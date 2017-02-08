// selection basics
dest=d3.select('#dest')
dest.text('text')
dest.html('<strong>strong</strong>')
link=dest.append('a')
link.text('i am a link')
link.attr('href', 'https://twitter.com/')
link.style('border', '1px solid red')
dest.append('strong').text('strong2')
dest.append('strong').text('strong3')
dest.selectAll('strong').text('a')
d3.selectAll(‘strong’).text(‘b’)
d3.selectAll('strong').on('click', () => console.log('click'))

// data binding
dest=d3.select('#dest')
dest.append('p').text('a')
dest.append('p').text('b')
dest.append('p').text('c')
paragraphs=dest.selectAll('p')
paragraphs.data([1, 2, 3])
paragraphs.text(d => 'I am paragraph #' + d)
paragraphs.style('font-size', d => d * 10 + 'px')
d3.selectAll('p').on('click', d=>console.log(d))
// enter/exit
circleEnter = paragraphs.data([1, 2, 3, 4]).enter().append('p')
d3.selectAll('p').text(d => 'P' + d)

// enter with no existing elements
dest=d3.select('#dest')
dest.selectAll('p').data([1, 2, 3, 4]).enter().append('p').text(d => 'P' + d)
// idempotent
dest.selectAll('p').data([1, 2, 3, 4]).enter().append('p').text(d => 'P' + d)
circles=dest.selectAll('p').data([1, 2])
circles.exit().text('Will remove!')
circles.exit().remove()

// all together now
function draw(data) {
  var paragraphs = d3.select('#dest').selectAll("p").data(data);
  paragraphs.enter().append("p").text(d => 'paragraph ' + d);
  paragraphs.text(d => 'paragraph ' + d);
  paragraphs.exit().remove();
}
draw([1, 2, 3])
draw([1])
draw([1, 2, 3, 4])

// but why so verbose?
d3.selectAll('p').transition().style('font-size', d => (d * 10) + 'px')
d3.selectAll('p').transition().duration(2000).style('font-size', d => (50 - d * 10) + 'px')
d3.selectAll('p').transition().duration(2000).delay(d => d * 500).style('font-size', d => (d * 10) + 'px')
function draw(data) {
  var paragraphs = d3.select('#dest').selectAll("p").data(data);
  paragraphs.enter()
    .append("p")
      .text(d => 'paragraph ' + d)
      .style('font-size', '0px')
    .transition().duration(1000)
      .style('font-size', d => (d * 10) + 'px');
  paragraphs
      .text(d => 'paragraph ' + d)
    .transition().duration(1000)
      .style('font-size', d => (d * 10) + 'px')
  paragraphs.exit()
    .transition().duration(1000)
      .style('font-size', '0px')
      .remove();
}
draw([1, 2, 3])
draw([])
draw([10])
draw([1, 2, 3])
draw([3, 2, 1])

// object constancy
function draw(data) {
  var paragraphs = d3.select('#dest').selectAll("p").data(data, d => d);
  paragraphs.enter()
    .append("p")
      .text(d => 'paragraph ' + d)
      .style('font-size', '0px')
    .transition().duration(1000)
      .style('font-size', d => (d * 10) + 'px');
  paragraphs
      .text(d => 'paragraph ' + d)
    .transition().duration(1000)
      .style('font-size', d => (d * 10) + 'px')
  paragraphs.exit()
    .transition().duration(1000)
      .style('font-size', '0px')
      .remove();
}
draw([1, 2, 3])
draw([3, 2, 1])
draw([3, 2, 1, 4])
draw([5, 3, 2, 1, 4])

// and if order matters...
function draw(data) {
  var paragraphs = d3.select('#dest').selectAll("p").data(data, d => d).order();
  paragraphs.enter()
    .append("p")
      .text(d => 'paragraph ' + d)
      .style('font-size', '0px')
    .transition().duration(1000)
      .style('font-size', d => (d * 10) + 'px');
  paragraphs
      .text(d => 'paragraph ' + d)
    .transition().duration(1000)
      .style('font-size', d => (d * 10) + 'px')
  paragraphs.exit()
    .transition().duration(1000)
      .style('font-size', '0px')
      .remove();
}
draw([1, 2, 3])
draw([3, 2, 1])
draw([3, 2, 4, 1])
draw([5, 3, 2, 4, 1])
draw([5, 3, 2, 1, 4])

// can do same with CSS transitions, but D3 makes it easier to be data-driven
d3.selectAll('p').transition().ease(d3.easeBounce).duration(1000).style('font-size', '0px')

