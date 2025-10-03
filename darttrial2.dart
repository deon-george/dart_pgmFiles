import 'dart:io';
void main()
{
  stdout.writeln('what is your father name?');
  String? name =stdin.readLineSync();
  print('my father name is $name');
}