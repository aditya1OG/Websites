// if we dont know array is in asceding order or decending order 

package binary;

public class BinarySearch2 {
    public static void main(String[] args) {
        // int[] arr = { 12, 13, 15, 22, 35, 46, 57, 75, 86, 88 };
        int[] arr = { 88, 87, 75, 65, 63, 54, 43, 32, 21, 11, 3 };
        int target = 75;
        int ans = (checkOrder(arr, target));
        System.out.println(ans);
    }

    static int checkOrder(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;
        boolean isAsc = arr[start] < arr[end];
        // System.out.println(isAsc);
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] == target) {
                return mid;
            }
            if (isAsc) {
                if (target < arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }

            } else {
                if (target > arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        return -1;
    }
}
