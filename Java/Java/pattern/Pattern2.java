package pattern;

public class Pattern2 {
    public static void main(String[] args) {
        pattern(5);
    }

    static void pattern(int n) {
        for (int row = 1; row <= n; row++) {
            for (int col = n; col >= row; col--) { // pt
                System.out.print("* ");

            }
            System.out.println();
        }
    }
}
