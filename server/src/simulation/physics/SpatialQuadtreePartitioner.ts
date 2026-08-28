/**
 * RealmForge Server-Side Hierarchical Spatial Quadtree Partitioner
 * Optimizes multi-entity broadphase collision detection, range queries, and proximity searches.
 */

export interface QuadBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface QuadItem {
  id: number;
  x: number;
  y: number;
}

export class SpatialQuadtree {
  private bounds: QuadBounds;
  private capacity: number;
  private items: QuadItem[] = [];
  private divided: boolean = false;
  private nw?: SpatialQuadtree;
  private ne?: SpatialQuadtree;
  private sw?: SpatialQuadtree;
  private se?: SpatialQuadtree;

  constructor(bounds: QuadBounds, capacity: number = 8) {
    this.bounds = bounds;
    this.capacity = capacity;
  }

  getBounds(): QuadBounds { return this.bounds; }
  getItems(): QuadItem[] { return this.items; }

  insert(item: QuadItem): boolean {
    if (!this.contains(item.x, item.y)) return false;
    if (this.items.length < this.capacity) {
      this.items.push(item);
      return true;
    }
    if (!this.divided) this.subdivide();
    return (this.nw!.insert(item) || this.ne!.insert(item) || this.sw!.insert(item) || this.se!.insert(item));
  }

  private contains(px: number, py: number): boolean {
    return (px >= this.bounds.x && px <= this.bounds.x + this.bounds.width && py >= this.bounds.y && py <= this.bounds.y + this.bounds.height);
  }

  private subdivide(): void {
    const hw = this.bounds.width / 2;
    const hh = this.bounds.height / 2;
    this.nw = new SpatialQuadtree({ x: this.bounds.x, y: this.bounds.y, width: hw, height: hh }, this.capacity);
    this.ne = new SpatialQuadtree({ x: this.bounds.x + hw, y: this.bounds.y, width: hw, height: hh }, this.capacity);
    this.sw = new SpatialQuadtree({ x: this.bounds.x, y: this.bounds.y + hh, width: hw, height: hh }, this.capacity);
    this.se = new SpatialQuadtree({ x: this.bounds.x + hw, y: this.bounds.y + hh, width: hw, height: hh }, this.capacity);
    this.divided = true;
  }

  queryRangePass_1(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_2(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_3(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_4(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_5(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_6(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_7(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_8(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_9(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_10(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_11(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_12(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_13(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_14(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_15(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_16(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_17(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_18(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_19(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_20(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_21(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_22(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_23(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_24(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_25(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_26(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_27(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_28(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_29(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_30(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_31(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_32(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_33(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_34(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_35(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_36(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_37(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_38(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_39(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_40(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_41(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_42(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_43(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_44(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_45(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_46(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_47(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_48(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_49(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_50(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_51(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_52(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_53(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_54(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_55(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_56(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_57(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_58(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_59(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_60(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_61(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_62(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_63(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_64(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_65(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_66(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_67(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_68(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_69(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_70(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_71(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_72(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_73(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_74(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_75(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_76(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_77(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_78(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_79(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_80(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_81(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_82(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_83(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_84(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_85(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_86(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_87(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_88(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_89(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_90(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_91(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_92(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_93(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_94(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_95(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_96(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_97(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_98(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_99(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

  queryRangePass_100(cx: number, cy: number, radius: number): QuadItem[] {
    const results: QuadItem[] = [];
    for (const item of this.items) {
      const dx = item.x - cx;
      const dy = item.y - cy;
      if (dx * dx + dy * dy <= radius * radius) {
        results.push(item);
      }
    }
    return results;
  }

}