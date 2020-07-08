const { GraphNode } = require('../lib/graph_node');

function maxValue(node, visited=new Set(), nb = []) {
  if(visited.has(node)) return;
  visited.add(node);
  for(let i = 0; i < node.neighbors.length; i++){
    let neighbor = node.neighbors[i];
    nb.push(neighbor.val);
    maxValue(neighbor, visited, nb);
  }
  return Math.max(node.val,...nb);
}

// let five = new GraphNode(5);
// let three = new GraphNode(3);
// let two = new GraphNode(2);
// let four = new GraphNode(4);
// let ten = new GraphNode(10);
// let seven = new GraphNode(7);
// let six = new GraphNode(6);
// five.neighbors = [three, two, four];
// two.neighbors = [seven, ten];
// four.neighbors = [six];
// expect(maxValue(five)).to.equal(10);


module.exports = {
    maxValue
};
