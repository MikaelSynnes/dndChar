import { Component, OnInit } from "@angular/core";
import { InventoryState } from "../../../state/inventory/inventoryState";
import { InventoryModel } from "../../../state/inventory/InventoryModel";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { UpdateInventoryAction } from "../../../state/actions/UpdateInventoryAction";

@Component({
  selector: 'app-inventory-manager',
  templateUrl: './inventory-manager.component.html',
  styleUrls: ['./inventory-manager.component.scss']
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
