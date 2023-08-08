package linear;

public class LinearSearching {
    public static void main(String[] args) {
        int[] arr = { 13, 29, 23, 14, 89, 41, 33, 93, 42, 31 };
        int target = 23;
        int ans = linearSearch(arr, target);
        System.out.println(ans);
    }

    static int linearSearch(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }

        // for (int index = 0; index < arr.length; index++) {
        // int element = arr[index];
        // if (element == target) {
        // return index;
        // }
        // }

        // 👍 or
        for (int element : arr) {
            if (element == target) {
                return element;
            }
        }
        return -1;
    }
}

// 👍👍👍👍if we have index number: 1 to n

// public class LinearSearching {
// public static void main(String[] args) {
// int[] arr = { 1, 2, 3, 4, 5, 6 };
// int target = 3;
// int ans = linearSearch(arr, target, 1, 4);
// System.out.println(ans);
// }

// static int linearSearch(int[] arr, int target, int start, int end) {
// if (arr.length == 0) {
// return -1;
// }
// for (int element : arr) {
// if (element == target) {
// return element;
// }
// }
// return -1;
// }
// }

// 👍Find the min number in array;

// public class LinearSearching2 {
// public static void main(String[] args) {
// int[] arr = { 21, 22, 33, 14, 32, 53, 62, 71 };
// System.out.println(minElement(arr));
// }

// static int minElement(int[] arr) {
// int ans = arr[0];
// for (int i = 1; i < arr.length; i++) {
// if (arr[i] < ans) {
// ans = arr[i];
// }
// }
// return ans;
// }
// }