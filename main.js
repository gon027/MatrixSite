window.addEventListener("load", function(){
    // 更新ボタンの要素取得、onclickの登録
    let calcButton = this.document.getElementById("calc-button");
    // console.log(calcButton);
    calcButton.onclick = calcViewMatrix;

    calcViewMatrix();
});

let calcViewMatrix = () => {
    let form = document.forms[0];

    let eye = new Vector3(
        form.elements[0].value,
        form.elements[1].value,
        form.elements[2].value
    );
    // console.log(eyeForm.elements[0].value);
    // console.log(eyeForm.elements[1].value);
    // console.log(eyeForm.elements[2].value);
    // console.log(eye.toString());

    let target = new Vector3(
        form.elements[3].value,
        form.elements[4].value,
        form.elements[5].value,
    );
    // console.log(target.toString());

    let up = new Vector3(
        form.elements[6].value,
        form.elements[7].value,
        form.elements[8].value,
    );
    // console.log(up.toString());

    let viewMatrix = lookAtLH(eye, target, up);
    printViewMatrix(viewMatrix);
}

let printViewMatrix = (_viewMatrix) => {
    let viewResultElement = this.document.getElementById("view-result");
    // console.log(viewResultElement);

    viewResultElement.innerHTML = "";
    _viewMatrix.toStrings().forEach(_e => {
        viewResultElement.innerHTML += _e + "<br>";
    }); 
}