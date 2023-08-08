package function;

public class Shadowing {
    static int num = 10;

    // we can get the value evarywhere in the program
    public static void main(String[] args) {
        System.out.println(num); // for this the value is 10
        int num = 20;
        System.out.println(num); // howmany time we will print num here the value is always be 20 for this scope;
        func();
    }

    static void func() {
        System.out.println(num); // for this the value is 10
    }
}
