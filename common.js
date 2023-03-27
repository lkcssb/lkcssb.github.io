function getParaValueFromUrl(theName) {
	var reg = new RegExp("(^|&)" + theName + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return decodeURI(r[2]);
	} else {
		return null;
	}
}

function isVehicleNumber(vehicleNumber) {
	var result = false;
	if (vehicleNumber.length == 7){
		var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
		result = express.test(vehicleNumber);
	}
	return result;
}

function checkIsMobile(theStr) {
	var returnpass = false;
	if (theStr
			.match(/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(14[0-9]{1}))+\d{8})$/)) {
		returnpass = true;
	}
	return returnpass;
}

function checkNumber(numBer) {
	var returnpass = false;
	if (numBer.match(/^[0-9]*$/)) {
		returnpass = true;
	}
	return returnpass;
}

function checkIsMailAddress(mailStr) {
	var returnpass = false;
	if (mailStr
			.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
		returnpass = true;
	}
	return returnpass;
}

function checkIsIDCard(idCarStr) {
	var returnpass = false;
	if (idCarStr.match(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/)) {
		returnpass = true;
	}
	return returnpass;
}

function checkIsValidPwd(pwd) {
	var returnpass = false;
	if (pwd.match(/^[0-9a-zA-Z]*$/g)) {
		returnpass = true;
	}
	return returnpass;
}
/**
 * 只能输入数字
 */
function onlyNumber(obj) {
	obj.value = obj.value.replace(/[^\d\.]+/g, '');
}
function checkDate(sid, eid) {
	var startDate = document.getElementById(sid).value;
	var endDate = document.getElementById(eid).value;
	if (startDate != null && startDate != "" && endDate != null
			&& endDate != "") {
		if (startDate > endDate) {
			alert("开始时间不能大于结束时间!");
			return false;
		}
	}
	return true;
}

function isUndefined(tmp) {
	if (typeof (tmp) == "undefined") {
		return true;
	} else {
		return false;
	}
}

function isEmpty(tmp) {
	if ($.trim(tmp) == "") {
		return true;
	} else {
		return false;
	}
}
function isNull(arg1) {
	return !arg1 && arg1 !== 0 && typeof arg1 !== "boolean" ? true : false;
}

function isCanNotAccess(tmp) {
	if (isUndefined(tmp) || isEmpty(tmp) || isNull(tmp)) {
		return true;
	} else {
		return false;
	}
}

function formatDateToStr(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;
	var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime
			.getDate();
	var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime
			.getHours();
	var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes()
			: datetime.getMinutes();
	var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds()
			: datetime.getSeconds();
	return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":"
			+ second;
}

function getDateMonthFirstDateStr(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;
	var date = "01";
	return year + "-" + month + "-" + date;

}
function getDateMonthLastDateStr(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;

	var day = new Date(year, month, 0);
	return year + "-" + month + "-" + day.getDate();

}
function addMonth(theTime, num) {
	num = parseInt(num, "10");
	var datetime = new Date();
	datetime.setTime(theTime);
	var sYear = datetime.getFullYear();
	var sMonth = datetime.getMonth() + 1;
	var sDay = datetime.getDate();

	var eYear = sYear;
	var eMonth = sMonth + num;
	var eDay = sDay;
	while (eMonth > 12) {
		eYear++;
		eMonth -= 12;
	}
	var eDate = new Date(eYear, eMonth - 1, eDay);
	while (eDate.getMonth() != eMonth - 1) {
		eDay--;
		eDate = new Date(eYear, eMonth - 1, eDay);
	}
	return eDate;
}

function addDayTimes(theTime, num) {
	num = parseInt(num, "10");
	return theTime + 24 * 60 * 60 * 1000 * num;
}

function getDateWeekMondayStr(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var day = datetime.getDay();
	var oneDayLong = 24 * 60 * 60 * 1000;
	var mondayTime = time - (day - 1) * oneDayLong;

	return formatDateToStrOnlyDay(mondayTime);

}
function getDateWeekSundayStr(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var day = datetime.getDay();
	var oneDayLong = 24 * 60 * 60 * 1000;
	var sundayTime = time + (7 - day) * oneDayLong;

	return formatDateToStrOnlyDay(sundayTime);

}

function formatDateToStrOnlyDay(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;
	var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime
			.getDate();
	var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime
			.getHours();
	var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes()
			: datetime.getMinutes();
	var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds()
			: datetime.getSeconds();
	return year + "-" + month + "-" + date;
}

