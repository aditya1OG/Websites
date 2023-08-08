package function;

public class FuncString {
    public static void main(String[] args) {
        String message = greet();
        System.out.println("Message:" + message);
    }

    static String greet() {
        String greeting = "Good Morning";
        return greeting;
    }
}
