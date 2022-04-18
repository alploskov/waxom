slider = () => {
    let slide_num = 0;
    let checkboxes = document.getElementsByClassName('inputs');
    document.getElementById("b-right").onclick = () => {
        slide_num++;
        if(slide_num > 3)
            slide_num = 0;
        checkboxes[slide_num].checked = true;
    };
    document.getElementById("b-left").onclick = () => {
        slide_num--;
        if(slide_num < 0)
            slide_num = 3;
        checkboxes[slide_num].checked = true;
    };
    change = (checkbox) => {
        slide_num = Number(checkbox.value);
    }
}