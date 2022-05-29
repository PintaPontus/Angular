export class HeaderTab {
  name: string;
  active = false;
  disabled = false;
  constructor(name: string, active?:boolean, disabled?: boolean) {
    this.name=name;
    if(active){
      this.active=active;
    }
    if(disabled){
      this.disabled=disabled;
    }
  }
}
