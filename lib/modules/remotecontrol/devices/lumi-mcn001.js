const RemoteControlDevice = require('../RemoteControlDevice.js');
const Constants = require('../../../constants/Constants.js');
const PropFormat = require('../../../constants/PropFormat.js');
const PropUnit = require('../../../constants/PropUnit.js');
const PropAccess = require('../../../constants/PropAccess.js');


class LumiRemoteMcn001 extends RemoteControlDevice {
  constructor(miotDevice, name, logger) {
    super(miotDevice, name, logger);
  }


  /*----------========== DEVICE INFO ==========----------*/

  getDeviceName() {
    return 'Xiaomi Wireless Switch Bluetooth Version';
  }

  getMiotSpecUrl() {
    return 'https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:remote-control:0000A021:lumi-mcn001:1';
  }


  /*----------========== CONFIG ==========----------*/

  requiresMiCloud() {
    return false;
  }


  /*----------========== METADATA ==========----------*/

  initDeviceServices() {
    this.createServiceByString('{"siid":1,"type":"urn:miot-spec-v2:service:device-information:00007801:lumi-mcn001:1","description":"Device Information"}');
    this.createServiceByString('{"siid":2,"type":"urn:miot-spec-v2:service:battery:00007805:lumi-mcn001:1","description":"Battery"}');
    this.createServiceByString('{"siid":3,"type":"urn:miot-spec-v2:service:switch-sensor-for-ble:000078B0:lumi-mcn001:1","description":"Switch Sensor For BLE"}');
  }

  initDeviceProperties() {
    this.addPropertyByString('device-information:manufacturer', '{"siid":1,"piid":1,"type":"urn:miot-spec-v2:property:manufacturer:00000001:lumi-mcn001:1","description":"Device Manufacturer","format":"string","access":["read"]}');
    this.addPropertyByString('device-information:model', '{"siid":1,"piid":2,"type":"urn:miot-spec-v2:property:model:00000002:lumi-mcn001:1","description":"Device Model","format":"string","access":["read"]}');
    this.addPropertyByString('device-information:serial-number', '{"siid":1,"piid":3,"type":"urn:miot-spec-v2:property:serial-number:00000003:lumi-mcn001:1","description":"Device ID","format":"string","access":["read"]}');
    this.addPropertyByString('device-information:firmware-revision', '{"siid":1,"piid":4,"type":"urn:miot-spec-v2:property:firmware-revision:00000005:lumi-mcn001:1","description":"Current Firmware Version","format":"string","access":["read"]}');
    this.addPropertyByString('device-information:serial-no', '{"siid":1,"piid":5,"type":"urn:miot-spec-v2:property:serial-no:000000FF:lumi-mcn001:1","description":"Serial Number","format":"string","access":["read","notify"]}');
    this.addPropertyByString('battery:battery-level', '{"siid":2,"piid":1003,"type":"urn:miot-spec-v2:property:battery-level:00000014:lumi-mcn001:1","description":"Battery Level","format":"uint8","access":["notify","read"],"unit":"percentage","valueRange":[0,100,1],"source":4}');
    this.addPropertyByString('switch-sensor-for-ble:mode', '{"siid":3,"piid":1020,"type":"urn:miot-spec-v2:property:mode:00000008:lumi-mcn001:1","description":"Mode","format":"uint8","access":["notify","read"],"valueList":[{"value":0,"description":"Multiple Click"},{"value":1,"description":"Quick Single Click"}],"source":4}');    
  }

  initDeviceActions() {
    //no actions
  }

  initDeviceEvents() {
    this.addEventByString('battery:event', '{"siid":1,"eiid":1001,"type":"urn:miot-spec-v2:event:low-battery:00005003:lumi-mcn001:1","description":"Low Battery","arguments":[]}');
    this.addEventByString('switch-sensor-for-ble:click', '{"siid":3,"eiid":1012,"type":"urn:miot-spec-v2:event:click:00005007:lumi-mcn001:1","description":"Click","arguments":[]}');
    this.addEventByString('switch-sensor-for-ble:double-click', '{"siid":3,"eiid":1013,"type":"urn:miot-spec-v2:event:double-click:00005008:lumi-mcn001:1","description":"Double Click","arguments":[]}');
    this.addEventByString('switch-sensor-for-ble:long-press', '{"siid":3,"eiid":1014,"type":"urn:miot-spec-v2:event:long-press:00005009:lumi-mcn001:1","description":"Long Press","arguments":[]}');
    this.addEventByString('switch-sensor-for-ble:device-be-reset', '{"siid":3,"eiid":1028,"type":"urn:miot-spec-v2:event:device-be-reset:0000503C:lumi-mcn001:1","description":"Device Be Reset","arguments":[]}');
  }


  /*----------========== VALUES OVERRIDES ==========----------*/


  /*----------========== PROPERTY OVERRIDES ==========----------*/


  /*----------========== ACTION OVERRIDES ==========----------*/


  /*----------========== OVERRIDES ==========----------*/


}

module.exports = LumiRemoteMcn001;
