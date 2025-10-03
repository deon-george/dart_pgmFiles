import 'dart:io';

void main() {
  stdout.writeln('What is your name?');
  String? name = stdin.readLineSync(); // Fixed method name and added nullable type
  print('My name is $name');
}
