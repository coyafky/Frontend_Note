class Octopus {
    public readonly name: string;
    private readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }

    readonly say(message: string) {  
        console.log(message);
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.