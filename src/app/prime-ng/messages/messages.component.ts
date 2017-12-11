import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {
  msgs: Message[] = [];

  constructor() { }

  ngOnInit() {
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }

  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
  }

  showWarn() {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }

  showMultiple() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
    this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
    this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
  }

  clear() {
    this.msgs = [];
  }

}
