package interview;

import java.util.Scanner;

public class Fibonnaci {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        System.out.println("Enter the number: ");
        int a = 0;
        int b = 1;

        for (int i = 2; i < num; i++) {
            int temp = b;
            b = a + b;
            a = temp;
            System.out.println(b);
        }
    }
}
