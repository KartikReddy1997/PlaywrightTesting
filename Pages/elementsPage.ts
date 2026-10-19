import { Page, test, type Locator } from '@playwright/test';

export class elementsPage{

readonly textBox : Locator ;
 readonly fullNameTextBox : Locator;
 readonly emailTextBox : Locator;
 readonly addressTextBox : Locator;
 readonly permAddressTextBox : Locator;
 readonly submitBtn : Locator;
    readonly resultName : Locator;
   readonly resultEmail : Locator;
   readonly resultAddress : Locator;
    resultPermAddress : Locator;
readonly chechBox : Locator;
 readonly homeCheckbox : Locator;

readonly radioButton : Locator;
 readonly yesRadioButton : Locator;

constructor(page: Page) {
    this.textBox = page.getByRole('link', { name: 'Text Box' }); 
    this.chechBox = page.getByRole('link', { name: 'Check Box' });
    this.radioButton = page.getByRole('link', { name: 'Radio Button' });
    this.fullNameTextBox =  page.getByRole('textbox', { name: 'Full Name' });
    this.emailTextBox = page.getByRole('textbox', { name: 'name@example.com' });
    this.addressTextBox = page.getByRole('textbox', { name: 'Current Address' });
    this.permAddressTextBox = page.locator('#permanentAddress');
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.homeCheckbox = page.getByRole('checkbox', { name: 'Home' });
    this.yesRadioButton = page.getByRole('radio', { name: 'Yes' });
    this.resultName =   page.locator('#name')
    this.resultEmail = page.locator('#email')
    this.resultAddress = page.locator('#output');
    this.resultPermAddress = page.locator('#output');

  }
} 