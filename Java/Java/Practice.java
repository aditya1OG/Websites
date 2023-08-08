// 👍given array of intergers return how many of
// them contains ans even number of digits in java

// public class Practice {
// public static void main(String[] args) {
// int[] arr = { 12, 345, 2, 6, 7896 };
// System.out.println(even(arr));
// }

// static int countNum(int n) {
// int num = 0;
// while (n > 0) {
// n = n / 10;
// num++;
// }
// return num;
// }

// static int even(int[] arr) {
// int count = 0;
// for (int i = 0; i < arr.length; i++) {
// if (countNum(arr[i]) % 2 == 0) {
// count++;
// }
// }
// return count;
// }
// }

// 👍check the sum of the array is same or not

// public class Practice {
// public static void main(String[] args) {
// int[][] arr = {
// { 1, 2, 3 },
// { 3, 2, 1 }
// };
// System.out.println(total(arr));
// }

// static int total(int[][] arr) {
// int ans = arr[0][0];
// for (int row = 0; row < arr.length; row++) {
// int rowsum = 0;
// for (int col = 0; col < arr[row].length; col++) {
// rowsum += arr[row][col];
// }
// if (rowsum > ans) {
// ans = rowsum;
// }
// }
// return ans;
// }
// }

// add the numbers of array
public class Practice {
    public static void main(String[] args) {
        int[][] arr = {
                { 2, 4, 3 },
                { 5, 6, 4 }
        };
        System.out.println(addtion(arr));
    }

    static int addtion(int[][] arr) {
        int ans = arr[0][0];
        for (int row = 1; row < arr.length; row++) {
            int rowsum = 0;
            for (int col = 1; col < arr[row].length; col++) {
                rowsum += arr[row][col];
                if (rowsum > ans) {
                    ans = rowsum;
                }
            }
        }
        return ans;
    }
}