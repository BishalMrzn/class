let a={
    name:"Bishal",
    language:"JS"
}
console.log(a)
let p={
    run:()=>[
        alert("run")
    ]
}
p.__proto__={
    name2:"Saroj"
}
a.__proto__=p
a.run()
console.log(a.name2)