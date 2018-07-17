import { AbilityScore } from "./AbilityScore";
import { abilityScoreName } from "./abilityScoreName";
// Class used to define the Base ability scores.
export class AbilityScoreBase {
    strength: AbilityScore = new AbilityScore(abilityScoreName.strength);
    dexterity: AbilityScore = new AbilityScore(abilityScoreName.dexterity);
    constitution: AbilityScore = new AbilityScore(abilityScoreName.constitution);
    intelligence: AbilityScore = new AbilityScore(abilityScoreName.intelligence);
    wisdom: AbilityScore = new AbilityScore(abilityScoreName.wisdom);
    charisma: AbilityScore = new AbilityScore(abilityScoreName.charisma);
}