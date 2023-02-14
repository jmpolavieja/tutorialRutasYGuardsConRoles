import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user!: any;
  @Output() userEdit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  editUser(id: string) {
    this.userEdit.emit(id);
  }
}
