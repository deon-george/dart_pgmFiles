void main(){
  var myList = [1,2,3,4,5];
  print(myList);
print(myList[0]);
print(myList[1]);
myList[0]=41;
print(myList);
var emptyList =[];
print(emptyList);
emptyList.add(41) ;
print(emptyList);
emptyList.addAll([1,2,3]);
print(emptyList);
myList.insert(3,900);
print(myList);
myList.remove(900);
print(myList);
var mixedList={1,2,3,"john",true};
print(mixedList);
mixedList.remove("john");
mixedList.removeAll({1,2,3});
print(mixedList);
}