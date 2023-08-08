package binary;

public class BinarySearch1 {
    public static void main(String[] args) {

        // 👍 for binary search we must need sorted list of array
        int arr[] = { 12, 24, 33, 42, 56, 63 };
        int target = 63;
        int result = (numval(arr, target));
        System.out.println(result);
    }

    // 👍 binary seaching

    static int numval(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    // 👍 linear seaching

    // static int numval(int[] arr, int target) {
    // for (int element : arr) {
    // if (element == target) {
    // return element;
    // }
    // }
    // return -1;
    // }
}
