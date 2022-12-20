import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { msrAnimations } from '@msr/animations';
import { MsrNavigationItem } from '@msr/components/navigation/navigation.types';
import { MsrNavigationService } from '@msr/components/navigation/navigation.service';
import { MsrUtilsService } from '@msr/services/utils/utils.service';

@Component({
    selector       : 'msr-horizontal-navigation',
    templateUrl    : './horizontal.component.html',
    styleUrls      : ['./horizontal.component.scss'],
    animations     : msrAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'msrHorizontalNavigation'
})
export class MsrHorizontalNavigationComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() name: string = this._msrUtilsService.randomId();
    @Input() navigation: MsrNavigationItem[];

    onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _msrNavigationService: MsrNavigationService,
        private _msrUtilsService: MsrUtilsService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Navigation
        if ( 'navigation' in changes )
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Make sure the name input is not an empty string
        if ( this.name === '' )
        {
            this.name = this._msrUtilsService.randomId();
        }

        // Register the navigation component
        this._msrNavigationService.registerComponent(this.name, this);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Deregister the navigation component from the registry
        this._msrNavigationService.deregisterComponent(this.name);

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Refresh the component to apply the changes
     */
    refresh(): void
    {
        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this.onRefreshed.next(true);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
