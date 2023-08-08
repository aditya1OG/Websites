package function;

import java.util.Scanner;

public class TypeCasting {
    public static void main(String[] args) {
        Scanner Sc = new Scanner(System.in);
        // int a = Sc.nextFloat();
        // it will give error
        // bcz float is greater than integer

        // float a = Sc.nextInt();
        // System.out.println(a);
        // not getting error bcz float is greater than int

        // int num = (int) (12.23f); // change the float number into the integer
        // System.out.println(num);

        // int c = 257;
        // byte b = (byte) (c); // byte value is 256
        // // it is like 257 % 256 = 1
        // System.out.println(b);

        // int a = 40;
        // int b = 50;
        // int c = 100;
        // int d = (a * b) / c;
        // System.out.println(d);

        // int a = 'a';
        // int b = 'A';
        // System.out.println(a);// print unicode value
        // System.out.println(b);// print unicond value
    }

}
