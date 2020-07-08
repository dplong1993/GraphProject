function numRegions(graph) {
    let regionCount = 0;
    let visited = new Set();
    for(let node in graph){
        if(visited.has(node)) continue;
        //console.log(node, regionCount, visited);
        visited = depthFirstSearch(graph, graph[node], visited)
        regionCount ++;
    }
    return regionCount;
}
function depthFirstSearch(graph, neighbors, visited){
    for(i = 0; i < neighbors.length; i++){
        if(visited.has(neighbors[i])) continue;
        visited.add(neighbors[i]);
        visited = depthFirstSearch(graph, graph[neighbors[i]], visited)
    }
    return visited;
}

let graph1 = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['e', 'c'],
    'e': ['d'],
};
//console.log(numRegions(graph1));

module.exports = {
    numRegions
};
