package pattern;

public class Pattern11 {
    public static void main(String[] args) {
        Pattern(5);
    }

    static void Pattern(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("");
            }
            for (int k = 0; k <= n - i; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // for (int i = 1; i <= n; i++) {
        // for (int j = 1; j <= i; j++) {
        // System.out.print(" ");
        // }
        // for (int k = 0; k <= n - i; k++) {
        // System.out.print("*");
        // }
        // System.out.println();
        // }
    }
}
