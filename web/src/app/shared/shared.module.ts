import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastContainerComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    ToastContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastContainerComponent
  ]
})
export class SharedModule { }
