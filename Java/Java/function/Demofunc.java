package function;

public class Demofunc {
    public static void main(String[] args) {
        int a = 10;
        int b = 39;
        int c = a + b;
        System.out.println(c);
        // System.out.println(name); //can not get the value outside the function scope
    }

    static void func(String name) {
        // we can not get the value outside the scope;
        name = "adiyta";
        System.out.println(name);
    }
}
