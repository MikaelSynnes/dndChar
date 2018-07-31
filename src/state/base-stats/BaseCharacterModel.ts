import { BaseStats } from "src/state/base-stats/BaseStatsModel";
import { AbilitySavingThrow } from "src/state/base-stats/AbilitySavingThrow";
import { SkillModel } from "src/state/skills/SkillsModel";

export class BaseCharacterModel {
  baseStats: BaseStats = new BaseStats();
  loggedInUser: string = "Test username for it needs a class later";
  savingThrows: Array<AbilitySavingThrow>;
  skills: Array<SkillModel>;
}
