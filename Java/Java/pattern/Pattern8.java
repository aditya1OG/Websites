package pattern;

public class Pattern8 {
    public static void main(String[] args) {
        pattern(5);
    }

    static void pattern(int n) {
        int i, j;
        // Printing the upper part
        for (i = 1; i <= n; i++) {
            // inner loop to print spaces.
            for (j = 1; j < i; j++) {
                System.out.print(" ");
            }
            // inner loop to print value of j.
            for (j = i; j <= n; j++) {
                System.out.print("* ");
            }

            // printing new line for each row
            System.out.println();
        }
        for (i = n - 1; i >= 1; i--) {
            // inner loop to print spaces.
            for (j = 1; j < i; j++) {
                System.out.print(" ");
            }
            // inner loop to print value of j.
            for (j = i; j <= n; j++) {
                System.out.print("* ");
            }
            // printing new line for each row
            System.out.println();
        }
    }
}
