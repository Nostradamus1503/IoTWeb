export class Measurement {
    constructor ( _id = '', sensor_id = 0, name = '',  value = 0,  date = null) {
        this._id = _id;
        this.sensor_id = sensor_id;
        this.name = name;
        this.value = value;
        this.date = date;
    }
    _id: string;
    sensor_id: Number;
    name:  String;
    value: Number;
    date: Date
}

