package oops;

public class Overloading {
    public static void data(int a, int b) {
        System.out.println(a + b);
    }

    public static void data(String a, String b) {
        System.out.println(a + b);
    }

    public static void main(String[] args) {
        // Overloading.data(19, 22);
        // Overloading.data("aditya", " tiwari");
        data(11, 22);
        data("aditya", " tiwari");
    }
}
