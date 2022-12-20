import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MsrConfirmationService } from '@msr/services/confirmation/confirmation.service';
import { MsrConfirmationDialogComponent } from '@msr/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MsrConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        MsrConfirmationService
    ]
})
export class MsrConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _msrConfirmationService: MsrConfirmationService)
    {
    }
}
