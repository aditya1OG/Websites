package linear;

// find the number in 2d array;
import java.util.Arrays;

// public class LinearSearching2DArray {
// public static void main(String[] args) {
// int[][] arr = {
// { 12, 32, 42 },
// { 2, 4, 1 },
// { 12, 4, 63, 23 }
// };
// int target = 23;
// int[] ans = findNum(arr, target);
// System.out.println(Arrays.toString(ans));
// }

// static int[] findNum(int[][] arr, int target) {
// for (int row = 0; row < arr.length; row++) {
// for (int col = 0; col < arr[row].length; col++) {
// if (arr[row][col] == target) {
// return new int[] { row, col };
// }
// }
// }
// return new int[] { -1, -1 };
// }
// }

// find the maximum number in 2d array;

public class LinearSearching2DArray {
    public static void main(String[] args) {
        int[][] arr = {
                { 12, 32, 42 },
                { 2, 4, 1 },
                { 12, 4, 63, 23 },
        };
        System.out.println(maxNumber(arr));
    }

    static int maxNumber(int[][] arr) {
        int ans = arr[0][0];
        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[row].length; col++) {
                if (arr[row][col] > ans) {
                    ans = arr[row][col];
                }
            }
        }
        return ans;
    }
}