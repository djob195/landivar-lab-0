const List = require("../list/list.js");
const Node = require("../list/node.js");

test('add first element', () => {
  const list = new List();
  const node = new Node(1,null);
  list.add(node);
  
  expect(list.root.key).toBe(1);
})

test('add second element', () => {
  const list = new List();
  const node = new Node(1,null);
  const node2 = new Node(2,null);
  list.add(node);
  list.add(node2)
  
  expect(list.root.key).toBe(1);
  expect(list.root.next.key).toBe(2);
})