  

function add_eadge(){
    var x1=Number(document.getElementById("x2").innerHTML);
    var x2=Number(document.getElementById("x1").innerHTML);
    var y1=Number(document.getElementById("y2").innerHTML);
    var y2=Number(document.getElementById("y1").innerHTML);

    if(x1!=x2 && y1!=y2){
    node2=document.elementFromPoint(x1+410, y1+30);
    node1=document.elementFromPoint(x2+410, y2+30);
    
    
    
    if (node1.getAttributeNode("flag").value=='f') {
        
   node1.getAttributeNode("flag").value='t';
    var counter = document.createElement("p"); 
    counter.className="counter";      
    counter.innerHTML="1";
    node1.appendChild(counter);


     }

    if(document.getElementsByClassName('node')[0].innerHTML==node1.innerHTML)node1.id='0';
    temp=node1.getElementsByClassName('counter')[0].innerHTML;
    node2.id=node1.getAttributeNode("label").value+temp;
    node1.getElementsByClassName('counter')[0].innerHTML=Number(temp)+1;
    
 
    
   
    distance=Math.sqrt( ((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)) );
    xmid=(x1+x2)/2
    ymid=(y1+y2)/2



    slope1=Math.atan2(y1-y2,x1-x2);
    slope2=(slope1*180)/Math.PI;




    var line = document.createElement("div"); 
    
    
    var att = document.createAttribute("line");      
    att.value = node2.id;                        
    line.setAttributeNode(att); 

    line.className="line";      
    line.style.width=distance+"px";
    line.style.top=ymid+"px";
    line.style.left=xmid-(distance/2)+"px";
    line.style.transform="rotate("+slope2+"deg)";
    document.getElementsByClassName('body')[0].appendChild(line);
    
    

}


}
function target_line(event){
            document.getElementsByClassName('body')[0].style.cursor="url('./node.png'),auto";

    nodes=document.getElementsByClassName('node');

    for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.border="3px solid #2b5841";
    nodes[i].style.backgroundColor ="#f5f5f5";
    
    }
    if (event.target.className!="body") {
    
    document.getElementById("x2").innerHTML = event.clientX-410;
    document.getElementById("y2").innerHTML = event.clientY-30;
    if(event.clientY!=document.getElementById("y1").innerHTML&&event.clientX!=document.getElementById("x1").innerHTML)
    add_eadge();

    }
      

}


function addNode(event) {
  
    document.getElementById("x1").innerHTML = event.clientX-410;
    document.getElementById("y1").innerHTML = event.clientY-30;

    if (event.target.className=="body") {
    num=document.getElementById("counter").innerHTML;

    var newDiv = document.createElement("div");  
    newDiv.className="node";    
    newDiv.setAttribute("flag", "f"); 

    var att = document.createAttribute("flag");      
    att.value = "f";                        
    newDiv.setAttributeNode(att); 

    var att2 = document.createAttribute("num");      
    att2.value = "0";                        
    newDiv.setAttributeNode(att2); 

    
    var att3 = document.createAttribute("label");      
    att3.value = Number(num)+1+"";                       
    newDiv.setAttributeNode(att3); 


    newDiv.innerHTML=Number(num)+1+"";
    document.getElementById('counter').innerHTML=Number(num)+1;


    newDiv.style.left = event.clientX-410-23+"px";
    newDiv.style.top = event.clientY-30-23+"px";        
    document.getElementsByClassName('body')[0].appendChild(newDiv);
    }
    else{

    if (event.target.className=="node"){ 
                    document.getElementsByClassName('body')[0].style.cursor="grab";
   
    event.target.style.border="8px solid #fa7661";
    event.target.style.backgroundColor ="#fa7661";

     document.addEventListener("mouseup", target_line);
     
    }
   



 }
  


}


function draw() {
    document.getElementsByTagName('img')[0].style.display='block';
        document.getElementsByClassName('body')[0].style.cursor="url('./node.png'),auto";

    array=document.getElementsByClassName("edit");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="inline";
        
    }
  array=document.getElementsByClassName("main");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="none";
        
    }
    document.getElementById('speedtext').style.display='none';
    document.addEventListener("mousedown", addNode);

}

function cancel() {
        document.getElementsByTagName('img')[0].style.display='none';

        document.getElementsByClassName('body')[0].style.cursor="auto";

        document.getElementById("sidebar").style.opacity="1";
     array=document.getElementsByClassName("edit");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="none";
        
    }
  
 array=document.getElementsByClassName("main");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="inline";
        
    }
        document.getElementById('speedtext').style.display='block';

    document.getElementById('speed').style.display='block';
     document.removeEventListener("mousedown", addNode);
     document.removeEventListener("mouseup", target_line);
}

