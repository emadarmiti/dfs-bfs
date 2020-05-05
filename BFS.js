  

function add_eadge(){
    var x1=Number(document.getElementById("x2").innerHTML);
    var x2=Number(document.getElementById("x1").innerHTML);
    var y1=Number(document.getElementById("y2").innerHTML);
    var y2=Number(document.getElementById("y1").innerHTML);

    if(x1!=x2 && y1!=y2){
    node2=document.elementFromPoint(x1+387, y1+23);
    node1=document.elementFromPoint(x2+387, y2+23);
    
    
    
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
    
    
    var att1 = document.createAttribute("line");      
    att1.value = '0';                        
    line.setAttributeNode(att1); 

    var att = document.createAttribute("temp");      
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
    nodes[i].style.border="3px solid #3d3d3d";
    nodes[i].style.backgroundColor ="#f5f5f5";
    
    }
    if (event.target.className!="body") {
    
    document.getElementById("x2").innerHTML = event.clientX-387;
    document.getElementById("y2").innerHTML = event.clientY-23;
    if(event.clientY!=document.getElementById("y1").innerHTML&&event.clientX!=document.getElementById("x1").innerHTML)
    add_eadge();

    }
      

}


function addNode(event) {
  
    document.getElementById("x1").innerHTML = event.clientX-387;
    document.getElementById("y1").innerHTML = event.clientY-23;

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

    if (Number(num)+1>9)newDiv.style.padding="10px 12px";

    newDiv.innerHTML=Number(num)+1+"";
    document.getElementById('counter').innerHTML=Number(num)+1;


    newDiv.style.left = event.clientX-387+"px";
    newDiv.style.top = event.clientY-23+"px";        
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

    console.log(document.body.style.width);
    


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
     
     
    document.getElementById('speed').style.marginTop="150%"
        document.getElementById('speedtext').style.marginTop="-23%"
            document.getElementById('speedtext').style.display="block";

    document.getElementById('speed').style.marginLeft="100px"
    document.getElementById('speed').style.position="absolute"
    document.getElementsByTagName('img')[0].style.display='none';
    document.getElementsByClassName('body')[0].style.cursor="auto";
    array=document.getElementsByClassName("edit");
    for (let i = 0; i < array.length; i++)array[i].style.display="none";
    array=document.getElementsByClassName("main");
    for (let i = 0; i < array.length; i++)array[i].style.display="inline";

    document.removeEventListener("mousedown", addNode);
    document.removeEventListener("mouseup", target_line);

    


}

