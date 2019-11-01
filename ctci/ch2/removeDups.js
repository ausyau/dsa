
function removeDups(head) {

  let existing = new Set();

  let current = head;
  let prev = head;

  while(current.value) {
    if(existing.has(current.value)) {
      // Logic for a duplicate
      prev.next = current;
    } else {
      existing.add(current.value);
      prev = current;
    }
    current = current.next;
  }
}

