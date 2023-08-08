package binary;

import java.util.Arrays;

public class Binary2DArray {
    public static void main(String[] args) {
        int[][] arr = {
                { 10, 20, 30, 40 },
                { 15, 25, 35, 45 },
                { 20, 30, 40, 50 },
                { 25, 35, 45, 55 },
        };
        int target = 35;
        System.out.println(Arrays.toString(search(arr, target)));
    }

    static int[] search(int[][] arr, int target) {
        int r = 0;
        int c = arr.length - 1;
        while (r < arr.length && c >= 0) {
            if (arr[r][c] == target) {
                return new int[] { r, c };
            }
            if (arr[r][c] < target) {
                r++;
            } else {
                c--;
            }
        }
        return new int[] { -1, -1 };
    }
}
