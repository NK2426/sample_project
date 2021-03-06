import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/home',
        title: 'Home',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    },{
        path: '/employee',
        title: 'Employee',
        type: 'link',
        icontype: 'nc-icon nc-badge'
    },{
        path: '/vendor',
        title: 'Vendor',
        type: 'link',
        icontype: 'nc-icon nc-delivery-fast'
    },{
        path: '/setting',
        title: 'Setting',
        type: 'link',
        icontype: 'nc-icon nc-settings-gear-65'
    }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isNotMobileMenu(){
        if( window.outerWidth > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit(){
    }
}
