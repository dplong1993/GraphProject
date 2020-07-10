/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
  if(maxDistance === currentDistance) return;
  for(let friend of adjacencyList[name]){
    visited.add(friend);
    friendsOfRecursion(friend, adjacencyList, visited, maxDistance, currentDistance + 1);
  }
}

function friendsOf(adjacencyList, name, distance) {
  if(name in adjacencyList){
    let visited = new Set();
    friendsOfRecursion(name, adjacencyList, visited, distance, 0);
    visited.delete(name)
    return Array.from(visited);
  }
}

// function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
//   console.log(adjacencyList[name]);
//   for(let i = 0; i < adjacencyList[name].length; i++){
//     let person = adjacencyList[name][i];
//     if(visited.has(person)) {
//       console.log(`Set already has ${person}`);
//       return;
//     }
//     visited.add(person);
//   }
//   console.log(visited);
//   if(maxDistance === currentDistance) {
//     console.log('Max distance = current distance');
//     return visited;
//   }
//   for(let i = 0; i < adjacencyList[name].length; i++){
//     console.log(`AdjacenyList[name][${i}] is ${adjacencyList[name][i]}`);
//     let person = adjacencyList[name][i];
//     let result = friendsOfRecursion(person, adjacencyList, visited, maxDistance, currentDistance++);
//     visited = result;
//   }
//   return visited;
// }

// function friendsOf(adjacencyList, name, distance) {
//   if(!adjacencyList || !adjacencyList[name]) {
//     return undefined;
//   }
//   //console.log(adjacencyList[name], adjacencyList[name] === [], typeof(adjacencyList[name]), Array.isArray(adjacencyList[name]));
//   if(adjacencyList[name].arrayIsEqual([])) {
//     //console.log("Name is not in list")
//     return [];}
//   if([name].arrayIsEqual(adjacencyList[name])) {
//     //console.log(`${name} is only friend`)
//     return [];
//   }
//   //console.log('Not hitting if blocks');
//   let personA = name;
//   let personB = adjacencyList[name][0];
//   //console.log(personB, adjacencyList[personB], name);
//   if(adjacencyList[personB][0] === name) return [personB];

//   let visited = new Set();
//   // for(let i = 0; i < adjacencyList[name].length; i++){
//   //   friendsOfRecursion(adjacencyList[name][i], adjacencyList, visited, distance, 0);
//   // }
//   let result = friendsOfRecursion(name, adjacencyList, visited, distance, 1);
//   return Array.from(result);

// }

// Array.prototype.arrayIsEqual = function(array){
//   if(this.length !== array.length) return false;
//   else{
//     for(let i = 0; i < array.length; i++){
//       if(this[i] !== array[i]) return false;
//     }
//     return true;
//   }
// }

const graph = {
  'carrie':  ['humza', 'jun'],
  'farrah':  ['humza'],
  'humza':   ['carrie', 'farrah', 'jun', 'silla'],
  'jun':     ['carrie', 'silla'],
  'ophelia': ['travis'],
  'silla':   ['humza', 'yervand'],
  'travis':  ['ophelia'],
  'yervand': ['silla'],
};

console.log(friendsOf(graph, 'jun', 2));

/******************************************************************************
* Do not change code beneath this line.
*/
try {
exports.friendsOf = friendsOf;
} catch (e) {
exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
