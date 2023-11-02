import { Component } from '@angular/core';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.scss']
})
export class HeaderBaseComponent {

  public isActive: boolean = false;
}
