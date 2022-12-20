import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsrCardComponent } from '@msr/components/card/card.component';

@NgModule({
    declarations: [
        MsrCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        MsrCardComponent
    ]
})
export class MsrCardModule
{
}
