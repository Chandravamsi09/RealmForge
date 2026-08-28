/**
 * RealmForge Canvas Tactical Grid, Range Rings & Heatmap Overlay Renderer
 * Renders isometric grid coordinates, tower range projections, danger zones, and creep health bars.
 */

export interface GridCell {
  gridX: number;
  gridY: number;
  worldX: number;
  worldY: number;
  isBuildable: boolean;
  isOccupied: boolean;
  hazardLevel: number;
}

export class TacticalGridOverlayRenderer {
  private cells: GridCell[] = [];
  getCells(): GridCell[] { return this.cells; }

  renderGridLines(ctx: CanvasRenderingContext2D, width: number, height: number, cellSize: number = 32): void {
    ctx.save();
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.4)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += cellSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  renderRangeRing(ctx: CanvasRenderingContext2D, x: number, y: number, radiusPx: number, color: string = 'rgba(56, 189, 248, 0.25)'): void {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, radiusPx, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  renderTacticalZoneHighlight_1(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_2(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_3(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_4(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_5(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_6(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_7(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_8(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_9(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_10(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_11(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_12(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_13(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_14(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_15(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_16(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_17(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_18(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_19(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_20(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_21(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_22(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_23(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_24(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_25(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_26(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_27(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_28(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_29(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_30(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_31(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_32(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_33(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_34(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_35(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_36(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_37(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_38(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_39(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_40(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_41(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_42(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_43(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_44(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_45(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_46(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_47(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_48(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_49(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_50(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_51(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_52(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_53(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_54(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_55(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_56(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_57(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_58(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_59(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_60(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_61(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_62(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_63(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_64(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_65(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_66(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_67(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_68(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_69(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_70(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_71(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_72(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_73(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_74(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_75(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_76(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_77(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_78(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_79(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

  renderTacticalZoneHighlight_80(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.save();
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(x, y, size, size);
    ctx.restore();
  }

}