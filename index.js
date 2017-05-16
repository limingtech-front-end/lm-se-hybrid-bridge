var calcMethod =require('lm-ut-calc-platform-method')
var nativeBridge =require('lm-na-bridge')
var wechatBridge =require('lm-th-wx-bridge')



module.exports=calcMethod({
	native:nativeBridge,
	wechat:wechatBridge
})