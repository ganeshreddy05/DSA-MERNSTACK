package Collectionframework;

import java.util.Scanner;
import java.util.Stack;

public class stackbooks {
    public static void main(String[] args) {
        
    
     Scanner sc = new Scanner(System.in);
        Stack<String> stack = new Stack<>();
        String bookName = "";

        // pushing book sinto stack
        while (!bookName.equals("stop")) {
            bookName = sc.next();
            stack.push(bookName);
        }

        // displaying books in stack
        stack.pop();
        System.out.println(stack);

        // poping top 2 elements from stack
        System.out.println("Popped:" + stack.pop());
        System.out.println("Popped:" + stack.pop());

        // displaying peek element
        System.out.println("Peek:" + stack.peek());

        // is stack empty
        System.out.println("Is Stack Empty:" + stack.isEmpty());

        sc.close();
    }
}


