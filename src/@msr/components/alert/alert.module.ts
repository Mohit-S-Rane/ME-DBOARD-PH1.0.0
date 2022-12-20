import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MsrAlertComponent } from '@msr/components/alert/alert.component';

@NgModule({
    declarations: [
        MsrAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        MsrAlertComponent
    ]
})
export class MsrAlertModule
{
}
