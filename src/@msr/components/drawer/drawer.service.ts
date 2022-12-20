import { Injectable } from '@angular/core';
import { MsrDrawerComponent } from '@msr/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class MsrDrawerService
{
    private _componentRegistry: Map<string, MsrDrawerComponent> = new Map<string, MsrDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: MsrDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): MsrDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
