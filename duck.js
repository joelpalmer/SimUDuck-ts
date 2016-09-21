var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimUDuck;
(function (SimUDuck) {
    var Classes;
    (function (Classes) {
        var Duck = (function () {
            function Duck() {
            }
            Duck.prototype.performFly = function () {
                this.flyBehavior.fly();
            };
            Duck.prototype.performQuack = function () {
                this.quackBehavior.quack();
            };
            Duck.prototype.swim = function () {
                console.log("All ducks float");
            };
            return Duck;
        })();
        Classes.Duck = Duck;
        //concrete classes 
        var MallardDuck = (function (_super) {
            __extends(MallardDuck, _super);
            function MallardDuck() {
                _super.call(this);
                this.quackBehavior = new Quack();
                this.flyBehavior = new FlyWithWings();
            }
            MallardDuck.prototype.display = function () {
                console.log("I'm a mallard");
            };
            return MallardDuck;
        })(Duck);
        Classes.MallardDuck = MallardDuck;
        //behavioral classes
        var Quack = (function () {
            function Quack() {
            }
            Quack.prototype.quack = function () {
                console.log('Quack');
            };
            return Quack;
        })();
        Classes.Quack = Quack;
        var FlyWithWings = (function () {
            function FlyWithWings() {
            }
            FlyWithWings.prototype.fly = function () {
                console.log("I'm flying");
            };
            return FlyWithWings;
        })();
        Classes.FlyWithWings = FlyWithWings;
    })(Classes = SimUDuck.Classes || (SimUDuck.Classes = {}));
})(SimUDuck || (SimUDuck = {}));
//# sourceMappingURL=duck.js.map