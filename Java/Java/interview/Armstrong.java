package interview;

import java.util.Scanner;

// public class Armstrong {
//     public static void main(String[] args) {
//         Scanner input = new Scanner(System.in);
//         int n = input.nextInt();
//         int res = 0, r, num;
//         num = n;
//         while (num > 0) {
//             r = num % 10;
//             res += (r * r * r);
//             num = num / 10;
//         }
//         if (n == res) {
//             System.out.println("ArmStrong Number");
//         } else {
//             System.out.println("Not ArmStrong Number");
//         }
//     }
// }

public class Armstrong {
    public static void main(String[] args) {
        int n, r, sum = 0;
        System.out.print("Armstrong numbers from 100 to 1000: ");
        for (int i = 100; i <= 1000; i++) {
            n = i;
            while (n > 0) {
                r = n % 10;
                sum += (r * r * r);
                n = n / 10;
            }
            if (sum == i) {
                System.out.print(i + " ");
            }
            sum = 0;
        }
    }
}