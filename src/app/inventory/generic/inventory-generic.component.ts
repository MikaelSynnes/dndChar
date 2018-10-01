import { Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import { InventoryModel } from "../../../state/inventory/InventoryModel";

@Component({
  selector: 'app-inventory-generic',
  templateUrl: './inventory-generic.component.html',
  styleUrls: ['./inventory-generic.component.scss']
})
export class InventoryGenericComponent implements OnInit {
  @Input() title: string;
  @Input() list: InventoryModel[];
  @Output() listChange = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    if(this.list[this.list.length-1].item !== ""){
      setTimeout(()=> {
        this.addNewLineOfInventory();
      },0);
    }
  }

  onTextChange(value: string, index: number) {
    let local = [...this.list];
    local[index] = new InventoryModel(value);

    //Check if last element has value, if not create a new last element.
    if(local[local.length-1].item !== "") {
      local.push(new InventoryModel());
    }
  
    this.listChange.emit({local, index});
  }

  addNewLineOfInventory() {
    let local = [...this.list];
    local.push(new InventoryModel());
    this.listChange.emit({local, undefined});
  }

  trackByFn(index: any, id: any) {
    return index;
 }
}
