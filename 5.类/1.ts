


namespace a{
    class Person {
        name: string = 'jw'
        age: number
        constructor() {
            this.age = 10
        }
    }
    
    let p1 = new Person()

}

namespace b{
    class Person {
        myname: string = 'jw'
        constructor (name: string) {
            this.myname = name
        }
        get name() {
            return this.myname
        }
        set name(n : string) {
            this.myname = n.toUpperCase()
        }
    }

    let p = new Person('jw')

    p.name = 'jw'

    console.log(p.name)
    
    
}



// 村取器