import Phaser from 'phaser';
import * as logo from  '../logo/logo.png';



const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
};
  const game = new Phaser.Game(config);
    
  function preload() {
    this.load.tilemap('board', '../src/tiles/tilemaps/chessboard.json'); 



    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    this.load.image('smoke', 'assets/particles/lit-smoke.png');

  }


  let map, layer;
  
  function create() {
    // this.add.image(400, 300, 'sky');

    map = this.add.tilemap('board');
    layer = map.createLayer('board');
    layer.resizeWorld();

    var particles = this.add.particles('smoke');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }