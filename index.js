function theBeatlesPlay(musicians,instruments){
  var instrumentsThatMusiciansPlay= []
  for(let i= 0; i<musicians.length; i++){
   var toInsert= musicians[i]+' plays '+ instruments[i]
   instrumentsThatMusiciansPlay.push(toInsert)
  }
  return instrumentsThatMusiciansPlay
}