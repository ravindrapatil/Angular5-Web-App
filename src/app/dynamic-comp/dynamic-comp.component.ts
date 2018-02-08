import { Component, OnInit, ViewChild, ViewEncapsulation, ComponentFactoryResolver, Input } from '@angular/core';
import { InjectdirectiveDirective } from '../directive/injectdirective.directive';
import { InjectedCompComponent } from './injected-comp/injected-comp.component';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicCompComponent implements OnInit {

  parentMsg: String = 'This is my Message!';

  @ViewChild(InjectdirectiveDirective) injectComp: InjectdirectiveDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {}

  public addComp() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(InjectedCompComponent);
    const viewContainerRef = this.injectComp.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  public removeComp() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(InjectedCompComponent);
    const viewContainerRef = this.injectComp.viewContainerRef;
    const componentRef = viewContainerRef.remove();
  }

}
