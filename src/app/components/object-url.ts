import {OnDestroy, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectUrl'
})
export class ObjectUrl implements PipeTransform, OnDestroy {

  private objectUrl: string;

  transform(blob: any): string {
    if (blob) {
      this.objectUrl = URL.createObjectURL(blob);
      return this.objectUrl;
    }
  }

  ngOnDestroy(): void {
    URL.revokeObjectURL(this.objectUrl);
  }

}
