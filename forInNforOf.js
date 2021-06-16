var monsters= {Canada : "Sasquatch", Nepal : "Yeti", Scotland : "Loch Ness Monster"};
console.log('\nfor in used on objects\n');
for (let i in monsters){
    console.log(`country key: ${i} has value monster:  ${monsters[i]}`);
}
console.log('\n\nfor of used with arrays\n');
var faamg = ['facebook', 'amazon', 'Apple', 'Microsoft', 'Google']
for(let j of faamg){
    console.log(j)
}