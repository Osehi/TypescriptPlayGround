interface User {
    name: string;
    
}

function greet(data:User){
    console.log(data)
}

greet({name:"Osehiase"})