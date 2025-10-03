void main() {
  var myMap = {
    'name': 'Deon',
    'age': 23,
    'IsStudent': true
  };
  print(myMap);
  print(myMap['name']);
  print(myMap['age']);
  print(myMap['IsStudent']);
  print(myMap.length);
  print(myMap.keys);
  print(myMap.values);
  print(myMap.isEmpty);
  print(myMap.isNotEmpty);
  myMap['name'] ='Deon';
  print(myMap);
  myMap.remove('name');
   print(myMap);

   myMap['name']:'smith';
   print(myMap);

}