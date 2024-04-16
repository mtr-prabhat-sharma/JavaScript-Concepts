let user = {
    id:123,
    name:'Jhon',
    address: {
        city:'Noida',
        pin: 22222
    }
}
user.id = 2112;
console.log(user)

Object.defineProperty(user, 'id', {
    writable:false
})

Object.freeze(user);

user.id = 555;
console.log(user);