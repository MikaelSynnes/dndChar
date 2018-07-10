import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopOfPageComponent } from '../top-of-page/top-of-page.component';
import { CoreStatsComponent } from '../core-stats/core-stats.component';
import { InspirationComponent } from '../inspiration/inspiration.component';
import { ProficiencyBonusComponent } from '../proficiency-bonus/proficiency-bonus.component';
import { SavingThrowsComponent } from '../saving-throws/saving-throws.component';
import { SkillsComponent } from '../skills/skills.component';
import { PassivePerceptionComponent } from '../passive-perception/passive-perception.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopOfPageComponent, CoreStatsComponent, InspirationComponent, ProficiencyBonusComponent, SavingThrowsComponent, SkillsComponent, PassivePerceptionComponent]
})
export class BaseStatsModule { }