function finish() {
    

     result_bfs=document.getElementsByClassName("result_dfs");
    for (let i = 0; i < result_bfs.length; i) {
      result_bfs[i].parentElement.removeChild(result_bfs[i])
      
    }
    document.getElementById("result_dfs").style.display="none";
    result_bfs=document.getElementsByClassName("result_bfs");
    for (let i = 0; i < result_bfs.length; i) {
      result_bfs[i].parentElement.removeChild(result_bfs[i])
      
    }
    document.getElementById("result_bfs").style.display="none";

     document.getElementById('num').innerHTML="1";
    nodes=document.getElementsByClassName("node");
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].getAttributeNode("num").value='0';
        nodes[i].getAttributeNode("flag").value='f';
        nodes[i].innerHTML= nodes[i].getAttributeNode("label").value;
        nodes[i].style.border="3px solid #3d3d3d";
        nodes[i].style.backgroundColor ='#f5f5f5';
        nodes[i].style.color ="#3d3d3d";
        
    }
    
    
    lines=document.getElementsByClassName('line');

    for (let i = 0; i < lines.length; i++) {
       lines[i].style.border="none";
       lines[i].style.backgroundColor ="#3d3d3d";
    
    }


  array=document.getElementsByClassName("main");
    for (let i = 0; i < array.length; i++) {
         if (array[i].id!="speed")array[i].style.display="inline";
        
    }
     array=document.getElementsByClassName("run");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="none";
        
    }
        document.getElementById('speed').style.marginTop="150%"
        document.getElementById('speed').style.marginLeft="100px"
        document.getElementById('speed').style.position="absolute"
 document.getElementById('speedtext').style.marginTop="-23%"
            document.getElementById('speedtext').style.display="block";
}
function bfs(){

    hideMain1() ;
   
  table1=document.getElementById('queue');
      table2=document.getElementById('visited');
      table1.style.display="block";
      table2.style.display="block";

    nodes=document.getElementsByClassName('node');
    lines=document.getElementsByClassName('line');
    for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.border="3px solid #3d3d3d";
    nodes[i].style.backgroundColor ='#f5f5f5';
     nodes[i].style.color ="#3d3d3d";
    }   
    for (let i = 0; i < lines.length; i++) {
    lines[i].style.border="none";
    lines[i].style.backgroundColor ="#3d3d3d";
    
    }
    nodes=document.getElementsByClassName('node');
    lines=document.getElementsByClassName('line');

  nodes[0].style.backgroundColor ="#f5f5f5";
    nodes[0].style.color ="#fa7661";
   nodes[0].style.border="4px solid #fa7661";

 var result = document.createElement("span");
     result.innerHTML= '0';
     result.className="result_bfs";
     document.getElementById("result_bfs").appendChild(result);

    var tr = document.createElement("tr"); 
    var td=document.createElement("td");
    td.className="current_block";
    td.innerHTML="root";
  
    var id_ = document.createAttribute("id_");      
    id_.value = '0';                        
    td.setAttributeNode(id_); 
    tr.appendChild(td);
    document.getElementById('queue_table').appendChild(tr);


     myLoop( 0,1,nodes,lines); 
  
}
    

function dfs() {
  
  hideMain() ;

    findNodesDFS('0');
    root=document.getElementsByClassName('node')[0];
    root.style.border="3px solid #fa7661";
    root.style.backgroundColor ="#fa7661";
    root.style.color ="white";
    root.innerHTML='R';

    var result = document.createElement("span");
     result.innerHTML= '0';
     result.className="result_dfs";
     document.getElementById("result_dfs").appendChild(result);

    label=root.getAttributeNode('label').value;
    var nodes = document.querySelectorAll(`*[id^="${label}"]`);

    var parent = document.createElement("p");  
    parent.className="parent";  
    parent.innerHTML="DFS(Root)";
    document.getElementById('tracking_code').appendChild(parent);
    
    
    var children = document.createElement("p");  
    children.className="children";  
    var children_text = document.createElement("span");
      children_text.innerHTML="Children :";
      children.appendChild(children_text);
    for (let i = 1; i < nodes.length; i++) {
        
    var span = document.createElement("span"); 
    span.className="child";
    span.id=`child${nodes[i].getAttributeNode('label').value}`;
    span.innerHTML=nodes[i].getAttributeNode('label').value;
    children.appendChild(span);
    } 
    document.getElementById('tracking_code').appendChild(children);



    myLoop1(2,3);

    
}

