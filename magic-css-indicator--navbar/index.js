

document.addEventListener('click', event => {
    const targetEle = event.target;

    const activeLi = targetEle.closest('li');

    document.querySelectorAll('li').forEach(ele => ele.classList.remove('active'));

    activeLi.classList.add('active');
})
