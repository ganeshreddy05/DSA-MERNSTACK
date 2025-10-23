package assignments;

import java.util.Scanner;

public class prepostincdec {
    public static void main(String[] args) {
        
    
       Scanner sc=new Scanner(System.in);
      int a=sc.nextInt();
      System.out.println("Original:"+a);
      System.out.println("Pre Increment:"+ ++a);
      System.out.println("Post Increment:"+ a++);
      System.out.println("Pre DEcrement:"+ --a);
      System.out.println("Post Decremenmt:"+ a--);
      sc.close();
    }
}