function findNodesDFS(id_) {
    
    num=document.getElementById('num').innerHTML;
    document.getElementById(id_).getAttributeNode("num").value=num;

    if(id_!='0'){
    line=document.querySelectorAll(`[temp="${id_}"]`)[0];
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

        label=document.querySelector(`[num="${t-1}"]`).getAttributeNode('label').value;
        document.getElementById(`child${label}`).className="visited";

        parent_none=document.getElementsByClassName("parent_none");
      if (parent_none.length!=0) {
      arrow=document.getElementsByClassName("fa fa-long-arrow-down");
      document.getElementById('tracking_code').removeChild(arrow[arrow.length-1]);

     document.getElementById('tracking_code').removeChild(parent_none[0]);

    }


                     childrens=document.getElementsByClassName('children');
 while(true){
          
        if (childrens.length!=0 && childrens[childrens.length-1].lastChild.className=="visited") {
            
            arrow=document.getElementsByClassName("fa fa-long-arrow-down");
            lastparent=document.getElementsByClassName('parent');
            if (arrow.length!=0)document.getElementById('tracking_code').removeChild(arrow[arrow.length-1]);
            document.getElementById('tracking_code').removeChild(lastparent[lastparent.length-1]);

             document.getElementById('tracking_code').removeChild(childrens[childrens.length-1]);

          
          
          
       }
       else
       { break;}
 }

        }
    
    

   if(e < document.getElementsByClassName('line').length+3){

        
        label=document.querySelector(`[num="${t}"]`).getAttributeNode('label').value;
        
        var arrow = document.createElement("h1"); 
            arrow.className="fa fa-long-arrow-down";
            document.getElementById('tracking_code').appendChild(arrow);
        var nodes = document.querySelectorAll(`*[id^="${label}"]`);
        var parent = document.createElement("p");  
        parent.className="parent"; 
        parent.id=label; 
        parent.innerHTML=`DFS(${label})`;
        document.getElementById('tracking_code').appendChild(parent);
        document.getElementById(`child${label}`).className="current";
        if(nodes.length!=0){

          var children = document.createElement("p");  
          children.className="children";
          
          var children_text = document.createElement("span");
          children_text.innerHTML="Children :";
          children.appendChild(children_text);

            for (let i = 0; i < nodes.length; i++) {
        
            var span = document.createElement("span"); 
            span.className="child";
            span.className+=` child${label}`;
            span.id+=`child${nodes[i].getAttributeNode('label').value}`;
            span.innerHTML=nodes[i].getAttributeNode('label').value;
            children.appendChild(span);
                              } 
            document.getElementById('tracking_code').appendChild(children);

            

        }
        else{
          parent.className="parent_none";
          
        

        }





    document.querySelector(`[line="${e}"]`).style.backgroundColor ="#e7d9be";
    document.querySelector(`[line="${e}"]`).style.height ="8px";
    document.querySelector(`[num="${t}"]`).style.backgroundColor ="#f5f5f5";
    document.querySelector(`[num="${t}"]`).style.color ="#fa7661";
    document.querySelector(`[num="${t}"]`).style.border="4px solid #fa7661";
    
    
    var result = document.createElement("span");
     result.innerHTML=  document.querySelector(`[num="${t}"]`).getAttributeNode('label').value;
     result.className="result_dfs";
     document.getElementById("result_dfs").appendChild(result);

    
  }
   
   

       

                  
    if (t < document.getElementsByClassName('node').length+1) {           
      myLoop1(t+1,e+1);           
    } 
    else{
       document.getElementById('result_dfs').style.display='block';
       childrens=document.getElementsByClassName('children');
            lastparent=document.getElementsByClassName('parent');
     arrow=document.getElementsByClassName("fa fa-long-arrow-down");
              for (let i = 0; i < arrow.length; i) {
             document.getElementById('tracking_code').removeChild(0);
                
              }
            for (let i = 0; i < childrens.length; i) {
             
            document.getElementById('tracking_code').removeChild(lastparent[i]);

             document.getElementById('tracking_code').removeChild(childrens[i]);

            }
           
    }                   
  }, speed*100)
}

