// for…of
const types = [ 'object', 'array', 'string', 'integer', 'float', 'boolean' ]
for (const type of types) {  
  console.log(`A JavaScript type is: ${type}`)
}


// for…in
const names = [ 'Balchandra', 'Shreyash', 'Sakib' ]
for (const index in names) {  
  console.log(`${names[index]} is at position ${index}`)
}

const user = { name: 'Balchandra', likes: 'Node.js' }
for (const key in user) {  
  console.log(`${key}: ${user[key]}`)
}