function bfs(){
    nodes=document.getElementsByClassName('node');
    lines=document.getElementsByClassName('line');
    for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.border="3px solid #2b5841";
    nodes[i].style.backgroundColor ='#f5f5f5';
     nodes[i].style.color ="#2b5841";
    }   
    for (let i = 0; i < lines.length; i++) {
    lines[i].style.border="none";
    lines[i].style.backgroundColor ="#2b5841";
    
    }
    nodes=document.getElementsByClassName('node');
    lines=document.getElementsByClassName('line');
     myLoop( 0,1,nodes,lines); 
  
}
    

function dfs() {

    findNodesDFS('0');
    
    document.querySelector(`[num="1"]`).style.border="3px solid #fa7661";
    document.querySelector(`[num="1"]`).style.backgroundColor ="#fa7661";
    document.querySelector(`[num="1"]`).style.color ="white";
    document.querySelector(`[num="1"]`).innerHTML='R';
    myLoop1(2,3);
}

function findNodesDFS(id_) {
    
    num=document.getElementById('num').innerHTML;
    document.getElementById(id_).getAttributeNode("num").value=num;

    if(id_!='0'){
    line=document.querySelectorAll(`[line="${id_}"]`)[0];
    line.getAttributeNode('line').value=Number(num)+1;}

    document.getElementById('num').innerHTML=Number(num)+1;

    label=document.getElementById(id_).getAttributeNode('label').value;
    var nodes = document.querySelectorAll(`*[id^="${label}"]`);
    

    
   if (nodes.length==0)return ;
   
   
   for (let i = 0; i < nodes.length; i++) {
       
       if(nodes[i]!=document.getElementById(id_))
        findNodesDFS(nodes[i].id);}
    


}

    
function myLoop1( t ,e) {  
    var speed=document.getElementById("speed").value;

  setTimeout(function() {  
      
    
    if(t!=2){

        document.querySelector(`[line="${e-1}"]`).style.backgroundColor ="#fa7661";
        document.querySelector(`[line="${e-1}"]`).style.height ="4px";
 

        document.querySelector(`[num="${t-1}"]`).style.backgroundColor ="#fa7661";
        document.querySelector(`[num="${t-1}"]`).style.color ="white";
        document.querySelector(`[num="${t-1}"]`).style.border="4px solid #fa7661"

    }

   if(e < document.getElementsByClassName('line').length+3){
    document.querySelector(`[line="${e}"]`).style.backgroundColor ="#e7d9be";
    document.querySelector(`[line="${e}"]`).style.height ="8px";

    document.querySelector(`[num="${t}"]`).style.backgroundColor ="#f5f5f5";
     document.querySelector(`[num="${t}"]`).style.color ="#fa7661";
     document.querySelector(`[num="${t}"]`).style.border="4px solid #fa7661";
  }
   
   

       

                  
    if (t < document.getElementsByClassName('node').length+1) {           
      myLoop1(t+1,e+1);           
    }                      
  }, speed*100)
}



    


function myLoop( t ,e,nodes,lines) {  
    var speed=document.getElementById("speed").value;

  setTimeout(function() {  
    

    
    nodes[0].style.border="3px solid #fa7661";
    nodes[0].style.backgroundColor ="#fa7661";
    
    nodes[0].style.color ="white";
    nodes[0].innerHTML='R';
    if(t!=0){
         lines[t-1].style.backgroundColor ="#fa7661";
   lines[t-1].style.height ="4px";
      

 nodes[e-1].style.backgroundColor ="#fa7661";
    nodes[e-1].style.color ="white";
   nodes[e-1].style.border="4px solid #fa7661"
   // nodes[e-1].style.backgroundColor ="white";

    }
    
   lines[t].style.backgroundColor ="#e7d9be";
   lines[t].style.height ="8px";

    nodes[e].style.backgroundColor ="#f5f5f5";
    nodes[e].style.color ="#fa7661";
   nodes[e].style.border="4px solid #fa7661"
  
   //nodes[e].style.backgroundColor ="#fa7661";
   ;
  


       

                  
    if (t < document.getElementsByClassName('node').length+1) {           
      myLoop(t+1,e+1,nodes,lines);           
    }                      
  }, speed*100)
}



function delete_tree() {
    
    document.getElementById("counter").innerHTML=-1;

    nodes=document.getElementsByClassName('node');
    lines=document.getElementsByClassName('line');


    for (let i = 0; i < nodes.length; ) {
    document.getElementsByClassName('body')[0].removeChild(nodes[i]);

    
    }
    for (let i = 0; i < lines.length; ) {
    document.getElementsByClassName('body')[0].removeChild(lines[i]);
    
    }
}

