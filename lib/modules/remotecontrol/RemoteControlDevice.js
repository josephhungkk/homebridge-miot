const BaseDevice = require('../../base/BaseDevice.js');
const Constants = require('../../constants/Constants.js');
const DevTypes = require('../../constants/DevTypes.js');
const PropFormat = require('../../constants/PropFormat.js');
const PropUnit = require('../../constants/PropUnit.js');
const PropAccess = require('../../constants/PropAccess.js');


class RemoteControlDevice extends BaseDevice {
  constructor(device, name, logger) {
    super(device, name, logger);
  }


  /*----------========== LIFECYCLE ==========----------*/

  initialPropertyFetchDone() {
    super.initialPropertyFetchDone();
  }


  /*----------========== DEVICE INFO ==========----------*/

  getType() {
    return DevTypes.PROGRAMMABLE_SWITCH;
  }

  getDeviceName() {
    return 'Unknown remote control device';
  }

  getMainService() {
    return this.getServiceByType('remote-control');
  }


  /*----------========== CONFIG ==========----------*/

  propertiesToMonitor() {
    return ['battery:battery-level'];
  }


  /*----------========== VALUES ==========----------*/


  /*----------========== PROPERTIES ==========----------*/

  //overrides


  //device specific

  
  /*----------========== ACTIONS ==========----------*/


  /*----------========== FEATURES ==========----------*/


  /*----------========== GETTERS ==========----------*/


  /*----------========== SETTERS ==========----------*/


  /*----------========== CONVENIENCE ==========----------*/


  /*----------========== VALUE CONVENIENCE  ==========----------*/


  /*----------========== HELPERS ==========----------*/


}

module.exports = RemoteControlDevice;
