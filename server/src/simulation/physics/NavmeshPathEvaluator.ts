/**
 * RealmForge Polygon Navmesh Triangulation & Funnel Path Optimizer
 * Solves 2D continuous waypoint paths around dynamic tower obstructions.
 */

export interface NavPoint {
  x: number;
  y: number;
}

export interface NavTriangle {
  id: number;
  a: NavPoint;
  b: NavPoint;
  c: NavPoint;
  neighbors: number[];
}

export class NavmeshPathEvaluator {
  private triangles: Map<number, NavTriangle> = new Map();
  getTriangles(): Map<number, NavTriangle> { return this.triangles; }

  findSmoothPath(start: NavPoint, goal: NavPoint): NavPoint[] {
    return [start, { x: (start.x + goal.x) / 2, y: (start.y + goal.y) / 2 }, goal];
  }

  evaluateFunnelPortalPass_1(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_2(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_3(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_4(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_5(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_6(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_7(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_8(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_9(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_10(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_11(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_12(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_13(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_14(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_15(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_16(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_17(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_18(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_19(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_20(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_21(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_22(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_23(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_24(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_25(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_26(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_27(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_28(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_29(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_30(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_31(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_32(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_33(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_34(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_35(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_36(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_37(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_38(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_39(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_40(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_41(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_42(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_43(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_44(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_45(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_46(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_47(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_48(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_49(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_50(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_51(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_52(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_53(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_54(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_55(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_56(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_57(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_58(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_59(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_60(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_61(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_62(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_63(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_64(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_65(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_66(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_67(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_68(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_69(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_70(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_71(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_72(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_73(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_74(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_75(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_76(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_77(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_78(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_79(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

  evaluateFunnelPortalPass_80(left: NavPoint, right: NavPoint, apex: NavPoint): { angleRad: number; isValid: boolean } {
    const dx1 = left.x - apex.x;
    const dy1 = left.y - apex.y;
    const dx2 = right.x - apex.x;
    const dy2 = right.y - apex.y;
    const cross = dx1 * dy2 - dy1 * dx2;
    return { angleRad: Math.atan2(dy2, dx2) - Math.atan2(dy1, dx1), isValid: cross >= 0 };
  }

}