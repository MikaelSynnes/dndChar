import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { InventoryModel } from "../../../state/inventory/InventoryModel";
import { Subject } from "rxjs";

@Component({
  selector: 'app-inventory-generic',
  templateUrl: './inventory-generic.component.html',
  styleUrls: ['./inventory-generic.component.css']
})
export class InventoryGenericComponent implements OnInit {
  @Input() title: string;
  @Input() list: InventoryModel[];
  @Output() listChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTextChange(value: string, index: number) {
    let local = this.list;
    local[index] = new InventoryModel(value);

    //Check if last element has value, if not create a new last element.
    if(local[local.length-1].item !== "") {
      local.push(new InventoryModel());
    }
  
    this.listChange.emit(local);
  }

  addNewLineOfInventory() {
    let local = this.list;
    local.push(new InventoryModel());
    this.listChange.emit(local);
  }

  trackByFn(index: any, item: any) {
    return index;
 }
}
