/**
 * By chenmin from 2017/12/21
 */

window.onload = () => {
    require.config({
　　　　paths: {
　　　　　　"part": "es6/part",
           "part2": "es6/part2"
　　　　}

　　});

    require(['part'], function(part){
        let oBtn = document.getElementById("oBtn");
        
        oBtn.onclick = () => {
            alert(part.getHello());
        }
    });
    
        
}