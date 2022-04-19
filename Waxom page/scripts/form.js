_form = () => {
    let inp = document.getElementById("search-form");
    inp.addEventListener('keydown', (e) => {
        if(e.code !== 'Enter')
            return;
        let val = inp.value.toLowerCase();
        inp.value = '';
        document.getElementById("search").checked = 0;
        close_menu();
        if(['audio', 'аудио', 'музыка', 'music'].includes(val)){
            window.location.href = ".#audio"
        } else if (['table', 'таблица'].includes(val)) {
            window.location.href = ".#table"
        } else if (['video', 'видео'].includes(val)) {
            window.location.href = ".#video-palyer"
        }
    });
    document.getElementById("search").onclick = () => {
        inp.focus();
    }
    inp.addEventListener('focusout', () => {
        document.getElementById("search").checked = 0;
    });
}