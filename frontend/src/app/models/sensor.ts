export class Sensor {
    constructor ( _id = '', sid = 0, sensorname = '', location = '', alarmname = '',
    alvalue = 0) {
        this._id = _id;
        this.sid = sid;
        this.sensorname = sensorname;
        this.location = location;
        this.alarmname = alarmname;
        this.alvalue = alvalue;
    }
    _id: string;
    sid: Number;
    sensorname: string;
    location: string;
    alarmname: string;
    alvalue: Number;
}
