package function;

import java.util.*;

public class Spread {

    public static void main(String[] args) {
        varArgs(1, "aditya", 2, 3, 4, 5, 6, 7, 8);
    }

    static void varArgs(int a, String b, int... c) {
        System.out.println(a);
        System.out.println(b);
        System.out.println(Arrays.toString(c));
    }
}
