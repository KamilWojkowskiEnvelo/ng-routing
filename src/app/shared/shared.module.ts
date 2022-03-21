import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCaseFirstLetterPipe } from '../upper-case-first-letter.pipe';

@NgModule({
  declarations: [UpperCaseFirstLetterPipe],
  imports: [CommonModule],
  exports: [UpperCaseFirstLetterPipe],
})
export class SharedModule {}
