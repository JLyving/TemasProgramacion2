class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(5);
const two = new Node(3);
const three = new Node(7);

one.next = two;
two.next = three;

function printlist(head) {
  let aux = head;
  let str = " ";

  str = aux.value + " -> ";

  while (aux.next != null) {
    aux = aux.next;
    str = str + aux.value + " -> ";
  }

  return str;
}

function addAfter(head, target, value) {
  let aux = head;
  let bandera = false;
  while (bandera == false) {
    if(aux.next != null || aux.next == null){
      if (aux.value === target) {
        const newNode = new Node(value);
        newNode.next = aux.next;
        aux.next = newNode;
        bandera = true;
      } else {
        aux = aux.next;
      }
    }
  }

}

function deleteAfter(head, target) {
  let aux = head;
  let bandera = false;
  while (bandera == false) {
    if(aux.next != null) {
      if (aux.value === target) {
        aux.next = aux.next.next;
        bandera = true;
      } else {
        aux = aux.next;
      }
    }
    if(aux.next == null){
      bandera = true;
    }
  }
}

function addBefore(head, value){
  let aux = head;
    //insertar un nodo antes del inicio de la lista x - n1 - n2 - ...
        const newHead = new Node(value);
        newHead.next = aux
        console.log(printlist(newHead));
    //insertar un nodo antes del nodo target n1 - x - n2 - ...
}

function deleteBefore(head, target){
  let aux = head;
  if(aux.value === target){
    aux.next = null
  }
}

console.log(printlist(one));
console.log("------------");
addAfter(one, 7, 13);
console.log(printlist(one));
console.log("------------");
deleteAfter(one, 13);
console.log(printlist(one));
console.log("------------");
addBefore(one, 24);
deleteBefore(one, 24);
console.log(printlist(one));