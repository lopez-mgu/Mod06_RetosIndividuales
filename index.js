function reto01(){

    let arry01=[];
    let a=parseInt(document.getElementById('r01_v01').value);
    let b=parseInt(document.getElementById('r01_v02').value);

    if (!isNaN(a)&&!isNaN(b)) {
        for (let i = a; i < b; i++) {
            arry01.push(i);
        }  

        let arry01_result=arry01.filter(function(item) {
            return (item%2)!==0;
        })
        document.getElementById('r01_res01').innerHTML=`estos son los numero impares: ${arry01_result}`; 
    }else{
        document.getElementById('r01_res01').innerHTML='Error al procesar. Ingresa valores numericos.';
    }
}

function reto02(){
    let a=parseInt(document.getElementById('r02_v01').value);

    if(!isNaN(a)){
        for (let i = 1; i < 112; i++) {
            document.getElementById('r02_res'+i).innerHTML=`${a} x ${i} = ${a*i}`; 
        }
    }else{
        document.getElementById('r02_res01').innerHTML='Error al procesar. Ingresa valores numericos.';
    }
}

/*Reto 03*/

function reto03() {
    let arry03=[];

    for (let i = 0; i < 5; i++) {
        arry03.push(document.getElementById('r03_v0'+(i+1)).value);
    }
    
    if(!isNaN(arry03[0])&&!isNaN(arry03[1])&&!isNaN(arry03[2])&&!isNaN(arry03[3])&&!isNaN(arry03[4])){

        let arry03_result=arry03.sort((a,b)=>a-b);
        document.getElementById('r03_res01').innerHTML=`array ordenado de menor a mayor: ${arry03_result}`


    }else{
        document.getElementById('r03_res01').innerHTML='Error al procesar. Ingresa valores numericos.';
    }

}

/*Reto 04*/

function reto04(){
    let arry04=[];

    for (let i = 0; i < 5; i++) {
        arry04.push(document.getElementById('r04_v0'+(i+1)).value);
    }

    for (let i = 0; i < arry04.length; i++) {

        for (let j = 0; j < arry04.length - i -1; j++) {
            
            if (arry04[j+1]<arry04[j]){

                [arry04[j+1],arry04[j]]=[arry04[j],arry04[j+1]];

            }
        }
        
    }

    document.getElementById('r04_res01').innerHTML= `Hola: ${arry04}`;
}