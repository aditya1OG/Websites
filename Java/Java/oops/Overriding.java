package oops;

class first {
    static void msg() {
        System.out.println("this is first overriding");
    }

}

class second extends first {
    static void msg() {
        System.out.println("this is second overriding");
    }
}

public class Overriding {
    public static void main(String[] args) {

        first.msg(); // not create obj bcz of static method;
        second.msg();
    }
}