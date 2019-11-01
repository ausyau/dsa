
function kthToLast(head, k) {

  let current = head;
  let kth = head;

  for (let i = 0; i < k; i++) {
    current = current.next;
  }

  while(current.next) {
    kth = kth.next;
    current = current.next;
  }

  return kth;
  
}

// Need to try recursively
