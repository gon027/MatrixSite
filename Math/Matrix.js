
class Matrix {
    constructor(
        _m00, _m01, _m02, _m03,
        _m10, _m11, _m12, _m13,
        _m20, _m21, _m22, _m23,
        _m30, _m31, _m32, _m33
    ){
        this.m00 = _m00, this.m01 = _m01, this.m02 = _m02, this.m03 = _m03,
        this.m10 = _m10, this.m11 = _m11, this.m12 = _m12, this.m13 = _m13,
        this.m20 = _m20, this.m21 = _m21, this.m22 = _m22, this.m23 = _m23,
        this.m30 = _m30, this.m31 = _m31, this.m32 = _m32, this.m33 = _m33
    }

    toString() {
        return "[m00 = " + this.m00 + ", m01 = " + this.m01 + ", m02 = " + this.m02 + ", m03 =  " + this.m03 + "]\n" +
        "[m10 = " + this.m10 + ", m11 = " + this.m11 + ", m12 = " + this.m12 + ", m13 =  " + this.m13 + "]\n" +
        "[m20 = " + this.m20 + ", m21 = " + this.m21 + ", m22 = " + this.m22 + ", m23 =  " + this.m23 + "]\n" +
        "[m30 = " + this.m30 + ", m31 = " + this.m31 + ", m32 = " + this.m32 + ", m33 =  " + this.m33 + "]\n"
    }

    // toStrings() {
    //     let e = [
    //         "[m00 = " + this.m00 + ", m01 = " + this.m01 + ", m02 = " + this.m02 + ", m03 =  " + this.m03 + "]",
    //         "[m10 = " + this.m10 + ", m11 = " + this.m11 + ", m12 = " + this.m12 + ", m13 =  " + this.m13 + "]",
    //         "[m20 = " + this.m20 + ", m21 = " + this.m21 + ", m22 = " + this.m22 + ", m23 =  " + this.m23 + "]",
    //         "[m30 = " + this.m30 + ", m31 = " + this.m31 + ", m32 = " + this.m32 + ", m33 =  " + this.m33 + "]"
    //     ];
    //     return e;
    // }

    toStrings() {
        function financial(_x) {
            return Number.parseFloat(_x).toFixed(16);
        }

        let e = [
            "[" + financial(this.m00) + ", " + financial(this.m01) + ", " + financial(this.m02) + ", " + financial(this.m03) + "]",
            "[" + financial(this.m10) + ", " + financial(this.m11) + ", " + financial(this.m12) + ", " + financial(this.m13) + "]",
            "[" + financial(this.m20) + ", " + financial(this.m21) + ", " + financial(this.m22) + ", " + financial(this.m23) + "]",
            "[" + financial(this.m30) + ", " + financial(this.m31) + ", " + financial(this.m32) + ", " + financial(this.m33) + "]"
        ];
        return e;
    }
}

// lm * rm
let mul = function(_lm, _rm){
    const m00 = _lm.m00 * _rm.m00 + _lm.m01 * _rm.m10 + _lm.m02 * _rm.m20 + _lm.m03 * _rm.m30;
    const m01 = _lm.m00 * _rm.m01 + _lm.m01 * _rm.m11 + _lm.m02 * _rm.m21 + _lm.m03 * _rm.m31;
    const m02 = _lm.m00 * _rm.m02 + _lm.m01 * _rm.m12 + _lm.m02 * _rm.m22 + _lm.m03 * _rm.m32;
    const m03 = _lm.m00 * _rm.m03 + _lm.m01 * _rm.m13 + _lm.m02 * _rm.m23 + _lm.m03 * _rm.m33;

    const m10 = _lm.m10 * _rm.m00 + _lm.m11 * _rm.m10 + _lm.m12 * _rm.m20 + _lm.m13 * _rm.m30;
    const m11 = _lm.m10 * _rm.m01 + _lm.m11 * _rm.m11 + _lm.m12 * _rm.m21 + _lm.m13 * _rm.m31;
    const m12 = _lm.m10 * _rm.m02 + _lm.m11 * _rm.m12 + _lm.m12 * _rm.m22 + _lm.m13 * _rm.m32;
    const m13 = _lm.m10 * _rm.m03 + _lm.m11 * _rm.m13 + _lm.m12 * _rm.m23 + _lm.m13 * _rm.m33;

    const m20 = _lm.m20 * _rm.m00 + _lm.m21 * _rm.m10 + _lm.m22 * _rm.m20 + _lm.m23 * _rm.m30;
    const m21 = _lm.m20 * _rm.m01 + _lm.m21 * _rm.m11 + _lm.m22 * _rm.m21 + _lm.m23 * _rm.m31;
    const m22 = _lm.m20 * _rm.m02 + _lm.m21 * _rm.m12 + _lm.m22 * _rm.m22 + _lm.m23 * _rm.m32;
    const m23 = _lm.m20 * _rm.m03 + _lm.m21 * _rm.m13 + _lm.m22 * _rm.m23 + _lm.m23 * _rm.m33;

    const m30 = _lm.m30 * _rm.m00 + _lm.m31 * _rm.m10 + _lm.m32 * _rm.m20 + _lm.m33 * _rm.m30;
    const m31 = _lm.m30 * _rm.m01 + _lm.m31 * _rm.m11 + _lm.m32 * _rm.m21 + _lm.m33 * _rm.m31;
    const m32 = _lm.m30 * _rm.m02 + _lm.m31 * _rm.m12 + _lm.m32 * _rm.m22 + _lm.m33 * _rm.m32;
    const m33 = _lm.m30 * _rm.m03 + _lm.m31 * _rm.m13 + _lm.m32 * _rm.m23 + _lm.m33 * _rm.m33;


    return new Matrix(
        m00, m01, m02, m03,
        m10, m11, m12, m13,
        m20, m21, m22, m23,
        m30, m31, m32, m33
    );
}

