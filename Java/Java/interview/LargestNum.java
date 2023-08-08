package interview;

// import java.util.*;

// public class LargestNum {
// public static void main(String[] args) {
// Scanner input = new Scanner(System.in);

// 👍Find the largest number🧮

// int a = input.nextInt();
// int b = input.nextInt();
// int c = input.nextInt();

// int max = a;
// if (b > max) {
// max = b;
// }
// if (c > max) {
// max = c;
// }
// System.out.println("the largest number is: " + max);

// 👍find the max number:
// System.out.println(Math.max(23, 12));

// 👍trim method : remove the extra spaces
// next("its for only first latter")
// nextLine("its for Sentenses")
// System.out.println(input.nextLine().trim());

// }
// }

// 👍max number using array;

public class LargestNum {
	public static void main(String[] args) {
		int[] arr = { 1, 2, 13, 42, 13 };
		System.out.println(maxNum(arr, 0, 3));
	}

	static int maxNum(int[] arr, int start, int end) {
		int maxVal = arr[start];
		for (int i = start; i <= end; i++) {
			if (arr[i] > maxVal) {
				maxVal = arr[i];
			}
		}
		return maxVal;
	}
}