function myLoop( t ,e,nodes,lines) {  
    var speed=document.getElementById("speed").value;

  setTimeout(function() {  
   
  if (t==0) {
     
    
    block=document.querySelector(`[id_="${0}"]`);
     block.className="visited_block";
    document.getElementById("visited_table").appendChild(block.parentElement);
   
    children=document.querySelectorAll(`*[id^="0"]`);
    for (let i = 1; i < children.length; i++) {

       var tr = document.createElement("tr"); 
        var td=document.createElement("td");
        td.innerHTML=children[i].getAttributeNode('label').value;
  
        var id_ = document.createAttribute("id_");      
        id_.value = children[i].getAttributeNode('label').value;                        
        td.setAttributeNode(id_); 
        tr.appendChild(td);
        document.getElementById('queue_table').appendChild(tr);
      
    }

    nodes[0].style.border="3px solid #fa7661";
    nodes[0].style.backgroundColor ="#fa7661";
    
    nodes[0].style.color ="white";
    nodes[0].innerHTML='R';
    }
    if(t!=0){
  
    
     lines[t-1].style.backgroundColor ="#fa7661";
     lines[t-1].style.height ="4px";
      

      nodes[e-1].style.backgroundColor ="#fa7661";
      nodes[e-1].style.color ="white";
      nodes[e-1].style.border="4px solid #fa7661"

      block=document.querySelector(`[id_="${e-1}"]`);
      block.className="visited_block";
       document.getElementById("visited_table").appendChild(block.parentElement);

        children=document.querySelectorAll(`*[id^="${e-1}"]`);
      if (children.length>0) {
      
    
      for (let i = 0; i < children.length; i++) {

       var tr = document.createElement("tr"); 
        var td=document.createElement("td");
        td.innerHTML=children[i].getAttributeNode('label').value;
  
        var id_ = document.createAttribute("id_");      
        id_.value = children[i].getAttributeNode('label').value;                        
        td.setAttributeNode(id_); 
        tr.appendChild(td);
        document.getElementById('queue_table').appendChild(tr);
      
    }

    }
  

    }
    
    if(e<document.getElementsByClassName('node').length){
   lines[t].style.backgroundColor ="#e7d9be";
   lines[t].style.height ="8px";

    nodes[e].style.backgroundColor ="#f5f5f5";
    nodes[e].style.color ="#fa7661";
   nodes[e].style.border="4px solid #fa7661";

     var result = document.createElement("span");
    result.innerHTML= e;
         result.className="result_bfs";

    document.getElementById("result_bfs").appendChild(result);
    block=document.querySelector(`[id_="${e}"]`);
    block.className="current_block";
    }


       

                  
    if (t < document.getElementsByClassName('node').length-1) {           
      myLoop(t+1,e+1,nodes,lines);           
    }
    else{

      table1=document.getElementById('queue');
      table2=document.getElementById('visited');
      table1.style.display="none";
      table2.style.display="none";
    document.getElementById('result_bfs').style.display='block';
    var table = document.getElementsByTagName("tr");
  for (let i = 0; i < table.length; i) {
   
   table[i].parentElement.removeChild(table[i]);
    
  }
    }
    
            
  }, speed*100)
}



function delete_tree() {
    
    document.getElementById("counter").innerHTML=-1;
    document.getElementById("num").innerHTML=1;
    nodes=document.getElementsByClassName('node');
    lines=document.getElementsByClassName('line');


    for (let i = 0; i < nodes.length; ) {
    document.getElementsByClassName('body')[0].removeChild(nodes[i]);

    
    }
    for (let i = 0; i < lines.length; ) {
    document.getElementsByClassName('body')[0].removeChild(lines[i]);
    
    }
}

function hideMain() {
    array=document.getElementsByClassName("main");
    for (let i = 0; i < array.length; i++) {
          if (array[i].id!="speed")array[i].style.display="none";
        
    }
     array=document.getElementsByClassName("dfs");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="block";
        
    }
     document.getElementById('speed').style.marginLeft="30%"
    document.getElementById('speed').style.marginTop="185%"
    document.getElementById('speedtext').style.marginTop="183%"
}
function hideMain1() {
    array=document.getElementsByClassName("main");
    for (let i = 0; i < array.length; i++) {
          if (array[i].id!="speed")array[i].style.display="none";
        
    }
     array=document.getElementsByClassName("bfs");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="block";
        
    }
    document.getElementById('speed').style.marginLeft="30%"
    document.getElementById('speed').style.marginTop="185%"
    document.getElementById('speedtext').style.marginTop="183%"
}