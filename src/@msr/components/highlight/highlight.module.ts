import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsrHighlightComponent } from '@msr/components/highlight/highlight.component';

@NgModule({
    declarations: [
        MsrHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        MsrHighlightComponent
    ]
})
export class MsrHighlightModule
{
}
