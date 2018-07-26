import { SkillModel } from "../skills/SkillsModel";

export class UpdateSkillModelAction {
    static readonly type = "[SKILLS] update";
    constructor(public payload: SkillModel) { }
}