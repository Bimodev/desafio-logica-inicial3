class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
       if (this.type === "mago") {
            this.atk = "magia";
        } else if (this.type === "ninja") {
            this.atk = "shuriken";
        } else if (this.type === "monge") {
            this.atk = "marciais";
        } else if (this.type === "guerreiro") {
            this.atk = "espada";
}

    }
    message(){
        console.log(`o ${this.type} atacou usando ${this.atk}`)
    }
    
}
let character = new hero("Bimo", 17, "monge")
let character2 = new hero("lah", 17, "mago")

character.message()
character2.message()