function getDateTimeFromStr(str) {
	var theStrDate = str.split(" ")[0];
	var theStrTime = str.split(" ")[1];

	var year = theStrDate.split("-")[0];
	var month = theStrDate.split("-")[1];
	var day = theStrDate.split("-")[2];
	var hour = theStrTime.split(":")[0];
	var minute = theStrTime.split(":")[1];
	var second = theStrTime.split(":")[2];

	var datetime = new Date();
	datetime.setFullYear(year);
	datetime.setMonth(month - 1);
	datetime.setDate(day);
	datetime.setHours(hour);
	datetime.setMinutes(minute);
	datetime.setSeconds(second);
	return datetime.getTime();
}

function getDateTimeFromYYYYMMDDStr(str) {
	var year = str.split("-")[0];
	var month = str.split("-")[1];
	var day = str.split("-")[2];
	var datetime = new Date();
	datetime.setFullYear(year);
	datetime.setMonth(month - 1);
	datetime.setDate(day);
	datetime.setHours(0);
	datetime.setMinutes(0);
	datetime.setSeconds(0);
	return datetime.getTime();
}

function formatDateToStrWithoutSecend(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;
	var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime
			.getDate();
	var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime
			.getHours();
	var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes()
			: datetime.getMinutes();
	var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds()
			: datetime.getSeconds();
	return year + "-" + month + "-" + date + " " + hour + ":" + minute;
}


function formatDateWithoutSecend(time) {
	var datetime = new Date(time);
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;
	var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime
			.getDate();
	var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime
			.getHours();
	var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes()
			: datetime.getMinutes();
	var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds()
			: datetime.getSeconds();
	return year + "-" + month + "-" + date + " " + hour + ":" + minute;
}

function formatDateToStrNoYear(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1)
			: datetime.getMonth() + 1;
	var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime
			.getDate();
	var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime
			.getHours();
	var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes()
			: datetime.getMinutes();
	var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds()
			: datetime.getSeconds();
	return month + "-" + date + " " + hour + ":" + minute;
}

function formatDateToHourMinute(time) {
	var datetime = new Date();
	datetime.setTime(time);
	var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime
			.getHours();
	var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes()
			: datetime.getMinutes();
	return "" + hour + ":" + minute;
}

function isNotBlank(theVal) {
	if ($.trim(theVal) != "") {
		return true;
	} else {
		return false;
	}
}
function isBlank(theVal) {
	if ($.trim(theVal) == "") {
		return true;
	} else {
		return false;
	}
}
function convertUrlParamStrToJSON(paramStr) {
	var paramItems = new Array();
	if (isNotBlank(paramStr) && paramStr.indexOf("?") == 0) {
		paramItems = paramStr.substring(1, paramStr.length).split('&');
	} else {
		paramItems = paramStr.split('&');
	}
	var resultJson = {};
	for (var i = 0; i < paramItems.length; i++) {
		var oneItemStr = paramItems[i].split('=');
		resultJson[oneItemStr[0]] = oneItemStr[1];
	}
	return resultJson;
}

