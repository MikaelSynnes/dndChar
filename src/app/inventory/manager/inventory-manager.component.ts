import { Component, OnInit } from "node_modules/@angular/core";
import { InventoryState } from "../../../state/inventory/inventoryState";
import { InventoryModel } from "../../../state/inventory/InventoryModel";
import { Store, Select } from "../../../../node_modules/@ngxs/store";
import { Observable } from "../../../../node_modules/rxjs";
import { UpdateInventoryAction } from "../../../state/actions/UpdateInventoryAction";

@Component({
  selector: 'app-inventory-manager',
  templateUrl: './inventory-manager.component.html',
  styleUrls: ['./inventory-manager.component.css']
})
export class InventoryManagerComponent implements OnInit {
  @Select(InventoryState) inventoryState$ : Observable<InventoryState>;

  constructor(public store: Store) {
  }

  ngOnInit() {
  }

  onListChange(event: InventoryModel[], entry: string) {
    this.store.dispatch(new UpdateInventoryAction(event, entry));
  }

}
