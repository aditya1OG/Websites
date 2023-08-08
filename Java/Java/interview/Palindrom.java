package interview;

import java.util.Scanner;

public class Palindrom {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        int reverse = 0, rem, temp;
        temp = num;
        while (temp != 0) {
            rem = temp % 10;
            reverse = reverse * 10 + rem;
            temp /= 10;
        }
        if (num == reverse)
            System.out.println(num + " is Palindrome");
        else
            System.out.println(num + " is not Palindrome");
    }
}

// second method :
// class Main {
// public static void main(String[] args) {
// // convert these strings to either lowercase or uppercase to create
// consistency
// System.out.println(isPalindrome("radar".toLowerCase()));
// // Naman wouldn't have been palindrome if toLowerCase method wasn't used
// System.out.println(isPalindrome("Naman".toLowerCase()));
// System.out.println(isPalindrome("12321".toLowerCase()));
// System.out.println(isPalindrome("12345".toLowerCase()));
// }

// private static boolean isPalindrome(String string) {
// String reversed = new StringBuilder(string).reverse().toString();
// return string.equals(reversed);
// }
// }