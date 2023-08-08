package function;

import java.util.*;

// public class Swap {
// public static void main(String[] args) {
// String name = "aditya";
// changename(name);
// System.out.println(name);
// }

// static void changename(String naam) {
// naam = "kanha";
// }
// }

// public class Swap {
// public static void main(String[] args) {
// int[] arr = { 1, 2, 3, 4, 5 };
// str(arr);
// System.out.println(Arrays.toString(arr));
// }

// static void str(int[] nums) {
// // if you make change to the object via this ref
// // variable, original obj will be changed
// nums[0] = 22;
// }
// }

// 👍new method
public class Swap {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 4, 5, 9 };
        swap(arr, 0, 4);
        System.out.println(Arrays.toString(arr));
    }

    static void swap(int[] arr, int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}