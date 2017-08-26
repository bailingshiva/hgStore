/*--------------设置alert--------------*/
export function Alert(text){
  var alPlan=$("<div class='alplan'></div>");
  var alplanbox=$("<div class='alplan-box'></div>");
  var alplantitle=$("<div class='alplan-title'>提示信息</div>");
  var alplantext=$("<div class='alplan-text'>"+text+"</div>");
  var alplanbtn=$("<div class='alplan-btn'><span onclick='alertremove()'>确定</span></div>");
  alPlan.append(alplanbox);
  alplanbox.append(alplantitle);
  alplanbox.append(alplantext);
  alplanbox.append(alplanbtn);
  $("body").append(alPlan);
  setDivCenter(alplanbox);
}
function alertremove(){
  $(".alplan").remove();
}
/*弹出框居中*/
export function setDivCenter(divName,seheight){
  var seth=$(divName).outerHeight();
  if(seheight!=null){
    seth=seheight;
  }
  var top = ($(window).height() - seth)/2;
  var left = ($(window).width() - $(divName).outerWidth())/2;
  $(divName).css( { position : 'absolute', 'top':top , 'left':left} ).show();
}
