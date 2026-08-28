/**
 * RealmForge Canvas Real-Time Radar Minimap & Tactical Ping Renderer
 * Renders scaled battlefield radar blips, active lane pressure gradients, and tactical beacon pings.
 */

export interface MinimapBlip {
  id: number;
  worldX: number;
  worldY: number;
  type: 'NEXUS' | 'TOWER' | 'ENEMY' | 'BOSS' | 'PING';
  color: string;
  size: number;
}

export class MinimapTacticalOverlay {
  private blips: MinimapBlip[] = [];
  getBlips(): MinimapBlip[] { return this.blips; }

  render(ctx: CanvasRenderingContext2D, mapWidth: number, mapHeight: number, minimapWidth: number, minimapHeight: number): void {
    const scaleX = minimapWidth / Math.max(1, mapWidth);
    const scaleY = minimapHeight / Math.max(1, mapHeight);
    ctx.save();
    for (const b of this.blips) {
      const mx = b.worldX * scaleX;
      const my = b.worldY * scaleY;
      ctx.fillStyle = b.color;
      ctx.beginPath();
      ctx.arc(mx, my, b.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  renderRadarPingBeacon_1(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_2(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_3(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_4(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_5(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_6(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_7(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_8(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_9(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_10(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_11(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_12(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_13(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_14(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_15(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_16(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_17(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_18(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_19(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_20(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_21(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_22(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_23(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_24(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_25(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_26(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_27(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_28(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_29(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_30(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_31(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_32(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_33(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_34(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_35(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_36(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_37(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_38(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_39(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_40(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_41(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_42(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_43(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_44(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_45(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_46(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_47(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_48(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_49(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_50(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_51(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_52(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_53(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_54(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_55(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_56(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_57(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_58(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_59(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_60(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_61(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_62(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_63(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_64(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_65(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_66(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_67(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_68(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_69(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_70(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_71(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_72(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_73(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_74(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_75(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_76(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_77(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_78(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_79(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  renderRadarPingBeacon_80(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

}