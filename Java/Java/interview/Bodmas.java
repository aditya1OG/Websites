package interview;

import java.util.Scanner;

public class Bodmas {

    // 👍NOTE: here we can use char, string, num, float, bigint, long,
    // boolean and many more

    static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int sum = num1 + num2;
        int sub = num1 - num2;
        int mul = num1 * num2;
        int div = num1 / num2;
        int mod = num1 % num2;
        System.out.println("Sum of the number is : " + sum);
        System.out.println("sub of the number is : " + sub);
        System.out.println("mul of the number is : " + mul);
        System.out.println("div of the number is : " + div);
        System.out.println("mod of the number is : " + mod);
    }
}