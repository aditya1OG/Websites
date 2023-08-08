package function;

// import java.util.Scanner;

// public class Reverse {
//     public static void main(String[] args) {
//         Scanner input = new Scanner(System.in);
//         int num = input.nextInt();
//         int res = 0, rem;
//         while (num > 0) {
//             rem = num % 10;
//             num /= 10;
//             res = res * 10 + rem;
//         }
//         System.out.println(res);
//     }
// }

// 👍reverse array

public class Reverse {
    public static void main(String[] args) {
        // Initialize array
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        // System.out.println("Original array: ");
        // for (int i = 0; i < arr.length; i++) {
        // System.out.print(arr[i] + " ");
        // }
        System.out.println("Array in reverse order: ");
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
    }
}