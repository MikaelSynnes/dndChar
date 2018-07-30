import { InventoryModel } from "../inventory/inventoryState";

export class UpdateInventoryAction {
    static readonly type = "[INVENTORY] update";
    constructor(public payload: InventoryModel[], public inventoryName: string) { }
}