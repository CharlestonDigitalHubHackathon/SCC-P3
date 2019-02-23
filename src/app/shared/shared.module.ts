import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ], exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
