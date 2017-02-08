d3.max([1, 2, 3])
d3.min([1, 2, 3])
d3.mean([1, 2, 3])
d3.median([1, 2, 3])
d3.quantile([1, 2, 3], 0.9)
d3.max([{a:1}, {a:2}, {a:3}], d => d.a)
d3.extent([1, 2, 3])

const scale = d3.scaleLinear().domain([0, 1]).range([0, 2])
scale(0)
scale(1)
scale(0.5)
scale.invert(2)

const scale2 = d3.scaleLinear().domain([0, 1]).range(['red', 'blue'])
scale2(0)
scale2(0.5)
scale2(0.99)

const scale3 = d3.scaleLinear().domain([0, 1]).range([{a: 1, b: 2}, {a:0,b:3}])
scale3(1.5)
scale3(2)

const scale4 = d3.scaleLinear().domain([0, 1]).range(['10px', '20px'])
scale2(0)
scale2(0.5)
scale2(0.99)

d3.json('data.json', data => {
  console.log(data);
})

d3.csv('data.csv', data => {
  console.log(data);
})

d3.csvParse('a,b\n1,2')
