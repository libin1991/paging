var Mock = require('mockjs')
var fs =require('fs')
var Random = Mock.Random
var arr=[]
for(let i=0;i<40000;i++){
	let name=Random.cname();
	let age=Mock.mock({"age|1-100": 100 }).age
	let home=Random.province();
	let sex=Random.pick(["男","女"]);
	let education=Random.pick(["初中","高中","专科","本科"]);
	arr.push({"id":i,name,age,home,sex,education})
}
fs.writeFile("db.json", JSON.stringify( {"student": arr}),function(){
	console.log("done")
})