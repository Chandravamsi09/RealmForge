/**
 * RealmForge Hierarchical Boss Phase State Machine
 * Coordinates raid boss phase transitions, telegraph zones, invulnerability shields, and enrage mechanics.
 */

export enum BossState {
  DORMANT = 'DORMANT',
  ENGAGED = 'ENGAGED',
  INVULNERABLE_CASTING = 'INVULNERABLE_CASTING',
  SUMMONING_MINIONS = 'SUMMONING_MINIONS',
  ENRAGED = 'ENRAGED',
  DEFEATED = 'DEFEATED',
}

export interface BossContext {
  bossId: number;
  currentHp: number;
  maxHp: number;
  phase: number;
  state: BossState;
  phaseThresholds: number[];
}

export class BossPhaseStateMachine {
  evaluateTransition(ctx: BossContext): BossState {
    const hpPct = ctx.currentHp / Math.max(1, ctx.maxHp);
    if (hpPct <= 0) return BossState.DEFEATED;
    if (hpPct <= 0.20) return BossState.ENRAGED;
    if (hpPct <= 0.50 && ctx.phase === 1) return BossState.INVULNERABLE_CASTING;
    return BossState.ENGAGED;
  }

  executeBossMechanicSequence_1(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 1 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_2(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 2 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_3(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 3 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_4(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 4 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_5(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 5 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_6(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 6 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_7(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 7 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_8(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 8 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_9(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 9 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_10(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 10 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_11(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 11 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_12(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 12 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_13(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 13 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_14(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 14 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_15(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 15 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_16(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 16 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_17(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 17 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_18(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 18 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_19(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 19 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_20(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 20 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_21(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 21 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_22(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 22 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_23(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 23 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_24(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 24 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_25(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 25 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_26(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 26 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_27(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 27 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_28(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 28 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_29(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 29 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_30(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 30 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_31(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 31 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_32(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 32 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_33(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 33 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_34(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 34 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_35(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 35 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_36(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 36 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_37(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 37 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_38(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 38 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_39(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 39 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_40(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 40 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_41(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 41 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_42(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 42 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_43(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 43 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_44(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 44 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_45(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 45 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_46(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 46 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_47(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 47 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_48(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 48 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_49(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 49 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_50(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 50 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_51(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 51 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_52(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 52 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_53(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 53 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_54(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 54 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_55(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 55 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_56(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 56 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_57(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 57 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_58(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 58 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_59(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 59 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_60(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 60 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_61(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 61 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_62(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 62 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_63(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 63 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_64(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 64 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_65(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 65 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_66(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 66 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_67(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 67 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_68(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 68 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_69(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 69 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_70(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 70 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_71(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 71 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_72(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 72 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_73(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 73 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_74(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 74 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_75(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 75 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_76(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 76 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_77(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 77 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_78(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 78 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_79(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 79 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

  executeBossMechanicSequence_80(ctx: BossContext, _deltaMs: number): { telegraphAreaRadius: number; damage: number } {
    const dmg = Math.floor(150 + ctx.phase * 50 + 80 * 2);
    return { telegraphAreaRadius: 100 + ctx.phase * 20, damage: dmg };
  }

}