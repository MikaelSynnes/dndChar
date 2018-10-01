import { InventoryModel } from "../inventory/InventoryModel";

export class UpdateInventoryAction {
    static readonly type = "[INVENTORY] update";
    constructor(public payload: InventoryModel[], public inventoryName: string,public index: number) { }
}