const { GraphNode } = require('../lib/graph_node');

function breadthFirstSearch(startingNode, targetVal, list = new Set()) {
  if(list.has(startingNode)) return;

  if (startingNode.val === targetVal) return startingNode;
  list.add(startingNode);
  for(let i = 0; i < startingNode.neighbors.length; i++){
      if(startingNode.neighbors[i].val === targetVal) return startingNode.neighbors[i];
  }
  for (let i = 0; i < startingNode.neighbors.length; i++){
    let result = breadthFirstSearch(startingNode.neighbors[i], targetVal, list)
    if(result instanceof GraphNode) return result;
  }
  return null;
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c1 = new GraphNode('c');
let c2 = new GraphNode('c');
a.neighbors = [b, c1];
b.neighbors = [c2];
console.log(breadthFirstSearch(a, 'c'));

module.exports = {
    breadthFirstSearch
};
