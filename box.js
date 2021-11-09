AFRAME.registerComponent("boxes",{
 schema:{
  height:{default:"number",default:3},
  width:{default:"number",default:3},
  depth:{default:"number",default:3},  
 },
 init:function(){
  for(var i=0;i<20;i++){
   var box = document.createElement("a-entity")
   box.setAttribute("id","box"+i);
   posX = Math.random()*200-100;
   posY = 1.5;
   posZ = Math.random()*200-100;

   position = {x:posX,y:posY,z:posZ}
   box.setAttribute("position",position)
   box.setAttribute("geometry",{
    primitive:"box",
    height:this.data.height,
    width:this.data.width,
    depth:this.data.depth   
   })
   box.setAttribute("material",{
    src:"./images/boxtexture1.jpg",
    repeat:"1 1 1"   
   })
   box.setAttribute("static-body",{})

   var sceneE1 = document.querySelector("#scene")
   sceneE1.appendChild(box)
  }   
 }   
})