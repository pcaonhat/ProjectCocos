const Emitter = require('emitter');
const EventKeys = require("eventKeys");
const StateMachine = require('javascript-state-machine');
cc.Class({
    extends: cc.Component,

    properties: {
        id: {
            default: ""
        },
        type: {
            default: ""
        },
        maxHp: { 
            default: 0,
            type: cc.Integer,
        },
        currentHp: {
            default: 0,
            type: cc.Integer,
        },
        healthBar: cc.ProgressBar,
        speed: {
            default: 1,
            type: cc.Float,
        }
    },

    start () {
        this.currentHp = this.maxHp;
        this.healthBar.progress = 1;
    },

    update(){
        if(this.currentHp <= 0 && this.stateMachine.state !== 'dead'){
            this.stateMachine.die();
        }
    },

    init(id){
        this.id = id;
        this.initStateMachine();
        this.stateMachine.moving();
    },

    initStateMachine() {
        this.stateMachine = new StateMachine({
            init: 'idle',
            transitions: [
                { name: 'moving', from: ['idle'], to: 'move' },
                { name: 'die', from: ['idle', 'move'], to: 'dead' }
            ],
            methods: {
                onMove: () => { this.onMove(); },
                onDie: () => { this.onDie(); }
            }
        });
    },

    onMove() {
        this.moveTween = cc.tween(this.node)
                            .repeatForever(
                                cc.tween()
                                    .parallel(
                                        cc.tween()
                                            .by(2, { x: -200 * this.speed}),
                                        cc.tween()
                                            .by(1, { scale: -0.1 })
                                            .by(1, { scale: 0.1 }),
                                        cc.tween()
                                            .by(1, { y: -10 })
                                            .by(1, { y: 10 })
                                    )
                            )
                            .start();
    },
    takeDamage(damage){
        if(this.stateMachine.state === 'dead') return;
        this.currentHp = this.currentHp - damage;
        this.healthBar.progress = this.currentHp / this.maxHp;
    },

    onDie(){
        
        Emitter.emit(EventKeys.REMOVE_MONSTER, this.id);
        this.moveTween.stop();
        this.node.destroy();
    },

    onCollisionEnter: function(other, self){
        cc.log('Va chạm với: ' + other.node.name);
        if(other.node.group == "obstacles"){
            Emitter.emit(EventKeys.ON_HIT_EFFECT, other, self);
            this.stateMachine.die();
        }
        if(other.node.group == "field"){
            this.stateMachine.die();
        }
        if(other.node.group == "bullet"){
            const bulletComponent = other.node.getComponent("bullet");
            const damage = bulletComponent.getDamage();
            this.takeDamage(damage);
            Emitter.emit(EventKeys.ON_HIT_EFFECT, other, self);
        }
    }

});
