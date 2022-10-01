let data=document.querySelectorAll(".container .data")
let title=document.querySelector(".title")
let check="X"
data.forEach((ele)=>{
    
    ele.onclick=function(){
        
        if(check==="X"&& ele.innerHTML===""){
            ele.innerHTML="X"
            check="O"
            title.innerHTML="O"
        }else if(check="O"&&ele.innerHTML===""){
            ele.innerHTML="O"
            check="X"
            title.innerHTML="x"
        }
        winner()
        }
})
function end(n1,n2,n3){
    title.innerHTML=`${a[n1]} is Winner`
        document.querySelector(`.container .num${n1}`).style.backgroundColor="black"
        document.querySelector(`.container .num${n2}`).style.backgroundColor="black"
        document.querySelector(`.container .num${n3}`).style.backgroundColor="black"
        data.forEach((e)=>{
            e.style.pointerEvents="none"
        })
        setInterval(()=>{
            
            title.innerHTML+="."
        },1000)
        setTimeout(()=>{
            location.reload()
        },4000)
}
let a=[]
function winner(){
    for(i=1;i<10;i++){
        a[i]=document.querySelector(`.container .num${i}`).innerHTML

    }
    if(a[1]===a[2] && a[2]===a[3] && a[1]!=""){
        end(1,2,3)
    }else if(a[4]===a[5] && a[5]===a[6] && a[4]!=""){
        end(4,5,6)
    }else if(a[7]===a[8] && a[8]===a[9] && a[7]!=""){
        end(7,8,9)
    }else if(a[1]===a[4] && a[4]===a[7] && a[1]!=""){
        end(1,4,7)
    }else if(a[2]===a[5] && a[5]===a[8] && a[2]!=""){
        end(2,5,8)
    }else if(a[3]===a[6] && a[6]===a[9] && a[3]!=""){
        end(3,6,9)
    }else if(a[1]===a[5] && a[5]===a[9] && a[1]!=""){
        end(1,5,9)
    }else if(a[3]===a[5] && a[5]===a[7] && a[3]!=""){
        end(3,5,7)
    }
}