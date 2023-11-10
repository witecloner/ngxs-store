import { DOCUMENT } from "@angular/common";
import { Inject, Renderer2 } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SettingStateModel } from "src/app/data/models/setting-state-model";

@State<SettingStateModel>({
  name: 'settings',
  defaults: {
    selectedTheme: 'hello world'
  }
})
export class SettingsState {
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2){}
  @Selector()
  public static getState(state: SettingStateModel) {
    return state;
  }
  @Selector()
  public static getEffectiveTheme(state: SettingStateModel){
    return state.selectedTheme;
  }

}
