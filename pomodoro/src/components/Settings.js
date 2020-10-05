import React from 'react'

import SettingsItem from './SettingsItem'

function Settings(props) {
  return (
    <div id="settings">
      <SettingsItem
        name="session"
        length={props.sessionLength}
        isTimerOn={props.isTimerOn}
        increment={props.incrementSession}
        decrement={props.decrementSession}
      />
      <SettingsItem
        name="break"
        length={props.breakLength}
        isTimerOn={props.isTimerOn}
        increment={props.incrementBreak}
        decrement={props.decrementBreak}
      />
    </div>
  );
}

export default Settings