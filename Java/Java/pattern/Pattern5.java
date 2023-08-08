package pattern;

public class Pattern5 {
    public static void main(String[] args) {
        pattern(5);
    }

    static void pattern(int n) {
        // for (int i = 0; i < 2 * n; i++) {
        // int totalCol = i > n ? 2 * n - i : i;
        // int Space = n - totalCol;
        // for (int j = 0; j < Space; j++) {
        // System.out.print(" ");
        // }
        // for (int k = 0; k < totalCol; k++) {
        // System.out.print("* ");
        // }
        // System.out.println();
        // }

        // 👍 or

        for (int i = n; i >= 1; i--) {
            for (int j = 1; j < i; j++) {
                System.out.print(" ");
                // this space is much imp
            }
            for (int k = 0; k <= n - i; k++) {
                System.out.print("* ");
                // this space is much imp
            }
            System.out.println();
        }
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(" ");
                // this space is much imp
            }
            for (int k = 1; k <= n - i; k++) {
                System.out.print("* ");
                // this space is much imp
            }
            System.out.println();
        }
    }
}
