import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MsrVerticalNavigationComponent } from '@msr/components/navigation/vertical/vertical.component';
import { MsrNavigationService } from '@msr/components/navigation/navigation.service';
import { MsrNavigationItem } from '@msr/components/navigation/navigation.types';

@Component({
    selector       : 'msr-vertical-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MsrVerticalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item: MsrNavigationItem;
    @Input() name: string;

    private _msrVerticalNavigationComponent: MsrVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _msrNavigationService: MsrNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._msrVerticalNavigationComponent = this._msrNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._msrVerticalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
