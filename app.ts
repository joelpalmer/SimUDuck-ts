import Duck = SimUDuck.Classes.Duck;
import MallardDuck = SimUDuck.Classes.MallardDuck;
import Quack = SimUDuck.Classes.Quack;
class MiniDuckSimulator {

    constructor() {
        var mallard: Duck = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();
    }

    
}

let test = new MiniDuckSimulator();
