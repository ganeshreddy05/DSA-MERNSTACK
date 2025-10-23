package bitmanipulation;

import java.util.Scanner;

public class evenoddbit {
    public static void add(int num){
        int bitMask=1;
        if((num&bitMask)==1){
            System.out.println("odd");
        }else{
            System.out.println("even");
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();
        add(num);
        sc.close();
    }
}
