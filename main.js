class Robot {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}`);
        return '실행완료';
    }
}

class Ai extends Robot {
    constructor(name) {
        super(name);
    }
    walk() {
        console.log(`walk: ${this.name}`);
    }
}

const ai = new Ai('에이아이');

ai.speak();
ai.walk();
