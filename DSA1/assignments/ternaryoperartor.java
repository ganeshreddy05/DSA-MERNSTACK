package assignments;

import java.util.Scanner;

public class ternaryoperartor {
    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      int a=sc.nextInt();
      String result;
      result=(a%2==0)?"even":"odd";
      System.out.println(result);  
      sc.close();
    }
}
