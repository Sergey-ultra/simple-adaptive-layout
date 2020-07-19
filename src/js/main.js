window.onload = function(){
    let icons=document.querySelector('.skills_icons')
    let mark1=document.querySelector('#mark1')
    let mark2=document.querySelector('#mark2')
    let mark3=document.querySelector('#mark3')
    let mark4=document.querySelector('#mark4')


    let iconStar1=document.querySelectorAll('#mark1 > .icon-star')
    let iconStar2=document.querySelectorAll('#mark2 > .icon-star')
    let iconStar3=document.querySelectorAll('#mark3 > .icon-star')
    let iconStar4=document.querySelectorAll('#mark4 > .icon-star')



    mark1.onclick = function (event) {onClick(event,iconStar1)}
    mark2.onclick = function (event) {onClick(event,iconStar2)}
    mark3.onclick = function (event) {onClick(event,iconStar3)}
    mark4.onclick = function (event) {onClick(event,iconStar4)}

    function onClick (event, arr) {
        const target = event.target;
        if (target.classList.contains('icon-star')) {
            target.classList.add('current-active')
        }
        let mayak = false
        for (let i = 0, iLen = arr.length; i < iLen; i++) {
            if (!mayak) {
                arr[i].classList.add('active')
            }else{
                arr[i].classList.remove('active')
            }
            if (arr[i].classList.contains('current-active')) {
                arr[i].classList.remove('current-active')
                arr[i].classList.add('active')
                mayak = true
            }
            console.log(arr[i])
        }
    }
    document.querySelector('.burger-menu_button').addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('.burger-menu_lines').classList.toggle('active');
        document.querySelector('.menu_wrapper').classList.toggle('active');


    })
}