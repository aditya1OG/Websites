package function;

import java.util.*;

// public class Functions {
// // return the value(int t)

// public static int sum(int num1, int num2) {
// int ans = num1 + num2;
// return ans;
// }

// public static void main(String[] args) {
// Scanner sc = new Scanner(System.in);
// System.out.println("Enter the first number: ");
// int n1 = sc.nextInt();
// System.out.println("Enter the second number: ");
// int n2 = sc.nextInt();
// int sum = sum(n1, n2);
// System.out.println(n1 + " + " + n2 + " = " + sum);
// }

// }

// 👍second method

// public class Functions {
// int c;

// void add(int x, int y) {
// c = x + y;
// }

// public static void main(String[] args) {
// int a, b;
// Scanner sc = new Scanner(System.in);
// System.out.println("Enter the first number: ");
// a = sc.nextInt();
// System.out.println("Enter the second number: ");
// b = sc.nextInt();
// Functions obj = new Functions();
// obj.add(a, b);
// System.out.println("Addition of two numbers is : " + obj.c);
// }
// }

// third method;
public class Functions {

    public static int add(int a, int b) {
        int sum = a + b;
        return sum;
    }

    public static void main(String[] args) {
        int result = add(12, 14);
        System.out.println(result);
    }
}