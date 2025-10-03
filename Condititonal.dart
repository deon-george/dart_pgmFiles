import 'dart:io';

void main() {
  // Check if a number is positive or negative
  stdout.writeln('Enter a number:');
  int? num = int.tryParse(stdin.readLineSync() ?? '');
  if (num == null) {
   print('Invalid input. Please enter a valid number.');}
   else if (num > 0) {
    print('The number is positive.');
  } else if (num < 0) {
    print('The number is negative.');
  } else {
    print('The number is zero.');
  }

  // Check voting eligibility
  stdout.writeln('\nEnter your age:');
  int? age = int.tryParse(stdin.readLineSync() ?? '');
  if (age == null) {
   print('Invalid input. Please enter a valid age.');}
  else if (age >= 18) {
    print('You are eligible to vote.');
  } else {
    print('You are not eligible to vote.');
  }

  // Determine grade based on marks
  stdout.writeln('\nEnter your marks:');
  int? marks = int.tryParse(stdin.readLineSync() ?? '');
  if (marks == null) {
    print('Invalid input. Please enter valid marks.');}
  else if (marks >= 90) {
    print('Grade: A');
  } else if (marks >= 80) {
    print('Grade: B');
  } else if (marks >= 70) {
    print('Grade: C');
  } else if (marks >= 60) {
    print('Grade: D');
  } else {
    print('Fail');
  }
}
