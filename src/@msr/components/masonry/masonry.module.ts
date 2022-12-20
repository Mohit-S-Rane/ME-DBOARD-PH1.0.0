import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsrMasonryComponent } from '@msr/components/masonry/masonry.component';

@NgModule({
    declarations: [
        MsrMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        MsrMasonryComponent
    ]
})
export class MsrMasonryModule
{
}
