module SimUDuck.Classes {
    import IQuackBehavior = SimUDuck.Interfaces.IQuackBehavior;
    import IFlyBehavior = SimUDuck.Interfaces.IFlyBehavior;
    export abstract class Duck {
        flyBehavior: IFlyBehavior;
        quackBehavior: IQuackBehavior;
        constructor() {
        }

        public abstract display(): void;

        public performFly(): void {
            this.flyBehavior.fly();
        }

        public performQuack(): void {
            this.quackBehavior.quack();
        }

        public swim(): void {
            console.log("All ducks float");
        }
    }
//concrete classes 
    export class MallardDuck extends Duck {
        constructor() {
            super();
            this.quackBehavior = new Quack();
            this.flyBehavior = new FlyWithWings();
        }

        public display(): void {
            console.log("I'm a mallard");
        }
    }

    //behavioral classes
    export class Quack implements IQuackBehavior {
        public quack(): void {
            console.log('Quack');
        }
    }

    export class FlyWithWings implements IFlyBehavior {
        public fly(): void {
            console.log("I'm flying");
        }
    }
}

module SimUDuck.Interfaces {
    export interface IQuackBehavior {
        quack(): void;
    }

    export interface IFlyBehavior {
         fly(): void;
    }
}