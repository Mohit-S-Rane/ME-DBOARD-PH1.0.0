import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsrDrawerComponent } from '@msr/components/drawer/drawer.component';

@NgModule({
    declarations: [
        MsrDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        MsrDrawerComponent
    ]
})
export class MsrDrawerModule
{
}
