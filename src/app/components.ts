import { SliderInfoComponent } from 'src/app/pages/slider/slider-info.component';
import { CheckboxInfoComponent } from './pages/checbkox/checkbox-info.component';
import { ButtonInfoComponent } from './pages/button/button-info.component';
import { DxcDateComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-date/dxc-date.component';
import { RadioInfoComponent } from './pages/radio/radio-info.component';
import { DxcAccordionComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-accordion/dxc-accordion.component';
import { DxcAlertComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-alert/dxc-alert.component';
import { DxcDialogComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-dialog/dxc-dialog.component';
import { DXCDropdownModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-dropdown/dxc-dropdown.module';
import { DxcDropdownComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-dropdown/dxc-dropdown.component';
import { DxcFooterComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-footer/dxc-footer.component';
import { DxcHeaderComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-header/dxc-header.component';
import { DxcTextInputComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-text-input/dxc-input-text.component';
import { DxcSpinnerComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-spinner/dxc-spinner.component';
import { DxcProgressbarComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-progressbar/dxc-progressbar.component';
import { DxcSelectComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-select/dxc-select.component';
import { DxcSpinnerModule } from '../../projects/dxc-ngx-cdk/src/lib/dxc-spinner/dxc-spinner.module';
import { DxcSwitchComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-switch/dxc-switch.component';
import { DxcToggleComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-toggle/dxc-toggle.component';
import { DxcTabsComponent } from 'projects/dxc-ngx-cdk/src/lib/dxc-tabs/dxc-tabs.component';
import { DXCUploadModule } from 'projects/dxc-ngx-cdk/src/lib/dxc-upload/dxc-upload.module';
import { DxcUploadComponent } from '../../projects/dxc-ngx-cdk/src/lib/dxc-upload/dxc-upload.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { AlertComponent } from './pages/alert/alert.component';
import { BoxComponent } from './pages/box/box.component';


export const Components = [
    {
        name: 'Accordion',
        route: 'accordion',
        component: AccordionComponent
    },
    {
        name: 'Alert',
        route: 'alert',
        component: AlertComponent
    },
    {
        name: 'Box',
        route: 'box',
        component: BoxComponent
    }, 
    {
        name: 'Button',
        route: 'button',
        component: ButtonInfoComponent
    }, 
    {
        name: 'Checbkox',
        route: 'checkbox',
        component:  CheckboxInfoComponent
    },
    {
        name: 'Date',
        route: 'date',
        component: DxcDateComponent
    } ,
    {
        name: 'Dialog',
        route: 'dialog',
        component:  DxcDialogComponent
    },
    {
        name: 'Dropdown',
        route: 'dropdown',
        component:  DxcDropdownComponent
    },
    {
        name: 'Footer',
        route: 'footer',
        component:  DxcFooterComponent
    },
    {
        name: 'Header',
        route: 'header',
        component:  DxcHeaderComponent
    },
    {
        name: 'Input Text',
        route: 'input_text',
        component:  DxcTextInputComponent
    },
    {
        name: 'Progress Bar',
        route: 'progress',
        component:  DxcProgressbarComponent
    },
    {
        name: 'Radio',
        route: 'radio',
        component: RadioInfoComponent
    },
    {
        name: 'Select',
        route: 'select',
        component: DxcSelectComponent
    },
    {
        name: 'Slider',
        route: 'slider',
        component: SliderInfoComponent
    },
    {
        name: 'Spinner',
        route: 'spinner',
        component: DxcSpinnerComponent
    },
    {
        name: 'Switch',
        route: 'switch',
        component: DxcSwitchComponent
    },
    {
        name: 'Toggle',
        route: 'toggle',
        component: DxcToggleComponent
    },
    {
        name: 'Tabs',
        route: 'tabs',
        component: DxcTabsComponent
    },
    {
        name: 'Upload',
        route: 'upload',
        component: DxcUploadComponent
    }
   
]
