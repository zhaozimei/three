function calculate_median(arr) {
  function sortNumber(a,b){
		return a - b;
	}
	var brr = [];
	var num = 0;
	for(var i=0; i<arr.length; i++){
		if((i%2)!=0){
			brr.push(arr[i])
		}
	}
	var a = Math.floor(brr.length/2)
	brr.sort(sortNumber)
	
	if(brr.length%2 == 0){
	     num = (brr[a]+brr[a-1])/2
	}else{
		 num = brr[a]
	}
	return num;

module.exports = calculate_median;
