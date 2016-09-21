var Duck = SimUDuck.Classes.Duck;
var MallardDuck = SimUDuck.Classes.MallardDuck;
var Quack = SimUDuck.Classes.Quack;
var MiniDuckSimulator = (function () {
    function MiniDuckSimulator() {
        var mallard = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();
    }
    return MiniDuckSimulator;
})();
var test = new MiniDuckSimulator();
//# sourceMappingURL=app.js.map