const identity = new Matrix(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
);

let rotationX = function(_r){
    const s = Math.sin(_r);
    const c = Math.cos(_r);

    return new Matrix(
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1
    );
}

let rotationY = function(_r){
    const s = Math.sin(_r);
    const c = Math.cos(_r);

    return new Matrix(
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1,
    );
}

let rotationZ = function(_r){
    const s = Math.sin(_r);
    const c = Math.cos(_r);
    
    return new Matrix(
        c, s, 0, 0,
        -s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}

let translation = function(_x, _y, _z){
    return new Matrix(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        _x, _y, _z, 1
    );
}

let lookAtLH = function(_eye, _focus, _up){
    const zAxis = sub(_focus, _eye).normalized();
    const xAxis = cross(_up, zAxis).normalized();
    const yAxis = cross(zAxis, xAxis);

    return new Matrix(
        xAxis.x, yAxis.x, zAxis.x, 0,
        xAxis.y, yAxis.y, zAxis.y, 0,
        xAxis.z, yAxis.z, zAxis.z, 0,
        -dot(xAxis, _eye), -dot(yAxis, _eye), -dot(zAxis, _eye), 1
    );
}

let perspectiveFovLH = function(_fovAngleY,  _aspectRatio, _nearZ, _farZ){
    const h = 1 / Math.tan(_fovAngleY * 0.5);
    const w = h / _aspectRatio;
    const zDiff = _farZ - _nearZ;

    return new Matrix(
        w, 0,  0,                         0,
        0, h,  0,                         0,
        0, 0,  _farZ / zDiff,             1,
        0, 0., -(_farZ * _nearZ) / zDiff, 0,
    );
}

let orthographicLH = function(_viewWidth, _viewHeight, _nearZ, _farZ){
    const zDiff = _farZ - _nearZ;

    return new Matrix(
        2 / _viewWidth, 0,               0,               0,
        0,              2 / _viewHeight, 0,               0,
        0,              0,               1 / zDiff,       0,
        0,              0,               -_nearZ / zDiff, 1,
    );
}

// test
// console.log(identity.toString());

// let m1 = new Matrix(
//     2, 3, 6, 5, 
//     1, 4, 2, 7, 
//     2, 1, 7, 2, 
//     5, 1, 2, 4
// );
//  console.log(m1.toString());

// let m2 = new Matrix(
//     3, 1, 2, 5, 
//     2, 4, 2, 4, 
//     2, 4, 6, 3, 
//     3, 5, 1, 4
// );
// console.log(m2.toString());

// let mm = mul(m1, m2);
// console.log(mm.toString());

// const angle = Math.PI / 2;
// let rx = rotationX(angle);
// let ry = rotationY(angle);
// let rz = rotationZ(angle);
// 
// let t = translation(10, 15, 25);
// 
// const eye = new Vector3(0, 0, -10);
// const target = new Vector3(0, 0, 0);
// const up = new Vector3(0, 1, 0);
// let look = lookAtLH(eye, target, up);
// 
// const fov = 45 * Math.PI / 180;
// let plh = perspectiveFovLH(fov, (640 / 480), 1, 100);
// 
// let olh = orthographicLH(480, 640, 1, 100);

// console.log(rx.toString());
// console.log(ry.toString());
// console.log(rz.toString());
// 
// console.log(t.toString());
// console.log(look.toString());
// console.log(plh.toString());
// console.log(olh.toString());


// let e = identity.toStrings();
// console.log(e);