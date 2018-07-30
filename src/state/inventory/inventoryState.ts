import { InventoryModel } from "./InventoryModel";
import { InventoryStateModel } from "./InventoryStateModel";
import { State, Selector, StateContext, Action } from "@ngxs/store";
import { UpdateInventoryAction } from "../actions/UpdateInventoryAction";

@State<InventoryStateModel>({
    name: 'InventoryState',
    defaults: {
        personalityTraits : new Array(new InventoryModel("dumb"),new InventoryModel("angry"),new InventoryModel("resilient")),
        ideals : new Array(new InventoryModel("bravery"),new InventoryModel("tea"),new InventoryModel("strength")),
        bonds : new Array(new InventoryModel("shoes"),new InventoryModel("axe"),new InventoryModel("hammer")),
        flaws : new Array(new InventoryModel("anger"),new InventoryModel("more anger"),new InventoryModel("even more anger")),
        featuresAndTraits : new Array(new InventoryModel(),new InventoryModel(),new InventoryModel()),
        otherProficienciesAndLanguages : new Array(new InventoryModel(),new InventoryModel(),new InventoryModel()),
        equipment : new Array(new InventoryModel(),new InventoryModel(),new InventoryModel()),
    }
})
export class InventoryState {

    @Selector()
    static getAllInventory(state: InventoryStateModel) {
        return state
    }

    @Action(UpdateInventoryAction)
    updateInventoryAction(context: StateContext<InventoryStateModel>, {payload, inventoryName}: UpdateInventoryAction) {
        let state = context.getState();
        state[inventoryName] = payload;
        context.setState(state);
    }
}