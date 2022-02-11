
class Vector3 {
    constructor(_x, _y, _z){
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }

    sqrtLength() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    length() {
        return Math.sqrt(this.sqrtLength());
    }

    normalized() {
        let a = 1.0 / this.length();
        return new Vector3(
            this.x * a,
            this.y * a,
            this.z * a
        )
    }

    toString() {
        return "[x = " + this.x + 
                ", y = " + this.y + 
                ", z = " + this.z + "]";
    }
}

let add = function(_lv, _rv){
    return new Vector3(
        _lv.x + _rv.x,
        _lv.y + _rv.y,
        _lv.z + _rv.z
    );
}

let sub = function(_lv, _rv){
    return new Vector3(
        _lv.x - _rv.x,
        _lv.y - _rv.y,
        _lv.z - _rv.z
    );
}

// 外積 lv x rv
let cross = function(_lv, _rv){
    return new Vector3(
        _lv.y * _rv.z - _rv.y * _lv.z,
        -(_lv.x * _rv.z - _rv.x * _lv.z),
        _lv.x * _rv.y - _rv.x * _lv.y
    );
}

// 内積 lv . rv
let dot = function(_lv, _rv) {
    return _lv.x * _rv.x + _lv.y * _rv.y + _lv.z * _rv.z;;
}

// test
// let v1 = new Vector3(3, 4, 1);
// //console.log(v1.toString());
// 
// let v2 = new Vector3(3, 7, 5);
// //console.log(v2.toString());
// 
// let rc = cross(v1, v2);
// //console.log(rc.toString());
// 
// let d = dot(v1, v2);
// //console.log(d);
// 
// let v3 = new Vector3(10, 5, 30);
// console.log(v3.sqrtLength());
// console.log(v3.length());
// console.log(v3.normalized().toString());