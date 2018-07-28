import { State } from "@ngxs/store";

export class InventoryModel {
    name: string;
    stolen: boolean = false;
}

export class InventoryStateModel {
    personalityTraits: InventoryModel[];
    ideals: InventoryModel[];
    bonds: InventoryModel[];
    flaws: InventoryModel[];
    featuresAndTraits: InventoryModel[];
    otherProficienciesAndLanguages: InventoryModel[];
    equipment: InventoryModel[];
    treasure: InventoryModel[];
}

@State<InventoryStateModel>({
    name: 'InventoryState',
})
export class InventoryState {

}