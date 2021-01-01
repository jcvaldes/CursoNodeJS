const serverData = [
  { id: 1, title: 'hello', parent: 0 },
  { id: 2, title: 'hello', parent: 0 },
  { id: 3, title: 'hello', parent: 1 },
  { id: 4, title: 'hello', parent: 3 },
  { id: 5, title: 'hello', parent: 4 },
  { id: 6, title: 'hello', parent: 4 },
  { id: 7, title: 'hello', parent: 3 },
  { id: 8, title: 'hello', parent: 2 }
]

function getNestedChildren(arr, parent) {
  let nested = []
  for (let i in arr) {
    if (arr[i].parent == parent) {
      let children = getNestedChildren(arr, arr[i].id)

      if (children.length) {
        arr[i].children = children
        // console.log(arr[i].children)
      }
      nested.push(arr[i])
    }
  }

  return nested
}
// console.log('FLAT')
// console.log( serverData)

// console.log('NESTED')
console.log(getNestedChildren(serverData, 0))
