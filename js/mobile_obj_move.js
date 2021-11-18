
let TouchMoveAboutSh = document.getElementById('about_sh');
let TouchMoveFAQSh = document.getElementById('faq_sh');
let TouchMoveRulesSh = document.getElementById('rules_sh');
let TouchMoveScheduleSh = document.getElementById('schedule_sh');
let TouchMoveRegSh = document.getElementById('reg_sh');
let TouchMoveAwardsSh = document.getElementById('awards_sh');
DragnDrop(TouchMoveAboutSh);
DragnDrop(TouchMoveFAQSh);
DragnDrop(TouchMoveRulesSh);
DragnDrop(TouchMoveScheduleSh);
DragnDrop(TouchMoveRegSh);
DragnDrop(TouchMoveAwardsSh);

function DragnDrop(){
    let myX = " ";
    let myY = " ";
    let whichWin = " ";

    function resetZ(){
        let winObjects = document.querySelectorAll('.desktop_wins');
        for (let i = winObjects.length - 1; i>=0; i--){
            winObjects[i].style.zIndex = 5;
        };
    }

    function moveStart(e){
        whichWin = e.target;
        myX = e.offsetX === undefined ? e.layerX : e.offsetX;
        myY = e.offsetY === undefined ? e.layerY : e.offsetY;
        resetZ();
        whichWin.style.zIndex = 10;
    }
    function moveDragOver(e){
        e.preventDefault();
    }

    function moveDrop(e){
        e.preventDefault();
        whichWin.style.left = e.pageX - myX + 'px';
        whichWin.style.top = e.pageY - myY + 'px';
    }

    function touchStart(e){
        e.preventDefault();
        console.log("ssss")
        let whichWin = e.target;
        let touch = e.touches[0];
        let moveOffsetX = whichWin.offsetLeft - touch.pageX;
        let moveOffsetY = whichWin.offsetTop - touch.pageY;
        resetZ();
        whichWin.style.zIndex = 10;

        whichWin.addEventListener('touchmove', function(){
            let positionX = touch.pageX + moveOffsetX;
            let positionY = touch.pageY + moveOffsetY;
            whichWin.style.left = positionX + 'px';
            whichWin.style.top = positionY + 'px'
        }, false);

    }

    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);

    document.querySelector('body').addEventListener('touchstart', touchStart, false);

};

// let TouchMoveAboutSh = document.getElementById('about_sh');
// let TouchMoveFAQSh = document.getElementById('faq_sh');
// let TouchMoveRulesSh = document.getElementById('rules_sh');
// let TouchMoveScheduleSh = document.getElementById('schedule_sh');
// let TouchMoveRegSh = document.getElementById('reg_sh');
// let TouchMoveAwardsSh = document.getElementById('awards_sh');
// TouchShortcutElem(TouchMoveAboutSh);
// TouchShortcutElem(TouchMoveFAQSh);
// TouchShortcutElem(TouchMoveRulesSh);
// TouchShortcutElem(TouchMoveScheduleSh);
// TouchShortcutElem(TouchMoveRegSh);
// TouchShortcutElem(TouchMoveAwardsSh);

// function TouchShortcutElem(elem){
//     elem.ondragstart = () => false;
//     let rect = elem.getBoundingClientRect();
//     let css = getComputedStyle(elem);
//     document.body.style.overflow = 'hidden';
//     elem.ontouchstart = e => {
//         elem.style.position = 'absolute';
//         let saveX = e.offsetX;
//         let saveY = e.offsetY;
        

//         document.ontouchmove = e => {
//             elem.style.position = 'absolute';
//             elem.style.top = e.pageY - parseInt(css.margin) - saveY + 'px';
//             elem.style.left = e.pageX - parseInt(css.margin) - saveX + 'px';
//         };
//     };

//     elem.ontoucend = e => {
//         document.ontouchmove = () => false;
//     };
// };

