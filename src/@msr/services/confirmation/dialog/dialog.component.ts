import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsrConfirmationConfig } from '@msr/services/confirmation/confirmation.types';

@Component({
    selector     : 'msr-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .msr-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-dialog-container {
                    padding: 0 !important;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class MsrConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: MsrConfirmationConfig)
    {
    }

}
