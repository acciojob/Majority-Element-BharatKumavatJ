// arr = array of numbers
function major(nums)
{
  //your code here
  var ele;
  var maj = 0;
  for(var i in nums){
      if(maj == 0){
          ele = nums[i];

      }
      if(ele == nums[i]){
          maj++;
      }else{
          maj--;
      }
  }
  return ele;
}
module.exports=major;
