package pattern;

public class Pattern6 {
    public static void main(String[] args) {
        pattern(5);
    }

    static void pattern(int n) {
        int i, j, k;
        for (i = n; i >= 1; i--) {
            for (j = 1; j < i; j++) {
                System.out.print(" ");
            }
            for (k = 0; k <= n - i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