function httpEncodeSpecialChar(sStr) {
	return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(
			/\'/g, '%27').replace(/\//g, '%2F');
}

function encryptedFromAndPost(formId,getRSAKeyUrl,postUrl,callback){
	$.getJSON(getRSAKeyUrl,
	function(json) {
		if(json.resultCode==200){
			var formJSON = convertUrlParamStrToJSON($("#"+formId).serialize()); //自动将form表单封装成json
			alert(decodeURI(JSON.stringify(formJSON)));

			var encrypt = new JSEncrypt();
			encrypt.setPublicKey(json.keyword);
			//console.log(json.keyword);

			var theEncrptBodyStr=encrypt.encrypt(decodeURI(JSON.stringify(formJSON)));
			alert(theEncrptBodyStr);

			$.ajax({ 
				type:"post", 
				url:postUrl, 
				data:httpEncodeSpecialChar(theEncrptBodyStr),
				contentType: "application/json; charset=utf-8",
				dataType: 'json',//返回数据类型   
				success:function(jsonData,textStatus){ 
					callback(jsonData);
				},
				error:function(){ 
					alert("操作异常");
				} 
			}); 
		}
	});	
}

function encryptedJSONAndPost(theJSON,getRSAKeyUrl,postUrl,callback){
	$.getJSON(getRSAKeyUrl,
	function(json) {
				if(json.resultCode==200){
					var encrypt = new JSEncrypt();
					encrypt.setPublicKey(json.keyword);
					//alert(json.keyword);

					var theEncrptBodyStr=encrypt.encrypt(JSON.stringify(theJSON));
					/*if(postUrl.indexOf("postFetchWechatUserInfo")>0){
						alert(JSON.stringify(theJSON));
						$("#carInfo").val(theEncrptBodyStr);
					}**/

					$.ajax({ 
						type:"post", 
						url:postUrl, 
						data:httpEncodeSpecialChar(theEncrptBodyStr),
						contentType: "application/json; charset=utf-8",
						dataType: 'json',//返回数据类型   
						success:function(jsonData,textStatus){ 
							callback(jsonData);
						},
						error:function(){ 
							alert("操作异常-");
						} 
					}); 
				}
	});		
}

function getJsonWithHeaderToken(getUrl,paraJson,callback){
	$.ajax({ 
		type: "get", 
		url: getUrl, 
		data: paraJson,
		headers:{"Authorization":"Bearer " + store.get(system_config.HeadesToken)},
		contentType: "application/json;charset=utf-8",
		dataType: 'json',//返回数据类型   
		success:function(jsonData, textStatus){ 
			callback(jsonData);
		},
		error:function(jsonData,textStatus,errorThrown){ 
			alert("状态异常，请重新进入");
		} 
	});		
}

function deleteJsonWithHeaderToken(deleteUrl,paraJson,callback){
	$.ajax({ 
		type: "delete", 
		url: deleteUrl, 
		data: paraJson,
		headers:{"Authorization":"Bearer " + store.get(system_config.HeadesToken)},
		contentType: "application/json;charset=utf-8",
		dataType: 'json',//返回数据类型   
		success:function(jsonData, textStatus){ 
			callback(jsonData);
		},
		error:function(jsonData,textStatus,errorThrown){ 
			// alert("异常"+errorThrown);
		} 
	});		
}

function putJsonWithHeaderToken(putUrl,paraJson,callback){
	$.ajax({ 
		type:"put", 
		url:putUrl, 
		data:JSON.stringify(paraJson),
		headers:{"Authorization":"Bearer " + store.get(system_config.HeadesToken)},
		contentType: "application/json; charset=utf-8",
		dataType: 'json',//返回数据类型   
		success:function(jsonData,textStatus){ 
			callback(jsonData);
		},
		error:function(jsonData){ 
			alert("状态异常，请重新进入");
		} 
	});		
}

function postJsonWithHeaderToken(postUrl,paraJson,callback){
	$.ajax({ 
		type:"post", 
		url:postUrl, 
		data:JSON.stringify(paraJson),
		headers:{"Authorization":"Bearer " + store.get(system_config.HeadesToken)},
		contentType: "application/json; charset=utf-8",
		dataType: 'json',//返回数据类型   
		success:function(jsonData,textStatus){ 
			callback(jsonData);
		},
		error:function(jsonData){ 
			alert("状态异常，请重新进入")
		} 
	});		
}

function postFileWithHeaderToken(postUrl,formData,callback){
	$.ajax({ 
		type:"post", 
		url:postUrl, 
	    cache: false,
		headers:{"accessToken":store.get(system_config.admin_access_token)},
	    data: formData,
	    processData: false,
	    contentType: false,
		success:function(jsonData,textStatus){ 
			callback(jsonData);
		},
		error:function(){ 
			alert("状态异常，请重新进入");
		} 
	});		
}

function postJson(postUrl, paraJson, callback) {
    $.ajax({
        type: "post",
        url: postUrl,
        data: JSON.stringify(paraJson),
        contentType: "application/json; charset=utf-8",
        dataType: 'json', //返回数据类型   
        success: function(jsonData, textStatus) {
            callback(jsonData);
        },
        error: function() {
            //            alert("异常"+postUrl);
        }
    });
}
function stateNumber(oneItem){
	if(oneItem==0){
		state="待审批"
		imgClass="state-ing"
	}else if(oneItem==1){//待家长审核
		state="待家长审核"
		imgClass="state-ing"
	}else if(oneItem==2){
		state="待工作室老师审核"
		imgClass="state-ing"
	}else if(oneItem==3){
		state="家长已拒绝"
		imgClass="state-fail"
	}else if(oneItem==4){
		state="家长已通过"
		imgClass="state-pass"
	}else if(oneItem==5){
		state="家长已通过，班主任审核中"
		imgClass="state-ing"
	}else if(oneItem==6){
		state="工作室老师已通过"
		imgClass="state-pass"
	}else if(oneItem==10){
		state="工作室老师已拒绝"
		imgClass="state-fail"
	}else if(oneItem==11){
		state="工作室老师已通过班主任审核中"
		imgClass="state-ing"
	}else if(oneItem==15){
		state="班主任已拒绝"
		imgClass="state-fail"
	}else if(oneItem==16){
		state="班主任已通过"
		imgClass="state-pass"
	}else if(oneItem==17){
		state="班主任已通过系主任审核中"
		imgClass="state-ing"
	}else if(oneItem==21){
		state="系部审核人已拒绝"
		imgClass="state-fail"
	}else if(oneItem==22){
		state="系部审核人已通过"
		imgClass="state-pass"
	}else if(oneItem==23){ 
		state="系主任已通过，学生处审核中"
		imgClass="state-ing"
	}else if(oneItem==27){
		state="学生处审核人已拒绝"
		imgClass="state-fail"
	}else if(oneItem==28){
		state="学生处审核人已通过"
		imgClass="state-pass"
	}else if(oneItem==29){
		state="家长已通过，宿管审核中"
		imgClass="state-ing"
	}else if(oneItem==30){
		state="待宿管审批"
		imgClass="state-ing"
	}else if(oneItem==31){
		state="宿管已同意"
		imgClass="state-pass"
	}else if(oneItem==32){
		state="宿管已拒绝"
		imgClass="state-fail"
	}else if(oneItem==33){
		state="成人留宿自动同意"
		imgClass="state-pass"
	}

}
function stateNumber2(oneItem){
	    if(oneItem==0){
	        state="待审批"
	        imgClass="state-ing"
	    }else if(oneItem==1){//待家长审核
	        state="待审批"
	        imgClass="state-ing"
	    }else if(oneItem==2){
	        state="待审批"
	        imgClass="state-ing"
	    }else if(oneItem==3){
	        state="已拒绝"
	        imgClass="state-fail"
	    }else if(oneItem==4){
	        state="已通过"
	        imgClass="state-pass"
	    }else if(oneItem==5){
	        state="审核中"
	        imgClass="state-ing"
	    }else if(oneItem==6){
	        state="已通过"
	        imgClass="state-pass"
	    }else if(oneItem==10){
	        state="已拒绝"
	        imgClass="state-fail"
	    }else if(oneItem==11){
	        state="审核中"
	        imgClass="state-ing"
	    }else if(oneItem==15){
	        state="已拒绝"
	        imgClass="state-fail"
	    }else if(oneItem==16){
	        state="已通过"
	        imgClass="state-pass"
	    }else if(oneItem==17){
	        state="审核中"
	        imgClass="state-ing"
	    }else if(oneItem==21){
	        state="已拒绝"
	        imgClass="state-fail"
	    }else if(oneItem==22){
	        state="已通过"
	        imgClass="state-pass"
	    }else if(oneItem==23){
	        state="审核中"
	        imgClass="state-ing"
	    }else if(oneItem==27){
	        state="已拒绝"
	        imgClass="state-fail"
	    }else if(oneItem==28){
	        state="已通过"
	        imgClass="state-pass"
	    }else if(oneItem==29){ //家长已通过，宿管审核中
		      state="审核中"
		      imgClass="state-ing"
		  }else if(oneItem==30){
		      state="待审批"
		      imgClass="state-ing"
		  }else if(oneItem==31){
			    state="已通过"
			    imgClass="state-pass"
			}else if(oneItem==32){
				  state="已拒绝"
				  imgClass="state-fail"
			}else if(oneItem==33){ // 自动通过
		      state="已通过"
		      imgClass="state-pass"
		  }
	}
	function stateNumber3(oneItem){
		  if(oneItem==0){
		        state="待审批"
		        imgClass="state-ing"
		  }else if(oneItem==23){//待家长审核
		        state="已通过"
		        imgClass="state-pass"
		  }else if(oneItem==24){
		        state="已拒绝"
		        imgClass="state-fail"
		  }else if(oneItem==34){
			    state="未处理"
			    imgClass="state-fail"
			}else if(oneItem==33){
				    state="已完成"
				    imgClass="state-pass"
			}
	}

function applyState(oneItem){
	if(oneItem==0){
		state="待审批"
		imgClass="state-ing"
	}else if(oneItem==6){
		state="已通过"
		imgClass="state-pass"
	}else if(oneItem==7){
		state="已拒绝"
		imgClass="state-fail"
	}
}
	function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
      }
      return(false);
}