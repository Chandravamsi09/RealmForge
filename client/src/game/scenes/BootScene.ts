import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  create(): void {
    // Generate procedural stylized textures for game entities
    this.createTileTextures();
    this.createTowerTextures();
    this.createEnemyTextures();
    this.createProjectileTextures();

    this.scene.start('MainGameScene');
  }

  private createTileTextures(): void {
    // Ground Grass Tile
    const grass = this.make.graphics({ x: 0, y: 0 });
    grass.fillStyle(0x1e293b, 1.0);
    grass.fillRect(0, 0, 32, 32);
    grass.lineStyle(1, 0x334155, 0.5);
    grass.strokeRect(0, 0, 32, 32);
    grass.generateTexture('tile_ground', 32, 32);

    // Path Tile
    const path = this.make.graphics({ x: 0, y: 0 });
    path.fillStyle(0x334155, 1.0);
    path.fillRect(0, 0, 32, 32);
    path.lineStyle(1, 0x475569, 0.8);
    path.strokeRect(0, 0, 32, 32);
    path.generateTexture('tile_path', 32, 32);

    // Obstacle / Rock
    const obs = this.make.graphics({ x: 0, y: 0 });
    obs.fillStyle(0x0f172a, 1.0);
    obs.fillRect(0, 0, 32, 32);
    obs.fillStyle(0x64748b, 1.0);
    obs.fillCircle(16, 16, 10);
    obs.generateTexture('tile_obstacle', 32, 32);

    // Spawn Point
    const spawn = this.make.graphics({ x: 0, y: 0 });
    spawn.fillStyle(0x991b1b, 1.0);
    spawn.fillRect(0, 0, 32, 32);
    spawn.fillStyle(0xef4444, 1.0);
    spawn.fillCircle(16, 16, 8);
    spawn.generateTexture('tile_spawn', 32, 32);

    // Nexus Base
    const nexus = this.make.graphics({ x: 0, y: 0 });
    nexus.fillStyle(0x065f46, 1.0);
    nexus.fillRect(0, 0, 32, 32);
    nexus.fillStyle(0x10b981, 1.0);
    nexus.fillCircle(16, 16, 10);
    nexus.generateTexture('tile_nexus', 32, 32);
  }

  private createTowerTextures(): void {
    // Archer (Green/Brown)
    const archer = this.make.graphics({ x: 0, y: 0 });
    archer.fillStyle(0x15803d, 1.0);
    archer.fillCircle(16, 16, 12);
    archer.fillStyle(0xfef08a, 1.0);
    archer.fillCircle(16, 16, 5);
    archer.generateTexture('tower_ARCHER', 32, 32);

    // Mage (Purple Arcane)
    const mage = this.make.graphics({ x: 0, y: 0 });
    mage.fillStyle(0x7e22ce, 1.0);
    mage.fillCircle(16, 16, 12);
    mage.fillStyle(0xe9d5ff, 1.0);
    mage.fillCircle(16, 16, 6);
    mage.generateTexture('tower_MAGE', 32, 32);

    // Cannon (Iron Grey)
    const cannon = this.make.graphics({ x: 0, y: 0 });
    cannon.fillStyle(0x374151, 1.0);
    cannon.fillCircle(16, 16, 14);
    cannon.fillStyle(0xd1d5db, 1.0);
    cannon.fillRect(14, 2, 4, 14);
    cannon.generateTexture('tower_CANNON', 32, 32);

    // Tesla (Cyan Electric)
    const tesla = this.make.graphics({ x: 0, y: 0 });
    tesla.fillStyle(0x0e7490, 1.0);
    tesla.fillCircle(16, 16, 12);
    tesla.fillStyle(0x67e8f9, 1.0);
    tesla.fillCircle(16, 16, 6);
    tesla.generateTexture('tower_TESLA', 32, 32);

    // Frost (Azure Ice)
    const frost = this.make.graphics({ x: 0, y: 0 });
    frost.fillStyle(0x0284c7, 1.0);
    frost.fillCircle(16, 16, 12);
    frost.fillStyle(0xbae6fd, 1.0);
    frost.fillCircle(16, 16, 5);
    frost.generateTexture('tower_FROST', 32, 32);

    // Barracks (Gold Bastion)
    const barracks = this.make.graphics({ x: 0, y: 0 });
    barracks.fillStyle(0xb45309, 1.0);
    barracks.fillRect(4, 4, 24, 24);
    barracks.fillStyle(0xfde047, 1.0);
    barracks.fillRect(10, 10, 12, 12);
    barracks.generateTexture('tower_BARRACKS', 32, 32);
  }

  private createEnemyTextures(): void {
    // Swarm
    const swarm = this.make.graphics({ x: 0, y: 0 });
    swarm.fillStyle(0xd97706, 1.0);
    swarm.fillCircle(8, 8, 6);
    swarm.generateTexture('enemy_SWARM', 16, 16);

    // Goblin / Standard
    const goblin = this.make.graphics({ x: 0, y: 0 });
    goblin.fillStyle(0xdc2626, 1.0);
    goblin.fillCircle(12, 12, 9);
    goblin.generateTexture('enemy_GOBLIN', 24, 24);

    // Brute / Knight
    const brute = this.make.graphics({ x: 0, y: 0 });
    brute.fillStyle(0x991b1b, 1.0);
    brute.fillCircle(16, 16, 14);
    brute.lineStyle(2, 0xfca5a5, 1.0);
    brute.strokeCircle(16, 16, 14);
    brute.generateTexture('enemy_ORC_BRUTE', 32, 32);

    // Boss
    const boss = this.make.graphics({ x: 0, y: 0 });
    boss.fillStyle(0x581c87, 1.0);
    boss.fillCircle(24, 24, 22);
    boss.lineStyle(3, 0xfacc15, 1.0);
    boss.strokeCircle(24, 24, 22);
    boss.generateTexture('enemy_BOSS_TITAN', 48, 48);
  }

  private createProjectileTextures(): void {
    // Arrow / Bullet
    const proj = this.make.graphics({ x: 0, y: 0 });
    proj.fillStyle(0xfacc15, 1.0);
    proj.fillCircle(4, 4, 4);
    proj.generateTexture('projectile_default', 8, 8);
  }
}
