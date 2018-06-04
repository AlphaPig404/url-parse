module.exports = function urlParse(){
	let url = window.location.search;
	let obj = {};
	let reg = /[?&][^?&]+=[^?&]+/g;
	//[?&]匹配？或&，[^?&]匹配非？的字符，+表示多个，=匹配=
	let arr = url.match(reg);
	// ['?id=12345','&a=b']
	if (arr) {
		arr.forEach((item)=>{
			let tempArr = item.substring(1).split('=');
			let key = decodeURIComponent(tempArr[0]);
			let val = decodeURIComponent(tempArr[1]);
			obj[key] = val;
		})
	}
	return obj;
}